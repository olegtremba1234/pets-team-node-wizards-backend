const { NoticeModel } = require("../../models");

const addToFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $push: { favoritedBy: userId },
  });
};

module.exports = { addToFavorite };
