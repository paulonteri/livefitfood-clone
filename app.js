const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");
const modelData = require("./models/data");

app.use(express.static("public"));
// extract data from form in the POST request body.
app.use(express.urlencoded());

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "main",
    helpers: {
      block: function (name) {
        var blocks = this._blocks,
          content = blocks && blocks[name];

        return content ? content.join("\n") : null;
      },

      contentFor: function (name, options) {
        var blocks = this._blocks || (this._blocks = {}),
          block = blocks[name] || (blocks[name] = []);

        block.push(options.fn(this));
      },
    },
  })
);

// HOME
function getFoodList() {
  return modelData.topMeals;
}

app.get("/", function (req, res) {
  res.render("home", {
    foodList: getFoodList(),
    menuListExists: true,
  });
});

// PACKAGE LISTING
app.get("/package-listing", function (req, res) {
  res.render("package-listing", { topMealPackages: modelData.topMealPackages });
});

// PRODUCT DETAIL
app.get("/product", function (req, res) {
  res.render("product-detail");
});

// LOGIN
app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", function (req, res) {
  console.log(req.body);
  res.end();
});

// REGISTER
app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, () => console.log(`App listening to port ${port}`));
