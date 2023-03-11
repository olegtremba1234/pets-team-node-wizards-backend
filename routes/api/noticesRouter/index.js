const express = require("express");
const {
  callController,
  authMiddleware,
  isAuthorizedMiddleware,
  uploadCloudMiddleware,
  validateBody,
  validateObjectId,
} = require("../../../middlewares");
const { noticeAddSchema } = require("../../../helpers/validation");
const { noticesController } = require("../../../controllers");

const router = express.Router();

router.get(
  "/",
  isAuthorizedMiddleware,
  callController(noticesController.getAllNotices)
);

router.get(
  "/by-category/:category",
  isAuthorizedMiddleware,
  callController(noticesController.getNoticesByCategory)
);

router.get(
  "/certain/:noticeId",
  isAuthorizedMiddleware,
  validateObjectId,
  callController(noticesController.getCertainNotice)
);

router.get(
  "/my-favorites",
  authMiddleware,
  callController(noticesController.getAllFavorites)
);

router.post(
  "/my-favorites/:noticeId",
  authMiddleware,
  validateObjectId,
  callController(noticesController.addToFavorite)
);

router.delete(
  "/my-favorites/:noticeId",
  authMiddleware,
  validateObjectId,
  callController(noticesController.removeFromFavorite)
);

router.get(
  "/my-notices",
  authMiddleware,
  callController(noticesController.getOwnNotices)
);

router.post(
  "/my-notices",
  authMiddleware,
  uploadCloudMiddleware.single("pet-image"),
  validateBody(noticeAddSchema),
  callController(noticesController.createOwnNotice)
);

router.delete(
  "/my-notices/:noticeId",
  authMiddleware,
  validateObjectId,
  callController(noticesController.removeOwnNonice)
);

module.exports = router;
