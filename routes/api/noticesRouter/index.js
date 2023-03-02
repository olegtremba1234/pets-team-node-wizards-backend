const express = require('express');
const { callController } = require('../../../middlewares');
const { noticesCtrl } = require('../../../controllers');

const router = express.Router();

// /api/notices/:category

router.get(
  '/byCategory/:category',
  callController(noticesCtrl.getNoticesByCategory)
);

router.get('/certain/:noticeId', callController(noticesCtrl.getCertainNotice));

router.patch(
  '/certain/:noticeId/favorite',
  callController(noticesCtrl.setNoticeFavorite)
);

router.get('/favorites', callController(noticesCtrl.getAllFavorites));

router.patch(
  '/certain/:noticeId/unFavorite',
  callController(noticesCtrl.unsetNoticeFavorite)
);

router.post(
  '/byCategory/:category',
  callController(noticesCtrl.createNoticeByCategory)
);

router.get('/myNotices', callController(noticesCtrl.getOwnNotices));

router.delete(
  '/certain/:noticeId',
  callController(noticesCtrl.removeOwnNonice)
);

module.exports = router;
