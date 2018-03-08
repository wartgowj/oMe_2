$(document).ready(function() {
    
    getAuthors();


    function getAuthors() {
        $.get("/item", function (data) {
           console.log(data)
        });
    }



    // function createAuthorRow(authorData) {
    //     console.log(authorData);
    //     var newTr = $("<tr>");
    //     newTr.data("author", authorData);
    //     newTr.append("<td>" + authorData.name + "</td>");
    //     newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
    //     newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    //     newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    //     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    //     return newTr;
    // }

    // function renderAuthorList(rows) {
    //     authorList.children().not(":last").remove();
    //     authorContainer.children(".alert").remove();
    //     if (rows.length) {
    //         console.log(rows);
    //         authorList.prepend(rows);
    //     }
    //     else {
    //         renderEmpty();
    //     }
    // }
    
});
