'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = _express2.default.Router();

router.use('/user', require('./user').default);
router.use('/movie', require('./movie').default);
router.use('/lent', require('./lent').default);
router.use('/setting', require('./setting').default);exports.default =

router;