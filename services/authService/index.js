const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../../models");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");
const { constants } = require("../../helpers");

const { SECRET } = process.env;

const register = async ({ email, password, city, phone } = {}) => {
  const userInstance = await UserModel.findOne({ email });
  if (userInstance) throw generateError(RESPONSE_ERRORS.emailUsed);
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await UserModel.create({
    email,
    password: passwordHash,
    city,
    phone,
  });
  return {
    user: {
      email: newUser.email,
    },
  };
};

const login = async ({ email, password } = {}) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw generateError(RESPONSE_ERRORS.unauthorized);
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw generateError(RESPONSE_ERRORS.unauthorized);

  const payload = {
    userId: user._id,
  };
  const accessToken = jwt.sign(payload, SECRET);
  const updatedUser = await UserModel.findByIdAndUpdate(
    user._id,
    { accessToken },
    constants.DEFAULT_UPDATE_OPTIONS
  );
  return {
    accessToken: updatedUser.accessToken,
    user: { email: updatedUser.email },
  };
};

const logout = async (user) => {
  await UserModel.findByIdAndUpdate(user._id, { accessToken: null });
};

module.exports = {
  register,
  login,
  logout,
};
