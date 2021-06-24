export default (sequelize, type) => {
  const User = sequelize.define('User',
    {
      id: {
        type: type.UUID, primaryKey: true, field: 'id', defaultValue: type.UUIDV4,
      },

      name: { type: type.STRING, field: 'str_name' },
      email: { type: type.STRING, field: 'str_email' },
      password: { type: type.STRING, field: 'str_password' },

      profileType: { type: type.INTEGER, field: 'int_profile_type' },

      lastAccessAt: { type: type.DATE, field: 'dt_last_access_at' },

      createBy: { type: type.STRING, field: 'str_create_by' },
      updateBy: { type: type.STRING, field: 'str_update_by' },
      createdAt: { type: type.DATE, field: 'dt_created_at' },
      updatedAt: { type: type.DATE, field: 'dt_updated_at' },
      deletedAt: { type: type.DATE, field: 'dt_deleted_at' },
    },
    {
      tableName: 'tb_user',
      freezeTableName: true,
      timestamps: true,

      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      deletedAt: 'deletedAt',
    });

  User.associate = (models) => {

    User.hasMany(models.Lent, {
      as: 'lent',
      foreignKey: 'userId',
    });

  };

  return User;
};
