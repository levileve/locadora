import moment from 'moment-timezone';
import db from '../database';


export const UserEntity = db.models.User;
const excludeAttributes = [
  'password',
];

export default class UserRepository {
  static async create(user, options) {
    let response = null;

    try {
      response = UserEntity.build(user);

      response = await response.save({
        transaction: options ? options.transaction : null,
        returning: true,
      });
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectOneWithPassword(options) {
    let response = null;

    try {
      response = await UserEntity.findOne(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectOne(options) {
    let response = null;

    try {

      if (!options || !options.attributes) {
        options = {
          ...options,
          attributes: {
            exclude: excludeAttributes,
          },
        };
      }

      response = await UserEntity.findOne(options);
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
        attributes: {
          exclude: excludeAttributes,
        },
      };
      response = await UserEntity.findAndCountAll(options);
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async updateById(id, user, options) {
    let response = null;

    try {
      response = await UserEntity.update(user, {
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
      response = await UserEntity.update({
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
