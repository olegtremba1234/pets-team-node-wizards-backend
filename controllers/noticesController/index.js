const { noticesService } = require("../../services");

const getNoticesByCategory = async (req, res) => {
  const notices = await noticesService.getByCategory(req.params.category);
  res.status(200).json(notices);
};

const getCertainNotice = async (req, res) => {
  const notice = await noticesService.getCertain(req.params.noticeId);
  res.status(200).json(notice);
};

const getAllFavorites = async (req, res) => {
  const favorites = await noticesService.getFavorites(req.user._id);
  res.status(200).json(favorites);
};

const setNoticeFavorites = async (req, res) => {
  await noticesService.addToFavorite(req.user._id, req.params.noticeId);
  res.status(200).json({ message: "is favorite now" });
};

const unsetNoticeFavorites = async (req, res) => {
  await noticesService.removeFromFavorite(req.user._id, req.params.noticeId);
  res.status(200).json({ message: "isn`t favorite now" });
};

const getOwnNotices = async (req, res) => {
  const notices = await noticesService.getOwnNotices(req.user._id);
  res.status(200).json(notices);
};

const createOwnNotice = async (req, res) => {
  const notice = await noticesService.createNotice(
    req.params.category,
    req.body,
    req.user
  );
  res.status(201).json(notice);
};

const removeOwnNonice = async (req, res) => {
  await noticesService.removeNotice(req.user._id, req.params.noticeId);
  res.status(204).send();
};

module.exports = {
  getNoticesByCategory,
  getCertainNotice,
  getAllFavorites,
  setNoticeFavorites,
  unsetNoticeFavorites,
  getOwnNotices,
  createOwnNotice,
  removeOwnNonice,
};
