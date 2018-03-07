$(document).ready(function () {

    const username = $("#username");
    const password = $("#password");
    const passwordCheck = $("#password2");

    $(document).on("submit", "#signup-form", handleNewUser);

    function handleNewUser(event){
        event.preventDefault();
        //checks that username was entered
        if (!username.val().trim()) {
            alert("username not entered!");
            return;
        }
        //checks that password was entered
        if (!password.val().trim()) {
            alert("passwords not entered!");
            return;
        }
        //makes sure passwords match
        if (password.val().trim() != passwordCheck.val().trim()) {
            alert("passwords do not match!");
            return;
        }
        //if everything checks out stores username and password into session storage
        sessionStorage.username = username.val().trim();
        sessionStorage.password = password.val().trim();
    }
});