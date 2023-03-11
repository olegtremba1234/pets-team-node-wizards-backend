const Joi = require("joi");

const login = Joi.object({
  email: Joi.string()
    .min(10)
    .max(63)
    .email()
    .pattern(/^(\w+([.-]?\w+){1,})*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    .required(),
  password: Joi.string().pattern(/^\S+$/).min(7).max(32).required(),
});

module.exports = {
  login,
};
