'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.MovieLentEntity = undefined;var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _database = require('../database');var _database2 = _interopRequireDefault(_database);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var MovieLentEntity = exports.MovieLentEntity = _database2.default.models.MovieLent;var

MovieLentRepository = function () {function MovieLentRepository() {(0, _classCallCheck3.default)(this, MovieLentRepository);}(0, _createClass3.default)(MovieLentRepository, null, [{ key: 'bulkInsert', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
      movieLent, options) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                response = null;_context.prev = 1;_context.next = 4;return (


                  MovieLentEntity.bulkCreate(movieLent, {
                    transaction: options ? options.transaction : null }));case 4:response = _context.sent;_context.next = 10;break;case 7:_context.prev = 7;_context.t0 = _context['catch'](1);throw (


                  new Error('persistence', _context.t0));case 10:return _context.abrupt('return',


                response);case 11:case 'end':return _context.stop();}}}, _callee, this, [[1, 7]]);}));function bulkInsert(_x, _x2) {return _ref.apply(this, arguments);}return bulkInsert;}() }, { key: 'selectWithPagination', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


      options) {var response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                response = null;_context2.prev = 1;


                options = (0, _extends3.default)({},
                options, {
                  distinct: options.include && options.include.length });_context2.next = 5;return (

                  MovieLentEntity.findAndCountAll(options));case 5:response = _context2.sent;_context2.next = 11;break;case 8:_context2.prev = 8;_context2.t0 = _context2['catch'](1);throw (

                  new Error('persistence', _context2.t0));case 11:return _context2.abrupt('return',


                response);case 12:case 'end':return _context2.stop();}}}, _callee2, this, [[1, 8]]);}));function selectWithPagination(_x3) {return _ref2.apply(this, arguments);}return selectWithPagination;}() }, { key: 'updateById', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


      id, movieLent, options) {var response, _response, _response2, _response2$;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                response = null;_context3.prev = 1;_context3.next = 4;return (


                  MovieLentEntity.update(movieLent, {
                    where: { id: id },
                    transaction: options && options.transaction,
                    returning: true }));case 4:response = _context3.sent;_response =


                response;_response2 = (0, _slicedToArray3.default)(_response, 2);_response2$ = (0, _slicedToArray3.default)(_response2[1], 1);response = _response2$[0];_context3.next = 14;break;case 11:_context3.prev = 11;_context3.t0 = _context3['catch'](1);throw (

                  new Error('persistence', _context3.t0));case 14:return _context3.abrupt('return',


                response);case 15:case 'end':return _context3.stop();}}}, _callee3, this, [[1, 11]]);}));function updateById(_x4, _x5, _x6) {return _ref3.apply(this, arguments);}return updateById;}() }]);return MovieLentRepository;}();exports.default = MovieLentRepository;