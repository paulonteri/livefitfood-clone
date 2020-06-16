const express = require("express");
const app = express();
const port = 7000;

const handlebars = require("express-handlebars");
const modelData = require("./models/data");

app.use(express.static("public"));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "main",
  })
);

// HOME
function getFoodList() {
  return modelData.topMealPackages;
}

app.get("/", function (req, res) {
  res.render("home", {
    foodList: getFoodList(),
    menuListExists: true,
  });
});

// PRODUCT DETAIL
app.get("/product", function (req, res) {
  res.render("product-detail");
});

// LOGIN
app.get("/login", function (req, res) {
  res.render("login");
});

// REGISTER
app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, () => console.log(`App listening to port ${port}`));
