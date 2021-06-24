import SettingsRepository from '../db/repositories/setting';

export default class SettingsService {
  static async findOne(key) {
    return SettingsRepository.selectByKey(key);
  }

  static async findAll(keys, actor) {
    keys = Array.isArray(keys) ? keys : keys && Object.keys(keys);

    return SettingsRepository.selectByManyKey(keys, actor);
  }

  static async updateByKey(key, value, actor) {
    return SettingsRepository.updateByKey(key, value, actor.id);
  }

  static async updateConfigs(configs, actor) {
    let response = {};
    const arrConfigs = Object.keys(configs);
    const settingToSave = await Promise.all(arrConfigs.map(async (key) => {
      if (configs[key] !== undefined) {
        SettingsService.updateByKey(key, configs[key], actor);
      }

      return key;
    }));
    response = await SettingsService.findAll(settingToSave);

    return response;
  }
}
