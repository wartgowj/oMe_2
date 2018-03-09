// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
router.get("/item", function (req, res) {
    db.Item.findAll({

    }).then(function (dbData) {
        res.render("userView",{Item : dbData});
    });
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