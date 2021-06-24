import express from 'express';
import httpStatus from 'http-status';
import { param, validationResult } from 'express-validator';
import { controllerPaginationHelper } from '../../utilities/utils';
import UserService from '../../services/user';
import {
  errorHandler, authorize, checkSchema, canManageUser, auth, refreshToken,
} from '../middlewares';
import {
  clientCreate,
  userCreate,
  userUpdate,
  userLogin,
} from '../schemas/user';
import ProfileType from '../../enumerators/profile-type';
import { ValidationCodeError } from '../../utilities/errors/business';
import { getAllFilter } from './filters/user';

const routes = express.Router();

routes.post('/signup',
  checkSchema(clientCreate),
  async (req, res) => {
    let response;

    try {
      response = await UserService.create({ ...req.body, profileType: ProfileType.CLIENT }, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/refresh-token',
  refreshToken,
  async (req, res) => {
    let response;

    try {
      response = await UserService.refreshToken(req.user.id);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/login',
  checkSchema(userLogin),
  async (req, res) => {
    let response;

    try {
      response = await UserService.login(req.headers);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.post('/signup/admin',
  auth,
  checkSchema(userCreate),
  authorize([ProfileType.ADMIN]),
  canManageUser(),
  async (req, res) => {
    let response;

    try {
      response = await UserService.create(req.body, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/me',
  auth,
  async (req, res) => {
    let response;

    try {
      response = await UserService.getById(req.user.id, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/:id',
  auth,
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  authorize([ProfileType.ADMIN]),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await UserService.getById(req.params.id, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/',
  auth,
  authorize([ProfileType.ADMIN]),
  async (req, res) => {
    let response;

    try {
      const searchParameter = {
        ...controllerPaginationHelper(req),
        ...getAllFilter(req),
      };

      response = await UserService.getAllWithPagination(searchParameter, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.put('/:id',
  auth,
  checkSchema(userUpdate),
  canManageUser(),
  async (req, res) => {
    let response;

    try {
      response = await UserService.updateById(req.params.id, req.body, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.delete('/:id',
  auth,
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  authorize([ProfileType.ADMIN]),
  canManageUser(),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await UserService.deleteById(req.params.id, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

export default routes;
