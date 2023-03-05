const { NoticeModel } = require("../../models");

const removeFromFavorite = async (userId, noticeId) => {
  const notice = await NoticeModel.findById(noticeId);

  if (!notice) {
    throw new Error("not found");
  }

  const isFavorited = notice.favoritedBy.some(
    (element) => element.valueOf() === userId.valueOf()
  );
  if (!isFavorited) {
    throw new Error("bad request");
  }

  const { _id, email } = await NoticeModel.findByIdAndUpdate(noticeId, {
    $pull: { favoritedBy: userId },
  });

  return { _id, email, isFavorite: false };
};

module.exports = { removeFromFavorite };
