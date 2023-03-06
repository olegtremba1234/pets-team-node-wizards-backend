const Joi = require("joi");

const noticeAddSchema = Joi.object({
  category: Joi.string().required(),
  title: Joi.string().required(),
  name: Joi.string().required(),
  birthday: Joi.date().required(),
  breed: Joi.string().required(),
  sex: Joi.string().required(),
  location: Joi.string().required(),
  price: Joi.string().required(),
  comments: Joi.string().required(),
});

module.exports = { noticeAddSchema };
