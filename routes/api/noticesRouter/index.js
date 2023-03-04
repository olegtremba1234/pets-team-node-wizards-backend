const express = require("express");
const { callController, authMiddleware } = require("../../../middlewares");
const { noticesController } = require("../../../controllers");

const router = express.Router();

// TODO:  add validation by Joi
// TODO:  add check is authorized user middleware for 'get by category'
// TODO:  add projection to endpoints

// aggregate
router.get(
  "/by-category/:category",
  callController(noticesController.getNoticesByCategory)
);

// aggregate
router.get(
  "/certain/:noticeId",
  callController(noticesController.getCertainNotice)
);

// default = true
router.get(
  "/my-favorites",
  authMiddleware,
  callController(noticesController.getAllFavorites)
);

// defaul = true
router.post(
  "/my-favorites/:noticeId",
  authMiddleware,
  callController(noticesController.setNoticeFavorites)
);

// default = false
router.delete(
  "/my-favorites/:noticeId",
  authMiddleware,
  callController(noticesController.unsetNoticeFavorites)
);

// aggregate
router.get(
  "/my-notices",
  authMiddleware,
  callController(noticesController.getOwnNotices)
);

// defaul = false
router.post(
  "/my-notices/:category",
  authMiddleware,
  callController(noticesController.createOwnNotice)
);

// 204
router.delete(
  "/my-notices/:noticeId",
  authMiddleware,
  callController(noticesController.removeOwnNonice)
);

module.exports = router;
