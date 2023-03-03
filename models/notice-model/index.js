const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
  category: { type: String },
  title: { type: String },
  photoURL: { type: String },
  breed: { type: String },
  place: { type: String },
  age: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
});

const NoticeModel = mongoose.model('notices', noticeSchema);

module.exports = {
  NoticeModel,
};
