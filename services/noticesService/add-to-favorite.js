const { NoticeModel } = require("../../models");

const addToFavorite = async (userId, noticeId) => {
  const notice = await NoticeModel.findById(noticeId);

  if (!notice) {
    throw new Error("not found");
  }

  const isFavorited = notice.favoritedBy.some(
    (element) => element.valueOf() === userId.valueOf()
  );
  if (isFavorited) {
    throw new Error("bad request");
  }

  const { _id, email } = await NoticeModel.findByIdAndUpdate(noticeId, {
    $push: { favoritedBy: userId },
  });

  return { _id, email, isFavorite: true };
};

module.exports = { addToFavorite };
