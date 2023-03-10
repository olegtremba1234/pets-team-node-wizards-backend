const Joi = require("joi").extend(require("@joi/date"));

const addPetSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  birthDay: Joi.date().max("now").format("DD.MM.YYYY").required(),
  breed: Joi.string().min(2).max(16).required(),
  comments: Joi.string().min(8).max(120).required(),
});

module.exports = {
  addPetSchema,
};
