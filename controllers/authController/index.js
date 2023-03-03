const { authService } = require('../../services');

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

module.exports = {
  register,
  login,
  logout,
};
