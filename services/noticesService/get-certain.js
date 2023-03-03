const { NoticeModel } = require("../../models");

const getCertain = async (id) => {
  const notice = await NoticeModel.findById(id);
  return notice;
};

module.exports = { getCertain };
