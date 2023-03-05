const { NewsModel } = require("../../models/news.models");
const { newsService } = require("../../services");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const getAllNews = async (req, res, next) => {
  const result = await NewsModel.find({});
  res.json(result);
};

const searchNewsController = async (req, res) => {
  const { title } = req.query;

  const result = await newsService.searchNews(title);
  if (!result.length) throw generateError(RESPONSE_ERRORS.notFound);
  res.json(result);
};

module.exports = {
  getAllNews,
  searchNewsController,
};
