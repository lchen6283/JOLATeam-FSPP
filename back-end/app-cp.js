//DEPENDENCIES
const express = require("express");
const cors = require("cors");

const bcrypt = require("bcrypt");
//const cookieParser
const passport = require("passport");
require("dotenv").config();



const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersControllers = require("./controllers/ordersController");

//CONFIG
const app = express();

// const initializePassport = require("./passportConfig");

// initializePassport(passport)



//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, nothing here");
});

//EXPORT
module.exports = app;