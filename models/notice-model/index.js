const mongoose = require("mongoose");

const noticeSchema = mongoose.Schema(
  {
    category: { type: String, enum: ["lost-found", "in-good-hands", "sell"] },
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
  },
  {
    virtuals: {
      isFavorite: {
        get() {
          return this.favoritedBy.length > 0;
        },
      },
    },
  }
);

const NoticeModel = mongoose.model("notices", noticeSchema);

module.exports = {
  NoticeModel,
};
