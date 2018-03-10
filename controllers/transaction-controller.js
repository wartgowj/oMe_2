// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

router.get("/ome/:userId", function (req, res) {
    var ownerData;
    var borrowerData;

    db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            owner_id: req.params.userId,
            // borrower_id: req.params.userId
        }
    }).then(function (dbData) {
        console.log(dbData);
        
        ownerData = dbData;

    }).then(db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            borrower_id: req.params.userId,
            // borrower_id: req.params.userId
        }

    }).then(function (borrowData) {

        borrowerData = borrowData;
        
        res.render("userView", { lentItems: ownerData, loanedItems: borrowerData });

    }).catch(function (reason) {
        console.log(reason);
    }))

});

router.post("/ome/:user/addBorrow", function (req, res) {

    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

router.post("/ome/:user/addLend", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

router.get("/addtransaction", function (req, res) {
    var userdata;
    var itemdata;
    db.User.findAll({
    }).then(function (dbData) {
        userdata = dbData;
    }).then(db.Item.findAll({
    }).then(function(itemData){
        itemdata = itemData;
        res.render("transaction", {User : userdata, Item: itemdata});
    }).catch(function (reason) {
        console.log(reason);
    }))
});

router.post("/addTransaction", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    }).catch(function (reason) {
        console.log(reason);
    });
});
module.exports = router;