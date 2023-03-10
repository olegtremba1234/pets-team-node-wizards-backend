const Joi = require("joi").extend(require("@joi/date"));

const updateUser = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+){3,}$/),
  email: Joi.string()
    .min(2)
    .max(63)
    .email()
    .pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/),
  birthday: Joi.date().max("now").format("DD.MM.YYYY"),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
  city: Joi.string().pattern(/^([a-zA-Z-А-Яа-яЁёЇїІіЄєҐґ']+){3,}$/),
  avatarUrl: Joi.string(),
});

module.exports = {
  updateUser,
};
