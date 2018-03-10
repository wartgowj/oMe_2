$(document).ready(function () {

    const username = $("#username");
    const password = $("#password");
    const passwordCheck = $("#password2");
    const image = $("#image");

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
        if (!image.val().trim()) {
            alert("mugshot not entered!");
            return;
        }
        insertUser({
            name: username.val().trim(),
            password: password.val().trim(),
            image: image.val().trim()
        });
    }

    function insertUser(userData) {
        $.post("/api/adduser", userData)
        .then(function(data){
            getUserView(data);
        });
    }

    function getUserView(data) {
        console.log(data);
        //if everything checks out stores username and password into session storage
        sessionStorage.userId = data.id;
        sessionStorage.username = data.name;
        sessionStorage.image = data.image;
        let userId = data.id;
        let userRoute = "/ome/" + userId;
        window.location.href = userRoute;
      }
});

