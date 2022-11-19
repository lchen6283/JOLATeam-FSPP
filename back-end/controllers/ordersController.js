const express = require("express");
const router = express.Router({ mergeParams: true });

const { getAllOrders, createOrder } = require("../queries/ordersqueries");

router.get("/", async (req, res) => {
  const { userid } = req.params;
  const allOrders = await getAllOrders(userid);
  if (allOrders.length) {
    res.status(200).json(allOrders);
  } else {
    console.error(allOrders);
    res.status(404).json({
      success: false,
      payload: `This user has not yet ordered anything`,
    });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const order = await createOrder(req.params.userid, req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
