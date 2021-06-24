'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.LentEntity = undefined;var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _database = require('../database');var _database2 = _interopRequireDefault(_database);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


var LentEntity = exports.LentEntity = _database2.default.models.Lent;var

LentRepository = function () {function LentRepository() {(0, _classCallCheck3.default)(this, LentRepository);}(0, _createClass3.default)(LentRepository, null, [{ key: 'create', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
      user, options) {var response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                response = null;_context.prev = 1;


                response = LentEntity.build(user);_context.next = 5;return (

                  response.save({
                    transaction: options ? options.transaction : null,
                    returning: true }));case 5:response = _context.sent;_context.next = 11;break;case 8:_context.prev = 8;_context.t0 = _context['catch'](1);throw (


                  new Error('persistence', _context.t0));case 11:return _context.abrupt('return',


                response);case 12:case 'end':return _context.stop();}}}, _callee, this, [[1, 8]]);}));function create(_x, _x2) {return _ref.apply(this, arguments);}return create;}() }, { key: 'bulkInsert', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


      lent, options) {var response;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                response = null;_context2.prev = 1;_context2.next = 4;return (


                  LentEntity.bulkCreate(lent, {
                    transaction: options ? options.transaction : null }));case 4:response = _context2.sent;_context2.next = 10;break;case 7:_context2.prev = 7;_context2.t0 = _context2['catch'](1);throw (


                  new Error('persistence', _context2.t0));case 10:return _context2.abrupt('return',


                response);case 11:case 'end':return _context2.stop();}}}, _callee2, this, [[1, 7]]);}));function bulkInsert(_x3, _x4) {return _ref2.apply(this, arguments);}return bulkInsert;}() }, { key: 'updateById', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(



      id, lent, options) {var response, _response, _response2, _response2$;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                response = null;_context3.prev = 1;_context3.next = 4;return (


                  LentEntity.update(lent, {
                    where: { id: id },
                    transaction: options && options.transaction,
                    returning: true }));case 4:response = _context3.sent;_response =


                response;_response2 = (0, _slicedToArray3.default)(_response, 2);_response2$ = (0, _slicedToArray3.default)(_response2[1], 1);response = _response2$[0];_context3.next = 14;break;case 11:_context3.prev = 11;_context3.t0 = _context3['catch'](1);throw (

                  new Error('persistence', _context3.t0));case 14:return _context3.abrupt('return',


                response);case 15:case 'end':return _context3.stop();}}}, _callee3, this, [[1, 11]]);}));function updateById(_x5, _x6, _x7) {return _ref3.apply(this, arguments);}return updateById;}() }, { key: 'selectOne', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(



      options) {var response;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                response = null;_context4.prev = 1;_context4.next = 4;return (



                  LentEntity.findOne(options));case 4:response = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4['catch'](1);throw (

                  new Error('persistence', _context4.t0));case 10:return _context4.abrupt('return',


                response);case 11:case 'end':return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function selectOne(_x8) {return _ref4.apply(this, arguments);}return selectOne;}() }, { key: 'selectAll', value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(


      options) {var response;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                response = null;_context5.prev = 1;


                options = (0, _extends3.default)({},
                options, {
                  distinct: options.include && options.include.length });_context5.next = 5;return (

                  LentEntity.findAll(options));case 5:response = _context5.sent;_context5.next = 11;break;case 8:_context5.prev = 8;_context5.t0 = _context5['catch'](1);throw (

                  new Error('persistence', _context5.t0));case 11:return _context5.abrupt('return',


                response);case 12:case 'end':return _context5.stop();}}}, _callee5, this, [[1, 8]]);}));function selectAll(_x9) {return _ref5.apply(this, arguments);}return selectAll;}() }, { key: 'selectWithPagination', value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(


      options) {var response;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                response = null;_context6.prev = 1;


                options = (0, _extends3.default)({},
                options, {
                  distinct: options.include && options.include.length });_context6.next = 5;return (

                  LentEntity.findAndCountAll(options));case 5:response = _context6.sent;_context6.next = 11;break;case 8:_context6.prev = 8;_context6.t0 = _context6['catch'](1);throw (

                  new Error('persistence', _context6.t0));case 11:return _context6.abrupt('return',


                response);case 12:case 'end':return _context6.stop();}}}, _callee6, this, [[1, 8]]);}));function selectWithPagination(_x10) {return _ref6.apply(this, arguments);}return selectWithPagination;}() }, { key: 'deleteById', value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(


      movieId, options) {var response;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                response = null;_context7.prev = 1;_context7.next = 4;return (


                  LentEntity.destroy({
                    where: { movieId: movieId },
                    transaction: options && options.transaction }));case 4:response = _context7.sent;_context7.next = 10;break;case 7:_context7.prev = 7;_context7.t0 = _context7['catch'](1);throw (



                  new Error('persistence', _context7.t0));case 10:return _context7.abrupt('return',


                response);case 11:case 'end':return _context7.stop();}}}, _callee7, this, [[1, 7]]);}));function deleteById(_x11, _x12) {return _ref7.apply(this, arguments);}return deleteById;}() }]);return LentRepository;}();exports.default = LentRepository;