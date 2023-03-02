const express = require("express");
const friendsController = require("../../../controllers/partnersController");
const { callController } = require("../../../middlewares");

const router = express.Router();

router.get("/", callController(friendsController.getAllFriends));

module.exports = router;
