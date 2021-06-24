'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _uuid = require('uuid');var _uuid2 = _interopRequireDefault(_uuid);
var _md = require('md5');var _md2 = _interopRequireDefault(_md);
var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _sequelize = require('sequelize');
var _user = require('../db/repositories/user');var _user2 = _interopRequireDefault(_user);
var _utils = require('../utilities/utils');
var _business = require('../utilities/errors/business');var _business2 = _interopRequireDefault(_business);
var _user3 = require('./filters/user');
var _constants = require('../utilities/constants');var _constants2 = _interopRequireDefault(_constants);
var _jwt = require('./jwt');var _jwt2 = _interopRequireDefault(_jwt);
var _profileType = require('../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

UserService = function () {function UserService() {(0, _classCallCheck3.default)(this, UserService);}(0, _createClass3.default)(UserService, null, [{ key: 'create', value: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(
            user, actor) {var response, userToCreate, userCreated, _JwtService$createTok, token, refreshToken;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                                response = {};
                                user = (0, _extends3.default)({}, user, { id: _uuid2.default.v4() });

                                actor = actor || user;_context.next = 5;return (

                                    UserService.checkExist(user));case 5:

                                userToCreate = {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    password: (0, _md2.default)(user.password + _constants2.default.token.secret),
                                    profileType: user.profileType,

                                    updateBy: actor.id,
                                    createBy: actor.id };_context.next = 8;return (

                                    _user2.default.create(userToCreate));case 8:userCreated = _context.sent;_context.next = 11;return (

                                    UserService.getById(userCreated.id, actor));case 11:response = _context.sent;_JwtService$createTok =

                                _jwt2.default.createTokenAndRefresh(response.id), token = _JwtService$createTok.token, refreshToken = _JwtService$createTok.refreshToken;

                                response = (0, _extends3.default)({}, response.toJSON(), { token: token, refreshToken: refreshToken });return _context.abrupt('return',

                                response);case 15:case 'end':return _context.stop();}}}, _callee, this);}));function create(_x, _x2) {return _ref.apply(this, arguments);}return create;}() }, { key: 'login', value: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(


            user) {var response, _user$authorization$s, _user$authorization$s2, hash, _Buffer$from$toString, _Buffer$from$toString2, email, password, _JwtService$createTok2, token, refreshToken;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                                response = {};_user$authorization$s =
                                user.authorization.split(' '), _user$authorization$s2 = (0, _slicedToArray3.default)(_user$authorization$s, 2), hash = _user$authorization$s2[1];_Buffer$from$toString =
                                Buffer.from(hash, 'base64').toString().split(':'), _Buffer$from$toString2 = (0, _slicedToArray3.default)(_Buffer$from$toString, 2), email = _Buffer$from$toString2[0], password = _Buffer$from$toString2[1];_context2.next = 5;return (

                                    _user2.default.selectOne({ where: { password: (0, _md2.default)(password + _constants2.default.token.secret), email: email, deletedAt: null } }));case 5:response = _context2.sent;if (

                                response) {_context2.next = 8;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'user');case 8:_JwtService$createTok2 =

                                _jwt2.default.createTokenAndRefresh(response.id), token = _JwtService$createTok2.token, refreshToken = _JwtService$createTok2.refreshToken;

                                response = (0, _extends3.default)({}, response.toJSON(), { token: token, refreshToken: refreshToken });return _context2.abrupt('return',

                                response);case 11:case 'end':return _context2.stop();}}}, _callee2, this);}));function login(_x3) {return _ref2.apply(this, arguments);}return login;}() }, { key: 'refreshToken', value: function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(


            userId) {var response, _JwtService$createTok3, token, refreshToken;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                                response = {};_context3.next = 3;return (

                                    _user2.default.selectOne({ where: { id: userId, deletedAt: null } }));case 3:response = _context3.sent;if (

                                response) {_context3.next = 6;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'user');case 6:_JwtService$createTok3 =

                                _jwt2.default.createTokenAndRefresh(response.id), token = _JwtService$createTok3.token, refreshToken = _JwtService$createTok3.refreshToken;

                                response = { token: token, refreshToken: refreshToken };return _context3.abrupt('return',

                                response);case 9:case 'end':return _context3.stop();}}}, _callee3, this);}));function refreshToken(_x4) {return _ref3.apply(this, arguments);}return refreshToken;}() }, { key: 'updateById', value: function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(


            id, user, actor) {var response, transaction, oldPassword, userToTest, userToSave;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                                response = {};
                                transaction = void 0;
                                oldPassword = user.oldPassword && (0, _md2.default)(user.oldPassword + _constants2.default.token.secret);if (!

                                oldPassword) {_context4.next = 10;break;}if (!(
                                actor.profileType !== _profileType2.default.ADMIN)) {_context4.next = 10;break;}_context4.next = 7;return (
                                    UserService.getSimpleWithPassword(id));case 7:userToTest = _context4.sent;if (!(

                                userToTest.password !== oldPassword)) {_context4.next = 10;break;}throw (
                                    new _business2.default(_business.UserCodeError.INVALID_OLD_PASSWORD));case 10:




                                userToSave = {
                                    name: user.name,
                                    profileType: user.profileType,
                                    password: user.password && (0, _md2.default)(user.password + _constants2.default.token.secret),

                                    updateBy: actor.id };_context4.next = 13;return (


                                    _user2.default.updateById(id, userToSave, { transaction: transaction }));case 13:_context4.next = 15;return (

                                    UserService.getById(id, actor));case 15:response = _context4.sent;return _context4.abrupt('return',

                                response);case 17:case 'end':return _context4.stop();}}}, _callee4, this);}));function updateById(_x5, _x6, _x7) {return _ref4.apply(this, arguments);}return updateById;}() }, { key: 'checkExist', value: function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(


            user) {var _where;var or, exist, emailExist;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                                or = [];

                                if (user.email) {
                                    or.push({ email: user.email });
                                }_context5.next = 4;return (

                                    _user2.default.selectOne({ where: (_where = {}, (0, _defineProperty3.default)(_where, _sequelize.Op.or, or), (0, _defineProperty3.default)(_where, 'deletedAt', null), _where) }));case 4:exist = _context5.sent;
                                emailExist = exist && user.email === exist.email;if (!

                                emailExist) {_context5.next = 8;break;}throw (
                                    new _business2.default(_business.ValidationCodeError.ENTITY_ALREADY_EXISTS, 'email'));case 8:case 'end':return _context5.stop();}}}, _callee5, this);}));function checkExist(_x8) {return _ref5.apply(this, arguments);}return checkExist;}() }, { key: 'getByIdOrEmailNotError', value: function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(



            id, email) {var response;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                                response = null;_context6.next = 3;return (

                                    _user2.default.selectOne({ where: (0, _extends3.default)({}, id && { id: id }, email && { email: email }, { deletedAt: null }) }));case 3:response = _context6.sent;return _context6.abrupt('return',

                                response);case 5:case 'end':return _context6.stop();}}}, _callee6, this);}));function getByIdOrEmailNotError(_x9, _x10) {return _ref6.apply(this, arguments);}return getByIdOrEmailNotError;}() }, { key: 'getSimpleById', value: function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(


            id) {var response;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                                    _user2.default.selectOne({ where: { id: id, deletedAt: null } }));case 2:response = _context7.sent;if (

                                response) {_context7.next = 5;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'user');case 5:return _context7.abrupt('return',

                                response);case 6:case 'end':return _context7.stop();}}}, _callee7, this);}));function getSimpleById(_x11) {return _ref7.apply(this, arguments);}return getSimpleById;}() }, { key: 'getSimpleWithPassword', value: function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(


            id) {var response;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.next = 2;return (
                                    _user2.default.selectOneWithPassword({ where: { id: id, deletedAt: null } }));case 2:response = _context8.sent;if (

                                response) {_context8.next = 5;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'user');case 5:return _context8.abrupt('return',

                                response);case 6:case 'end':return _context8.stop();}}}, _callee8, this);}));function getSimpleWithPassword(_x12) {return _ref8.apply(this, arguments);}return getSimpleWithPassword;}() }, { key: 'getById', value: function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(


            id, actor) {var response;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                                response = null;if (!

                                actor) {_context9.next = 4;break;}_context9.next = 4;return (
                                    _user2.default.updateById(actor.id, {
                                        lastAccessAt: (0, _momentTimezone2.default)().toDate(),
                                        updateBy: actor.id },
                                    {
                                        where: { id: id, deletedAt: null } }));case 4:_context9.next = 6;return (



                                    _user2.default.selectOne({
                                        where: { id: id, deletedAt: null } }));case 6:response = _context9.sent;if (


                                response) {_context9.next = 9;break;}throw new _business2.default(_business.ValidationCodeError.ENTITY_NOT_FOUND, 'user');case 9:return _context9.abrupt('return',

                                response);case 10:case 'end':return _context9.stop();}}}, _callee9, this);}));function getById(_x13, _x14) {return _ref9.apply(this, arguments);}return getById;}() }, { key: 'getAllWithPagination', value: function () {var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(


            searchParameter) {var _getAllFilter, where;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_getAllFilter =
                                (0, _user3.getAllFilter)(searchParameter), where = _getAllFilter.where;return _context10.abrupt('return',

                                _user2.default.selectWithPagination({
                                    where: where,
                                    offset: searchParameter.offset,
                                    limit: searchParameter.limit,
                                    order: [(0, _utils.serviceOrderHelper)(searchParameter)] }));case 2:case 'end':return _context10.stop();}}}, _callee10, this);}));function getAllWithPagination(_x15) {return _ref10.apply(this, arguments);}return getAllWithPagination;}() }, { key: 'deleteById', value: function () {var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(



            id, actor) {return _regenerator2.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:_context11.next = 2;return (
                                    UserService.getSimpleById(id));case 2:_context11.next = 4;return (
                                    _user2.default.deleteById(id, actor.id));case 4:case 'end':return _context11.stop();}}}, _callee11, this);}));function deleteById(_x16, _x17) {return _ref11.apply(this, arguments);}return deleteById;}() }]);return UserService;}();exports.default = UserService;