const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
  category: { type: String, enum: ['lost-found', 'in-good-hands', 'sell'] },
  title: { type: String, required: [true, 'title is required'] },
  name: { type: String },
  birthday: { type: Date },
  breed: { type: String },
  sex: { type: String, enum: ['male', 'female'] },
  location: { type: String },
  price: { type: Number },
  photoURL: { type: String },
  comments: { type: String },
  noticeOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
});

const NoticeModel = mongoose.model('notices', noticeSchema);

module.exports = {
  NoticeModel,
};
