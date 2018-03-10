
// Dependencies
// =============================================================
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================

router.get("/ome/:user", function (req, res) {
        db.Transaction.findAll({
            include: [db.Item, "owner", "borrower"]
        }).then(function (dbData) {
            console.log(dbData);
            res.render("userView", {transaction : dbData});
            // res.json(dbData);
        });
});


module.exports = router;