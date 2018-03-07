$(document).ready(function () {

    $(document).on("submit", storeCurrentUser);

    const username = $("#username");
    const password = $("#password");

    function storeCurrentUser(event){
        event.preventDefault();
        //store username and password into session storage
        sessionStorage.username = username.val().trim();
        sessionStorage.password = password.val().trim();
    }

});