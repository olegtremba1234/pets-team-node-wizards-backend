const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { globalHandleError } = require("./middlewares");

const {
  authRouter,
  usersRouter,
  petsRouter,
  noticesRouter,
  partnersRouter,
  newsRouter,
} = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ message: "Successful" }));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/notices", noticesRouter);
app.use("/api/friends", partnersRouter);
app.use("/api/news", newsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(globalHandleError);

module.exports = app;
