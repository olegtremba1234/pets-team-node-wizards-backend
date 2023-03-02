const { globalHandleError } = require("./global-hanlde-error");
const { validateBody } = require("./validate-body");
const { callController } = require("./call-controller");
const { authMiddleware } = require("./auth-middlelware");

module.exports = {
  globalHandleError,
  validateBody,
  callController,
  authMiddleware,
};
