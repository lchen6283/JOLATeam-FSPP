const express = require("express");
const router = express.Router({ mergeParams: true });

const { getAllPlates } = require("../queries/platesqueries");

router.get("/", async (req, res) => {
  const { menuid } = req.params;
  const allPlates = await getAllPlates(menuid);
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