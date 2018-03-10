$(document).ready(function() {

    //Click events
    $(document).on("click", "button.borrow", handleBorrow);

    $(document).on("click", ".logout", logOut);

    function logOut() {
        sessionStorage.clear();
    }

    function handleBorrow(event) {
        event.preventDefault();
        console.log('go add a borrow');
        var itemStr = $("#itemBorrowed").val();
        var itemArr = itemStr.split(',');
        var item = itemArr[0];
        var owner = itemArr[1];
        var dueDate = $("#dueDate");
        var borrower = userId;
        console.log(owner);
        console.log(item);
        console.log(borrower);
        // Wont submit the transaction if fields are blank
        if (!item || !borrower || !dueDate.val() || !owner) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newTransaction = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower,
            due_date: dueDate.val()
        };
        console.log(newTransaction);
        // submitTransaction(newTransaction);

    }

    // Submits a new transaction
    function submitTransaction(trans) {
        console.log('posting now');
        $.post("/ome/addBorrow", trans).then(function () {
            console.log('gfy');
            location.reload();
        })
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
