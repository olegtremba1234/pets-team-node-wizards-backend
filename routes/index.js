const usersRouter = require("./api/usersRouter");
const petsRouter = require("./api/petsRouter");
const noticesRouter = require("./api/noticesRouter");
const partnersRouter = require("./api/partnersRouter/");
const newsRouter = require("./api/newsRouter/");
const authRouter = require("./api/authRouter");

module.exports = {
  usersRouter,
  petsRouter,
  noticesRouter,
  partnersRouter,
  newsRouter,
  authRouter,
};
