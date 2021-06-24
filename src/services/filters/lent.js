import moment from 'moment-timezone';
import { Op } from 'sequelize';
import ProfileType from '../../enumerators/profile-type';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (searchParameter, actor, includeDeleted = false) => {
  const whereLent = {};
  const whereUser = {};

  if (!includeDeleted) {
    whereLent.deletedAt = null;
  }

  // -=-=-=- Lent Where -=-=-=-

  if (searchParameter.status) {
    whereLent.status = searchParameter.status;
  }


  if (actor && actor.profileType === ProfileType.CLIENT) {
    whereLent.userId = actor.id;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.createdAt) {
    whereLent.createdAt = {
      ...(searchParameter.createdAt.startAt && {
        [Op.gte]: (searchParameter.createdAt.startAt && moment(searchParameter.createdAt.startAt).isValid())
          && moment(searchParameter.createdAt.startAt).format('YYYY-MM-DD'),
      }),
      ...(searchParameter.createdAt.endAt && {
        [Op.lte]: (searchParameter.createdAt.endAt && moment(searchParameter.createdAt.endAt).isValid())
          && moment(searchParameter.createdAt.endAt).format('YYYY-MM-DD'),
      }),
    };
  }

  return { whereLent, whereUser };
};
