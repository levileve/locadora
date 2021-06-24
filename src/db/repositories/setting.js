import { Op } from 'sequelize';
import db from '../database';

const SettingEntity = db.models.Setting;

export default class SettingsRepository {
  static async selectByKey(key) {
    let response = null;

    try {
      response = await SettingEntity.findOne({ where: { key } });
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async selectByManyKey(keys) {
    let response = null;

    try {
      const options = keys && keys.length ? { where: { key: { [Op.in]: keys } } } : undefined;
      response = await SettingEntity.findAll(options);
      response = response.reduce(
        (obj, item) => Object.assign(obj, { [item.key]: item.value }), {},
      );

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  static async updateByKey(key, value, options) {
    let response = null;

    try {
      response = await SettingEntity.update({ value }, {
        where: { key },
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
