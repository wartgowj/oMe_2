
// Dependencies
// =============================================================
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================

//handles main userview
router.get("/ome/:userId", function (req, res) {
    var ownerData;
    var borrowerData;
    var items;
    var users;

    db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            owner_id: req.params.userId,
            is_returned: false
        }
    }).then(function (dbData) {
        ownerData = dbData;
        console.log(ownerData.due_date);
    }).then(db.Transaction.findAll({
        include: [db.Item, "owner", "borrower"],
        where: {
            borrower_id: req.params.userId,
            is_returned: false
        }
    }).then(function (borrowData) {
        borrowerData = borrowData;
    }).then(db.Item.findAll({
        include: [db.User]
    }).then(function (itemData) {
        items = itemData;
    }).then(db.User.findAll({
    }).then(function (userData) {
        users = userData;
        res.render("userView", { lentItems: ownerData, loanedItems: borrowerData, Item: items, User: users });
    }).catch(function (reason) {
        console.log(reason);
    }))))
});

router.post("/ome/addBorrow", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    });
});

router.post("/ome/addLend", function (req, res) {
    db.Transaction.create(req.body).then(function (dbTrans) {
        res.json(dbTrans);
    }).catch(function (reason) { console.log(reason) });
});

router.put("/api/update/:transId", function (req, res) {
    db.Transaction.update({
        is_returned: true
    },{
        where: {
            id: req.params.transId
        }
    }).then(function (dbTrans) {
        res.json(dbTrans);
        console.log(dbTrans);
    }).catch(function (reason) {
        console.log(reason);
    });
});

module.exports = router;