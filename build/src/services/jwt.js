'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _jsonwebtoken = require('jsonwebtoken');var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _constants = require('../utilities/constants');var _constants2 = _interopRequireDefault(_constants);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


JwtService = function () {function JwtService() {(0, _classCallCheck3.default)(this, JwtService);}(0, _createClass3.default)(JwtService, null, [{ key: 'createTokenAndRefresh', value: function createTokenAndRefresh(
    createToken) {
      var response = { token: '', refreshToken: '' };
      var expiresTokenIn = parseFloat(_constants2.default.token.expirationToken) * 3600;
      var expiresRefreshTokenIn = parseFloat(_constants2.default.token.expirationRefreshToken) * 3600;
      var token = _jsonwebtoken2.default.sign({ id: createToken }, '' + _constants2.default.token.secret, { expiresIn: expiresTokenIn });
      var refreshToken = _jsonwebtoken2.default.sign({ id: createToken }, '' + _constants2.default.token.secret, { expiresIn: expiresRefreshTokenIn });

      response = { token: token, refreshToken: refreshToken };

      return response;
    } }, { key: 'verifyToken', value: function verifyToken(

    _verifyToken) {
      var expiresIn = parseFloat(_constants2.default.token.expirationToken) * 3600;
      return _jsonwebtoken2.default.verify(_verifyToken, '' + _constants2.default.token.secret, { expiresIn: expiresIn });
    } }, { key: 'verifyRefreshToken', value: function verifyRefreshToken(

    refreshToken) {
      var expiresIn = parseFloat(_constants2.default.token.expirationRefreshToken) * 3600;
      return _jsonwebtoken2.default.verify(refreshToken, '' + _constants2.default.token.secret, { expiresIn: expiresIn });
    } }]);return JwtService;}();exports.default = JwtService;