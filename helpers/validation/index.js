const { register } = require("./auth/register");
const { login } = require("./auth/login");
const { addPetSchema } = require("./auth/pets");
const { updateUser } = require("./auth/updateUser");
const { noticeAddSchema } = require("./notices");

module.exports = {
  register,
  login,
  addPetSchema,
  updateUser,
  noticeAddSchema,
};
