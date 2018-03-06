// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================


// Each of the below routes just handles the HTML page that the user gets sent to.



router.get("/", function (req, res) {
    res.render('index');
});

router.get("/login", function (req, res) {
    res.render('login');
});

router.get("/signup", function (req, res) {
    res.render('signup');
});

// cms route loads cms.html
router.get("/item", function (req, res) {
    res.render('item');
});

router.get("/transaction", function (req, res) {
    res.render('transaction');
});



module.exports = router;