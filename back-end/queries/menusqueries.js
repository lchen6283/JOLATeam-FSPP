const db = require("../db/dbConfig");

// GET ALL

const getAllMenus = async () => {
  try {
    const menus = await db.any("SELECT * FROM menus");
    return menus;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getOneMenu = async (id) => {
  try {
    const oneMenu = await db.one("SELECT * FROM menus WHERE id = $1", id);
    return oneMenu;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

// Creating new Menu!?
// const createMenu = async (menu) => {
//   try {
//     const newMenu = await db.any(
//       "INSERT INTO menus (cuisine) VALUES ($1) RETURNING *",
//       [
//         menu.cuisine
//       ]
//     );
//     return newMenu;
//   } catch (error) {
//     console.log(error.message || error);
//     return error;
//   }
// };

module.exports = {
  getAllMenus,
  getOneMenu,
};
