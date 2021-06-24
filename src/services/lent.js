import moment from 'moment-timezone';
import LentRepository from '../db/repositories/lent';
import MovieLentRepository, { MovieLentEntity } from '../db/repositories/movie-lent';
import { UserEntity } from '../db/repositories/user';
import { MovieEntity } from '../db/repositories/movie';

import { serviceOrderHelper, tryToJSON } from '../utilities/utils';
import BusinessError, { ValidationCodeError, LentCodeError } from '../utilities/errors/business';

import LentStatus from '../enumerators/lent-status';
import { getAllFilter } from './filters/lent';

import UserService from './user';
import ProfileType from '../enumerators/profile-type';
import MovieService from './movie';
import SettingsService from './setting';

export default class LentService {
  static async create(lent, actor) {

    let response = null;
    let totalPrice = 0;
    let userId;
    let historic = '';

    if (actor && actor.profileType !== ProfileType.ADMIN) {
      userId = actor.id;
    } else {
      userId = actor && actor.id;

      if (lent.userId || lent.email) {
        const user = await UserService.getByIdOrEmailNotError(lent.userId, lent.email);
        userId = user.id;
      }
    }

    if (lent.historic && actor && actor.profileType === ProfileType.ADMIN) {
      ({ historic } = lent);
    }

    let totalQuantityLentUser = 0;
    const moviesIdList = lent.movies.map((movie) => {
      totalQuantityLentUser += movie.quantityLent;
      return movie.id;
    });
    const movies = await MovieService.getAll({ idList: moviesIdList });
    const moviesToLent = [];
    const moviesLentUser = [];

    movies.forEach((movie) => {
      const findMovieLent = lent.movies.find(movieLent => movieLent.id === movie.id);

      if (findMovieLent) {
        const quantityLentUser = findMovieLent.quantityLent || 1;
        const movieQuantityAvaible = movie.quantityAvaible - quantityLentUser;
        const movieQuantityLent = movie.quantityLent + quantityLentUser;

        if (movieQuantityAvaible < 0) {
          throw new BusinessError(LentCodeError.OUT_OF_STOCK);
        }

        totalPrice += movie.price * quantityLentUser;

        moviesLentUser.push({
          id: findMovieLent.id,
          quantityLent: quantityLentUser,
          moviePrice: movie.price,
        });

        moviesToLent.push({
          id: findMovieLent.id,
          quantityAvaible: movieQuantityAvaible,
          quantityLent: movieQuantityLent,
          moviePrice: movie.price,
        });
      }
    });

    await Promise.all(moviesToLent.map(async (movie) => {
      const movieToSave = {
        quantityAvaible: movie.quantityAvaible,
        quantityLent: movie.quantityLent,
      };

      await MovieService.updateByIdSimple(movie.id, movieToSave, actor);
    }));

    const { devolutionTime, typeDevolutionTime } = await SettingsService.findAll(['devolutionTime', 'typeDevolutionTime']);
    const devolutionAt = moment(moment().add(devolutionTime, typeDevolutionTime)).format();
    const lentToCreate = {
      userId,

      totalPrice,
      totalQuantityLent: totalQuantityLentUser,
      mulct: 0.00,
      status: LentStatus.PENDING,
      devolutionAt,
      historic,

      createBy: actor.id,
      updateBy: actor.id,
    };
    const lentCreated = await LentRepository.create(lentToCreate);
    const movieLent = moviesLentUser.map(movie => ({
      movieId: movie.id,
      lentId: lentCreated.id,
      quantityLent: movie.quantityLent || 1,
      quantityDevolution: 0,
      moviePrice: movie.moviePrice,
    }));

    await MovieLentRepository.bulkInsert(movieLent);

    response = await LentService.getById(lentCreated.id);

    return response;
  }

