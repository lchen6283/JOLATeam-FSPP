const express = require('express');
const db = require('../db/dbConfig');
const menus = express.Router();
const platesController = require("./platesController");

 menus.use("/:menuid/plates", platesController);

const { getAllMenus, getOneMenu } = require('../queries/menusqueries');

//GET ALL
menus.get('/', async (req, res) => {
  const customerObj = await getAllMenus();
  if (customerObj) {
    res.json({ sucess: true, payload: customerObj });
  } else {
    res.status(404).json('Error');
  }
});

//GET ONE
menus.get('/:id', async (req, res) => {
  const { id } = req.params;
  const menu = await getOneMenu(id);
  if (menu) {
    res.status(200).json({ success: true, payload: menu });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

module.exports = menus;
