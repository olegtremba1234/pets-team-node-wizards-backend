const Joi = require("joi").extend(require("@joi/date"));

const updateUser = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z-а-і-І-яА-Я]+$/),
  email: Joi.string().min(2).email(),
  birthday: Joi.date().max("now").format("DD.MM.YYYY"),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
  city: Joi.string().pattern(/^[a-zA-Z-а-і-І-яА-Я]+$/),
  avatarUrl: Joi.string(),
});

module.exports = {
  updateUser,
};
