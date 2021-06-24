import ProfileType from '../../enumerators/profile-type';

export const idValidation = {
  in: ['params', 'query'],
  isUUID: true,
  errorMessage: 'invalid_id',
};

export const cellphoneValidation = {
  in: 'body',
  custom: {
    options: cellphone => /^[0-9]{13,14}$/g.test(cellphone),
  },
  optional: true,
  errorMessage: 'invalid_cellphone',
};

export const phoneValidation = {
  in: 'body',
  custom: {
    options: phone => /^[0-9]{10,10}$/g.test(phone),
  },
  errorMessage: 'invalid_phone',
};

export const passwordValidation = {
  in: 'body',
  isString: true,
  isLength: {
    options: { min: 6 },
    errorMessage: 'invalid_password',
  },
};

export const emailValidation = {
  in: 'body',
  isEmail: true,
  errorMessage: 'invalid_email',
};

export const nameValidation = {
  in: 'body',
  isString: true,
  isLength: {
    options: { min: 5 },
    errorMessage: 'invalid_name',
  },
};

export const profileTypeValidation = {
  in: 'body',
  custom: {
    options: profileType => Object.values(ProfileType).some(o => o === profileType),
  },
  errorMessage: 'invalid_profile_type',
};
