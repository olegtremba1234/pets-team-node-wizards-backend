const Joi = require("joi");

const addPetSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  birthDay: Joi.string().required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).required(),
  avatarURL: Joi.string().required(),
});

module.exports = {
  addPetSchema,
};
