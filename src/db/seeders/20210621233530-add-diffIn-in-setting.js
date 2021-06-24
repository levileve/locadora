export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_setting', {
      where: {
        str_key: 'typeTimeForMulct',
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_setting',
      [
        {
          id: '08a111f2-7a46-4ca9-a8bf-dc0df5e8df8a',
          str_key: 'typeTimeForMulct',
          str_value: 'seconds',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_setting', { id: '08a111f2-7a46-4ca9-a8bf-dc0df5e8df8a' }, {});
  },
};
