const { NoticeModel } = require("../../models");

const removeFromFavorite = async (userId, noticeId) => {
  await NoticeModel.findByIdAndUpdate(noticeId, {
    $pull: { favoritedBy: userId },
  });
};

module.exports = { removeFromFavorite };
