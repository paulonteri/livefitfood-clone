const express = require("express");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");
const modelData = require("./models/data");
const e = require("express");

app.use(express.static("public"));

app.set("view engine", "hbs");

// extract data from form in the POST request body.
app.use(express.urlencoded({ extended: true }));

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
  const username = req.body.username;
  const password = req.body.password;
  var usernameError = false;
  var usernameErrorMessage = "";
  var passwordError = false;
  var passwordErrorMessage = "";

  if (username) {
    // validation
  } else {
    usernameError = true;
    usernameErrorMessage = "Username cannot be blank!";
  }

  if (password) {
    // validation
  } else {
    passwordError = true;
    passwordErrorMessage = "Password cannot be blank!";
  }

  // Handle Errors
  if (usernameError || passwordError) {
    res.render("login", {
      extraFormClasses: "invalid-form",
      username: username,
      usernameError: usernameError,
      usernameErrorMessage: usernameErrorMessage,
      password: password,
      passwordError: passwordError,
      passwordErrorMessage: passwordErrorMessage,
    });
  } else {
    res.redirect("/");
  }
  //
});

// REGISTER
app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, () => console.log(`App listening to port ${port}`));
