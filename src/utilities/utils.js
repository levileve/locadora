export function controllerPaginationHelper(req) {
  return {
    offset: req.query.offset ? (req.query.offset * (req.query.limit || 10)) : 0,
    orderBy: req.query.orderBy && req.query.orderBy.split('.'),
    isDESC: req.query.isDESC === 'true',
    limit: req.query.limit || 10,
  };
}

export function serviceOrderHelper(searchParameter) {
  const order = (searchParameter.orderBy ? searchParameter.orderBy : ['createdAt']);

  order.push(
    searchParameter.isDESC ? 'DESC' : 'ASC',
  );
  return order;
}

export function tryToJSON(str) {
  let response;

  try {
    response = str.toJSON();
  } catch (e) {
    return str;
  }

  return response;
}
