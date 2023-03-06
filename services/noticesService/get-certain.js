const { generateError, matchNoticesFromDB } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");
const mongoose = require("mongoose");

const getCertain = async (noticeId, user = {}) => {
  const [notice] = await matchNoticesFromDB(
    {
      _id: { $eq: new mongoose.Types.ObjectId(noticeId) },
    },
    user._id
  );
  if (!notice) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }
  return notice;
};

module.exports = { getCertain };
