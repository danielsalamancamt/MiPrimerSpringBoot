let myURLClient='';

/*$("document").ready(function (){
    getClients();
});*/

function getClients(){
    $.ajax({
        url : 'api/Client/all',
        type : 'GET',
        dataType : 'json',
        success : function(clients) {
            let cs=clients;
            console.log(cs);
            $("#clients").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].idClient+" "+'</td>'+
                    '<td>'+cs[i].name+" "+'</td>'+
                    '<td>'+cs[i].email+" "+'</td>'+
                    '<td>'+cs[i].age+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteClient("+cs[i].idClient+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailClient("+cs[i].idClient+")'>Actualizar</button></td></tr>"
                $("#clients").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getClientInfo(){
    let idClient=$("#idClient").val();
    let nameClient=$("#nameClient").val();
    let emailClient=$("#emailClient").val();
    let ageClient=$("#ageClient").val();
    let passwordClient=$("#passwordClient").val();

    let client={
        id:idClient,
        name:nameClient,
        email:emailClient,
        age:ageClient,
        password:passwordClient
    };
    return client;
}

function cleanInputs(){
    $("#idClient").val("");
    $("#nameClient").val("");
    $("#emailClient").val("");
    $("#ageClient").val("");
    $("#passwordClient").val("");
}

function saveClient(){
    let data=getClientInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Client/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteClient(idClient){
    let data={id:idClient};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateClient(){
    let data=getClientInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : myURLClient,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getClients();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailClient(idClient){
    $.ajax({
        url : 'api/Client'+"/"+idClient,
        type : 'GET',
        dataType : 'json',
        success : function(clients) {
            let cs=clients;
            console.log(cs);
            $("#idClient").val(cs.idClient);
            $("#nameClient").val(cs.name);
            $("#emailClient").val(cs.email);
            $("#ageClient").val(cs.age);
            $("#passwordClient").val(cs.password);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}