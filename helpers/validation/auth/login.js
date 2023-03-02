const Joi = require("joi");

const login = Joi.object({
  email: Joi.string().email(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]+$/)
    .min(7)
    .max(32),
});

module.exports = {
  login,
};
