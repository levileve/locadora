'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = {
  up: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryInterface) {var exist;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                queryInterface.rawSelect('tb_setting', {
                  where: {
                    str_key: 'devolutionTime',
                    dt_deleted_at: null } },

                ['id']));case 2:exist = _context.sent;if (!

              exist) {_context.next = 5;break;}return _context.abrupt('return');case 5:_context.next = 7;return (

                queryInterface.bulkInsert('tb_setting',
                [
                {
                  id: '8a51cd8b-06e5-42a8-9ccc-95ffe3207d5a',
                  str_key: 'devolutionTime',
                  str_value: '1' }],

                {}));case 7:case 'end':return _context.stop();}}}, _callee, undefined);}));function up(_x) {return _ref.apply(this, arguments);}return up;}(),


  down: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(queryInterface) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                queryInterface.bulkDelete('tb_setting', { id: '8a51cd8b-06e5-42a8-9ccc-95ffe3207d5a' }, {}));case 2:case 'end':return _context2.stop();}}}, _callee2, undefined);}));function down(_x2) {return _ref2.apply(this, arguments);}return down;}() };