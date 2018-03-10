$(document).ready(function() {

    //Click events
    $(document).unbind().one("click", "button.borrow", handleBorrow);
    $(document).unbind().one("click", "button.lend", handleLend);
    $(document).on("click", ".update", itemReturned);

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
        var newBorrow = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower,
            due_date: dueDate.val()
        };
        console.log(newBorrow);
        submitBorrow(newBorrow);

    }

    // Submits a new transaction
    function submitBorrow(trans) {
        console.log('posting now');
        $.post("/ome/addBorrow", trans).then(function () {
            location.reload();
        })
    }

    function handleLend(event) {
        event.preventDefault();
        console.log('go add a borrow');
        var itemStr = $("#itemLent").val();
        var itemArr = itemStr.split(',');
        var item = itemArr[0];
        var owner = itemArr[1];
        var dueDate = $("#dueDateLend");
        var borrower = $("#borrower");
        console.log(owner);
        console.log(item);
        console.log(borrower);
        // Wont submit the transaction if fields are blank
        if (!item || !borrower || !dueDate.val() || !owner) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newLend = {
            item_id: item,
            owner_id: owner,
            borrower_id: borrower.val(),
            due_date: dueDate.val()
        };
        console.log(newLend);
        submitLend(newLend);
    }


function submitLend(trans) {
    console.log('posting now');
    $.post("/ome/addLend", trans).then(function () {
        location.reload();
    });
}



    // This function figures out which trans to update
    function itemReturned(event) {
        event.preventDefault();
        var id = $(this).data("trans");
        console.log(id);
        $.ajax("/api/update/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            });
    }
});