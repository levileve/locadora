'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);exports.default =



canManageUser;var _profileType = require('../../enumerators/profile-type');var _profileType2 = _interopRequireDefault(_profileType);var _errorHandler = require('./error-handler');var _errorHandler2 = _interopRequireDefault(_errorHandler);var _forbidden = require('../../utilities/errors/forbidden');var _forbidden2 = _interopRequireDefault(_forbidden);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function canManageUser() {var _this = this;
  return function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.t0 =


              req.user.profileType;_context.next = _context.t0 ===

              _profileType2.default.CLIENT ? 4 : 7;break;case 4:if (!(
              req.params.id !== req.user.id || req.body.profileType)) {_context.next = 6;break;}throw (
                new _forbidden2.default());case 6:return _context.abrupt('break', 8);case 7:return _context.abrupt('break', 8);case 8:return _context.abrupt('return',









              next());case 11:_context.prev = 11;_context.t1 = _context['catch'](0);return _context.abrupt('return',

              (0, _errorHandler2.default)(_context.t1, req, res));case 14:case 'end':return _context.stop();}}}, _callee, _this, [[0, 11]]);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();


}