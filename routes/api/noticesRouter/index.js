const express = require('express');
const { callController } = require('../../../middlewares');
const { noticesController } = require('../../../controllers');

const router = express.Router();

function authMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');

    req.user = { _id: token };
    next();
  } catch (error) {
    next(error);
  }
}

router.get(
  '/by-category/:category',
  callController(noticesController.getNoticesByCategory)
);

router.get(
  '/certain/:noticeId',
  callController(noticesController.getCertainNotice)
);

router.get(
  '/my-favorites',
  authMiddleware,
  callController(noticesController.getAllFavorites)
);

router.patch(
  '/my-favorites/:noticeId/favorite',
  authMiddleware,
  callController(noticesController.setNoticeFavorites)
);

router.patch(
  '/my-favorites/:noticeId/unfavorite',
  authMiddleware,
  callController(noticesController.unsetNoticeFavorites)
);

router.get(
  '/my-notices',
  authMiddleware,
  callController(noticesController.getOwnNotices)
);

router.post(
  '/my-notices/:categoryName',
  authMiddleware,
  callController(noticesController.createOwnNotice)
);

router.delete(
  '/my-notices/:noticeId',
  authMiddleware,
  callController(noticesController.removeOwnNonice)
);

module.exports = router;
