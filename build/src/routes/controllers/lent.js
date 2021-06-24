'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);
var _expressValidator = require('express-validator');
var _utils = require('../../utilities/utils');
var _lent = require('../../services/lent');var _lent2 = _interopRequireDefault(_lent);
var _middlewares = require('../middlewares');
var _lent3 = require('../schemas/lent');
var _business = require('../../utilities/errors/business');
var _lent4 = require('./filters/lent');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var routes = _express2.default.Router();

routes.post('/',
_middlewares.auth,
(0, _middlewares.checkSchema)(_lent3.lentCreate), function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee(req, res) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            response = void 0;_context.prev = 1;_context.next = 4;return (


              _lent2.default.create(req.body, req.user));case 4:response = _context.sent;_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);return _context.abrupt('return',

            (0, _middlewares.errorHandler)(_context.t0, req, res));case 10:return _context.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context.stop();}}}, _callee, undefined, [[1, 7]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


routes.get('/:id',
_middlewares.auth,
(0, _expressValidator.param)('id').isUUID().withMessage(_business.ValidationCodeError.INVALID_ID), function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee2(req, res) {var response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            response = void 0;_context2.prev = 1;


            (0, _expressValidator.validationResult)(req).throw();_context2.next = 5;return (
              _lent2.default.getById(req.params.id, req.user));case 5:response = _context2.sent;_context2.next = 11;break;case 8:_context2.prev = 8;_context2.t0 = _context2['catch'](1);return _context2.abrupt('return',

            (0, _middlewares.errorHandler)(_context2.t0, req, res));case 11:return _context2.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 12:case 'end':return _context2.stop();}}}, _callee2, undefined, [[1, 8]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


routes.get('/',
_middlewares.auth, function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee3(req, res) {var response, searchParameter;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            response = void 0;_context3.prev = 1;


            searchParameter = (0, _extends3.default)({},
            (0, _utils.controllerPaginationHelper)(req),
            (0, _lent4.getAllFilter)(req));_context3.next = 5;return (


              _lent2.default.getAllWithPagination(searchParameter, req.user));case 5:response = _context3.sent;_context3.next = 11;break;case 8:_context3.prev = 8;_context3.t0 = _context3['catch'](1);return _context3.abrupt('return',

            (0, _middlewares.errorHandler)(_context3.t0, req, res));case 11:return _context3.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 12:case 'end':return _context3.stop();}}}, _callee3, undefined, [[1, 8]]);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


routes.put('/devolution/:id',
_middlewares.auth,
(0, _middlewares.checkSchema)(_lent3.lentUpdate), function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee4(req, res) {var response;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            response = void 0;_context4.prev = 1;_context4.next = 4;return (


              _lent2.default.setDevolutionById(req.params.id, req.body, req.user));case 4:response = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4['catch'](1);return _context4.abrupt('return',

            (0, _middlewares.errorHandler)(_context4.t0, req, res));case 10:return _context4.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context4.stop();}}}, _callee4, undefined, [[1, 7]]);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());exports.default =


routes;