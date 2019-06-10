const mongoose = require("mongoose");
require("dotenv/config");

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.LOCAL, {
      useNewUrlParser: true
    });
    if (connect) {
      console.log("connect !");
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = connection;
