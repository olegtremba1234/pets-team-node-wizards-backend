const { globalHandleError } = require("./global-hanlde-error");
const { validateBody } = require("./validate-body");
const { callController } = require("./call-controller");
const { authMiddleware } = require("./auth-middlelware");
const { isAuthorizedMiddleware } = require("./is-authorized-middleware");
const { validateObjectId } = require("./validate-object-id");
const { uploadCloudMiddleware } = require("./upload-cloud-middleware");

module.exports = {
  globalHandleError,
  validateBody,
  callController,
  authMiddleware,
  isAuthorizedMiddleware,
  validateObjectId,
  uploadCloudMiddleware,
};
