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

router.get("/:userId", function (req, res) {
    var ownerData;
    var borrowerData;

    db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            owner_id: req.params.userId,
            // borrower_id: req.params.userId
        }
    }).then(function (dbData) {
        
        ownerData = dbData;
        console.log(ownerData.due_date);
        
        
    }).then(db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            borrower_id: req.params.userId,
            // borrower_id: req.params.userId
        }

    }).then(function (borrowerData) {

        borrowerData = borrowerData;
        res.render("userView", { lentItems: ownerData, loanedItems: borrowerData });

    }).catch(function (reason) {
        console.log(reason);
    }))
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

// cms route loads cms.html
router.get("/:user", function (req, res) {
    res.render('userView');
});

router.get("/transaction", function (req, res) {
    res.render('transaction');
});



module.exports = router;