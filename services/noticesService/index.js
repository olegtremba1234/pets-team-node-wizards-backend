const mongoose = require("mongoose");
const { NoticeModel } = require("../../models");
const { matchNoticesFromDB, generateError } = require("../../helpers/utils");
const {
  NOTICE_CATEGORIES,
  RESPONSE_ERRORS,
  DEFAULT_UPDATE_OPTIONS,
} = require("../../helpers/constants");

const getAllNotices = async (query, user = {}) => {
  return await matchNoticesFromDB({}, query.search, user._id);
};

const getByCategory = async (category, query, user = {}) => {
  if (!NOTICE_CATEGORIES.includes(category)) {
    throw generateError(RESPONSE_ERRORS.wrongCategory);
  }

  return await matchNoticesFromDB({ category }, query.search, user._id);
};

const getCertain = async (noticeId, user = {}) => {
  const [notice] = await matchNoticesFromDB(
    {
      _id: { $eq: new mongoose.Types.ObjectId(noticeId) },
    },
    null,
    user._id
  );
  if (!notice) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }
  return notice;
};

const getFavorites = async (userId, query) => {
  const favorites = await matchNoticesFromDB(
    {
      $expr: {
        $in: [userId, "$favoritedBy"],
      },
    },
    query.search,
    userId
  );
  return favorites;
};

const addToFavorite = async (userId, noticeId) => {
  const notice = await NoticeModel.findById(noticeId);

  if (!notice) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }

  const isInFavoritesList = notice.favoritedBy.some(
    (element) => element.valueOf() === userId.valueOf()
  );
  if (isInFavoritesList) {
    throw generateError(RESPONSE_ERRORS.isAlreadyAddedFavorites);
  }

  const updatedNotice = await NoticeModel.findByIdAndUpdate(
    noticeId,
    {
      $push: { favoritedBy: userId },
    },
    DEFAULT_UPDATE_OPTIONS
  );

  const [favoritedNotice] = await matchNoticesFromDB(
    {
      _id: { $eq: updatedNotice._id },
    },
    null,
    userId
  );

  return favoritedNotice;
};

const removeFromFavorite = async (userId, noticeId) => {
  const notice = await NoticeModel.findById(noticeId);

  if (!notice) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }

  const isInFavoritesList = notice.favoritedBy.some(
    (element) => element.valueOf() === userId.valueOf()
  );
  if (!isInFavoritesList) {
    throw generateError(RESPONSE_ERRORS.isAlreadyRemovedFavorites);
  }

  const updatedNotice = await NoticeModel.findByIdAndUpdate(
    noticeId,
    {
      $pull: { favoritedBy: userId },
    },
    DEFAULT_UPDATE_OPTIONS
  );

  const [unfavoritedNotice] = await matchNoticesFromDB(
    {
      _id: { $eq: updatedNotice._id },
    },
    null,
    userId
  );

  return unfavoritedNotice;
};

const createNotice = async (file = {}, body, user) => {
  const { path = null } = file;
  const {
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    price,
    comments,
  } = body;

  const { _id, email, phone } = user;
  const notice = await NoticeModel.create({
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    email,
    phone,
    price,
    petPhotoURL: path,
    comments,
    owner: _id,
  });

  const [createdNotice] = await matchNoticesFromDB(
    { _id: notice._id },
    null,
    user._id
  );
  return createdNotice;
};

const removeNotice = async (userId, noticeId) => {
  const result = await NoticeModel.findOneAndRemove({
    _id: noticeId,
    owner: userId,
  });

  if (!result) throw generateError(RESPONSE_ERRORS.notFound);
};

const getOwnNotices = async (userId, query) => {
  const notices = await matchNoticesFromDB(
    { owner: userId },
    query.search,
    userId
  );
  return notices;
};

module.exports = {
  getAllNotices,
  getByCategory,
  getCertain,
  getFavorites,
  addToFavorite,
  removeFromFavorite,
  getOwnNotices,
  createNotice,
  removeNotice,
};
