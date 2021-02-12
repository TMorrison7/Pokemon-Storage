var userName = ""
var password = ""
$("#submitButton").click(function () { 
    userName = ($("input[name='username']").val()) 
    localStorage.setItem("username",userName);
    $.post( "http://localhost:8080/Register", {"UserName":userName, "Password":password} );
    window.location.href = "http://127.0.0.1:5500/Pokemon/src/main/frontend/userPage.html"   
});