// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Routes
// =============================================================
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



router.post("/api/authors", function (req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

router.post("/:user/addBorrow", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

router.post("/:user/addLend", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

module.exports = router;