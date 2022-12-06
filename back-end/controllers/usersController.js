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
  editUser,
  getByUserName,
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

users.get("/username/:username", async (req, res) => {
  const { username } = req.params;
  const customerObj = await getByUserName(username);
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
  if (user) {
    res.status(200).json({ success: true, payload: user });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

//POST
users.post("/new", async (req, res) => {
  const newUser = await createUser(req.body);
  res.status(200).json({ success: true, payload: newUser[0] });
});

//UPDATE
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await editUser(id, req.body);
    res.status(200).json({ success: true, payload: updated });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, payload: `Error in edit with id ${id}` });
  }
});
module.exports = users;
