export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_setting', {
      where: {
        str_key: 'devolutionTime',
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_setting',
      [
        {
          id: '8a51cd8b-06e5-42a8-9ccc-95ffe3207d5a',
          str_key: 'devolutionTime',
          str_value: '1',
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_setting', { id: '8a51cd8b-06e5-42a8-9ccc-95ffe3207d5a' }, {});
  },
};
