'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = {
  up: function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryInterface, Sequelize) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                queryInterface.createTable('tb_lent', {
                  id: { type: Sequelize.UUID, primaryKey: true },

                  id_user: {
                    type: Sequelize.UUID,
                    references: {
                      model: 'tb_user',
                      key: 'id' } },



                  int_status: { type: Sequelize.INTEGER },
                  int_total_quantity_lent: { type: Sequelize.INTEGER },
                  dec_total_price: { type: Sequelize.DECIMAL },
                  dec_mulct: { type: Sequelize.DECIMAL },
                  dt_devolution_at: { type: Sequelize.DATE },
                  txt_historic: { type: Sequelize.TEXT },

                  str_create_by: { type: Sequelize.STRING },
                  str_update_by: { type: Sequelize.STRING },
                  dt_created_at: { type: Sequelize.DATE },
                  dt_updated_at: { type: Sequelize.DATE },
                  dt_deleted_at: { type: Sequelize.DATE } }));case 2:case 'end':return _context.stop();}}}, _callee, undefined);}));function up(_x, _x2) {return _ref.apply(this, arguments);}return up;}(),



  down: function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(queryInterface) {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                queryInterface.dropTable('tb_lent'));case 2:case 'end':return _context2.stop();}}}, _callee2, undefined);}));function down(_x3) {return _ref2.apply(this, arguments);}return down;}() };