'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getAllFilter = undefined;var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// eslint-disable-next-line import/prefer-default-export
var getAllFilter = exports.getAllFilter = function getAllFilter(req) {
  var searchParameter = {};

  // -=-=-=- User Where -=-=-=-

  if (req.query.name && req.query.name.trim().length > 0) {
    searchParameter.name = req.query.name.trim();
  }

  if (req.query.email && req.query.email.trim().length > 0) {
    searchParameter.email = req.query.email.trim();
  }

  if (req.query.profileType) {
    searchParameter.profileType = parseInt(req.query.profileType, 10);
  }

  if (req.query.createdAt) {var _req$query$createdAt$ =
    req.query.createdAt.split(','),_req$query$createdAt$2 = (0, _slicedToArray3.default)(_req$query$createdAt$, 2),createdAtStart = _req$query$createdAt$2[0],createdAtEnd = _req$query$createdAt$2[1];

    searchParameter.createdAt = {
      startAt: createdAtStart && (0, _momentTimezone2.default)(createdAtStart).format(),
      endAt: createdAtEnd && (0, _momentTimezone2.default)(createdAtEnd).format() };

  }

  if (req.query.lastAccessAt) {var _req$query$lastAccess =
    req.query.lastAccessAt.split(','),_req$query$lastAccess2 = (0, _slicedToArray3.default)(_req$query$lastAccess, 2),lastAccessAtStart = _req$query$lastAccess2[0],lastAccessAtEnd = _req$query$lastAccess2[1];

    searchParameter.lastAccessAt = {
      startAt: lastAccessAtStart && (0, _momentTimezone2.default)(lastAccessAtStart).format(),
      endAt: lastAccessAtEnd && (0, _momentTimezone2.default)(lastAccessAtEnd).format() };

  }

  return searchParameter;
};