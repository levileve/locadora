import moment from 'moment-timezone';
import db from '../database';


export const MovieEntity = db.models.Movie;

export default class MovieRepository {
  static async create(movie, options) {
    let response = null;

    try {
      response = MovieEntity.build(movie);

      response = await response.save({
        transaction: options ? options.transaction : null,
        returning: true,
      });
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectOne(options) {
    let response = null;

    try {
      response = await MovieEntity.findOne(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectWithPagination(options) {
    let response = null;

    try {
      options = {
        ...options,
        distinct: options.include && options.include.length,
      };
      response = await MovieEntity.findAndCountAll(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectAll(options) {
    let response = null;

    try {
      options = {
        ...options,
        distinct: options.include && options.include.length,
      };
      response = await MovieEntity.findAll(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async updateById(id, movie, options) {
    let response = null;

    try {
      response = await MovieEntity.update(movie, {
        where: { id },
        transaction: options && options.transaction,
        returning: true,
      });

      [, [response]] = response;
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async deleteById(id, updateBy, options) {
    let response = null;

    try {
      response = await MovieEntity.update({
        deletedAt: moment().toDate(),
        updateBy,
      }, {
        where: { id },
        transaction: options && options.transaction,
        returning: true,
      });

      [, [response]] = response;
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }
}
