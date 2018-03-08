$(document).ready(function() {
    
    getAuthors();
    getItems();

    function getAuthors() {
        $.get("/api/users", function (data) {
           console.log(data)
        });
    }

    function getItems() {
        $.get("/api/items", function (data) {
            console.log(data)
        });
    }
   

    
});
