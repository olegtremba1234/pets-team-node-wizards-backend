const Joi = require("joi");

const register = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+){3,}$/)
    .required(),
  email: Joi.string()
    .min(10)
    .max(63)
    .email()
    .pattern(/^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    .required(),
  password: Joi.string().pattern(/^\S+$/).min(7).max(32).required(),
  city: Joi.string()
    .pattern(/^(([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ',]+){3,})*$/)
    .required(),
  phone: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required(),
});

module.exports = {
  register,
};
