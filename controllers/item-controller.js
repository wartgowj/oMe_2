// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

router.get("/api/getitems", function(req, res){
    //gets all users from db
    db.Item.findAll({
        // include: [db.User]
    }).then(function(dbItem){
        res.json(dbItem);
    }).catch(function (reason) {
        console.log(reason);
    });
});

router.get("/additem", function (req, res) {
    db.User.findAll({
    }).then(function (dbData) {
        console.log(dbData);
        res.render("item", {User : dbData});
        // res.json(dbData);
    });
});

router.post("/additem", function (req, res) {
    db.Item.create(req.body).then(function (dbItem) {
        res.json(dbItem);
    }).catch(function (reason) {
        console.log(reason);
    });
});


module.exports = router;