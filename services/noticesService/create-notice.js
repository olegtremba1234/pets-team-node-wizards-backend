const { NoticeModel } = require("../../models");

const createNotice = async (category, { path = null } = {}, body, user) => {
  const { title, name, birthday, breed, sex, location, price, comments } = body;
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
  return {
    id: notice._id,
    category: notice.category,
    title: notice.title,
    name: notice.name,
    birthday: notice.birthday,
    breed: notice.breed,
    sex: notice.sex,
    location: notice.location,
    email: notice.email,
    phone: notice.phone,
    price: notice.price,
    petPhotoURL: notice.petPhotoURL,
    comments: notice.comments,
  };
};

module.exports = {
  createNotice,
};
