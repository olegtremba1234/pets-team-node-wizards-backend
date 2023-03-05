const { NoticeModel } = require("../../models");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const removeNotice = async (userId, noticeId) => {
  const result = await NoticeModel.findOneAndRemove({
    _id: noticeId,
    owner: userId,
  });

  if (!result) throw generateError(RESPONSE_ERRORS.notFound);
};

module.exports = { removeNotice };
