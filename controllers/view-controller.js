
// Dependencies
// =============================================================
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================



// Each of the below routes just handles the HTML page that the user gets sent to.

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

module.exports = router;