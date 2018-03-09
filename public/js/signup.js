$(document).ready(function () {
    
    var userRoute = "";
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
        //if everything checks out stores username and password into session storage
        sessionStorage.username = username.val().trim();
        sessionStorage.password = password.val().trim();
        sessionStorage.image = image.val().trim();
       
        insertUser({
            name: username.val().trim(),
            password: password.val().trim(),
            image: image.val().trim()
        });
    }

    function insertUser(userData) {
        userRoute = "/" + username.val();
        $.post("/api/adduser", userData)
        .then(getUserView(userRoute));
    }

    function getUserView(userRoute) {
        window.location.href = userRoute;
        // $.get("/user", function(data) {
         
        // });
      }
});

