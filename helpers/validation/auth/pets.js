const Joi = require("joi");

const addPetSchema = Joi.object({
  name: Joi.string().required(),
  birthDay: Joi.string().required(),
  breed: Joi.string().required(),
  comments: Joi.string().required(),
  avatarURL: Joi.string().required(),
});

module.exports = {
  addPetSchema,
};
