import { idValidation } from './index';
import MovieGenre from '../../enumerators/movie-genre';

export const movieCreate = {
  genre: {
    in: 'body',
    custom: {
      options: value => Object.values(MovieGenre).some(o => o === value),
    },
    errorMessage: 'invalid_genre',
  },
  name: {
    in: 'body',
    isString: true,
    errorMessage: 'invalid_name',
  },
  price: {
    in: 'body',
    isDecimal: true,
    custom: {
      options: date => date && parseFloat(date, 10) > 0,
    },
    errorMessage: 'invalid_price',
  },
  quantityTotal: {
    in: 'body',
    isInt: true,
    custom: {
      options: date => date && parseInt(date, 10) >= 1,
    },
    errorMessage: 'invalid_quantity_total',
  },
  director: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_director',
  },
};

export const movieUpdate = {
  id: {
    ...idValidation,
  },
  genre: {
    in: 'body',
    optional: true,
    custom: {
      options: value => Object.values(MovieGenre).some(o => o === value),
    },
    errorMessage: 'invalid_genre',
  },
  name: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_name',
  },
  director: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_director',
  },
};
