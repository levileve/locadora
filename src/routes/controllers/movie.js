import express from 'express';
import httpStatus from 'http-status';
import { param, validationResult } from 'express-validator';
import { controllerPaginationHelper } from '../../utilities/utils';
import MovieService from '../../services/movie';
import {
  errorHandler, authorize, checkSchema, auth,
} from '../middlewares';
import { movieCreate, movieUpdate } from '../schemas/movie';
import ProfileType from '../../enumerators/profile-type';
import { ValidationCodeError } from '../../utilities/errors/business';
import { getAllFilter } from './filters/movie';

const routes = express.Router();

routes.post('/',
  auth,
  checkSchema(movieCreate),
  authorize([ProfileType.ADMIN]),
  async (req, res) => {
    let response;

    try {
      response = await MovieService.create(req.body, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/:id',
  auth,
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await MovieService.getById(req.params.id, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.get('/',
  auth,
  async (req, res) => {
    let response;

    try {
      const searchParameter = {
        ...controllerPaginationHelper(req),
        ...getAllFilter(req),
      };

      response = await MovieService.getAllWithPagination(searchParameter);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.put('/:id',
  auth,
  authorize([ProfileType.ADMIN]),
  checkSchema(movieUpdate),
  async (req, res) => {
    let response;

    try {
      response = await MovieService.updateById(req.params.id, req.body, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.delete('/:id',
  auth,
  param('id').isUUID().withMessage(ValidationCodeError.INVALID_ID),
  authorize([ProfileType.ADMIN]),
  async (req, res) => {
    let response;

    try {
      validationResult(req).throw();
      response = await MovieService.deleteById(req.params.id, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

export default routes;
