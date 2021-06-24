'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.controllerPaginationHelper = controllerPaginationHelper;exports.








serviceOrderHelper = serviceOrderHelper;exports.








tryToJSON = tryToJSON;function controllerPaginationHelper(req) {return { offset: req.query.offset ? req.query.offset * (req.query.limit || 10) : 0, orderBy: req.query.orderBy && req.query.orderBy.split('.'), isDESC: req.query.isDESC === 'true', limit: req.query.limit || 10 };}function serviceOrderHelper(searchParameter) {var order = searchParameter.orderBy ? searchParameter.orderBy : ['createdAt'];order.push(searchParameter.isDESC ? 'DESC' : 'ASC');return order;}function tryToJSON(str) {
  var response = void 0;

  try {
    response = str.toJSON();
  } catch (e) {
    return str;
  }

  return response;
}