const Joi = require("@hapi/joi");

//validation
const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required()
});

exports.postSignup = (req, res, next) => {
  console.log("body", req.body);

  const result = Joi.validate(req.body, schema);

  res.json(result);
};

//todo not found route
