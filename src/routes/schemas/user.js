import {
  passwordValidation,
  emailValidation,
  nameValidation,
  profileTypeValidation,
  idValidation,
} from './index';

export const clientCreate = {
  '': {
    in: 'body',
    custom: {
      options: value => value.email && value.password,
    },
    errorMessage: 'invalid_credentials',
  },
  password: passwordValidation,
  name: {
    in: 'body',
    isString: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'invalid_name',
    },
  },
  email: emailValidation,
};

export const userLogin = {
  '': {
    in: 'headers',
    custom: {
      options: value => value.authorization,
    },
    errorMessage: 'invalid_credentials',
  },
};

export const userCreate = {
  '': {
    in: 'body',
    custom: {
      options: body => body.email && body.password,
    },
    errorMessage: 'invalid_credentials',
  },
  profileType: profileTypeValidation,
  '': {
    in: 'body',
    custom: {
      options: body => body.email && body.password,
    },
    errorMessage: 'invalid_credentials',
  },
  password: passwordValidation,
  name: {
    in: 'body',
    isString: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'invalid_name',
    },
  },
  email: emailValidation,
};

export const userUpdate = {
  id: {
    ...idValidation,
  },
  password: {
    ...passwordValidation,
    optional: true,
  },
  oldPassword: {
    ...passwordValidation,
    optional: true,
    errorMessage: 'invalid_old_password',
  },
  profileType: {
    ...profileTypeValidation,
    optional: true,
  },
  name: {
    ...nameValidation,
    optional: true,
  },
};
