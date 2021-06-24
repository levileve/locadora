export default (sequelize, type) => {
  const Lent = sequelize.define('Lent',
    {
      id: {
        type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
      },

      userId: { type: type.UUID, field: 'id_user' },

      totalQuantityLent: { type: type.INTEGER, field: 'int_total_quantity_lent' },
      status: { type: type.INTEGER, field: 'int_status' },
      totalPrice: { type: type.DECIMAL, field: 'dec_total_price' },
      mulct: { type: type.DECIMAL, field: 'dec_mulct' },
      devolutionAt: { type: type.DATE, field: 'dt_devolution_at' },
      historic: { type: type.TEXT, field: 'txt_historic' },

      createBy: { type: type.STRING, field: 'str_create_by' },
      updateBy: { type: type.STRING, field: 'str_update_by' },
      createdAt: { type: type.DATE, field: 'dt_created_at' },
      updatedAt: { type: type.DATE, field: 'dt_updated_at' },
      deletedAt: { type: type.DATE, field: 'dt_deleted_at' },
    },
    {
      tableName: 'tb_lent',
      freezeTableName: true,
      timestamps: true,

      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deletedAt',
    });

  Lent.associate = (models) => {

    Lent.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });

    Lent.hasMany(models.MovieLent, {
      as: 'movieLent',
      foreignKey: 'lentId',
    });

  };

  return Lent;
};
