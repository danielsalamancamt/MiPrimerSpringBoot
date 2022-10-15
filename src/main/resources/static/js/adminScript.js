let myURLClient='';

/*$("document").ready(function (){
    getClients();
});*/

function getAdmins(){
    $.ajax({
        url : 'api/Admin/all',
        type : 'GET',
        dataType : 'json',
        success : function(admins) {
            let cs=admins;
            console.log(cs);
            $("#admins").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].idAdmin+" "+'</td>'+
                    '<td>'+cs[i].name+" "+'</td>'+
                    '<td>'+cs[i].email+" "+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteAdmin("+cs[i].idAdmin+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailAdmin("+cs[i].idAdmin+")'>Actualizar</button></td></tr>"
                $("#admins").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getAdminInfo(){
    let idAdmin=$("#idAdmin").val();
    let nameAdmin=$("#nameAdmin").val();
    let emailAdmin=$("#emailAdmin").val();
    let passwordAdmin=$("#passwordAdmin").val();

    let admin={
        id:idAdmin,
        name:nameAdmin,
        email:emailAdmin,
        password:passwordAdmin
    };
    return admin;
}

function cleanInputs(){
    $("#idAdmin").val("");
    $("#nameAdmin").val("");
    $("#emailAdmin").val("");
    $("#passwordAdmin").val("");
}

function saveAdmin(){
    let data=getAdminInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Admin/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(admins) {
            cleanInputs();
            getAdmins();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteAdmin(idAdmin){
    let data={id:idAdmin};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(admins) {
            cleanInputs();
            getAdmins();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateAdmin(){
    let data=getAdminInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : myURLClient,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(admins) {
            cleanInputs();
            getAdmins();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailAdmin(idAdmin){
    $.ajax({
        url : 'api/Admin'+"/"+idAdmin,
        type : 'GET',
        dataType : 'json',
        success : function(admins) {
            let cs=admins;
            console.log(cs);
            $("#idAdmin").val(cs.idAdmin);
            $("#nameAdmin").val(cs.name);
            $("#emailAdmin").val(cs.email);
            $("#passwordAdmin").val(cs.password);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}