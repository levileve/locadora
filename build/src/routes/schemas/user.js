'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.userUpdate = exports.userCreate = exports.userLogin = exports.clientCreate = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _userCreate;var _index = require('./index');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}







var clientCreate = exports.clientCreate = {
  '': {
    in: 'body',
    custom: {
      options: function options(value) {return value.email && value.password;} },

    errorMessage: 'invalid_credentials' },

  password: _index.passwordValidation,
  name: {
    in: 'body',
    isString: true,
    isLength: {
      options: { min: 5 },
      errorMessage: 'invalid_name' } },


  email: _index.emailValidation };


var userLogin = exports.userLogin = {
  '': {
    in: 'headers',
    custom: {
      options: function options(value) {return value.authorization;} },

    errorMessage: 'invalid_credentials' } };



var userCreate = exports.userCreate = (_userCreate = {
  '': {
    in: 'body',
    custom: {
      options: function options(body) {return body.email && body.password;} },

    errorMessage: 'invalid_credentials' },

  profileType: _index.profileTypeValidation }, (0, _defineProperty3.default)(_userCreate, '',
{
  in: 'body',
  custom: {
    options: function options(body) {return body.email && body.password;} },

  errorMessage: 'invalid_credentials' }), (0, _defineProperty3.default)(_userCreate, 'password',

_index.passwordValidation), (0, _defineProperty3.default)(_userCreate, 'name',
{
  in: 'body',
  isString: true,
  isLength: {
    options: { min: 5 },
    errorMessage: 'invalid_name' } }), (0, _defineProperty3.default)(_userCreate, 'email',


_index.emailValidation), _userCreate);


var userUpdate = exports.userUpdate = {
  id: (0, _extends3.default)({},
  _index.idValidation),

  password: (0, _extends3.default)({},
  _index.passwordValidation, {
    optional: true }),

  oldPassword: (0, _extends3.default)({},
  _index.passwordValidation, {
    optional: true,
    errorMessage: 'invalid_old_password' }),

  profileType: (0, _extends3.default)({},
  _index.profileTypeValidation, {
    optional: true }),

  name: (0, _extends3.default)({},
  _index.nameValidation, {
    optional: true }) };