const db = require("../db/dbConfig");

// GET ALL
const getAllReviews = async (userid) => {
  try {
    if (userid === "all") {
      const allReviews = await db.any(
        "SELECT users.firstname, users.lastname, users.avatar, reviews.rating, reviews.content, reviews.img_url, reviews.date FROM reviews JOIN users ON users.id = reviews.userid"
      );
      return allReviews;
    }
    const allReviews = await db.any(
      `SELECT users.firstname, users.lastname, users.avatar, reviews.rating, reviews.content, reviews.img_url, reviews.date FROM reviews JOIN users ON users.id = reviews.userid WHERE users.id = ${userid}`
    );
    return allReviews;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const getOneReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

const createReview = async (
  userid,
  { orderid, rating, content, img_url, date }
) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (userid, orderid, rating, content, img_url, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [userid, orderid, rating, content, img_url, date]
    );
    return newReview;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

const updateReview = async (
  id,
  userid,
  { orderid, rating, content, img_url, date }
) => {
  try {
    const updateReview = await db.one(
      "UPDATE reviews SET userid=$1, orderid=$2, rating=$3, content=$4, img_url=$5, date=$6 where id=$7 RETURNING *",
      [userid, orderid, rating, content, img_url, date, id]
    );
    return updateReview;
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
};
