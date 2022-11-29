const express = require("express");
const db = require("../db/dbConfig");
const customer = express.Router();

const { getAllCustomers } = require("../queries/customerqueries");

customer.get("/", async (req, res) => {
  const customerObj = await getAllCustomers();
  if (customerObj) {
    res.json({ sucess: true, payload: customerObj });
  } else {
    res.status(404).json("Error");
  }
});

module.exports = customer;
