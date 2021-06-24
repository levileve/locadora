import moment from 'moment-timezone';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (req) => {
  const searchParameter = {};

  // -=-=-=- Lent Where -=-=-=-

  if (req.query.status && req.query.status.trim().length > 0) {
    searchParameter.status = req.query.status.trim();
  }

  if (req.query.createdAt) {
    const [createdAtStart, createdAtEnd] = req.query.createdAt.split(',');

    searchParameter.createdAt = {
      startAt: createdAtStart && moment(createdAtStart).format(),
      endAt: createdAtEnd && moment(createdAtEnd).format(),
    };
  }

  return searchParameter;
};
