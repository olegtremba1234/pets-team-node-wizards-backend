const mongoose = require("mongoose");
const { NOTICE_CATEGORIES } = require("../../helpers/constants");

const noticeSchema = mongoose.Schema({
  category: { type: String, enum: Object.values(NOTICE_CATEGORIES) },
  title: { type: String, required: [true, "title is required"], trim: true },
  name: { type: String, trim: true },
  birthday: { type: Date },
  breed: { type: String, trim: true },
  sex: { type: String, enum: ["male", "female"] },
  location: { type: String, trim: true },
  email: { type: String },
  phone: { type: String },
  price: { type: String, trim: true },
  petPhotoURL: { type: String },
  comments: { type: String, trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const NoticeModel = mongoose.model("notices", noticeSchema);

module.exports = {
  NoticeModel,
};
