const Joi = require("joi");

const register = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z-а-яА-Я]+$/)
    .required(),
  email: Joi.string().min(2).email().required(),
  password: Joi.string().pattern(/^\S+$/).min(7).max(32).required(),
  city: Joi.string()
    .pattern(/^[a-zA-Z-а-і-І-яА-Я]+$/)
    .required(),
  phone: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required(),
});

module.exports = {
  register,
};
