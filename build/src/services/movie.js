'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _movie = require('../db/repositories/movie');var _movie2 = _interopRequireDefault(_movie);
var _utils = require('../utilities/utils');
var _business = require('../utilities/errors/business');var _business2 = _interopRequireDefault(_business);
var _movie3 = require('./filters/movie');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var


MovieService = function () {function MovieService() {(0, _classCallCheck3.default)(this, MovieService);}(0, _createClass3.default)(MovieService, null, [{ key: 'create', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
      movie, actor) {var response, movieToCreate, movieCreated;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                response = null;
                movieToCreate = {
                  name: movie.name,
                  director: movie.director,
                  genre: movie.genre,

                  price: movie.price,

                  quantityTotal: movie.quantityTotal,
                  quantityAvaible: movie.quantityTotal,
                  quantityLent: 0,

                  createBy: actor.id,
                  updateBy: actor.id };_context.next = 4;return (

                  _movie2.default.create(movieToCreate));case 4:movieCreated = _context.sent;_context.next = 7;return (

                  MovieService.getById(movieCreated.id));case 7:response = _context.sent;return _context.abrupt('return',

                response);case 9:case 'end':return _context.stop();}}}, _callee, this);}));function create(_x, _x2) {return _ref.apply(this, arguments);}return create;}() }, { key: 'updateById', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


      id, movie, actor) {var response, movieToSave;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                response = null;_context2.next = 3;return (

                  MovieService.getSimpleById(id));case 3:

                movieToSave = {
                  name: movie.name,
                  director: movie.director,
                  genre: movie.genre,

                  price: movie.price,

                  quantityTotal: movie.quantityTotal,
                  quantityAvaible: movie.quantityAvaible,
                  quantityLent: movie.quantityLent,

                  updateBy: actor.id };_context2.next = 6;return (


                  _movie2.default.updateById(id, movieToSave));case 6:_context2.next = 8;return (

                  MovieService.getById(id));case 8:response = _context2.sent;return _context2.abrupt('return',

                response);case 10:case 'end':return _context2.stop();}}}, _callee2, this);}));function updateById(_x3, _x4, _x5) {return _ref2.apply(this, arguments);}return updateById;}() }, { key: 'updateByIdSimple', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


      id, movie, actor) {var response, movieToSave;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                response = null;
                movieToSave = {
                  name: movie.name,
                  director: movie.director,
                  genre: movie.genre,

                  price: movie.price,

                  quantityTotal: movie.quantityTotal,
                  quantityAvaible: movie.quantityAvaible,
                  quantityLent: movie.quantityLent,

                  updateBy: actor.id };_context3.next = 4;return (


                  _movie2.default.updateById(id, movieToSave));case 4:response = _context3.sent;return _context3.abrupt('return',

                response);case 6:case 'end':return _context3.stop();}}}, _callee3, this);}));function updateByIdSimple(_x6, _x7, _x8) {return _ref3.apply(this, arguments);}return updateByIdSimple;}() }, { key: 'devolutionById', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(


      id, quantityDevolution, actor) {var response, exist, quantityAvaibleTotal, quantityLentTotal, movieToSave;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                response = null;_context4.next = 3;return (
                  MovieService.getSimpleById(id));case 3:exist = _context4.sent;
                quantityAvaibleTotal = exist.quantityAvaible + quantityDevolution;
                quantityLentTotal = quantityDevolution - exist.quantityLent;if (!(

                quantityAvaibleTotal > exist.quantityTotal)) {_context4.next = 8;break;}throw (
                  new _business2.default(_business.ValidationCodeError.INVALID_QUANTITY, 'movie'));case 8:


                movieToSave = {
                  quantityAvaible: quantityAvaibleTotal,
                  quantityLent: quantityLentTotal,

                  updateBy: actor.id };_context4.next = 11;return (


                  MovieService.updateByIdSimple(id, movieToSave));case 11:response = _context4.sent;return _context4.abrupt('return',

                response);case 13:case 'end':return _context4.stop();}}}, _callee4, this);}));function devolutionById(_x9, _x10, _x11) {return _ref4.apply(this, arguments);}return devolutionById;}() }, { key: 'getSimpleById', value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(


      id) {var response;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                  _movie2.default.selectOne({ where: { id: id, deletedAt: null } }));case 2:response = _context5.sent;if (

                response) {_context5.next = 5;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'movie');case 5:return _context5.abrupt('return',

                response);case 6:case 'end':return _context5.stop();}}}, _callee5, this);}));function getSimpleById(_x12) {return _ref5.apply(this, arguments);}return getSimpleById;}() }, { key: 'getById', value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(


      id) {var response;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                response = null;_context6.next = 3;return (

                  _movie2.default.selectOne({
                    where: { id: id, deletedAt: null } }));case 3:response = _context6.sent;if (


                response) {_context6.next = 6;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'movie');case 6:return _context6.abrupt('return',

                response);case 7:case 'end':return _context6.stop();}}}, _callee6, this);}));function getById(_x13) {return _ref6.apply(this, arguments);}return getById;}() }, { key: 'getAll', value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(


      searchParameter) {var response, _getAllFilter, whereMovie;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                response = null;_getAllFilter =
                (0, _movie3.getAllFilter)(searchParameter), whereMovie = _getAllFilter.whereMovie;_context7.next = 4;return (

                  _movie2.default.selectAll({
                    where: whereMovie,
                    order: [(0, _utils.serviceOrderHelper)(searchParameter)] }));case 4:response = _context7.sent;return _context7.abrupt('return',


                response);case 6:case 'end':return _context7.stop();}}}, _callee7, this);}));function getAll(_x14) {return _ref7.apply(this, arguments);}return getAll;}() }, { key: 'getAllWithPagination', value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(


      searchParameter) {var response, _getAllFilter2, whereMovie;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                response = null;_getAllFilter2 =
                (0, _movie3.getAllFilter)(searchParameter), whereMovie = _getAllFilter2.whereMovie;_context8.next = 4;return (

                  _movie2.default.selectWithPagination({
                    where: whereMovie,
                    offset: searchParameter.offset,
                    limit: searchParameter.limit,
                    order: [(0, _utils.serviceOrderHelper)(searchParameter)] }));case 4:response = _context8.sent;return _context8.abrupt('return',


                response);case 6:case 'end':return _context8.stop();}}}, _callee8, this);}));function getAllWithPagination(_x15) {return _ref8.apply(this, arguments);}return getAllWithPagination;}() }, { key: 'deleteById', value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(


      id, actor) {return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return (
                  MovieService.getSimpleById(id));case 2:_context9.next = 4;return (
                  _movie2.default.deleteById(id, actor.id));case 4:case 'end':return _context9.stop();}}}, _callee9, this);}));function deleteById(_x16, _x17) {return _ref9.apply(this, arguments);}return deleteById;}() }]);return MovieService;}();exports.default = MovieService;