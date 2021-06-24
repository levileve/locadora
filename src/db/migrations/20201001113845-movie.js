export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_movie', {
      id: { type: Sequelize.UUID, primaryKey: true },

      str_name: { type: Sequelize.STRING },
      int_genre: { type: Sequelize.INTEGER },
      str_director: { type: Sequelize.STRING },

      dec_price: { type: Sequelize.DECIMAL },

      int_quantity_total: { type: Sequelize.INTEGER },
      int_quantity_avaible: { type: Sequelize.INTEGER },
      int_quantity_lent: { type: Sequelize.INTEGER },

      str_create_by: { type: Sequelize.STRING },
      str_update_by: { type: Sequelize.STRING },
      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
      dt_deleted_at: { type: Sequelize.DATE },
    });

    await queryInterface.addIndex('tb_movie', ['int_genre']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('tb_movie', ['int_genre']);

    await queryInterface.dropTable('tb_movie');
  },
};
