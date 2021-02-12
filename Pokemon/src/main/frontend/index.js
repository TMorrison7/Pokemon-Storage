var userName = ""
var password = ""
$("#submitButton").click(function () { 
    userName = ($("input[name='username']").val()) 
    password = ($("input[name='password']").val())
    localStorage.setItem("username",userName);
    //$.post( "http://localhost:8080/Register", {"UserName":userName, "Password":password} );
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/Register",
        data: JSON.stringify({"username":userName, "password":password}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
    window.location.href = "http://127.0.0.1:5500/Pokemon/src/main/frontend/userPage.html"   
});