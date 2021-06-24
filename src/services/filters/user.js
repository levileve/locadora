import moment from 'moment-timezone';
import { Op } from 'sequelize';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (searchParameter, includeDeleted = false) => {
  const where = {};

  if (!includeDeleted) {
    where.deletedAt = null;
  }

  // -=-=-=- User Where -=-=-=-

  if (searchParameter.name) {
    where.name = { [Op.iLike]: `%${searchParameter.name}%` };
  }

  if (searchParameter.email) {
    where.email = { [Op.iLike]: `%${searchParameter.email}%` };
  }

  if (searchParameter.profileType) {
    where.profileType = searchParameter.profileType;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.lastAccessAt) {
    where.lastAccessAt = {
      ...(searchParameter.lastAccessAt.startAt && {
        [Op.gte]: (searchParameter.lastAccessAt.startAt && moment(searchParameter.lastAccessAt.startAt).isValid())
          && moment(searchParameter.lastAccessAt.startAt).format('YYYY-MM-DD'),
      }),
      ...(searchParameter.lastAccessAt.endAt && {
        [Op.lte]: (searchParameter.lastAccessAt.endAt && moment(searchParameter.lastAccessAt.endAt).isValid())
          && moment(searchParameter.lastAccessAt.endAt).format('YYYY-MM-DD'),
      }),
    };
  }

  if (searchParameter.createdAt) {
    where.createdAt = {
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

  return { where };
};
