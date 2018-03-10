$(document).ready(function() {
    //jquery values
    const item = $("#item");
    const itemType = $("#itemType");
    const owner = $("#owner");
    const dueDate = $("#dueDate");

    //Click events
    $(document).on("click", "button.addItem", handleItem);

    function handleItem(event) {
        event.preventDefault();
        // Wont submit the transaction if fields are blank
        if (!item.val().trim() || !itemType.val().trim() || !owner.val()) {
            return;
        }
        // Constructing a newTransaction object to hand to the database
        var newItem = {
            name: item.val().trim(),
            type: itemType.val().trim(),
            owner_id: owner.val().trim()
        };

        submitItem(newItem);
    }

    // Submits a new transaction
    function submitItem(item) {
        $.post("/addItem", item)
    }
});


