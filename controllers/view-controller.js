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

router.get("/:user", function (req, res) {
        db.Transaction.findAll({
            include: [db.Item, "owner", "borrower"]
        }).then(function (dbData) {
            console.log(dbData);
            res.render("userView", {transaction : dbData});
            // res.json(dbData);
        });
});

router.get("/transaction", function (req, res) {
    res.render('transaction');
});



module.exports = router;