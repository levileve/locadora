'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _jwt = require('../../services/jwt');var _jwt2 = _interopRequireDefault(_jwt);
var _user = require('../../services/user');var _user2 = _interopRequireDefault(_user);
var _unauthorized = require('../../utilities/errors/unauthorized');var _unauthorized2 = _interopRequireDefault(_unauthorized);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

  function _callee(req, res, next) {var _req$headers$authoriz, _req$headers$authoriz2, refreshToken, auth, user;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_req$headers$authoriz =

            req.headers.authorization.split(' '), _req$headers$authoriz2 = (0, _slicedToArray3.default)(_req$headers$authoriz, 2), refreshToken = _req$headers$authoriz2[1];
            auth = _jwt2.default.verifyRefreshToken(refreshToken);
            console.log({ auth: auth });_context.next = 6;return (
              _user2.default.getById(auth.id));case 6:user = _context.sent;

            req.user = user;_context.next = 14;break;case 10:_context.prev = 10;_context.t0 = _context['catch'](0);

            console.log({ error: _context.t0 });throw (

              new _unauthorized2.default());case 14:return _context.abrupt('return',


            next());case 15:case 'end':return _context.stop();}}}, _callee, this, [[0, 10]]);}));function authRefreshToken(_x, _x2, _x3) {return _ref.apply(this, arguments);}return authRefreshToken;}();