const { NoticeModel } = require("../../models");

const createNotice = async (category, body, user) => {
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
    photoURL: "this is photo url on cloudify",
    comments,
    owner: _id,
  });
  return {
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
    photoURL: notice.photoURL,
    comments: notice.comments,
  };
};

module.exports = {
  createNotice,
};
