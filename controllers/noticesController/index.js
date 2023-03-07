const { noticesService } = require("../../services");

const getAllNotices = async (req, res) => {
  const notices = await noticesService.getAllNotices(req.query, req.user);
  res.status(200).json(notices);
};

const getNoticesByCategory = async (req, res) => {
  const notices = await noticesService.getByCategory(
    req.params.category,
    req.query,
    req.user
  );
  res.status(200).json(notices);
};

const getCertainNotice = async (req, res) => {
  const notice = await noticesService.getCertain(req.params.noticeId, req.user);
  res.status(200).json(notice);
};

const getAllFavorites = async (req, res) => {
  const favorites = await noticesService.getFavorites(req.user._id, req.query);
  res.status(200).json(favorites);
};

const addToFavorite = async (req, res) => {
  const notice = await noticesService.addToFavorite(
    req.user._id,
    req.params.noticeId
  );
  res.status(200).json(notice);
};

const removeFromFavorite = async (req, res) => {
  const notice = await noticesService.removeFromFavorite(
    req.user._id,
    req.params.noticeId
  );
  res.status(200).json(notice);
};

const getOwnNotices = async (req, res) => {
  const notices = await noticesService.getOwnNotices(req.user._id, req.query);
  res.status(200).json(notices);
};

const createOwnNotice = async (req, res) => {
  const notice = await noticesService.createNotice(
    req.file,
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
  getAllNotices,
  getNoticesByCategory,
  getCertainNotice,
  getAllFavorites,
  addToFavorite,
  removeFromFavorite,
  getOwnNotices,
  createOwnNotice,
  removeOwnNonice,
};
