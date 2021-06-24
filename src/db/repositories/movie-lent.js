import db from '../database';


export const MovieLentEntity = db.models.MovieLent;

export default class MovieLentRepository {
  static async bulkInsert(movieLent, options) {
    let response = null;

    try {
      response = await MovieLentEntity.bulkCreate(movieLent, {
        transaction: options ? options.transaction : null,
      });
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
      response = await MovieLentEntity.findAndCountAll(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async updateById(id, movieLent, options) {
    let response = null;

    try {
      response = await MovieLentEntity.update(movieLent, {
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
