const express = require("express");
const { newsController } = require("../../../controllers");
const { callController } = require("../../../middlewares");

const router = express.Router();

router.get("/", callController(newsController.getAllNews));
router.get("/title", callController(newsController.searchNewsController));

module.exports = router;
