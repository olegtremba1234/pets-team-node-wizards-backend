const express = require("express");
const { petsController } = require("../../../controllers");
const {
  validateBody,
  callController,
  authMiddleware,
} = require("../../../middlewares");
const { validationSchemas } = require("../../../helpers");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateBody(validationSchemas.addPetSchema),
  callController(petsController.createPet)
);

router.delete("/:id", authMiddleware, callController(petsController.removePet));

module.exports = router;
