$(document).ready(function() {
    //Click events
    $(document).on("click", "button.addBorrow", handleAddBorrow);
    $(document).on("click", "button.addLend", handleAddLend);
    // $(document).on("click", "button.borrow", handleAddBorrow);
    // $(document).on("click", "button.lend", handleAddLend);

    function handleAddBorrow(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!item.val().trim() || !borrower.val().trim() || !dateDue.val()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newBorrow = {
            item_id: item
                .val()
                .trim(),
            owner_id: owner
                .val()
                .trim(),
            borrower_id: borrower.val(),
            due_date: dueDate.val()
        };
            submitBorrow(newBorrow);

    }

    // Submits a new post and brings user to blog page upon completion
    function submitBorrow(borrow) {
        $.post("/:user/addBorrow", post, function() {
            window.location.href = "/:user";
        });
    }
    function handleAddLend(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!item.val().trim() || !owner.val().trim() || !dateDue.val()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newLend = {
            item_id: item
                .val()
                .trim(),
            owner_id: owner
                .val()
                .trim(),
            borrower_id: borrower.val(),
            due_date: dueDate.val()
        };
        submitLend(newLend);

    }

    // Submits a new post and brings user to blog page upon completion
    function submitLend(Lend) {
        $.post("/:user/addBorrow", post, function() {
            window.location.href = "/:user";
        });
    }

});
