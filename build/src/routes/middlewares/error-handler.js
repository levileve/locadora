'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =




errorHandler;var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);var _business = require('../../utilities/errors/business');var _business2 = _interopRequireDefault(_business);var _unauthorized = require('../../utilities/errors/unauthorized');var _unauthorized2 = _interopRequireDefault(_unauthorized);var _forbidden = require('../../utilities/errors/forbidden');var _forbidden2 = _interopRequireDefault(_forbidden);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function errorHandler(err, req, res) {
  if (err.errors && err.errors.length > 0) {
    var error = err.errors.pop();

    res.status(_httpStatus2.default.BAD_REQUEST).json({
      error: error.msg,
      options: error.param });

  } else if (err instanceof _business2.default) {
    res.status(_httpStatus2.default.BAD_REQUEST).json({
      error: err.code,
      options: err.options });

  } else if (err instanceof _unauthorized2.default) {
    res.sendStatus(_httpStatus2.default.UNAUTHORIZED);
  } else if (err instanceof _forbidden2.default) {
    res.sendStatus(_httpStatus2.default.FORBIDDEN);
  } else {
    res.sendStatus(_httpStatus2.default.INTERNAL_SERVER_ERROR);
  }
}