'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.movieUpdate = exports.movieCreate = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _index = require('./index');
var _movieGenre = require('../../enumerators/movie-genre');var _movieGenre2 = _interopRequireDefault(_movieGenre);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var movieCreate = exports.movieCreate = {
  genre: {
    in: 'body',
    custom: {
      options: function options(value) {return Object.values(_movieGenre2.default).some(function (o) {return o === value;});} },

    errorMessage: 'invalid_genre' },

  name: {
    in: 'body',
    isString: true,
    errorMessage: 'invalid_name' },

  price: {
    in: 'body',
    isDecimal: true,
    custom: {
      options: function options(date) {return date && parseFloat(date, 10) > 0;} },

    errorMessage: 'invalid_price' },

  quantityTotal: {
    in: 'body',
    isInt: true,
    custom: {
      options: function options(date) {return date && parseInt(date, 10) >= 1;} },

    errorMessage: 'invalid_quantity_total' },

  director: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_director' } };



var movieUpdate = exports.movieUpdate = {
  id: (0, _extends3.default)({},
  _index.idValidation),

  genre: {
    in: 'body',
    optional: true,
    custom: {
      options: function options(value) {return Object.values(_movieGenre2.default).some(function (o) {return o === value;});} },

    errorMessage: 'invalid_genre' },

  name: {
    in: 'body',
    isString: true,
    optional: true,
    errorMessage: 'invalid_name' },

  director: {
    in: 'body',
    optional: true,
    isString: true,
    errorMessage: 'invalid_director' } };