  static async setDevolutionById(id, lent, actor) {
    let response = null;
    const exist = await LentService.getById(id, actor);
    let userId;

    if (actor && actor.profileType !== ProfileType.ADMIN) {
      userId = actor.id;
    } else {
      userId = actor && actor.id;

      if (lent.userId || lent.email) {
        const user = await UserService.getByIdOrEmailNotError(lent.userId, lent.email);
        userId = user.id;
      }
    }

    if (exist.status === LentStatus.COMPLETED) {
      throw new BusinessError(LentCodeError.LENT_IS_COMPLETED);
    }

    if (exist.userId && exist.userId !== userId) {
      throw new BusinessError(LentCodeError.MOVIE_DEVOLUTION_MUST_MADE_BY_PERSON_RESPONSIBLE);
    }

    let { historic } = exist;
    let quantityDevolution = 0;
    const moviesDevolution = [];
    const moviesLent = [];
    let mulctSum = 0;

    lent.movies.forEach((movieDevolution) => {
      exist.movieLent.forEach((movieLent) => {
        movieLent = tryToJSON(movieLent);
        const findMovieToDevolution = movieDevolution.id === movieLent.movieId && movieLent;

        if (findMovieToDevolution) {
          const movieLentQuantityDevolution = movieLent.quantityDevolution + movieDevolution.quantityDevolution;
          const movieLentQuantityLent = movieLent.quantityLent - movieDevolution.quantityDevolution;
          const movieQuantityAvaible = findMovieToDevolution.movie.quantityAvaible + movieLentQuantityDevolution;
          const movieQuantityLent = findMovieToDevolution.movie.quantityLent - movieLentQuantityDevolution;

          if (movieQuantityAvaible > findMovieToDevolution.movie.quantityTotal) {
            throw new BusinessError(ValidationCodeError.INVALID_QUANTITY, 'quantityDevolution');
          }

          quantityDevolution += movieLentQuantityDevolution;

          moviesDevolution.push({
            id: movieLent.movieId,
            quantityAvaible: movieQuantityAvaible,
            quantityLent: movieQuantityLent,
          });

          moviesLent.push({
            id: movieLent.id,
            quantityLent: movieLentQuantityLent,
            quantityDevolution: movieLentQuantityDevolution,
          });

          mulctSum += Number.parseFloat(movieLent.moviePrice) * movieDevolution.quantityDevolution;
        } else {
          quantityDevolution += movieLent.quantityDevolution;
        }

        if (findMovieToDevolution && movieDevolution.quantityDevolution !== movieLent.quantityLent) {
          historic += `\n* ${movieLent.quantityLent} ${movieLent.movie.name} foi alugado ${movieDevolution.quantityDevolution} foi entregue.`;
        } else if (!findMovieToDevolution && !movieLent.quantityDevolution) {
          historic += `\n* ${movieLent.quantityLent} ${movieLent.movie.name} foi alugado ${movieLent.quantityDevolution} foi entregue.`;
        }
      });
    });

    if (moviesDevolution.length) {
      await Promise.all(moviesDevolution.map(async movie => MovieService.updateByIdSimple(movie.id, movie, actor)));
      await Promise.all(moviesLent.map(async movieLent => MovieLentRepository.updateById(movieLent.id, { ...movieLent, updateBy: actor.id })));
    }

    const mulct = await LentService.getMulct(mulctSum, exist.devolutionAt);
    const status = exist.totalQuantityLent === quantityDevolution ? LentStatus.COMPLETED : undefined;

    if (mulct > 0) {
      historic += `\n* Multa por atraso: ${mulct}`;
    }

    const lentToSave = {
      ...(status && { status }),
      historic,
      mulct,

      updateBy: actor.id,
    };

    await LentRepository.updateById(id, lentToSave);

    response = await LentService.getById(id, actor);

    return response;
  }

  static async getMulct(price, devolutionAt) {
    let response = 0;

    devolutionAt = moment(devolutionAt).format();
    price = parseFloat(price);

    const setting = await SettingsService.findAll(['mulctInPercent', 'typeTimeForMulct', 'timeForMulct']);
    const mulctInPercent = Number.parseFloat(setting.mulctInPercent / 100);
    const timeForMulct = Number.parseInt(setting.timeForMulct, 10);
    const { typeTimeForMulct } = setting;
    const date = moment().format();
    const diffTime = parseInt(parseInt(moment(date).diff(devolutionAt, typeTimeForMulct), 10) / timeForMulct, 10);

    response = diffTime >= 1 ? (diffTime * (price * mulctInPercent)) : 0;
    response = response.toFixed(2);

    return response;
  }

  static async getById(id, actor) {
    let response = null;
    let userId;

    if (actor && actor.profileType === ProfileType.CLIENT) {
      userId = actor.id;
    }

    response = await LentRepository.selectOne({
      where: {
        id,
        deletedAt: null,
        ...(userId && { userId }),
      },
      include: [{
        model: UserEntity,
        as: 'user',
        attributes: ['id', 'name'],
        required: false,
      }, {
        model: MovieLentEntity,
        as: 'movieLent',
        attributes: ['id', 'movieId', 'quantityLent', 'quantityDevolution', 'moviePrice'],
        required: true,
        include: [{
          model: MovieEntity,
          as: 'movie',
          attributes: ['id', 'quantityLent', 'quantityAvaible', 'quantityTotal', 'name', 'genre', 'director', 'price'],
          required: true,
        }],
      }],
    });

    if (!response) {
      throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'lent');
    }

    return response;
  }

  static async getAllWithPagination(searchParameter, actor) {
    let response = null;
    const { whereLent, whereUser } = getAllFilter(searchParameter, actor);
    const userRequired = Object.values(whereUser).length > 1;

    response = await LentRepository.selectWithPagination({
      where: whereLent,
      offset: searchParameter.offset,
      limit: searchParameter.limit,
      order: [serviceOrderHelper(searchParameter)],
      include: [{
        model: MovieLentEntity,
        as: 'movieLent',
        attributes: ['id', 'quantityLent', 'quantityDevolution', 'moviePrice'],
        include: [{
          model: MovieEntity,
          as: 'movie',
          attributes: ['id', 'name', 'genre', 'director', 'price'],
        }],
      }, {
        model: UserEntity,
        as: 'user',
        attributes: ['id', 'name'],
        where: whereUser,
        required: userRequired,
      }],
    });

    return response;
  }
}
