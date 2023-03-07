const express = require("express");
const { petsController } = require("../../../controllers");
const {
  validateBody,
  callController,
  authMiddleware,
  uploadCloudMiddleware,
} = require("../../../middlewares");
const { validationSchemas } = require("../../../helpers");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  uploadCloudMiddleware.single("avatar"),
  validateBody(validationSchemas.addPetSchema),
  callController(petsController.createPet)
);

router.delete("/:id", authMiddleware, callController(petsController.removePet));

router.get(
  "/current",
  authMiddleware,
  callController(petsController.currentPetController)
);

router.patch(
  "/avatarURL/:petId",
  authMiddleware,
  uploadCloudMiddleware.single("avatar"),
  callController(petsController.updatePetAvatar)
);

module.exports = router;
