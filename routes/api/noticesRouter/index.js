const express = require("express");
const {
  callController,
  authMiddleware,
  isAuthorizedMiddleware,
  uploadCloudMiddleware,
  // validateBody,
} = require("../../../middlewares");
const { noticesController } = require("../../../controllers");

// const Joi = require("joi");

// const noticeAdd = Joi.object({
//   name: Joi.string().required(),
//   test: Joi.string().required(),
//   helo: Joi.string().required(),
//   some: Joi.number().required(),
// });

const router = express.Router();

// TODO:  add validation by Joi
// TODO:  add check is authorized user middleware for 'get by category'
// TODO:  add projection to endpoints
// TODO:  check is notice exist before add to favorite
// TODO:  add universal method to aggregate responses

// aggregate
router.get(
  "/by-category/:category",
  isAuthorizedMiddleware,
  callController(noticesController.getNoticesByCategory)
);

// aggregate
router.get(
  "/certain/:noticeId",
  isAuthorizedMiddleware,
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
  uploadCloudMiddleware.single("pet-image"),
  // validateBody(noticeAdd),
  callController(noticesController.createOwnNotice)
);

// 204
router.delete(
  "/my-notices/:noticeId",
  authMiddleware,
  callController(noticesController.removeOwnNonice)
);

module.exports = router;
