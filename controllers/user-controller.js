// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================
router.post("/api/adduser", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
        res.json(dbUser);
    });
});


module.exports = router;