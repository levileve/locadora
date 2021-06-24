'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);
var _middlewares = require('../middlewares');
var _profileType = require('../../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);
var _setting = require('../../services/setting');var _setting2 = _interopRequireDefault(_setting);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var routes = _express2.default.Router();

routes.put('/',
_middlewares.auth,
(0, _middlewares.authorize)([_profileType2.default.ADMIN]), function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee(req, res) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            response = void 0;_context.prev = 1;_context.next = 4;return (


              _setting2.default.updateConfigs(req.body, req.user));case 4:response = _context.sent;_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);return _context.abrupt('return',

            (0, _middlewares.errorHandler)(_context.t0, req, res));case 10:return _context.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context.stop();}}}, _callee, undefined, [[1, 7]]);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


routes.get('/',
_middlewares.auth,
(0, _middlewares.authorize)([_profileType2.default.ADMIN]), function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(
  function _callee2(req, res) {var response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            response = void 0;_context2.prev = 1;_context2.next = 4;return (


              _setting2.default.findAll(req.query, req.user));case 4:response = _context2.sent;_context2.next = 10;break;case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](1);return _context2.abrupt('return',

            (0, _middlewares.errorHandler)(_context2.t0, req, res));case 10:return _context2.abrupt('return',


            res.status(_httpStatus2.default.OK).json(response));case 11:case 'end':return _context2.stop();}}}, _callee2, undefined, [[1, 7]]);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());exports.default =


routes;