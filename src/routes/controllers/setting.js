import express from 'express';
import httpStatus from 'http-status';
import { errorHandler, authorize, auth } from '../middlewares';
import ProfileType from '../../enumerators/profile-type';
import SettingService from '../../services/setting';

const routes = express.Router();

routes.put('/',
  auth,
  authorize([ProfileType.ADMIN]),
  async (req, res) => {
    let response;

    try {
      response = await SettingService.updateConfigs(req.body, req.user);
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
      response = await SettingService.findAll(req.query, req.user);
    } catch (err) {
      return errorHandler(err, req, res);
    }

    return res.status(httpStatus.OK).json(response);
  });

export default routes;
