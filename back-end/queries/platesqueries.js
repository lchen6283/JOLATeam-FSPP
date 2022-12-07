const db = require("../db/dbConfig");

// GET ALL
const pickRandom = (arr, count) => {
  let _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
};

const getAllPlates = async (cuisine) => {
  try {
    const menuId = await db.one(
      "SELECT * FROM menus WHERE cuisine = $1",
      cuisine
    );
    let id = menuId.id;
    const allPlates = await db.any(`SELECT * FROM plates WHERE menuid = ${id}`);
    return allPlates;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const OrderFiller = async (cuisine, budget) => {
  try {
    const menuId = await db.one(
      "SELECT * FROM menus WHERE cuisine = $1",
      cuisine
    );
    let id = menuId.id;
    const allPlates = await db.any(`SELECT * FROM plates WHERE menuid = ${id}`);
    const apps = allPlates.filter((e) => e.dish_type === "appetizers");
    const entrees = allPlates.filter((e) => e.dish_type === "entree");
    const desserts = allPlates.filter((e) => e.dish_type === "desserts");
    if (budget === "100") {
      return [
        ...pickRandom(apps, 1),
        ...pickRandom(entrees, 1),
        ...pickRandom(desserts, 1),
      ];
    } else if (budget === "150") {
      return [
        ...pickRandom(apps, 2),
        ...pickRandom(entrees, 2),
        ...pickRandom(desserts, 1),
      ];
    } else if (budget === "200") {
      return [
        ...pickRandom(apps, 2),
        ...pickRandom(entrees, 3),
        ...pickRandom(desserts, 2),
      ];
    }
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllPlates,
  OrderFiller,
};
