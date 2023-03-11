const Joi = require("joi");
const { NOTICE_CATEGORIES, PET_SEX } = require("../../constants");
const { FieldErrors } = require("../../utils");

const noticeAddSchema = Joi.object({
  category: Joi.string()
    .valid(...NOTICE_CATEGORIES)
    .required()
    .messages(
      new FieldErrors("category")
        .string()
        .valid(...NOTICE_CATEGORIES)
        .required()
        .get()
    ),
  title: Joi.string()
    .trim()
    .pattern(/^[a-zA-Zа-яА-ЯІіЇїЄєҐґЁё\s-]+$/)
    .min(2)
    .max(48)
    .required()
    .messages(
      new FieldErrors("title")
        .string()
        .emptyString()
        .pattern("letters", "spaces and hyphen(-)")
        .min(2)
        .max(48)
        .required()
        .get()
    ),
  name: Joi.string()
    .trim()
    .pattern(/^[a-zA-Zа-яА-ЯІіЇїЄєҐґЁё\s-]+$/)
    .min(2)
    .max(16)
    .required()
    .messages(
      new FieldErrors("name")
        .string()
        .emptyString()
        .pattern("letters", "spaces and hyphen(-)")
        .min(2)
        .max(16)
        .required()
        .get()
    ),
  birthday: Joi.date()
    .less("now")
    .required()
    .messages(new FieldErrors("birthday").date().less("now").required().get()),
  breed: Joi.string()
    .trim()
    .pattern(/^[a-zA-Zа-яА-ЯІіЇїЄєҐґЁё\s-]+$/)
    .min(2)
    .max(24)
    .required()
    .messages(
      new FieldErrors("breed")
        .string()
        .emptyString()
        .pattern("letters", "spaces and hyphen(-)")
        .min(2)
        .max(24)
        .required()
        .get()
    ),
  sex: Joi.string()
    .valid(...PET_SEX)
    .required()
    .messages(
      new FieldErrors("sex")
        .string()
        .emptyString()
        .valid(...PET_SEX)
        .required()
        .get()
    ),
  location: Joi.string()
    .pattern(/^[a-zA-Zа-яА-ЯІіЇїЄєҐґЁё\s-,]+$/)
    .min(4)
    .max(120)
    .required()
    .messages(
      new FieldErrors("location")
        .string()
        .emptyString()
        .pattern("letters", "spaces", "hyphen and comma")
        .min(4)
        .max(120)
        .required()
        .get()
    ),
  price: Joi.string()
    .trim()
    .pattern(/^(0|[1-9][0-9]*)$/)
    .required()
    .messages(
      new FieldErrors("price")
        .string()
        .emptyString()
        .pattern("positive integer greater or equal to 0")
        .required()
        .get()
    ),
  comments: Joi.string()
    .trim()
    .min(8)
    .max(120)
    .required()
    .messages(
      new FieldErrors("comments")
        .string()
        .emptyString()
        .min(8)
        .max(120)
        .required()
        .get()
    ),
}).messages(new FieldErrors("Notice add body").object().extraFields().get());

module.exports = { noticeAddSchema };
