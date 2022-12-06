const db = require("../db/dbConfig");

// GET ALL

const getAllUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getOneUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id = $1", id);
    return oneUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.any(
      "INSERT INTO users (firstname, lastname, address, city, state, zip, phonenumber, username, token, gary_points, avatar, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        user.firstname,
        user.lastname,
        user.address,
        user.city,
        user.state,
        user.zip,
        user.phonenumber,
        user.username,
        user.token,
        user.gary_points,
        user.avatar,
        user.is_active,
      ]
    );
    return newUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const editUser = async (
  id,
  {
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
    phonenumber,
    username,
    avatar,
    is_active,
  }
) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET firstname=$1, lastname=$2, address=$3, city=$4, state=$5, zip=$6, phonenumber=$7, username=$8, avatar=$9, is_active=$10 WHERE id=$11 RETURNING *",
      [
        firstname,
        lastname,
        address,
        city,
        state,
        zip,
        phonenumber,
        username,
        avatar,
        is_active,
        id,
      ]
    );
    return updatedUser;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  editUser,
};
