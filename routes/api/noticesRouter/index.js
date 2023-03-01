const express = require('express');

const router = express.Router();

// створити ендпоінт для отримання оголошень по категоріям
router.get('/byCategory/:category', (req, res) => {
  res.status(200).json({ message: 'category' });
});

// створити ендпоінт для отримання одного оголошення
router.get('/certain/:noticeId', (req, res) => {
  res.status(200).json({ message: 'noticeId' });
});

// створити ендпоінт для додавання оголошення до обраних
router.patch('/certain/:noticeId/favorite', (req, res) => {
  res.status(200).json({ message: 'is favorite now' });
});

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get('/favorites', (req, res) => {
  res.status(200).json({ message: 'this is favorite list' });
});

// створити ендпоінт для видалення оголошення авторизованого користувача доданих ним же до обраних
router.patch('/certain/:noticeId/unFavorite', (req, res) => {
  res.status(200).json({ message: 'isn`t favorite now' });
});

// створити ендпоінт для додавання оголошень відповідно до обраної категорії
router.post('/byCategory/:category', (req, res) => {
  res.status(201).json({ message: 'new notice by category' });
});

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get('/myNotices', (req, res) => {
  res.status(200).json({ message: 'all notices created by current user' });
});

// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
router.delete('/certain/:noticeId', (req, res) => {
  res.status(200).json({ message: 'deleted successful' });
});

module.exports = router;
