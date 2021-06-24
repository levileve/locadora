'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (sequelize, type) {
  var Setting = sequelize.define('Setting',
  {
    id: {
      type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4 },


    key: { type: type.STRING, field: 'str_key' },
    value: { type: type.STRING, field: 'str_value' },

    createBy: { type: type.STRING, field: 'str_create_by' },
    updateBy: { type: type.STRING, field: 'str_update_by' },
    createdAt: { type: type.DATE, field: 'dt_created_at' },
    updatedAt: { type: type.DATE, field: 'dt_updated_at' },
    deletedAt: { type: type.DATE, field: 'dt_deleted_at' } },

  {
    tableName: 'tb_setting',
    freezeTableName: true,
    timestamps: true,

    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt' });


  return Setting;
};