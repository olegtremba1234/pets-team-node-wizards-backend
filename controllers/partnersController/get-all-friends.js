const { FriendsModel } = require("../../models/friends.models");

const getAllFriends = async (req, res, next) => {
  const result = await FriendsModel.find({});
  res.json(result);
};

module.exports = {
  getAllFriends,
};
