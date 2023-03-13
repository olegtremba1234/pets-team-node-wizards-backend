const Joi = require("joi");
const { FieldErrors } = require("../../utils");

const login = Joi.object({
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
});

module.exports = {
  login,
};
