export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_setting', {
      where: {
        str_key: 'typeDevolutionTime',
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_setting',
      [
        {
          id: '5ddc22c0-3b27-4175-82ea-28da6910a1a6',
          str_key: 'typeDevolutionTime',
          str_value: 'minute',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_setting', { id: '5ddc22c0-3b27-4175-82ea-28da6910a1a6' }, {});
  },
};
