const mongoose = require("mongoose");

const petsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  birthDay: {
    type: String,
    require: true,
  },
  breed: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
});

const PetsModel = mongoose.model("pets", petsSchema);

module.exports = {
  PetsModel,
};
