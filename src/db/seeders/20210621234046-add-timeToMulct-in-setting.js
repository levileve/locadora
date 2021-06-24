export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_setting', {
      where: {
        str_key: 'timeForMulct',
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_setting',
      [
        {
          id: '9e712b73-b6fb-49b6-ba50-13a353b98759',
          str_key: 'timeForMulct',
          str_value: '10',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_setting', { id: '9e712b73-b6fb-49b6-ba50-13a353b98759' }, {});
  },
};
