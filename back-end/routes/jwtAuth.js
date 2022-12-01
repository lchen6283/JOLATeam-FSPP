const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validInfo = require("../middlewares/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middlewares/authorize");

// SIGN-UP ROUTE
router.post("/register", validInfo, async (req, res) => {
  const { firstname, lastname, username, password, password2 } = req.body;
  const userStatus = {
    "is_active": true,
    "role": 2,
  }

  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username
    ]);
    
    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (firstname, lastname, username, password, is_active, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstname, lastname, username, bcryptPassword, userStatus.is_active, userStatus.role]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// SIGN-IN ROUTE
router.post("/login", validInfo, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username
    ]);
    console.log(user.rows[0])
    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Username");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    const firstName = user.rows[0].firstname;
    const lastName = user.rows[0].lastname;
    const userName = user.rows[0].username;
    const userRole = user.rows[0].role;
    return res.json({ jwtToken, firstName, lastName, userName, userRole });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// 
router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
