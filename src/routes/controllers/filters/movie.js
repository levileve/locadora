import moment from 'moment-timezone';

// eslint-disable-next-line import/prefer-default-export
export const getAllFilter = (req) => {
  const searchParameter = {};

  // -=-=-=- Movie Where -=-=-=-

  if (req.query.name && req.query.name.trim().length > 0) {
    searchParameter.name = req.query.name.trim();
  }

  if (req.query.director && req.query.director.trim().length > 0) {
    searchParameter.director = req.query.director.trim();
  }

  if (req.query.genre) {
    searchParameter.genre = parseInt(req.query.genre, 10);
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
