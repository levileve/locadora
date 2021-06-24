'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getAllFilter = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _sequelize = require('sequelize');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// eslint-disable-next-line import/prefer-default-export
var getAllFilter = exports.getAllFilter = function getAllFilter(searchParameter) {var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var whereMovie = {};

  if (!includeDeleted) {
    whereMovie.deletedAt = null;
  }

  // -=-=-=- Movie Where -=-=-=-

  if (searchParameter.idList) {
    whereMovie.id = (0, _defineProperty3.default)({}, _sequelize.Op.in, searchParameter.idList);
  }

  if (searchParameter.name) {
    whereMovie.name = (0, _defineProperty3.default)({}, _sequelize.Op.iLike, '%' + searchParameter.name + '%');
  }

  if (searchParameter.director) {
    whereMovie.director = (0, _defineProperty3.default)({}, _sequelize.Op.iLike, '%' + searchParameter.director + '%');
  }

  if (searchParameter.genre) {
    whereMovie.genre = searchParameter.genre;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.createdAt) {
    whereMovie.createdAt = (0, _extends3.default)({},
    searchParameter.createdAt.startAt && (0, _defineProperty3.default)({},
    _sequelize.Op.gte, searchParameter.createdAt.startAt && (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).format('YYYY-MM-DD')),

    searchParameter.createdAt.endAt && (0, _defineProperty3.default)({},
    _sequelize.Op.lte, searchParameter.createdAt.endAt && (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).format('YYYY-MM-DD')));


  }

  return { whereMovie: whereMovie };
};