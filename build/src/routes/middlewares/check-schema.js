'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =




checkSchema;var _expressValidator = require('express-validator');function checkSchema(schema) {
  return [
  (0, _expressValidator.checkSchema)(schema),
  function (req, res, next) {
    try {
      (0, _expressValidator.validationResult)(req).throw();
      next();
    } catch (err) {
      next(err);
    }
  }];

}