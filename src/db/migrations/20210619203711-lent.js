export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_lent', {
      id: { type: Sequelize.UUID, primaryKey: true },

      id_user: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_user',
          key: 'id',
        },
      },

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
      dt_deleted_at: { type: Sequelize.DATE },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('tb_lent');
  },
};
