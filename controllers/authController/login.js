// const { createHttpException } = require("../../../helpers");
// const { UserModel } = require("../../../models");
// const bcrypt = require("bcryptjs");
// const jsonwebtoken = require("jsonwebtoken");

// const { JWT_SECRET } = process.env;

const login = async (req, res, next) => {
  // const { email, password } = req.body;
  // const userInstanceOrNull = await UserModel.findOne({ email });
  // if (userInstanceOrNull === null) {
  //   throw createHttpException(401, "Email or password is wrong");
  // }
  // const isValidPassword = await bcrypt.compare(
  //   password,
  //   userInstanceOrNull.password
  // );
  // if (!isValidPassword) {
  //   throw createHttpException(401, "Email or password is wrong");
  // }
  // const payload = {
  //   userId: userInstanceOrNull._id,
  // };
  // const accessToken = jsonwebtoken.sign(payload, JWT_SECRET, {
  //   expiresIn: "1h",
  // });
  // await UserModel.findByIdAndUpdate(userInstanceOrNull._id, { accessToken });
  // res.json({ accessToken });
};

module.exports = {
  login,
};
