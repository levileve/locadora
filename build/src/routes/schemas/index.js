'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.profileTypeValidation = exports.nameValidation = exports.emailValidation = exports.passwordValidation = exports.phoneValidation = exports.cellphoneValidation = exports.idValidation = undefined;var _profileType = require('../../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var idValidation = exports.idValidation = {
  in: ['params', 'query'],
  isUUID: true,
  errorMessage: 'invalid_id' };


var cellphoneValidation = exports.cellphoneValidation = {
  in: 'body',
  custom: {
    options: function options(cellphone) {return (/^[0-9]{13,14}$/g.test(cellphone));} },

  optional: true,
  errorMessage: 'invalid_cellphone' };


var phoneValidation = exports.phoneValidation = {
  in: 'body',
  custom: {
    options: function options(phone) {return (/^[0-9]{10,10}$/g.test(phone));} },

  errorMessage: 'invalid_phone' };


var passwordValidation = exports.passwordValidation = {
  in: 'body',
  isString: true,
  isLength: {
    options: { min: 6 },
    errorMessage: 'invalid_password' } };



var emailValidation = exports.emailValidation = {
  in: 'body',
  isEmail: true,
  errorMessage: 'invalid_email' };


var nameValidation = exports.nameValidation = {
  in: 'body',
  isString: true,
  isLength: {
    options: { min: 5 },
    errorMessage: 'invalid_name' } };



var profileTypeValidation = exports.profileTypeValidation = {
  in: 'body',
  custom: {
    options: function options(profileType) {return Object.values(_profileType2.default).some(function (o) {return o === profileType;});} },

  errorMessage: 'invalid_profile_type' };