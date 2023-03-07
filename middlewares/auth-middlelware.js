const { generateError } = require("../helpers/utils");
const { RESPONSE_ERRORS } = require("../helpers/constants");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("../models/user-model");

const { SECRET: jwtSecret } = process.env;

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw generateError(RESPONSE_ERRORS.unauthorized);
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw generateError(RESPONSE_ERRORS.unauthorized);
    }

    try {
      const { userId } = jsonwebtoken.verify(token, jwtSecret);
      const userInstance = await UserModel.findById(userId);

      if (!userInstance || userInstance.accessToken !== token) {
        throw generateError(RESPONSE_ERRORS.unauthorized);
      }

      req.user = userInstance;

      next();
    } catch (error) {
      throw generateError(RESPONSE_ERRORS.unauthorized);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authMiddleware,
};
