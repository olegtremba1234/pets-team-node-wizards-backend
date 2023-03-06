const { NoticeModel } = require("../../models");
const { generateError } = require("../../helpers/utils");
const {
  RESPONSE_ERRORS,
  DEFAULT_UPDATE_OPTIONS,
  NOTICE_PROJECTION,
} = require("../../helpers/constants");

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
    DEFAULT_UPDATE_OPTIONS
  ).select(NOTICE_PROJECTION);

  const { _id: id, ...restBody } = updatedNotice.toJSON();

  return { ...restBody, isFavorite: false, id };
};

module.exports = { removeFromFavorite };
