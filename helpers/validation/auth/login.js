const Joi = require("joi");

const login = Joi.object({
  email: Joi.string().min(2).email().required(),
  password: Joi.string().pattern(/^\S+$/).min(7).max(32).required(),
});

module.exports = {
  login,
};
