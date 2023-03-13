const Joi = require("joi");
const { FieldErrors } = require("../../utils");

const register = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/)
    .min(2)
    .max(30)
    .required()
    .messages(
      new FieldErrors("name")
        .string()
        .emptyString()
        .pattern("letters", "spaces", "hyphen and apostrophe(-,')")
        .min(2)
        .max(30)
        .required()
        .get()
    ),

  email: Joi.string()
    .trim()
    .pattern(/^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    .min(10)
    .max(63)
    .email()
    .required()
    .messages(
      new FieldErrors("email")
        .string()
        .emptyString()
        .pattern(
          "latin letters",
          "numbers and signs",
          "at the beginning or end of the email there can be no hyphen, there must be at least 2 characters before the (@)"
        )
        .min(10)
        .max(63)
        .email()
        .required()
        .get()
    ),
  password: Joi.string()
    .trim()
    .pattern(/^\d*(?=.*[a-z])(?=.*[A-Z])\S+\D*\d*$/)
    .min(7)
    .max(32)
    .required()
    .messages(
      new FieldErrors("password")
        .string()
        .emptyString()
        .pattern(
          "numbers and/or letters (uppercase and lowercase), except spaces"
        )
        .min(7)
        .max(32)
        .required()
        .get()
    ),
  city: Joi.string()
    .trim()
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ',]+)*$/)
    .min(3)
    .max(60)
    .required()
    .messages(
      new FieldErrors("city")
        .string()
        .emptyString()
        .pattern("letters", "spaces", "hyphen", "comma and apostrophe")
        .min(3)
        .max(60)
        .required()
        .get()
    ),
  phone: Joi.string()
    .trim()
    .pattern(/^\+380\d{9}$/)
    .required()
    .messages(
      new FieldErrors("phone")
        .string()
        .emptyString()
        .pattern(
          "numbers - 12 characters",
          "the string starts with +380xxxxxxxxx"
        )
        .required()
        .get()
    ),
});

module.exports = {
  register,
};
