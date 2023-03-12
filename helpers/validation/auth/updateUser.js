const Joi = require("joi").extend(require("@joi/date"));
const { FieldErrors } = require("../../utils");

const updateUser = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+)$/)
    .min(2)
    .max(30)
    .messages(
      new FieldErrors("name")
        .string()
        .emptyString()
        .pattern("letters", "spaces", "hyphen and apostrophe(-,')")
        .min(2)
        .max(30)
        .get()
    ),
  email: Joi.string()
    .trim()
    .pattern(/^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    .min(10)
    .max(63)
    .email()
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
        .get()
    ),
  birthday: Joi.date()
    .less("now")
    .format("DD.MM.YYYY")
    .messages(
      new FieldErrors("birthday").date().less("now").format("DD.MM.YYYY").get()
    ),
  phone: Joi.string()
    .trim()
    .pattern(/^\+380\d{9}$/)
    .messages(
      new FieldErrors("phone")
        .string()
        .emptyString()
        .pattern(
          "numbers - 12 characters",
          "the string starts with +380xxxxxxxxx"
        )
        .get()
    ),
  city: Joi.string()
    .trim()
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ',]+)*$/)
    .min(3)
    .max(60)
    .messages(
      new FieldErrors("city")
        .string()
        .emptyString()
        .pattern("letters", "spaces", "hyphen", "comma and apostrophe")
        .min(3)
        .max(60)
        .get()
    ),
  avatarUrl: Joi.string(),
});

module.exports = {
  updateUser,
};
