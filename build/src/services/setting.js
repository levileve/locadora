'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _setting = require('../db/repositories/setting');var _setting2 = _interopRequireDefault(_setting);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

SettingsService = function () {function SettingsService() {(0, _classCallCheck3.default)(this, SettingsService);}(0, _createClass3.default)(SettingsService, null, [{ key: 'findOne', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
      key) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return',
                _setting2.default.selectByKey(key));case 1:case 'end':return _context.stop();}}}, _callee, this);}));function findOne(_x) {return _ref.apply(this, arguments);}return findOne;}() }, { key: 'findAll', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


      keys, actor) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                keys = Array.isArray(keys) ? keys : keys && Object.keys(keys);return _context2.abrupt('return',

                _setting2.default.selectByManyKey(keys, actor));case 2:case 'end':return _context2.stop();}}}, _callee2, this);}));function findAll(_x2, _x3) {return _ref2.apply(this, arguments);}return findAll;}() }, { key: 'updateByKey', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


      key, value, actor) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt('return',
                _setting2.default.updateByKey(key, value, actor.id));case 1:case 'end':return _context3.stop();}}}, _callee3, this);}));function updateByKey(_x4, _x5, _x6) {return _ref3.apply(this, arguments);}return updateByKey;}() }, { key: 'updateConfigs', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(


      configs, actor) {var _this = this;var response, arrConfigs, settingToSave;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                response = {};
                arrConfigs = Object.keys(configs);_context5.next = 4;return (
                  Promise.all(arrConfigs.map(function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(key) {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                              if (configs[key] !== undefined) {
                                SettingsService.updateByKey(key, configs[key], actor);
                              }return _context4.abrupt('return',

                              key);case 2:case 'end':return _context4.stop();}}}, _callee4, _this);}));return function (_x9) {return _ref5.apply(this, arguments);};}())));case 4:settingToSave = _context5.sent;_context5.next = 7;return (

                  SettingsService.findAll(settingToSave));case 7:response = _context5.sent;return _context5.abrupt('return',

                response);case 9:case 'end':return _context5.stop();}}}, _callee5, this);}));function updateConfigs(_x7, _x8) {return _ref4.apply(this, arguments);}return updateConfigs;}() }]);return SettingsService;}();exports.default = SettingsService;