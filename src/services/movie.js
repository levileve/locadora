import MovieRepository from '../db/repositories/movie';
import { serviceOrderHelper } from '../utilities/utils';
import BusinessError, { ValidationCodeError } from '../utilities/errors/business';
import { getAllFilter } from './filters/movie';


export default class MovieService {
  static async create(movie, actor) {
    let response = null;
    const movieToCreate = {
      name: movie.name,
      director: movie.director,
      genre: movie.genre,

      price: movie.price,

      quantityTotal: movie.quantityTotal,
      quantityAvaible: movie.quantityTotal,
      quantityLent: 0,

      createBy: actor.id,
      updateBy: actor.id,
    };
    const movieCreated = await MovieRepository.create(movieToCreate);

    response = await MovieService.getById(movieCreated.id);

    return response;
  }

  static async updateById(id, movie, actor) {
    let response = null;

    await MovieService.getSimpleById(id);

    const movieToSave = {
      name: movie.name,
      director: movie.director,
      genre: movie.genre,

      price: movie.price,

      quantityTotal: movie.quantityTotal,
      quantityAvaible: movie.quantityAvaible,
      quantityLent: movie.quantityLent,

      updateBy: actor.id,
    };

    await MovieRepository.updateById(id, movieToSave);

    response = await MovieService.getById(id);

    return response;
  }

  static async updateByIdSimple(id, movie, actor) {
    let response = null;
    const movieToSave = {
      name: movie.name,
      director: movie.director,
      genre: movie.genre,

      price: movie.price,

      quantityTotal: movie.quantityTotal,
      quantityAvaible: movie.quantityAvaible,
      quantityLent: movie.quantityLent,

      updateBy: actor.id,
    };

    response = await MovieRepository.updateById(id, movieToSave);

    return response;
  }

  static async devolutionById(id, quantityDevolution, actor) {
    let response = null;
    const exist = await MovieService.getSimpleById(id);
    const quantityAvaibleTotal = exist.quantityAvaible + quantityDevolution;
    const quantityLentTotal = quantityDevolution - exist.quantityLent;

    if (quantityAvaibleTotal > exist.quantityTotal) {
      throw new BusinessError(ValidationCodeError.INVALID_QUANTITY, 'movie');
    }

    const movieToSave = {
      quantityAvaible: quantityAvaibleTotal,
      quantityLent: quantityLentTotal,

      updateBy: actor.id,
    };

    response = await MovieService.updateByIdSimple(id, movieToSave);

    return response;
  }

  static async getSimpleById(id) {
    const response = await MovieRepository.selectOne({ where: { id, deletedAt: null } });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'movie'); }

    return response;
  }

  static async getById(id) {
    let response = null;

    response = await MovieRepository.selectOne({
      where: { id, deletedAt: null },
    });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'movie'); }

    return response;
  }

  static async getAll(searchParameter) {
    let response = null;
    const { whereMovie } = getAllFilter(searchParameter);

    response = await MovieRepository.selectAll({
      where: whereMovie,
      order: [serviceOrderHelper(searchParameter)],
    });

    return response;
  }

  static async getAllWithPagination(searchParameter) {
    let response = null;
    const { whereMovie } = getAllFilter(searchParameter);

    response = await MovieRepository.selectWithPagination({
      where: whereMovie,
      offset: searchParameter.offset,
      limit: searchParameter.limit,
      order: [serviceOrderHelper(searchParameter)],
    });

    return response;
  }

  static async deleteById(id, actor) {
    await MovieService.getSimpleById(id);
    await MovieRepository.deleteById(id, actor.id);
  }
}
