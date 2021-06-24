import uuid from 'uuid';
import md5 from 'md5';
import moment from 'moment-timezone';
import { Op } from 'sequelize';
import UserRepository from '../db/repositories/user';
import { serviceOrderHelper } from '../utilities/utils';
import BusinessError, { ValidationCodeError, UserCodeError } from '../utilities/errors/business';
import { getAllFilter } from './filters/user';
import Constants from '../utilities/constants';
import JwtService from './jwt';
import ProfileType from '../enumerators/profile-type';

export default class UserService {
  static async create(user, actor) {
    let response = {};
    user = { ...user, id: uuid.v4() };

    actor = actor || user;

    await UserService.checkExist(user);

    const userToCreate = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: md5(user.password + Constants.token.secret),
      profileType: user.profileType,

      updateBy: actor.id,
      createBy: actor.id,
    };
    const userCreated = await UserRepository.create(userToCreate);

    response = await UserService.getById(userCreated.id, actor);

    const { token, refreshToken } = JwtService.createTokenAndRefresh(response.id);

    response = { ...response.toJSON(), token, refreshToken };

    return response;
  }

  static async login(user) {
    let response = {};
    const [, hash] = user.authorization.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    response = await UserRepository.selectOne({ where: { password: md5(password + Constants.token.secret), email, deletedAt: null } });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'user'); }

    const { token, refreshToken } = JwtService.createTokenAndRefresh(response.id);

    response = { ...response.toJSON(), token, refreshToken };

    return response;
  }

  static async refreshToken(userId) {
    let response = {};

    response = await UserRepository.selectOne({ where: { id: userId, deletedAt: null } });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'user'); }

    const { token, refreshToken } = JwtService.createTokenAndRefresh(response.id);

    response = { token, refreshToken };

    return response;
  }

  static async updateById(id, user, actor) {
    let response = {};
    let transaction;
    const oldPassword = user.oldPassword && md5(user.oldPassword + Constants.token.secret);

    if (oldPassword) {
      if (actor.profileType !== ProfileType.ADMIN) {
        const userToTest = await UserService.getSimpleWithPassword(id);

        if (userToTest.password !== oldPassword) {
          throw new BusinessError(UserCodeError.INVALID_OLD_PASSWORD);
        }
      }
    }

    const userToSave = {
      name: user.name,
      profileType: user.profileType,
      password: user.password && md5(user.password + Constants.token.secret),

      updateBy: actor.id,
    };

    await UserRepository.updateById(id, userToSave, { transaction });

    response = await UserService.getById(id, actor);

    return response;
  }

  static async checkExist(user) {
    const or = [];

    if (user.email) {
      or.push({ email: user.email });
    }

    const exist = await UserRepository.selectOne({ where: { [Op.or]: or, deletedAt: null } });
    const emailExist = exist && user.email === exist.email;

    if (emailExist) {
      throw new BusinessError(ValidationCodeError.ENTITY_ALREADY_EXISTS, 'email');
    }
  }

  static async getByIdOrEmailNotError(id, email) {
    let response = null;

    response = await UserRepository.selectOne({ where: { ...(id && { id }), ...(email && { email }), deletedAt: null } });

    return response;
  }

  static async getSimpleById(id) {
    const response = await UserRepository.selectOne({ where: { id, deletedAt: null } });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'user'); }

    return response;
  }

  static async getSimpleWithPassword(id) {
    const response = await UserRepository.selectOneWithPassword({ where: { id, deletedAt: null } });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'user'); }

    return response;
  }

  static async getById(id, actor) {
    let response = null;

    if (actor) {
      await UserRepository.updateById(actor.id, {
        lastAccessAt: moment().toDate(),
        updateBy: actor.id,
      }, {
        where: { id, deletedAt: null },
      });
    }

    response = await UserRepository.selectOne({
      where: { id, deletedAt: null },
    });

    if (!response) { throw new BusinessError(ValidationCodeError.ENTITY_NOT_FOUND, 'user'); }

    return response;
  }

  static async getAllWithPagination(searchParameter) {
    const { where } = getAllFilter(searchParameter);

    return UserRepository.selectWithPagination({
      where,
      offset: searchParameter.offset,
      limit: searchParameter.limit,
      order: [serviceOrderHelper(searchParameter)],
    });
  }

  static async deleteById(id, actor) {
    await UserService.getSimpleById(id);
    await UserRepository.deleteById(id, actor.id);
  }
}
