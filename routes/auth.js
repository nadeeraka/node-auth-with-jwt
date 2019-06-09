//post router
const Joi = require("@hapi/joi");

//validation
const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    status: "🔒"
  });
});

router.post("/signup", (req, res, next) => {
  console.log("body", req.body);

  const result = Joi.validate(req.body, schema);

  res.json(result);
});
module.exports = router;
