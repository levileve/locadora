import express from 'express';
import httpStatus from 'http-status';
import { param, validationResult } from 'express-validator';
import { controllerPaginationHelper } from '../../utilities/utils';
import LentService from '../../services/lent';
import { errorHandler, checkSchema, auth } from '../middlewares';
import { lentCreate, lentUpdate } from '../schemas/lent';
import { ValidationCodeError } from '../../utilities/errors/business';
import { getAllFilter } from './filters/lent';

const routes = express.Router();

routes.post('/',
  auth,
  checkSchema(lentCreate),
  async (req, res) => {
    let response;

    try {
      response = await LentService.create(req.body, req.user);
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
      response = await LentService.getById(req.params.id, req.user);
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

      response = await LentService.getAllWithPagination(searchParameter, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

routes.put('/devolution/:id',
  auth,
  checkSchema(lentUpdate),
  async (req, res) => {
    let response;

    try {
      response = await LentService.setDevolutionById(req.params.id, req.body, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

export default routes;
