const { register } = require("./register");
const { login } = require("./login");
const { addPetSchema } = require("./pets");
const { updateUser } = require("./updateUser");

module.exports = {
  register,
  login,
  addPetSchema,
  updateUser,
};
