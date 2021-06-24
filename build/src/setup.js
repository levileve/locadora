'use strict';var _momentTimezone = require('moment-timezone');var _momentTimezone2 = _interopRequireDefault(_momentTimezone);
var _constants = require('./utilities/constants');var _constants2 = _interopRequireDefault(_constants);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_momentTimezone2.default.tz.setDefault(_constants2.default.timezone);
_momentTimezone2.default.locale(_constants2.default.language);