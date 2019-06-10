const Joi = require("@hapi/joi");
const User = require("../model/users");
const bcrypt = require("bcryptjs");

//save users
const saveUser = async (name, password) => {
  const user = new User({
    name,
    password
  });
  try {
    const newUser = await user.save();
    if (newUser) {
      return newUser;
    }
  } catch (error) {
    return false;
  }
};

// find user
const findUser = async name => {
  try {
    const result = await User.findOne({ name: name });
    if (result) {
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

//hash password

const passwordHash = async password => {
  const hash = await bcrypt.hash(password, 12);
  if (hash) {
    return hash;
  }
  return false;
};
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

exports.postSignup = async (req, res, next) => {
  console.log("body", req.body);

  const result = Joi.validate(req.body, schema);
  const name = req.body.username;
  const password = req.body.password;

  if (!result.error === null) {
    return res.status(400).json({
      status: "Please use valid user name or password!"
    });
  }
  const hashPassword = await passwordHash(password);

  if (hashPassword) {
    const result = await findUser(name);
    if (result) {
      const newUser = saveUser(name, hashPassword);
      if (newUser) {
        console.log(newUser);
        return res.status(200).json({
          status: "save user into database"
        });
      }
    }
  }

  return res.json({
    status: "user name already use !"
  });
};

//todo not found route
