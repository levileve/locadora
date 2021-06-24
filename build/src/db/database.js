'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _sequelize = require('sequelize');var _sequelize2 = _interopRequireDefault(_sequelize);
var _constants = require('../utilities/constants');var _constants2 = _interopRequireDefault(_constants);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var sequelize = new _sequelize2.default(
_constants2.default.database.name,
_constants2.default.database.user,
_constants2.default.database.password, {
  logging: false,
  host: _constants2.default.database.host,
  dialect: 'postgres',
  pool: {
    max: 50,
    min: 0,
    acquire: 10000,
    idle: 20000 },

  timezone: _constants2.default.timezone,
  dialectOptions: {
    ssl: true },

  tls: {
    rejectUnauthorized: false } });



var db = {
  sequelize: sequelize,
  Sequelize: _sequelize2.default,
  models: {} };

var dir = _path2.default.join(__dirname, 'models');

_fs2.default.readdirSync(dir).forEach(function (file) {
  var modelDir = _path2.default.join(dir, file);

  try {
    var model = sequelize.import(modelDir);

    db.models[model.name] = model;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    throw err;
  }
});

Object.keys(db.models).forEach(function (modelName) {
  try {
    if (db.models[modelName].associate) {
      db.models[modelName].associate(db.models);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    throw err;
  }
});

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

            db.sequelize.authenticate());case 3:
          // eslint-disable-next-line no-console
          console.log('Database connection has been established successfully.');_context.next = 9;break;case 6:_context.prev = 6;_context.t0 = _context['catch'](0);

          // eslint-disable-next-line no-console
          console.log('Unable to connect to the database: ' + _context.t0);case 9:case 'end':return _context.stop();}}}, _callee, undefined, [[0, 6]]);}))();exports.default =



db;