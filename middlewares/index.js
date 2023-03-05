const { globalHandleError } = require("./global-hanlde-error");
const { validateBody } = require("./validate-body");
const { callController } = require("./call-controller");
const { authMiddleware } = require("./auth-middlelware");
const { uploadCloudMiddleware } = require("./upload-cloud-middleware");
const { isAuthorizedMiddleware } = require("./is-authorized-middleware");

module.exports = {
  globalHandleError,
  validateBody,
  callController,
  authMiddleware,
  uploadCloudMiddleware,
  isAuthorizedMiddleware,
};
