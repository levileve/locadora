import moment from 'moment-timezone';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (req) => {
  const searchParameter = {};

  // -=-=-=- User Where -=-=-=-

  if (req.query.name && req.query.name.trim().length > 0) {
    searchParameter.name = req.query.name.trim();
  }

  if (req.query.email && req.query.email.trim().length > 0) {
    searchParameter.email = req.query.email.trim();
  }

  if (req.query.profileType) {
    searchParameter.profileType = parseInt(req.query.profileType, 10);
  }

  if (req.query.createdAt) {
    const [createdAtStart, createdAtEnd] = req.query.createdAt.split(',');

    searchParameter.createdAt = {
      startAt: createdAtStart && moment(createdAtStart).format(),
      endAt: createdAtEnd && moment(createdAtEnd).format(),
    };
  }

  if (req.query.lastAccessAt) {
    const [lastAccessAtStart, lastAccessAtEnd] = req.query.lastAccessAt.split(',');

    searchParameter.lastAccessAt = {
      startAt: lastAccessAtStart && moment(lastAccessAtStart).format(),
      endAt: lastAccessAtEnd && moment(lastAccessAtEnd).format(),
    };
  }

  return searchParameter;
};
