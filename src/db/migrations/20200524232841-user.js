export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_user', {
      id: { type: Sequelize.UUID, primaryKey: true },

      str_name: { type: Sequelize.STRING },
      str_email: { type: Sequelize.STRING },
      str_password: { type: Sequelize.STRING },

      int_profile_type: { type: Sequelize.INTEGER },

      dt_last_access_at: { type: Sequelize.DATE },

      str_create_by: { type: Sequelize.STRING },
      str_update_by: { type: Sequelize.STRING },
      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
      dt_deleted_at: { type: Sequelize.DATE },
    });

    await queryInterface.addIndex('tb_user', ['str_email']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('tb_user', ['str_email']);

    await queryInterface.dropTable('tb_user');
  },
};
