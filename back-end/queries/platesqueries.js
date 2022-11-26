const db = require('../db/dbConfig');

// GET ALL
const getAllPlates = async (menuid) => {
  try {
    const allPlates = await db.any(
      `SELECT * FROM plates WHERE menuid = ${menuid}`,
    );
    console.log(allPlates);
    return allPlates;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllPlates
};
