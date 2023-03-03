const { NoticeModel } = require("../../models");

const getByCategory = async (category) => {
  const notices = NoticeModel.find({ category });
  return notices;
};

module.exports = { getByCategory };
