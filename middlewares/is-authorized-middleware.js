const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("../models/user-model");

const { SECRET: jwtSecret } = process.env;

const isAuthorizedMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return next();
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      return next();
    }

    const { userId } = jsonwebtoken.verify(token, jwtSecret);
    const user = await UserModel.findById(userId);

    if (!user) {
      return next();
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAuthorizedMiddleware,
};
