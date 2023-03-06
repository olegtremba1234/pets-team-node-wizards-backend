const Joi = require("joi");

const updateUser = Joi.object({
  name: Joi.string().min(2).max(30),
  email: Joi.string().email(),
  birthday: Joi.string().pattern(/^\d{2}\.\d{2}\.\d{4}$/),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
  city: Joi.string(),
  avatarUrl: Joi.string(),
});

module.exports = {
  updateUser,
};
