$(document).ready(function () {
    
    const userRoute = "";
    const userFound = false;

    $(document).on("submit", function(){
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    checkUsers(username, password, userFound);
    
})

});

function checkUsers(username, password, userFound) {
    $.get("/api/getusers", function (users) {
        for (i = 0; i < users.length; i++) {
            if (username === users[i].name) {
                userFound = true;
                if(password === users[i].password){
                    sessionStorage.username = users[i].name;
                    sessionStorage.id = users[i].id;
                    userRoute = "/" + sessionStorage.username;
                    getUserView(userRoute);
                }else{
                    alert("Incorrect Password!");
                    return;
                }
            }
        }if(userFound === false){
            alert("User Not Found!")
        }
    });
}

function getUserView(userRoute) {
    window.location.href = userRoute;
}