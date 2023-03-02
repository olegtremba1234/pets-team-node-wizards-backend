const Joi = require("joi");

const register = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z]+$/)
    .min(3),
  email: Joi.string().email(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]+$/)
    .min(7)
    .max(32),
  city: Joi.string(),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
});

module.exports = {
  register,
};
