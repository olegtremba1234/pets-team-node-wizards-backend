const express = require('express');
const { callController } = require('../../../middlewares');
const { noticesCtrl } = require('../../../controllers');

const router = express.Router();

// створити ендпоінт для отримання оголошень по категоріям
router.get(
  '/byCategory/:category',
  callController(noticesCtrl.getNoticesByCategory)
);

// створити ендпоінт для отримання одного оголошення
router.get('/certain/:noticeId', callController(noticesCtrl.getCertainNotice));

// створити ендпоінт для додавання оголошення до обраних
router.patch(
  '/certain/:noticeId/favorite',
  callController(noticesCtrl.setNoticeFavorite)
);

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get('/favorites', callController(noticesCtrl.getAllFavorites));

// створити ендпоінт для видалення оголошення авторизованого користувача доданих ним же до обраних
router.patch(
  '/certain/:noticeId/unFavorite',
  callController(noticesCtrl.unsetNoticeFavorite)
);

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post(
  '/byCategory/:category',
  callController(noticesCtrl.createNoticeByCategory)
);

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get('/myNotices', callController(noticesCtrl.getOwnNotices));

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete(
  '/certain/:noticeId',
  callController(noticesCtrl.removeOwnNonice)
);

module.exports = router;
