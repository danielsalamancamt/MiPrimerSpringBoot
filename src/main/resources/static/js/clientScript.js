let myURLClient='api/Client/all';

$("document").ready(function (){
    getClients();
});

function getClients(){
    $.ajax({
        url : 'api/Client/all',
        type : 'GET',
        dataType : 'json',
        success : function(clients) {
            let cs=clients;
            $("#clients").empty();
            for(let i=0;i<cs.length;i++){
                let k=cs[i].idClient+" "+cs[i].name+" "+cs[i].email+" "+cs[i].age+" <button onclick='deleteClient("+cs[i].idClient+")'>Borrar</button>";
                k+=" <button onclick='getDetailClient("+cs[i].idClient+")'>Actualizar</button><br>"
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

    let client={
        id:idClient,
        name:nameClient,
        email:emailClient,
        age:ageClient
    };
    return client;
}

function cleanInputs(){
    $("#idClient").val("");
    $("#nameClient").val("");
    $("#emailClient").val("");
    $("#ageClient").val("");
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
            $("#idClient").val(cs[0].idClient);
            $("#nameClient").val(cs[0].name);
            $("#emailClient").val(cs[0].email);
            $("#ageClient").val(cs[0].age);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}