//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersControllers = require("./controllers/ordersController");

//CONFIG
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersControllers);

//ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, nothing here");
});

//EXPORT

module.exports = app;
