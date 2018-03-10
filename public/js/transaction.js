$(document).ready(function() {

    //Click events
    $(document).on("click", "button.addTransaction", handleTransaction);



    function handleTransaction(event) {
        var itemStr = $("#item").val();
        var itemArr = itemStr.split(',');
        var item = itemArr[0];
        var borrower = $("#borrower");
        var owner = itemArr[1];
        var dueDate = $("#dueDate");
        event.preventDefault();
        console.log(owner);
        console.log(item);
        // Wont submit the transaction if fields are blank
        if (!item || !borrower.val().trim() || !dueDate.val() || !owner) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newTransaction = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower.val().trim(),
            due_date: dueDate.val()
        };

        submitTransaction(newTransaction);

    }

    // Submits a new transaction
    function submitTransaction(trans) {
        $.post("/addtransaction", trans)
    }
});
//
//     function handleAddLend(event) {
//         event.preventDefault();
//         // Wont submit the post if we are missing a body, title, or author
//         if (!item.val().trim() || !owner.val().trim() || !dateDue.val()) {
//             return;
//         }
//
//         // Constructing a newPost object to hand to the database
//         var newLend = {
//             item_id: item
//                 .val()
//                 .trim(),
//             owner_id: owner
//                 .val()
//                 .trim(),
//             borrower_id: borrower.val(),
//             due_date: dueDate.val()
//         };
//         submitLend(newLend);
//
//     }
//
//     // Submits a new post and brings user to blog page upon completion
//     function submitLend(Lend) {
//         $.post("/:user/addBorrow", post, function() {
//             window.location.href = "/:user";
//         });
//     }
//
// });
