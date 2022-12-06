const express = require("express");
const db = require("../db/dbConfig");
const menus = express.Router();
const platesController = require("./platesController");

menus.use("/:cuisine/plates", platesController);

const { getAllMenus, getOneMenu } = require("../queries/menusqueries");

//GET ALL
menus.get("/", async (req, res) => {
  const customerObj = await getAllMenus();
  if (customerObj) {
    res.json({ sucess: true, payload: customerObj });
  } else {
    res.status(404).json("Error");
  }
});

//GET ONE
menus.get("/:cuisine", async (req, res) => {
  const { cuisine } = req.params;
  const menu = await getOneMenu(cuisine);
  if (menu) {
    res.status(200).json({ success: true, payload: menu });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

module.exports = menus;
