//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const axios = require("axios");
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

app.get("/yelp", async (req, res) => {
  const { location } = req.query;
  const config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?term=restaurants&location=hells+kitchen`,
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
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
