'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getAllFilter = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _sequelize = require('sequelize');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// eslint-disable-next-line import/prefer-default-export
var getAllFilter = exports.getAllFilter = function getAllFilter(searchParameter) {var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var where = {};

  if (!includeDeleted) {
    where.deletedAt = null;
  }

  // -=-=-=- User Where -=-=-=-

  if (searchParameter.name) {
    where.name = (0, _defineProperty3.default)({}, _sequelize.Op.iLike, '%' + searchParameter.name + '%');
  }

  if (searchParameter.email) {
    where.email = (0, _defineProperty3.default)({}, _sequelize.Op.iLike, '%' + searchParameter.email + '%');
  }

  if (searchParameter.profileType) {
    where.profileType = searchParameter.profileType;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.lastAccessAt) {
    where.lastAccessAt = (0, _extends3.default)({},
    searchParameter.lastAccessAt.startAt && (0, _defineProperty3.default)({},
    _sequelize.Op.gte, searchParameter.lastAccessAt.startAt && (0, _momentTimezone2.default)(searchParameter.lastAccessAt.startAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.lastAccessAt.startAt).format('YYYY-MM-DD')),

    searchParameter.lastAccessAt.endAt && (0, _defineProperty3.default)({},
    _sequelize.Op.lte, searchParameter.lastAccessAt.endAt && (0, _momentTimezone2.default)(searchParameter.lastAccessAt.endAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.lastAccessAt.endAt).format('YYYY-MM-DD')));


  }

  if (searchParameter.createdAt) {
    where.createdAt = (0, _extends3.default)({},
    searchParameter.createdAt.startAt && (0, _defineProperty3.default)({},
    _sequelize.Op.gte, searchParameter.createdAt.startAt && (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).format('YYYY-MM-DD')),

    searchParameter.createdAt.endAt && (0, _defineProperty3.default)({},
    _sequelize.Op.lte, searchParameter.createdAt.endAt && (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).format('YYYY-MM-DD')));


  }

  return { where: where };
};