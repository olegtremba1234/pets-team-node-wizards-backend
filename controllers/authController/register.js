// const { createHttpException } = require("../../../helpers");
const { UserModel } = require("../../models");
// const bcrypt = require("bcryptjs");
const bcrypt = require("bcrypt");
// const { generateError, responseErrors } = require("../../helpers/constants");
const createError = require("http-errors");

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const userInstance = await UserModel.create({
    email,
    password: passwordHash,
  }).catch(() => {
    throw createError(409, "Email in use.");
  });

  res.status(201).json({
    email: userInstance.email,
  });
};

module.exports = {
  register,
};
