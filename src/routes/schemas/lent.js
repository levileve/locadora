import moment from 'moment-timezone';
import { idValidation, emailValidation } from './index';

export const lentCreate = {
  email: {
    ...emailValidation,
    optional: true,
  },
  userId: {
    in: 'body',
    isUUID: true,
    optional: true,
    errorMessage: 'invalid_user_id',
  },
  devolutionAt: {
    in: 'body',
    optional: true,
    custom: {
      options: date => date && moment(date, 'YYYY-MM-DD HH:mm:ss', true).isValid(),
    },
    errorMessage: 'invalid_devolution_at',
  },
  historic: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_historic',
  },
  movies: {
    in: 'body',
    isArray: true,
    errorMessage: 'invalid_movies',
  },
  'movies.*.id': {
    in: 'body',
    isUUID: true,
    errorMessage: 'invalid.*.id',
  },
  'movies.*.quantityLent': {
    in: 'body',
    isInt: true,
    custom: {
      options: date => date && parseInt(date, 10) >= 1,
    },
    errorMessage: 'invalid.*.quantity_lent',
  },
};

export const lentUpdate = {
  id: {
    ...idValidation,
  },
  email: {
    ...emailValidation,
    optional: true,
  },
  userId: {
    in: 'body',
    isUUID: true,
    optional: true,
    errorMessage: 'invalid_user_id',
  },
  historic: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_historic',
  },
  movies: {
    in: 'body',
    isArray: true,
    errorMessage: 'invalid_movies',
  },
  'movies.*.id': {
    in: 'body',
    isUUID: true,
    errorMessage: 'invalid.*.id',
  },
  'movies.*.quantityDevolution': {
    in: 'body',
    isInt: true,
    custom: {
      options: date => date && parseInt(date, 10) >= 1,
    },
    errorMessage: 'invalid.*.quantity_devolution',
  },
};
