//post router

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    status: "🔒"
  });
});

router.post("/signup", (req, res, next) => {
  console.log("body", req.body);
  res.json({
    status: "🏹"
  });
});
module.exports = router;
