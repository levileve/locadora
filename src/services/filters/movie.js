import moment from 'moment-timezone';
import { Op } from 'sequelize';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (searchParameter, includeDeleted = false) => {
  const whereMovie = {};

  if (!includeDeleted) {
    whereMovie.deletedAt = null;
  }

  // -=-=-=- Movie Where -=-=-=-

  if (searchParameter.idList) {
    whereMovie.id = { [Op.in]: searchParameter.idList };
  }

  if (searchParameter.name) {
    whereMovie.name = { [Op.iLike]: `%${searchParameter.name}%` };
  }

  if (searchParameter.director) {
    whereMovie.director = { [Op.iLike]: `%${searchParameter.director}%` };
  }

  if (searchParameter.genre) {
    whereMovie.genre = searchParameter.genre;
  }

  // -=-=-=- Dates -=-=-=-
  if (searchParameter.createdAt) {
    whereMovie.createdAt = {
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

  return { whereMovie };
};
