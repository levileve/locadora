'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getAllFilter = undefined;var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// eslint-disable-next-line import/prefer-default-export
var getAllFilter = exports.getAllFilter = function getAllFilter(req) {
  var searchParameter = {};

  // -=-=-=- Movie Where -=-=-=-

  if (req.query.name && req.query.name.trim().length > 0) {
    searchParameter.name = req.query.name.trim();
  }

  if (req.query.director && req.query.director.trim().length > 0) {
    searchParameter.director = req.query.director.trim();
  }

  if (req.query.genre) {
    searchParameter.genre = parseInt(req.query.genre, 10);
  }

  if (req.query.createdAt) {var _req$query$createdAt$ =
    req.query.createdAt.split(','),_req$query$createdAt$2 = (0, _slicedToArray3.default)(_req$query$createdAt$, 2),createdAtStart = _req$query$createdAt$2[0],createdAtEnd = _req$query$createdAt$2[1];

    searchParameter.createdAt = {
      startAt: createdAtStart && (0, _momentTimezone2.default)(createdAtStart).format(),
      endAt: createdAtEnd && (0, _momentTimezone2.default)(createdAtEnd).format() };

  }

  return searchParameter;
};