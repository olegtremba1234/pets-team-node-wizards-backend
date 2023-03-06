const { authService } = require("../../services");
const { generateError } = require("../../helpers/utils");
const { RESPONSE_ERRORS } = require("../../helpers/constants");
const { UserModel } = require("../../models");

const register = async (req, res, next) => {
  const user = await authService.register(req.body);
  res.status(201).json(user);
};

const login = async (req, res, next) => {
  const user = await authService.login(req.body);
  res.status(200).json(user);
};

const logout = async (req, res, next) => {
  await authService.logout(req.user);
  res.status(204).send();
};

const getUser = async (req, res, next) => {
  const { name, email, phone, city, birthday, avatarUrl } = req.user;
  res.status(200).json({ name, email, phone, city, birthday, avatarUrl });
};

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const user = await authService.updateUser(_id, req.body);
  res.status(201).json(user);
};

const updateAvatar = async (req, res, next) => {
  if (!req.file) {
    throw generateError(RESPONSE_ERRORS.notImage);
  }
  const { _id } = req.user;
  const avatarUrl = req.file.path;
  await UserModel.findByIdAndUpdate(_id, { avatarUrl });
  res.status(201).json({ avatarUrl });
};

module.exports = {
  register,
  login,
  logout,
  getUser,
  updateUser,
  updateAvatar,
};
