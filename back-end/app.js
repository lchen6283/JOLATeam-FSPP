//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const customerController = require("./controllers/customerController");

//CONFIG
const app = express();

app.use(cors());
app.use(express.json());
app.use("/customer", customerController);
//ROUTES

app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, no such route");
});

//EXPORT

module.exports = app;
