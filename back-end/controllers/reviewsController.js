const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
} = require("../queries/reviewsqueries");

//GET ALL REVIEWS, or ALL REVIEWS BELONGING TO ONE USER

//first with route users/all/reviews , latter with route users/:userid/reviews
router.get("/", async (req, res) => {
  const { userid } = req.params;
  const allReviews = await getAllReviews(userid);
  if (allReviews.length) {
    res.status(200).json(allReviews);
  } else {
    console.error(allReviews);
    res.status(404).json({
      success: false,
      payload: `This user has not yet left any reviews`,
    });
  }
});

//Get one review BY review ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getOneReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: `Review with id ${id} does not exist.` });
  }
});

// CREATE
router.post("/:orderid", async (req, res) => {
  const { orderid } = req.params;
  try {
    const review = await createReview(orderid, req.body);
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const review = await updateReview(
      req.params.id,
      req.params.userid,
      req.body
    );
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
