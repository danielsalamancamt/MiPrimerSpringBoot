
$.get("/user",function(data){
    console.log(data);
    $("#loginzone").hide();
    $("#index").hide();
    $("#userZone").empty();
    $("#userZone").append("<div id='user' class=\"card mb-3\">\n" +
        "  <div class=\"row g-0\">\n" +
        "    <div class=\"col-md-3\"><img src='"+data.avatar_url+"'width='70'></div><div class=\"col-md-6\">\n" +
        "      <div id='user-body' class=\"card-body\"><h5 class=\"card-title\">Bienvenido!</h5><strong>"+data.name+"\n" +
        "      </strong></div></div><div class=\"col-md-1\">\n" +
        "      <div class=\"col-md-1\"><button class=\"btn btn-secondary\" onclick=\"logout()\">Salir</button></div>"+
        "</div></div> </div></div>");
    $("#userZone").show();
    $("#home").show();
});

function logout(){
    $.post("/logout", function() {
        $("#userZone").html('');
        $("#loginzone").show();
        $("#index").show();
        $("#userZone").hide();
        $("#home").hide();
    })
    return true;
}