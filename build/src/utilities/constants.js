'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _dotenv = require('dotenv');var dotenv = _interopRequireWildcard(_dotenv);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

dotenv.config();var

Constants = function Constants() {(0, _classCallCheck3.default)(this, Constants);};Object.defineProperty(Constants, 'env', { enumerable: true, writable: true, value:
  process.env.NODE_ENV });Object.defineProperty(Constants, 'port', { enumerable: true, writable: true, value:

  process.env.PORT });Object.defineProperty(Constants, 'database', { enumerable: true, writable: true, value:

  {
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD } });Object.defineProperty(Constants, 'token', { enumerable: true, writable: true, value:


  {
    secret: process.env.SECRET,
    expirationToken: process.env.EXPIRATION_TOKEN,
    expirationRefreshToken: process.env.EXPIRATION_REFRESH_TOKEN } });Object.defineProperty(Constants, 'timezone', { enumerable: true, writable: true, value:


  process.env.TIMEZONE });Object.defineProperty(Constants, 'language', { enumerable: true, writable: true, value:

  process.env.LANGUAGE });Object.defineProperty(Constants, 'fileSizeLimit', { enumerable: true, writable: true, value:

  5242880 });exports.default = Constants;