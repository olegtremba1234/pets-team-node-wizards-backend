const { NewsModel } = require("../../models/news.models");

const getAllNews = async (req, res, next) => {
  const result = await NewsModel.find({});
  res.json(result);
};

module.exports = {
  getAllNews,
};
