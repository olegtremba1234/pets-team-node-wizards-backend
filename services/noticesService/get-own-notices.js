const { NoticeModel } = require("../../models");

const getOwnNotices = async (userId) => {
  const notices = await NoticeModel.find({ owner: userId });
  return notices;
};

module.exports = { getOwnNotices };
