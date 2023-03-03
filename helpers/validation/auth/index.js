const { register } = require("./register");
const { login } = require("./login");
const { addPetSchema } = require("./pets");

module.exports = {
  register,
  login,
  addPetSchema,
};
