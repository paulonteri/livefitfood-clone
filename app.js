const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/product", function (req, res) {
  res.render("product-detail");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, () => console.log(`App listening to port ${port}`));
