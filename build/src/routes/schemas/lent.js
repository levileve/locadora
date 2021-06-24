'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.lentUpdate = exports.lentCreate = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _index = require('./index');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var lentCreate = exports.lentCreate = {
  email: (0, _extends3.default)({},
  _index.emailValidation, {
    optional: true }),

  userId: {
    in: 'body',
    isUUID: true,
    optional: true,
    errorMessage: 'invalid_user_id' },

  devolutionAt: {
    in: 'body',
    optional: true,
    custom: {
      options: function options(date) {return date && (0, _momentTimezone2.default)(date, 'YYYY-MM-DD HH:mm:ss', true).isValid();} },

    errorMessage: 'invalid_devolution_at' },

  historic: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_historic' },

  movies: {
    in: 'body',
    isArray: true,
    errorMessage: 'invalid_movies' },

  'movies.*.id': {
    in: 'body',
    isUUID: true,
    errorMessage: 'invalid.*.id' },

  'movies.*.quantityLent': {
    in: 'body',
    isInt: true,
    custom: {
      options: function options(date) {return date && parseInt(date, 10) >= 1;} },

    errorMessage: 'invalid.*.quantity_lent' } };



var lentUpdate = exports.lentUpdate = {
  id: (0, _extends3.default)({},
  _index.idValidation),

  email: (0, _extends3.default)({},
  _index.emailValidation, {
    optional: true }),

  userId: {
    in: 'body',
    isUUID: true,
    optional: true,
    errorMessage: 'invalid_user_id' },

  historic: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_historic' },

  movies: {
    in: 'body',
    isArray: true,
    errorMessage: 'invalid_movies' },

  'movies.*.id': {
    in: 'body',
    isUUID: true,
    errorMessage: 'invalid.*.id' },

  'movies.*.quantityDevolution': {
    in: 'body',
    isInt: true,
    custom: {
      options: function options(date) {return date && parseInt(date, 10) >= 1;} },

    errorMessage: 'invalid.*.quantity_devolution' } };