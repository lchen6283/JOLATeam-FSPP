const db = require("../db/dbConfig");

// GET ALL
const getAllOrders = async (userid) => {
  try {
    const allOrders = await db.any(
      `SELECT * FROM orders WHERE userid = ${userid}`
    );
    return allOrders;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const createOrder = async (
  userid,
  {
    restaurant_id,
    restaurant_name,
    date,
    delivery_address,
    total_cost,
    order_contents,
  }
) => {
  try {
    const newOrder = await db.one(
      "INSERT INTO orders (restaurant_id, restaurant_name, date, delivery_address, total_cost, order_contents, userid) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        restaurant_id,
        restaurant_name,
        date,
        delivery_address,
        total_cost,
        order_contents,
        userid,
      ]
    );
    return newOrder;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllOrders,
  createOrder,
};
