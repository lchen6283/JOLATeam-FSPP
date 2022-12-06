const express = require("express");
const router = express.Router({ mergeParams: true });

const { getAllPlates, OrderFiller } = require("../queries/platesqueries");

router.get("/", async (req, res) => {
  const { cuisine } = req.params;
  console.log(cuisine);
  const allPlates = await getAllPlates(cuisine);
  if (allPlates.length) {
    res.status(200).json(allPlates);
  } else {
    console.error(allPlates);
    res.status(404).json({
      success: false,
      payload: `NO ITEM`,
    });
  }
});

//GET RANDOM BY BUDGET
router.get("/:budget", async (req, res) => {
  const { cuisine, budget } = req.params;
  const menu = await OrderFiller(cuisine, budget);
  if (menu) {
    res.status(200).json({ success: true, payload: menu });
  } else {
    res.status(404).json({ success: false, payload: `not found` });
  }
});

// Create
// router.post("/", async (req, res) => {
//   try {
//     const plate = await createPlate(req.params.userid, req.body);
//     res.json(plate);
//   } catch (error) {
//     res.status(400).json({ error: error });
//   }
// });

module.exports = router;
