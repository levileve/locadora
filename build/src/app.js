'use strict';require('./setup');
require('./db/database');
var _server = require('./server');var _server2 = _interopRequireDefault(_server);
var _constants = require('./utilities/constants');var _constants2 = _interopRequireDefault(_constants);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_server2.default.listen(_constants2.default.port);

// eslint-disable-next-line no-console
console.log('Server listening on port: ' + _constants2.default.port);