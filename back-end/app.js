//DEPENDENCIES
const express = require("express");
const cors = require("cors");
//const { pool } = require("./dbConfig");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
});

const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersControllers = require("./controllers/ordersController");

//CONFIG
const app = express();

const initializePassport = require("./passportConfig");
initializePassport(passport)

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
  })
);
// Funtion inside passport which initializes passport
app.use(passport.initialize());
// Store our variables to be persisted across the whole session. Works with app.use(Session) above
app.use(passport.session());
app.use(flash());

app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersControllers);

//ROUTES
 app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
  //res.render("index");
});

app.get("/login", checkAuthenticated, (req, res) => {
  // flash sets a messages variable. passport sets the error message
  //console.log(req.session.flash.error);
  return res.status(200).json({
      success:true,
      redirectUrl: '/SignIn'
  })
});

app.post("/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
  })
);

function checkAuthenticated(req, res, next) {
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



app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, nothing here");
});

//EXPORT

module.exports = app;
