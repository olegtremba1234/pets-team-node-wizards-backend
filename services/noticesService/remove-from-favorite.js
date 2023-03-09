const { NoticeModel } = require("../../models");
const { generateError, matchNoticesFromDB } = require("../../helpers/utils");
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

  const [unfavoritedNotice] = await matchNoticesFromDB(
    {
      _id: { $eq: updatedNotice._id },
    },
    null,
    userId
  );

  return unfavoritedNotice;
};

module.exports = { removeFromFavorite };
