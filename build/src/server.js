'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _compression = require('compression');var _compression2 = _interopRequireDefault(_compression);
var _methodOverride = require('method-override');var _methodOverride2 = _interopRequireDefault(_methodOverride);
var _cors = require('cors');var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet');var _helmet2 = _interopRequireDefault(_helmet);
var _httpStatus = require('http-status');var _httpStatus2 = _interopRequireDefault(_httpStatus);
require('express-async-errors');

var _index = require('./routes/controllers/index');var _index2 = _interopRequireDefault(_index);
var _errorHandler = require('./routes/middlewares/error-handler');var _errorHandler2 = _interopRequireDefault(_errorHandler);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true }));


app.use((0, _compression2.default)());
app.use((0, _methodOverride2.default)());

// secure apps by setting various HTTP headers
app.use((0, _helmet2.default)());

// enable CORS - Cross Origin Resource Sharing
app.use((0, _cors2.default)());

// mount all routes on /api path
app.use('/api', _index2.default);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(_httpStatus2.default.NOT_FOUND).json();
});

// Handle 500
// do not remove next from line bellow, error handle will not work
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  (0, _errorHandler2.default)(err, req, res);
});exports.default =

app;