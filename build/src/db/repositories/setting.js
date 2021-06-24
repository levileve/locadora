'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _sequelize = require('sequelize');
var _database = require('../database');var _database2 = _interopRequireDefault(_database);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var SettingEntity = _database2.default.models.Setting;var

SettingsRepository = function () {function SettingsRepository() {(0, _classCallCheck3.default)(this, SettingsRepository);}(0, _createClass3.default)(SettingsRepository, null, [{ key: 'selectByKey', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
      key) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                response = null;_context.prev = 1;_context.next = 4;return (


                  SettingEntity.findOne({ where: { key: key } }));case 4:response = _context.sent;_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);throw (

                  new Error('persistence', _context.t0));case 10:return _context.abrupt('return',


                response);case 11:case 'end':return _context.stop();}}}, _callee, this, [[1, 7]]);}));function selectByKey(_x) {return _ref.apply(this, arguments);}return selectByKey;}() }, { key: 'selectByManyKey', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


      keys) {var response, options;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                response = null;_context2.prev = 1;


                options = keys && keys.length ? { where: { key: (0, _defineProperty3.default)({}, _sequelize.Op.in, keys) } } : undefined;_context2.next = 5;return (
                  SettingEntity.findAll(options));case 5:response = _context2.sent;
                response = response.reduce(
                function (obj, item) {return Object.assign(obj, (0, _defineProperty3.default)({}, item.key, item.value));}, {});_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2['catch'](1);throw (



                  new Error('persistence', _context2.t0));case 12:return _context2.abrupt('return',


                response);case 13:case 'end':return _context2.stop();}}}, _callee2, this, [[1, 9]]);}));function selectByManyKey(_x2) {return _ref2.apply(this, arguments);}return selectByManyKey;}() }, { key: 'updateByKey', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


      key, value, options) {var response, _response, _response2, _response2$;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                response = null;_context3.prev = 1;_context3.next = 4;return (


                  SettingEntity.update({ value: value }, {
                    where: { key: key },
                    transaction: options && options.transaction,
                    returning: true }));case 4:response = _context3.sent;_response =


                response;_response2 = (0, _slicedToArray3.default)(_response, 2);_response2$ = (0, _slicedToArray3.default)(_response2[1], 1);response = _response2$[0];_context3.next = 14;break;case 11:_context3.prev = 11;_context3.t0 = _context3['catch'](1);throw (

                  new Error('persistence', _context3.t0));case 14:return _context3.abrupt('return',


                response);case 15:case 'end':return _context3.stop();}}}, _callee3, this, [[1, 11]]);}));function updateByKey(_x3, _x4, _x5) {return _ref3.apply(this, arguments);}return updateByKey;}() }]);return SettingsRepository;}();exports.default = SettingsRepository;