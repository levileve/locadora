export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_setting', {
      id: { type: Sequelize.UUID, primaryKey: true },

      str_key: { type: Sequelize.STRING, unique: true },
      str_value: { type: Sequelize.STRING },

      str_create_by: { type: Sequelize.STRING },
      str_update_by: { type: Sequelize.STRING },
      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
      dt_deleted_at: { type: Sequelize.DATE },
    });

    await queryInterface.addIndex('tb_setting', ['str_key']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('tb_setting', ['str_key']);
    await queryInterface.dropTable('tb_setting');
  },
};
