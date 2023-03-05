const { getByCategory } = require("./get-by-category");
const { getCertain } = require("./get-certain");
const { getFavorites } = require("./get-favorites");
const { addToFavorite } = require("./add-to-favorite");
const { removeFromFavorite } = require("./remove-from-favorite");
const { createNotice } = require("./create-notice");
const { removeNotice } = require("./remove-notice");
const { getOwnNotices } = require("./get-own-notices");

module.exports = {
  getByCategory,
  getCertain,
  getFavorites,
  addToFavorite,
  removeFromFavorite,
  getOwnNotices,
  createNotice,
  removeNotice,
};
