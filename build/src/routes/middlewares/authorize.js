'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =

authorize;var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function authorize(profileList) {
  return function (req, res, next) {
    var hasAccess = req.user && profileList.find(function (o) {return o === req.user.profileType;});

    return hasAccess ? next() : res.sendStatus(_httpStatus2.default.FORBIDDEN);
  };
}