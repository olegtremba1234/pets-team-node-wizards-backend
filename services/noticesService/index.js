const { NoticeModel } = require("../../models");

const { createNotice } = require("./create-notice");
const { removeNotice } = require("./remove-notice");

const getByCategory = async (category) => {
  const notices = NoticeModel.find({ category });
  return notices;
};

const getCertain = async (id) => {
  const notice = await NoticeModel.findById(id);
  return notice;
};

const getFavorites = async (userId) => {
  const favorites = await NoticeModel.find({
    favorite: userId,
  });
  return favorites;
};

const addToFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $push: { favorite: userId },
  });
};

const removeFromFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $pull: { favorite: userId },
  });
};

const getOwnNotices = async (userId) => {
  const notices = await NoticeModel.find({ owner: userId });
  return notices;
};

module.exports = {
  getByCategory,
  getCertain,
  getFavorites,
  addToFavorite,
  removeFromFavorite,
  getOwnNotices,
  createNotice,
  removeNotice,
};
