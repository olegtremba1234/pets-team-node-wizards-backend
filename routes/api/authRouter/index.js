const express = require("express");
const authController = require("../../../controllers/authController");
const {
  validateBody,
  callController,
  authMiddleware,
} = require("../../../middlewares");
const { validationSchemas } = require("../../../helpers");
const router = express.Router();

router
  .post(
    "/register",
    validateBody(validationSchemas.register),
    callController(authController.register)
  )
  .post(
    "/login",
    validateBody(validationSchemas.login),
    callController(authController.login)
  )
  .post("/logout", authMiddleware, callController(authController.logout));

module.exports = router;
