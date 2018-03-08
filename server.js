// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// const itemController = require("./controllers/item-controller.js");
// const userController = require("./controllers/user-controller.js");
const transController = require("./controllers/transaction-controller.js");
const viewController = require("./controllers/view-controller.js");

// app.use(itemController);
// app.use(userController);
app.use(transController);
app.use(viewController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// function usersCreate() {
//   db.User.create({
//     name: 'Jaime', 
//     password: '12345',
//     image: "image"});
// }

// function createTransaction() {
//   db.Item.create({
//     name: 'cellphone',
//     type: 'money',
//     is_borrowed: true,
//     owner_id: 3
//   });
// }



// createTransaction()


// usersCreate();