const { newsService } = require("../../services");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");

const getAllNews = async (req, res) => {
  let { page = 1, limit = 6 } = req.query;

  if (page <= 0) throw generateError(RESPONSE_ERRORS.notFound);

  limit = parseInt(limit) > 6 ? 6 : parseInt(limit);
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const data = await newsService.getSortNews(skip, limit);

  if (!data.length) throw generateError(RESPONSE_ERRORS.notFound);
  res.json(data);
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
