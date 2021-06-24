'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (sequelize, type) {
  var Movie = sequelize.define('Movie',
  {
    id: {
      type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4 },


    name: { type: type.STRING, field: 'str_name' },
    genre: { type: type.INTEGER, field: 'int_genre' },
    director: { type: type.STRING, field: 'str_director' },

    price: { type: type.DECIMAL, field: 'dec_price' },

    quantityTotal: { type: type.INTEGER, field: 'int_quantity_total' },
    quantityAvaible: { type: type.INTEGER, field: 'int_quantity_avaible' },
    quantityLent: { type: type.INTEGER, field: 'int_quantity_lent' },

    createBy: { type: type.STRING, field: 'str_create_by' },
    updateBy: { type: type.STRING, field: 'str_update_by' },
    createdAt: { type: type.DATE, field: 'dt_created_at' },
    updatedAt: { type: type.DATE, field: 'dt_updated_at' },
    deletedAt: { type: type.DATE, field: 'dt_deleted_at' } },

  {
    tableName: 'tb_movie',
    freezeTableName: true,
    timestamps: true,

    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt' });


  return Movie;
};