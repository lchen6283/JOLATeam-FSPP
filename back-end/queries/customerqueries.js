const db = require("../db/dbConfig");

// GET ALL

const getAllCustomers = async () => {
  try {
    const customers = await db.any("SELECT * FROM customer");
    return customers;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllCustomers,
};
