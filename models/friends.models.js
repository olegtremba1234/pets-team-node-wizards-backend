const mongoose = require("mongoose");

const friendsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  addressUrl: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  address: {
    type: String,
  },
  workDays: {
    type: [Object],
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
});

const FriendsModel = mongoose.model("friends", friendsSchema);

module.exports = {
  FriendsModel,
};
