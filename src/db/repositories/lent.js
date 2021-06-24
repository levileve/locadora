import db from '../database';


export const LentEntity = db.models.Lent;

export default class LentRepository {
  static async create(user, options) {
    let response = null;

    try {
      response = LentEntity.build(user);

      response = await response.save({
        transaction: options ? options.transaction : null,
        returning: true,
      });
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async bulkInsert(lent, options) {
    let response = null;

    try {
      response = await LentEntity.bulkCreate(lent, {
        transaction: options ? options.transaction : null,
      });
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }


  static async updateById(id, lent, options) {
    let response = null;

    try {
      response = await LentEntity.update(lent, {
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


  static async selectOne(options) {
    let response = null;

    try {

      response = await LentEntity.findOne(options);
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
      response = await LentEntity.findAll(options);
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
      response = await LentEntity.findAndCountAll(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async deleteById(movieId, options) {
    let response = null;

    try {
      response = await LentEntity.destroy({
        where: { movieId },
        transaction: options && options.transaction,
      });

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }
}
