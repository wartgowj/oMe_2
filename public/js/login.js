$(document).ready(function () {
    
    const userRoute = "";
    const userFound = false;

    $(document).on("submit", function(){
    event.preventDefault();
    const username = $("#username").val().toLowerCase();
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
                  
                    userRoute = "/ome/" + sessionStorage.id;
                    swal({
                        type: 'success',
                        title: 'Welcome ' + username + "!",
                        text: 'Redirecting to your oMe page.',
                        timer: 3000,
                        onOpen: () => {
                            swal.showLoading()
                        }
                    }).then((result) => {
                        getUserView(userRoute);
                    })
                }else{
                    swal("Oops!", 'Incorrect Password', 'warning');
                    return;
                }
            }
        }if(userFound === false){
            swal("Sorry!", 'Username Not Found', 'error');
        }
    });
}

function getUserView(userRoute) {
    window.location.href = userRoute;
}
