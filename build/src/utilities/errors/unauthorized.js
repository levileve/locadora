'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _extendableError = require('./extendable-error');var _extendableError2 = _interopRequireDefault(_extendableError);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

UnauthorizedError = function (_ExtendableError) {(0, _inherits3.default)(UnauthorizedError, _ExtendableError);
  function UnauthorizedError() {(0, _classCallCheck3.default)(this, UnauthorizedError);return (0, _possibleConstructorReturn3.default)(this, (UnauthorizedError.__proto__ || Object.getPrototypeOf(UnauthorizedError)).call(this,
    'UnauthorizedError'));
  }return UnauthorizedError;}(_extendableError2.default);exports.default = UnauthorizedError;