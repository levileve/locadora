'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default = function (sequelize, type) {
  var MovieLent = sequelize.define('MovieLent',
  {
    id: {
      type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4 },


    movieId: { type: type.UUID, field: 'id_movie' },
    lentId: { type: type.UUID, field: 'id_lent' },

    quantityLent: { type: type.INTEGER, field: 'int_quantity_lent' },
    quantityDevolution: { type: type.INTEGER, field: 'int_quantity_devolution' },
    moviePrice: { type: type.DECIMAL, field: 'dec_movie_price' },

    createBy: { type: type.STRING, field: 'str_create_by' },
    updateBy: { type: type.STRING, field: 'str_update_by' },
    createdAt: { type: type.DATE, field: 'dt_created_at' },
    updatedAt: { type: type.DATE, field: 'dt_updated_at' },
    deletedAt: { type: type.DATE, field: 'dt_deleted_at' } },

  {
    tableName: 'tb_movie_lent',
    freezeTableName: true,
    timestamps: true,

    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt' });


  MovieLent.associate = function (models) {

    MovieLent.belongsTo(models.Lent, {
      as: 'lent',
      foreignKey: 'lentId' });


    MovieLent.belongsTo(models.Movie, {
      as: 'movie',
      foreignKey: 'movieId' });


  };

  return MovieLent;
};