//post router
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  res.status(404).json({
    status: "not found 404!",
    emoj: "⛔️"
  });
});

module.exports = router;
