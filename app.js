const express = require("express");
const app = express();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const path = require("path");
const volleyball = require("volleyball");
const auth = require("./routes/auth");
const db = require("./db");
const notFound = require("./routes/404");

// volleyball logger
app.use(volleyball);
//body-parser
app.use(bodyParser.json());

// ejs
app.set("view engine", "ejs");
app.set("views", "views");

//use static
app.use(express.static(path.join(__dirname, "public")));

// router
app.use(router);
//auth routs
app.use("/api", auth);
//db
db();

//error handel

const errorHandel = (req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    status: "unexpected error occur"
  });
};

app.use(errorHandel);
//404

app.use(notFound);
//port
const port = process.env.port || 7000;
app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
