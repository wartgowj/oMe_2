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

const userController = require("./controllers/user-controller.js");
const transController = require("./controllers/transaction-controller.js");
const viewController = require("./controllers/view-controller.js");
const itemController = require("./controllers/item-controller.js");



app.use(userController);
app.use(transController);
app.use(viewController);
app.use(itemController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  // });
});



// function usersCreate() {
//   db.User.create({
//     name: 'bryan', 
//     password: '12345',
//     image: "https://www.pexels.com/photo/grey-fur-kitten-127028/"});

//   db.User.create({
//     name: 'josh',
//     password: '12345',
//     image: "https://www.pexels.com/photo/silver-tabby-cat-lying-on-brown-wooden-surface-126407/"
//   });

//   db.User.create({
//     name: 'jamie',
//     password: '12345',
//     image: "https://www.pexels.com/photo/animal-cat-face-close-up-feline-416160/"
//   });

//   db.User.create({
//     name: 'jen',
//     password: '12345',
//     image: "https://www.twenty20.com/photos/58c94916-074f-4e2a-9884-18959587cb06"
//   });
// }

// function itemCreate() {
//   db.Item.create({
//     name: 'ipad',
//     type: 'thing',
//     is_borrowed: false,
//     owner_id: 1
//   });

//   db.Item.create({
//     name: 'ipad',
//     type: 'thing',
//     is_borrowed: true,
//     owner_id: 2
//   });

//   db.Item.create({
//     name: 'case of beer',
//     type: 'favor',
//     is_borrowed: true,
//     owner_id: 3
//   });

//   db.Item.create({
//     name: '20$',
//     type: 'money',
//     is_borrowed: true,
//     owner_id: 4
//   });
// }


// function createTransaction() {
//   db.Transaction.create({
//     owner_id: 2,
//     item_id: 2,
//     borrower_id: 4,
//     due_date: '2018-03-20',
//     is_returned: false,
//   });

//   db.Transaction.create({
//     owner_id: 3,
//     item_id: 3,
//     borrower_id: 2,
//     due_date: '2018-03-20',
//     is_returned: false,
//   });

//   db.Transaction.create({
//     owner_id: 4,
//     item_id: 4,
//     borrower_id: 1,
//     due_date: '2018-03-20',
//     is_returned: false,
//   });
// }






// createTransaction();
// usersCreate()
// itemCreate();