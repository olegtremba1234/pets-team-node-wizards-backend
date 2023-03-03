const { NoticeModel } = require("../../models");

const getFavorites = async (userId) => {
  const favorites = await NoticeModel.find({
    favoritedBy: userId,
  });
  return favorites;
};

module.exports = { getFavorites };
