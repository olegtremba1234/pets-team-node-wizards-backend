const Joi = require("joi").extend(require("@joi/date"));

const addPetSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(16)
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ\s-']+){3,}$/)
    .required(),
  birthDay: Joi.date().max("now").format("DD.MM.YYYY"),
  breed: Joi.string()
    .trim()
    .min(2)
    .max(16)
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ\s-']+){3,}$/)
    .required(),
  comments: Joi.string().trim().min(8).max(120).required(),
});

module.exports = {
  addPetSchema,
};
