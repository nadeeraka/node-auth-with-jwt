//post router
const express = require("express");
const router = express.Router();

const controller = require("../controller/authController");
router.get("/", (req, res, next) => {
  res.json({
    status: "🔒"
  });
});

router.post("/signup", controller.postSignup);
module.exports = router;
