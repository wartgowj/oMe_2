// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
router.post("/api/adduser", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
        res.json(dbUser);
    }).catch(function (reason) {
        console.log(reason);
    });
});

router.get("/", function (req, res) {
    res.render('index');
});

router.get("/login", function (req, res) {
    res.render('login');
});

router.get("/signup", function (req, res) {
    res.render('signup');
});

router.get("/api/getusers", function(req, res){
    //gets all users from db
    db.User.findAll({}).then(function(dbUser){
        res.json(dbUser);
    })
})

module.exports = router;