const Joi = require("joi");
const { NOTICE_CATEGORIES, PET_SEX } = require("../../constants");

const noticeAddSchema = Joi.object({
  category: Joi.string()
    .valid(...NOTICE_CATEGORIES)
    .required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().min(2).max(16).required(),
  birthday: Joi.date().less(Date.now()).required(),
  breed: Joi.string().min(2).max(24).required(),
  sex: Joi.string()
    .valid(...PET_SEX)
    .required(),
  location: Joi.string().required(),
  price: Joi.string().required(),
  comments: Joi.string().min(8).max(120).required(),
});

module.exports = { noticeAddSchema };
