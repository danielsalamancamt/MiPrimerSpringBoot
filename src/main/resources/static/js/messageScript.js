let myURLClient='';

$("document").ready(function (){
    paintLibrarys();
    paintClients();
});

function getMessages(){
    $.ajax({
        url : 'api/Message/all',
        type : 'GET',
        dataType : 'json',
        success : function(messages) {
            let cs=messages;
            console.log(cs);
            $("#messages").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].idMessage+" "+'</td>'+
                    '<td>'+cs[i].messageText+" "+'</td>'+
                    '<td>'+cs[i].lib.name+" "+'</td>'+
                    '<td>'+cs[i].client.name+" "+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteMessage("+cs[i].idMessage+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailMessage("+cs[i].idMessage+")'>Actualizar</button></td></tr>"
                $("#messages").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getMessageInfo(){
    let idMessage=$("#idMessage").val();
    let messageText=$("#messageText").val();

    let client={
        idMessage:idMessage,
        messageText:messageText,
        lib:{
            id:$("#library option:selected").val()
        },
        client:{
            idClient:$("#client option:selected").val()
        }
    };
    return client;
}

function cleanInputs(){
    $("#idMessage").val("");
    $("#messageText").val("");
}

function saveMessage(){
    let data=getMessageInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Message/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(messages) {
            cleanInputs();
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteMessage(idMessage){
    let data={id:idMessage};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateMessage(){
    let data=getMessageInfo();
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
            getMessages();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailMessage(idMessage){
    $.ajax({
        url : 'api/Message'+"/"+idMessage,
        type : 'GET',
        dataType : 'json',
        success : function(messages) {
            let cs=messages;
            console.log(cs);
            $("#idMessage").val(cs.idMessage);
            $("#messageText").val(cs.messageText);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}