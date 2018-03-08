// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
router.get("/api/users", function (req, res) {
    db.User.findAll({

    }).then(function (dbData) {
        res.json(dbData);
    });
});

router.get("/api/items", function (req, res) {
    db.Transaction.findAll({

    }).then(function (dbData) {
        res.json(dbData);
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