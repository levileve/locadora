'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);
var _expressValidator = require('express-validator');
var _utils = require('../../utilities/utils');
var _user = require('../../services/user');var _user2 = _interopRequireDefault(_user);
var _middlewares = require('../middlewares');


var _user3 = require('../schemas/user');





var _profileType = require('../../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);
var _business = require('../../utilities/errors/business');
var _user4 = require('./filters/user');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var routes = _express2.default.Router();

routes.post('/signup',
(0, _middlewares.checkSchema)(_user3.clientCreate), function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee(req, res) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            response = void 0;_context.prev = 1;_context.next = 4;return (


              _user2.default.create((0, _extends3.default)({}, req.body, { profileType: _profileType2.default.CLIENT }), req.user));case 4:response = _context.sent;_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);return _context.abrupt('return',

            (0, _middlewares.errorHandler)(_context.t0, req, res));case 10:return _context.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context.stop();}}}, _callee, undefined, [[1, 7]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


routes.get('/refresh-token',
_middlewares.refreshToken, function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee2(req, res) {var response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            response = void 0;_context2.prev = 1;_context2.next = 4;return (


              _user2.default.refreshToken(req.user.id));case 4:response = _context2.sent;_context2.next = 10;break;case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](1);return _context2.abrupt('return',

            (0, _middlewares.errorHandler)(_context2.t0, req, res));case 10:return _context2.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context2.stop();}}}, _callee2, undefined, [[1, 7]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


routes.get('/login',
(0, _middlewares.checkSchema)(_user3.userLogin), function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee3(req, res) {var response;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            response = void 0;_context3.prev = 1;_context3.next = 4;return (


              _user2.default.login(req.headers));case 4:response = _context3.sent;_context3.next = 10;break;case 7:_context3.prev = 7;_context3.t0 = _context3['catch'](1);return _context3.abrupt('return',

            (0, _middlewares.errorHandler)(_context3.t0, req, res));case 10:return _context3.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context3.stop();}}}, _callee3, undefined, [[1, 7]]);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


routes.post('/signup/admin',
_middlewares.auth,
(0, _middlewares.checkSchema)(_user3.userCreate),
(0, _middlewares.authorize)([_profileType2.default.ADMIN]),
(0, _middlewares.canManageUser)(), function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee4(req, res) {var response;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            response = void 0;_context4.prev = 1;_context4.next = 4;return (


              _user2.default.create(req.body, req.user));case 4:response = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4['catch'](1);return _context4.abrupt('return',

            (0, _middlewares.errorHandler)(_context4.t0, req, res));case 10:return _context4.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context4.stop();}}}, _callee4, undefined, [[1, 7]]);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());


routes.get('/me',
_middlewares.auth, function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee5(req, res) {var response;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
            response = void 0;_context5.prev = 1;_context5.next = 4;return (


              _user2.default.getById(req.user.id, req.user));case 4:response = _context5.sent;_context5.next = 10;break;case 7:_context5.prev = 7;_context5.t0 = _context5['catch'](1);return _context5.abrupt('return',

            (0, _middlewares.errorHandler)(_context5.t0, req, res));case 10:return _context5.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context5.stop();}}}, _callee5, undefined, [[1, 7]]);}));return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());


routes.get('/:id',
_middlewares.auth,
(0, _expressValidator.param)('id').isUUID().withMessage(_business.ValidationCodeError.INVALID_ID),
(0, _middlewares.authorize)([_profileType2.default.ADMIN]), function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee6(req, res) {var response;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
            response = void 0;_context6.prev = 1;


            (0, _expressValidator.validationResult)(req).throw();_context6.next = 5;return (
              _user2.default.getById(req.params.id, req.user));case 5:response = _context6.sent;_context6.next = 11;break;case 8:_context6.prev = 8;_context6.t0 = _context6['catch'](1);return _context6.abrupt('return',

            (0, _middlewares.errorHandler)(_context6.t0, req, res));case 11:return _context6.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 12:case 'end':return _context6.stop();}}}, _callee6, undefined, [[1, 8]]);}));return function (_x11, _x12) {return _ref6.apply(this, arguments);};}());


routes.get('/',
_middlewares.auth,
(0, _middlewares.authorize)([_profileType2.default.ADMIN]), function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee7(req, res) {var response, searchParameter;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
            response = void 0;_context7.prev = 1;


            searchParameter = (0, _extends3.default)({},
            (0, _utils.controllerPaginationHelper)(req),
            (0, _user4.getAllFilter)(req));_context7.next = 5;return (


              _user2.default.getAllWithPagination(searchParameter, req.user));case 5:response = _context7.sent;_context7.next = 11;break;case 8:_context7.prev = 8;_context7.t0 = _context7['catch'](1);return _context7.abrupt('return',

            (0, _middlewares.errorHandler)(_context7.t0, req, res));case 11:return _context7.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 12:case 'end':return _context7.stop();}}}, _callee7, undefined, [[1, 8]]);}));return function (_x13, _x14) {return _ref7.apply(this, arguments);};}());


routes.put('/:id',
_middlewares.auth,
(0, _middlewares.checkSchema)(_user3.userUpdate),
(0, _middlewares.canManageUser)(), function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee8(req, res) {var response;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
            response = void 0;_context8.prev = 1;_context8.next = 4;return (


              _user2.default.updateById(req.params.id, req.body, req.user));case 4:response = _context8.sent;_context8.next = 10;break;case 7:_context8.prev = 7;_context8.t0 = _context8['catch'](1);return _context8.abrupt('return',

            (0, _middlewares.errorHandler)(_context8.t0, req, res));case 10:return _context8.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context8.stop();}}}, _callee8, undefined, [[1, 7]]);}));return function (_x15, _x16) {return _ref8.apply(this, arguments);};}());


routes.delete('/:id',
_middlewares.auth,
(0, _expressValidator.param)('id').isUUID().withMessage(_business.ValidationCodeError.INVALID_ID),
(0, _middlewares.authorize)([_profileType2.default.ADMIN]),
(0, _middlewares.canManageUser)(), function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee9(req, res) {var response;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
            response = void 0;_context9.prev = 1;


            (0, _expressValidator.validationResult)(req).throw();_context9.next = 5;return (
              _user2.default.deleteById(req.params.id, req.user));case 5:response = _context9.sent;_context9.next = 11;break;case 8:_context9.prev = 8;_context9.t0 = _context9['catch'](1);return _context9.abrupt('return',

            (0, _middlewares.errorHandler)(_context9.t0, req, res));case 11:return _context9.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 12:case 'end':return _context9.stop();}}}, _callee9, undefined, [[1, 8]]);}));return function (_x17, _x18) {return _ref9.apply(this, arguments);};}());exports.default =


routes;