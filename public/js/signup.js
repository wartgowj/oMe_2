$(document).ready(function () {

    const username = $("#username");
    const password = $("#password");
    const passwordCheck = $("#password2");

    $(document).on("submit", "#signup-form", handleNewUser);

    function handleNewUser(event){
        event.preventDefault();
        if (!username.val().trim()) {
            console.log("username not entered!");
            return;
        }
        if (!password.val().trim()) {
            console.log("passwords not entered!");
            return;
        }
        if (password.val().trim() != passwordCheck.val().trim()) {
            console.log("passwords do not match!");
            return;
        }
        console.log("user added");
    }
});