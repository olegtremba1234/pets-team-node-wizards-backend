const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
});

const NewsModel = mongoose.model("news", newsSchema);

module.exports = {
  NewsModel,
};
