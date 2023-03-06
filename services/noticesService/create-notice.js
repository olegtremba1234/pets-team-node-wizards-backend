const { NoticeModel } = require("../../models");
const { matchNoticesFromDB } = require("../../helpers/utils");

const createNotice = async (file = {}, body, user) => {
  const { path = null } = file;
  const {
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    price,
    comments,
  } = body;

  const { _id, email, phone } = user;
  const notice = await NoticeModel.create({
    category,
    title,
    name,
    birthday,
    breed,
    sex,
    location,
    email,
    phone,
    price,
    petPhotoURL: path,
    comments,
    owner: _id,
  });

  const [createdNotice] = await matchNoticesFromDB({ _id: notice._id });
  return createdNotice;
};

module.exports = {
  createNotice,
};
