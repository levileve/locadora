'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getAllFilter = undefined;var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _sequelize = require('sequelize');
var _profileType = require('../../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// eslint-disable-next-line import/prefer-default-export
var getAllFilter = exports.getAllFilter = function getAllFilter(searchParameter, actor) {var includeDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var whereLent = {};
  var whereUser = {};

  if (!includeDeleted) {
    whereLent.deletedAt = null;
  }

  // -=-=-=- Lent Where -=-=-=-

  if (searchParameter.status) {
    whereLent.status = searchParameter.status;
  }


  if (actor && actor.profileType === _profileType2.default.CLIENT) {
    whereLent.userId = actor.id;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.createdAt) {
    whereLent.createdAt = (0, _extends3.default)({},
    searchParameter.createdAt.startAt && (0, _defineProperty3.default)({},
    _sequelize.Op.gte, searchParameter.createdAt.startAt && (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.startAt).format('YYYY-MM-DD')),

    searchParameter.createdAt.endAt && (0, _defineProperty3.default)({},
    _sequelize.Op.lte, searchParameter.createdAt.endAt && (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).isValid() &&
    (0, _momentTimezone2.default)(searchParameter.createdAt.endAt).format('YYYY-MM-DD')));


  }

  return { whereLent: whereLent, whereUser: whereUser };
};