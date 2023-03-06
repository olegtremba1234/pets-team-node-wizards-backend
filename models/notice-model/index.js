const mongoose = require("mongoose");
const { NOTICE_CATEGORIES } = require("../../helpers/constants");

const noticeSchema = mongoose.Schema({
  category: { type: String, enum: Object.values(NOTICE_CATEGORIES) },
  title: { type: String, required: [true, "title is required"] },
  name: { type: String },
  birthday: { type: Date },
  breed: { type: String },
  sex: { type: String, enum: ["male", "female"] },
  location: { type: String },
  email: { type: String },
  phone: { type: String },
  price: { type: String },
  petPhotoURL: { type: String },
  comments: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const NoticeModel = mongoose.model("notices", noticeSchema);

module.exports = {
  NoticeModel,
};
