//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const credentials = {
  user: "postgres",
  host: "localhost",
  database: "dev_smak",
  password: "1088291521",
  port: 5432,
};

const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersController = require("./controllers/ordersController");
const menusController = require("./controllers/menusController");
const platesController = require("./controllers/platesController");
//CONFIG
const app = express();

// const initializePassport = require("./passportConfig");

initializePassport(passport);

app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersController);

//ROUTES
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
  //res.render("index");
});

<<<<<<< HEAD
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
=======
app.get("/login", checkAuthenticated, (req, res) => {
  // flash sets a messages variable. passport sets the error message
  return res.redirect("/dashboard");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

function checkAuthenticated(req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get("/dashboard", (req, res) => {
  res.send("Welcome to Dashboard");
  //res.render("index");
>>>>>>> main
});

const { formatted } = require("./validators/yelpvalidators");

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
      let parsed = JSON.parse(jsonResponse).businesses;
      res.send(formatted(parsed));
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
