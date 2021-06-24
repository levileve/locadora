export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_setting', {
      where: {
        str_key: 'mulctInPercent',
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_setting',
      [
        {
          id: '17ebed61-67cc-4ea5-a84f-04a701ba0e56',
          str_key: 'mulctInPercent',
          str_value: '10',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_setting', { id: '17ebed61-67cc-4ea5-a84f-04a701ba0e56' }, {});
  },
};
