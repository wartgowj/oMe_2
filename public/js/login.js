$(document).ready(function () {
    
    var userRoute;

    $(document).on("submit", function(){
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    checkUsers(username, password);
    
})

});

function checkUsers(username, password) {
    $.get("/api/getusers", function (users) {
        for (i = 0; i < users.length; i++) {
            if (username === users[i].name) {
                if(password === users[i].password){
                    sessionStorage.username = users[i].name;
                    sessionStorage.id = users[i].id;
                    userRoute = "/" + sessionStorage.username;
                    getUserView(userRoute);
                }else{
                    alert("Incorrect Password!")
                }
            }
        }
    });
}

function getUserView(userRoute) {
    window.location.href = userRoute;
}