//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
const axios = require("axios");
const bcrypt = require("bcrypt");
require("dotenv").config();

const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersController = require("./controllers/ordersController");
const menusController = require("./controllers/menusController");
const platesController = require("./controllers/platesController");


//CONFIG
const app = express();

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.use(cors(corsOptions));
//app.use(cors({ credentials: true, origin: "*" }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
//   res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
// });
// app.use(cors({
//   origin: '*', // use your actual domain name (or localhost), using * is not recommended
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
//   credentials: true
// }))
app.use(express.json());
app.use("/users", usersController);
app.use("/reviews", reviewsController);
app.use("/orders", ordersController);
app.use("/menus", menusController);
app.use("/plates", platesController);

//ROUTES
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
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
