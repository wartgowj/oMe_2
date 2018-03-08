// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
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