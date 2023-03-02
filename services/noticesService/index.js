const { NoticeModel } = require('../../models');

const getByCategory = async (category) => {
  const notices = NoticeModel.find({ category });
  return notices;
};

const getCertain = async (id) => {
  const notice = await NoticeModel.findById(id);
  return notice;
};

const addToFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $push: { favorite: userId },
  });
};

const getFavorites = async (userId) => {
  const favorites = await NoticeModel.find({
    favorite: userId,
  });
  return favorites;
};

const removeFromFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $pull: { favorite: userId },
  });
};

const createNotice = async (category, body, userId) => {
  const notice = await NoticeModel.create({ category, ...body, owner: userId });
  return notice;
};

const getOwnNotices = async (userId) => {
  const notices = await NoticeModel.find({ owner: userId });
  return notices;
};

const removeNotice = async (userId, noticeId) => {
  await NoticeModel.findOneAndRemove({ _id: noticeId, owner: userId });
};

module.exports = {
  getByCategory,
  getCertain,
  addToFavorite,
  getFavorites,
  removeFromFavorite,
  createNotice,
  getOwnNotices,
  removeNotice,
};
