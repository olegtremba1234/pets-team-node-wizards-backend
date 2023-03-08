const { NewsModel } = require("../../models/news.models");

const getSortNews = async (skip, limit) => {
  try {
    const data = await NewsModel.find({})
      .sort({ date: "desc" })
      .skip(skip)
      .limit(limit);
    return data;
  } catch (error) {
    return error;
  }
};

const searchNews = async (title) => {
  try {
    const data = await NewsModel.find({
      title: { $regex: title, $options: "i" },
    });

    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getSortNews,
  searchNews,
};
