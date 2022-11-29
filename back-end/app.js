//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();


const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersControllers = require("./controllers/ordersController");

//CONFIG
const app = express();

// const initializePassport = require("./passportConfig");

// initializePassport(passport);

app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersControllers);

//ROUTES
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
  //res.render("index");
});

app.get("/yelp/:location", async (req, res) => {
  const { location } = req.params;
  const config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}&limit=9`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      "Accept-Encoding": false,
    },
  };
  axios(config)
    .then(function (response) {
      return JSON.stringify(response.data, null, 2);
    })
    .then(function (jsonResponse) {
      res.send(jsonResponse);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, nothing here");
});

//EXPORT
module.exports = app;