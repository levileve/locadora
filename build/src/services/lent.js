'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _lent = require('../db/repositories/lent');var _lent2 = _interopRequireDefault(_lent);
var _movieLent = require('../db/repositories/movie-lent');var _movieLent2 = _interopRequireDefault(_movieLent);
var _user = require('../db/repositories/user');
var _movie = require('../db/repositories/movie');

var _utils = require('../utilities/utils');
var _business = require('../utilities/errors/business');var _business2 = _interopRequireDefault(_business);

var _lentStatus = require('../enumerators/lent-status');var _lentStatus2 = _interopRequireDefault(_lentStatus);
var _lent3 = require('./filters/lent');

var _user2 = require('./user');var _user3 = _interopRequireDefault(_user2);
var _profileType = require('../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);
var _movie2 = require('./movie');var _movie3 = _interopRequireDefault(_movie2);
var _setting = require('./setting');var _setting2 = _interopRequireDefault(_setting);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

LentService = function () {function LentService() {(0, _classCallCheck3.default)(this, LentService);}(0, _createClass3.default)(LentService, null, [{ key: 'create', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(
      lent, actor) {var _this = this;var response, totalPrice, userId, historic, user, totalQuantityLentUser, moviesIdList, movies, moviesToLent, moviesLentUser, _ref3, devolutionTime, typeDevolutionTime, devolutionAt, lentToCreate, lentCreated, movieLent;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

                response = null;
                totalPrice = 0;
                userId = void 0;
                historic = '';if (!(

                actor && actor.profileType !== _profileType2.default.ADMIN)) {_context2.next = 8;break;}
                userId = actor.id;_context2.next = 14;break;case 8:

                userId = actor && actor.id;if (!(

                lent.userId || lent.email)) {_context2.next = 14;break;}_context2.next = 12;return (
                  _user3.default.getByIdOrEmailNotError(lent.userId, lent.email));case 12:user = _context2.sent;
                userId = user.id;case 14:



                if (lent.historic && actor && actor.profileType === _profileType2.default.ADMIN) {
                  historic = lent.historic;
                }

                totalQuantityLentUser = 0;
                moviesIdList = lent.movies.map(function (movie) {
                  totalQuantityLentUser += movie.quantityLent;
                  return movie.id;
                });_context2.next = 19;return (
                  _movie3.default.getAll({ idList: moviesIdList }));case 19:movies = _context2.sent;
                moviesToLent = [];
                moviesLentUser = [];

                movies.forEach(function (movie) {
                  var findMovieLent = lent.movies.find(function (movieLent) {return movieLent.id === movie.id;});

                  if (findMovieLent) {
                    var quantityLentUser = findMovieLent.quantityLent || 1;
                    var movieQuantityAvaible = movie.quantityAvaible - quantityLentUser;
                    var movieQuantityLent = movie.quantityLent + quantityLentUser;

                    if (movieQuantityAvaible < 0) {
                      throw new _business2.default(_business.LentCodeError.OUT_OF_STOCK);
                    }

                    totalPrice += movie.price * quantityLentUser;

                    moviesLentUser.push({
                      id: findMovieLent.id,
                      quantityLent: quantityLentUser,
                      moviePrice: movie.price });


                    moviesToLent.push({
                      id: findMovieLent.id,
                      quantityAvaible: movieQuantityAvaible,
                      quantityLent: movieQuantityLent,
                      moviePrice: movie.price });

                  }
                });_context2.next = 25;return (

                  Promise.all(moviesToLent.map(function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(movie) {var movieToSave;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                              movieToSave = {
                                quantityAvaible: movie.quantityAvaible,
                                quantityLent: movie.quantityLent };_context.next = 3;return (


                                _movie3.default.updateByIdSimple(movie.id, movieToSave, actor));case 3:case 'end':return _context.stop();}}}, _callee, _this);}));return function (_x3) {return _ref2.apply(this, arguments);};}())));case 25:_context2.next = 27;return (


                  _setting2.default.findAll(['devolutionTime', 'typeDevolutionTime']));case 27:_ref3 = _context2.sent;devolutionTime = _ref3.devolutionTime;typeDevolutionTime = _ref3.typeDevolutionTime;
                devolutionAt = (0, _momentTimezone2.default)((0, _momentTimezone2.default)().add(devolutionTime, typeDevolutionTime)).format();
                lentToCreate = {
                  userId: userId,

                  totalPrice: totalPrice,
                  totalQuantityLent: totalQuantityLentUser,
                  mulct: 0.00,
                  status: _lentStatus2.default.PENDING,
                  devolutionAt: devolutionAt,
                  historic: historic,

                  createBy: actor.id,
                  updateBy: actor.id };_context2.next = 34;return (

                  _lent2.default.create(lentToCreate));case 34:lentCreated = _context2.sent;
                movieLent = moviesLentUser.map(function (movie) {return {
                    movieId: movie.id,
                    lentId: lentCreated.id,
                    quantityLent: movie.quantityLent || 1,
                    quantityDevolution: 0,
                    moviePrice: movie.moviePrice };});_context2.next = 38;return (


                  _movieLent2.default.bulkInsert(movieLent));case 38:_context2.next = 40;return (

                  LentService.getById(lentCreated.id));case 40:response = _context2.sent;return _context2.abrupt('return',

                response);case 42:case 'end':return _context2.stop();}}}, _callee2, this);}));function create(_x, _x2) {return _ref.apply(this, arguments);}return create;}() }, { key: 'setDevolutionById', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(


      id, lent, actor) {var _this2 = this;var response, exist, userId, user, historic, quantityDevolution, moviesDevolution, moviesLent, mulctSum, mulct, status, lentToSave;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                response = null;_context5.next = 3;return (
                  LentService.getById(id, actor));case 3:exist = _context5.sent;
                userId = void 0;if (!(

                actor && actor.profileType !== _profileType2.default.ADMIN)) {_context5.next = 9;break;}
                userId = actor.id;_context5.next = 15;break;case 9:

                userId = actor && actor.id;if (!(

                lent.userId || lent.email)) {_context5.next = 15;break;}_context5.next = 13;return (
                  _user3.default.getByIdOrEmailNotError(lent.userId, lent.email));case 13:user = _context5.sent;
                userId = user.id;case 15:if (!(



                exist.status === _lentStatus2.default.COMPLETED)) {_context5.next = 17;break;}throw (
                  new _business2.default(_business.LentCodeError.LENT_IS_COMPLETED));case 17:if (!(


                exist.userId && exist.userId !== userId)) {_context5.next = 19;break;}throw (
                  new _business2.default(_business.LentCodeError.MOVIE_DEVOLUTION_MUST_MADE_BY_PERSON_RESPONSIBLE));case 19:


                historic = exist.historic;
                quantityDevolution = 0;
                moviesDevolution = [];
                moviesLent = [];
                mulctSum = 0;

                lent.movies.forEach(function (movieDevolution) {
                  exist.movieLent.forEach(function (movieLent) {
                    movieLent = (0, _utils.tryToJSON)(movieLent);
                    var findMovieToDevolution = movieDevolution.id === movieLent.movieId && movieLent;

                    if (findMovieToDevolution) {
                      var movieLentQuantityDevolution = movieLent.quantityDevolution + movieDevolution.quantityDevolution;
                      var movieLentQuantityLent = movieLent.quantityLent - movieDevolution.quantityDevolution;
                      var movieQuantityAvaible = findMovieToDevolution.movie.quantityAvaible + movieLentQuantityDevolution;
                      var movieQuantityLent = findMovieToDevolution.movie.quantityLent - movieLentQuantityDevolution;

                      if (movieQuantityAvaible > findMovieToDevolution.movie.quantityTotal) {
                        throw new _business2.default(_business.ValidationCodeError.INVALID_QUANTITY, 'quantityDevolution');
                      }

                      quantityDevolution += movieLentQuantityDevolution;

                      moviesDevolution.push({
                        id: movieLent.movieId,
                        quantityAvaible: movieQuantityAvaible,
                        quantityLent: movieQuantityLent });


                      moviesLent.push({
                        id: movieLent.id,
                        quantityLent: movieLentQuantityLent,
                        quantityDevolution: movieLentQuantityDevolution });


                      mulctSum += Number.parseFloat(movieLent.moviePrice) * movieDevolution.quantityDevolution;
                    } else {
                      quantityDevolution += movieLent.quantityDevolution;
                    }

                    if (findMovieToDevolution && movieDevolution.quantityDevolution !== movieLent.quantityLent) {
                      historic += '\n* ' + movieLent.quantityLent + ' ' + movieLent.movie.name + ' foi alugado ' + movieDevolution.quantityDevolution + ' foi entregue.';
                    } else if (!findMovieToDevolution && !movieLent.quantityDevolution) {
                      historic += '\n* ' + movieLent.quantityLent + ' ' + movieLent.movie.name + ' foi alugado ' + movieLent.quantityDevolution + ' foi entregue.';
                    }
                  });
                });if (!

                moviesDevolution.length) {_context5.next = 30;break;}_context5.next = 28;return (
                  Promise.all(moviesDevolution.map(function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(movie) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt('return', _movie3.default.updateByIdSimple(movie.id, movie, actor));case 1:case 'end':return _context3.stop();}}}, _callee3, _this2);}));return function (_x7) {return _ref5.apply(this, arguments);};}())));case 28:_context5.next = 30;return (
                  Promise.all(moviesLent.map(function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(movieLent) {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt('return', _movieLent2.default.updateById(movieLent.id, (0, _extends3.default)({}, movieLent, { updateBy: actor.id })));case 1:case 'end':return _context4.stop();}}}, _callee4, _this2);}));return function (_x8) {return _ref6.apply(this, arguments);};}())));case 30:_context5.next = 32;return (


                  LentService.getMulct(mulctSum, exist.devolutionAt));case 32:mulct = _context5.sent;
                status = exist.totalQuantityLent === quantityDevolution ? _lentStatus2.default.COMPLETED : undefined;

                if (mulct > 0) {
                  historic += '\n* Multa por atraso: ' + mulct;
                }

                lentToSave = (0, _extends3.default)({},
                status && { status: status }, {
                  historic: historic,
                  mulct: mulct,

                  updateBy: actor.id });_context5.next = 38;return (


                  _lent2.default.updateById(id, lentToSave));case 38:_context5.next = 40;return (

                  LentService.getById(id, actor));case 40:response = _context5.sent;return _context5.abrupt('return',

                response);case 42:case 'end':return _context5.stop();}}}, _callee5, this);}));function setDevolutionById(_x4, _x5, _x6) {return _ref4.apply(this, arguments);}return setDevolutionById;}() }, { key: 'getMulct', value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(


      price, devolutionAt) {var response, setting, mulctInPercent, timeForMulct, typeTimeForMulct, date, diffTime;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                response = 0;

                devolutionAt = (0, _momentTimezone2.default)(devolutionAt).format();
                price = parseFloat(price);_context6.next = 5;return (

                  _setting2.default.findAll(['mulctInPercent', 'typeTimeForMulct', 'timeForMulct']));case 5:setting = _context6.sent;
                mulctInPercent = Number.parseFloat(setting.mulctInPercent / 100);
                timeForMulct = Number.parseInt(setting.timeForMulct, 10);
                typeTimeForMulct = setting.typeTimeForMulct;
                date = (0, _momentTimezone2.default)().format();
                diffTime = parseInt(parseInt((0, _momentTimezone2.default)(date).diff(devolutionAt, typeTimeForMulct), 10) / timeForMulct, 10);

                response = diffTime >= 1 ? diffTime * (price * mulctInPercent) : 0;
                response = response.toFixed(2);return _context6.abrupt('return',

                response);case 14:case 'end':return _context6.stop();}}}, _callee6, this);}));function getMulct(_x9, _x10) {return _ref7.apply(this, arguments);}return getMulct;}() }, { key: 'getById', value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(


      id, actor) {var response, userId;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                response = null;
                userId = void 0;

                if (actor && actor.profileType === _profileType2.default.CLIENT) {
                  userId = actor.id;
                }_context7.next = 5;return (

                  _lent2.default.selectOne({
                    where: (0, _extends3.default)({
                      id: id,
                      deletedAt: null },
                    userId && { userId: userId }),

                    include: [{
                      model: _user.UserEntity,
                      as: 'user',
                      attributes: ['id', 'name'],
                      required: false },
                    {
                      model: _movieLent.MovieLentEntity,
                      as: 'movieLent',
                      attributes: ['id', 'movieId', 'quantityLent', 'quantityDevolution', 'moviePrice'],
                      required: true,
                      include: [{
                        model: _movie.MovieEntity,
                        as: 'movie',
                        attributes: ['id', 'quantityLent', 'quantityAvaible', 'quantityTotal', 'name', 'genre', 'director', 'price'],
                        required: true }] }] }));case 5:response = _context7.sent;if (




                response) {_context7.next = 8;break;}throw (
                  new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'lent'));case 8:return _context7.abrupt('return',


                response);case 9:case 'end':return _context7.stop();}}}, _callee7, this);}));function getById(_x11, _x12) {return _ref8.apply(this, arguments);}return getById;}() }, { key: 'getAllWithPagination', value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(


      searchParameter, actor) {var response, _getAllFilter, whereLent, whereUser, userRequired;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                response = null;_getAllFilter =
                (0, _lent3.getAllFilter)(searchParameter, actor), whereLent = _getAllFilter.whereLent, whereUser = _getAllFilter.whereUser;
                userRequired = Object.values(whereUser).length > 1;_context8.next = 5;return (

                  _lent2.default.selectWithPagination({
                    where: whereLent,
                    offset: searchParameter.offset,
                    limit: searchParameter.limit,
                    order: [(0, _utils.serviceOrderHelper)(searchParameter)],
                    include: [{
                      model: _movieLent.MovieLentEntity,
                      as: 'movieLent',
                      attributes: ['id', 'quantityLent', 'quantityDevolution', 'moviePrice'],
                      include: [{
                        model: _movie.MovieEntity,
                        as: 'movie',
                        attributes: ['id', 'name', 'genre', 'director', 'price'] }] },

                    {
                      model: _user.UserEntity,
                      as: 'user',
                      attributes: ['id', 'name'],
                      where: whereUser,
                      required: userRequired }] }));case 5:response = _context8.sent;return _context8.abrupt('return',



                response);case 7:case 'end':return _context8.stop();}}}, _callee8, this);}));function getAllWithPagination(_x13, _x14) {return _ref9.apply(this, arguments);}return getAllWithPagination;}() }]);return LentService;}();exports.default = LentService;