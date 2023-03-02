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
  '/byCategory/:category',
  callController(noticesController.getNoticesByCategory)
);

router.get(
  '/certain/:noticeId',
  callController(noticesController.getCertainNotice)
);

router.patch(
  '/certain/:noticeId/favorite',
  authMiddleware,
  callController(noticesController.setNoticeFavorite)
);

router.get(
  '/favorites',
  authMiddleware,
  callController(noticesController.getAllFavorites)
);

router.patch(
  '/certain/:noticeId/unFavorite',
  authMiddleware,
  callController(noticesController.unsetNoticeFavorite)
);

router.post(
  '/byCategory/:category',
  authMiddleware,
  callController(noticesController.createNoticeByCategory)
);

router.get(
  '/myNotices',
  authMiddleware,
  callController(noticesController.getOwnNotices)
);

router.delete(
  '/certain/:noticeId',
  authMiddleware,
  callController(noticesController.removeOwnNonice)
);

module.exports = router;
