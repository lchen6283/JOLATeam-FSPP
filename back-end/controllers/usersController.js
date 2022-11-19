const express = require("express");
const db = require("../db/dbConfig");
const users = express.Router();
const reviewsController = require("./reviewsController.js");
const ordersController = require("./ordersController");

users.use("/:userid/reviews", reviewsController);
users.use("/:userid/orders", ordersController);

const {
  getAllUsers,
  getOneUser,
  createUser,
} = require("../queries/usersqueries");

//GET ALL
users.get("/", async (req, res) => {
  const customerObj = await getAllUsers();
  if (customerObj) {
    res.json({ sucess: true, payload: customerObj });
  } else {
    res.status(404).json("Error");
  }
});

//GET ONE
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getOneUser(id);
  if (user[0]) {
    res.status(200).json({ success: true, payload: user[0] });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

//POST
users.post("/new", async (req, res) => {
  const newUser = await createUser(req.body);
  res.status(200).json({ success: true, payload: newUser[0] });
});

module.exports = users;
