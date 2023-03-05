const { NoticeModel } = require("../../models");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const removeFromFavorite = async (userId, noticeId) => {
  const notice = await NoticeModel.findById(noticeId);

  if (!notice) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }

  const isInFavoritesList = notice.favoritedBy.some(
    (element) => element.valueOf() === userId.valueOf()
  );
  if (!isInFavoritesList) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }

  const updatedNotice = await NoticeModel.findByIdAndUpdate(
    noticeId,
    {
      $pull: { favoritedBy: userId },
    },
    { returnDocument: "after", runValidators: true }
  ).select({ __v: 0, owner: 0, favoritedBy: 0 });

  const { _id: id, ...restBody } = updatedNotice.toJSON();

  return { id, ...restBody, isFavorite: true };
};

module.exports = { removeFromFavorite };
