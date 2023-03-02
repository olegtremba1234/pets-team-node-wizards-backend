const { noticesService } = require('../../services');

const getNoticesByCategory = async (req, res) => {
  const notices = await noticesService.getByCategory(req.params.category);
  res.status(200).json(notices);
};

const getCertainNotice = async (req, res) => {
  const notice = await noticesService.getCertain(req.params.noticeId);
  res.status(200).json(notice);
};

const setNoticeFavorite = async (req, res) => {
  await noticesService.addToFavorite(req.body.userId, req.params.noticeId);
  res.status(200).json({ message: 'is favorite now' });
};

const getAllFavorites = async (req, res) => {
  const favorites = await noticesService.getFavorites(req.body.userId);
  res.status(200).json(favorites);
};

const unsetNoticeFavorite = async (req, res) => {
  await noticesService.removeFromFavorite(req.body.userId, req.params.noticeId);
  res.status(200).json({ message: 'isn`t favorite now' });
};

const createNoticeByCategory = async (req, res) => {
  const notice = await noticesService.createNotice(req.body);
  res.status(201).json(notice);
};

const getOwnNotices = async (req, res) => {
  const notices = await noticesService.getOwnNotices(req.body.userId);
  res.status(200).json(notices);
};

const removeOwnNonice = async (req, res) => {
  await noticesService.removeNotice(req.params.noticeId);
  res.status(204).send();
};

module.exports = {
  getNoticesByCategory,
  getCertainNotice,
  setNoticeFavorite,
  getAllFavorites,
  unsetNoticeFavorite,
  createNoticeByCategory,
  getOwnNotices,
  removeOwnNonice,
};
