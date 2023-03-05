const express = require("express");
const authController = require("../../../controllers/authController");
const {
  validateBody,
  callController,
  authMiddleware,
  uploadCloudMiddleware,
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
  .post("/logout", authMiddleware, callController(authController.logout))
  .post(
    "/avatar",
    authMiddleware,
    uploadCloudMiddleware.single("avatar"),
    callController((req, res) => {
      console.log(req.file);
      res.status(201).json({ message: "file uploaded successfully" });
    })
  )
  .get("/current", authMiddleware, callController(authController.getUser))
  .patch(
    "/current",
    authMiddleware,
    validateBody(validationSchemas.updateUser),
    callController(authController.updateUser)
  );

module.exports = router;
