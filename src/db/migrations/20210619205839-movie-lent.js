export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_movie_lent', {
      id: { type: Sequelize.UUID, primaryKey: true },

      id_movie: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_movie',
          key: 'id',
        },
      },
      id_lent: {
        type: Sequelize.UUID,
        references: {
          model: 'tb_lent',
          key: 'id',
        },
      },

      int_quantity_lent: { type: Sequelize.INTEGER },
      int_quantity_devolution: { type: Sequelize.INTEGER },
      dec_movie_price: { type: Sequelize.DECIMAL },

      str_create_by: { type: Sequelize.STRING },
      str_update_by: { type: Sequelize.STRING },
      dt_created_at: { type: Sequelize.DATE },
      dt_updated_at: { type: Sequelize.DATE },
      dt_deleted_at: { type: Sequelize.DATE },
    });

    await queryInterface.addIndex('tb_movie_lent', ['id_lent']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('tb_movie_lent', ['id_lent']);

    await queryInterface.dropTable('tb_movie_lent');
  },
};
