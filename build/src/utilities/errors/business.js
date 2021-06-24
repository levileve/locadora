'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.LentCodeError = exports.UserCodeError = exports.ValidationCodeError = undefined;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _extendableError = require('./extendable-error');var _extendableError2 = _interopRequireDefault(_extendableError);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

BusinessError = function (_ExtendableError) {(0, _inherits3.default)(BusinessError, _ExtendableError);
  function BusinessError(code, options) {(0, _classCallCheck3.default)(this, BusinessError);var _this = (0, _possibleConstructorReturn3.default)(this, (BusinessError.__proto__ || Object.getPrototypeOf(BusinessError)).call(this));

    _this.code = code;
    _this.options = options;return _this;
  }return BusinessError;}(_extendableError2.default);exports.default = BusinessError;


var ValidationCodeError = exports.ValidationCodeError = {
  INVALID_ID: 'invalid_id',
  INVALID_PARAMS: 'invalid_params',
  ENTITY_NOT_FOUND: 'entity_not_found',
  ENTITY_ALREADY_EXISTS: 'entity_already_exists',
  INVALID_QUANTITY: 'invalid_quantity' };


var UserCodeError = exports.UserCodeError = {
  INVALID_OLD_PASSWORD: 'invalid_old_password' };


var LentCodeError = exports.LentCodeError = {
  MOVIE_DEVOLUTION_MUST_MADE_BY_PERSON_RESPONSIBLE: 'movie_devolution_must_made_by_person_responsible',
  LENT_IS_COMPLETED: 'lent_is_completed',
  OUT_OF_STOCK: 'out_of_stock' };