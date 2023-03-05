const { NewsModel } = require("../../models/news.models");

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
  searchNews,
};
