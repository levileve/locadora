import ProfileType from '../../enumerators/profile-type';

export default {
  up: async (queryInterface) => {
    const exist = await queryInterface.rawSelect('tb_user', {
      where: {
        int_profile_type: ProfileType.ADMIN,
        dt_deleted_at: null,
      },
    }, ['id']);

    if (exist) { return; }

    await queryInterface.bulkInsert('tb_user',
      [
        {
          id: 'a756d35a-0c10-4708-a4b2-66d22bf80dac',
          str_name: 'ADM',
          str_email: 'adm@user.com',
          str_password: '481f50546e15de22e289b4ac449bc792',
          int_profile_type: ProfileType.ADMIN,
        },
      ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tb_user', { id: 'a756d35a-0c10-4708-a4b2-66d22bf80dac' }, {});
  },
};
