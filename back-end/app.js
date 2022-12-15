//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const axios = require("axios");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
require("dotenv").config();

const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersController = require("./controllers/ordersController");
const menusController = require("./controllers/menusController");
const platesController = require("./controllers/platesController");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// CONFIG
const app = express();

// MIDLEWARE
app.use(cors(corsOptions));

app.use(express.json());
app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersController);
app.use("/menus", menusController);
app.use("/plates", platesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
});

// app.use('/register', require('./routes/register'));
// app.use('/auth', require('./routes/auth'));
// app.use('/refresh', require('./routes/refresh'));
// app.use('/logout', require('./routes/logout'));

//app.use(verifyJWT);

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

// S T R I P E
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());

app.post("/stripe/charge", cors(), async (req, res) => {
  console.log("Route reached", req.body);
  let { amount, id } = req.body;

  console.log("Amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

// Y E L P
const { formatted } = require("./validators/yelpvalidators");

app.get("/yelp/:location", async (req, res) => {
  const { location } = req.params;
  const config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}&limit=20`,
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
