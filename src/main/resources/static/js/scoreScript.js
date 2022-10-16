let myURLClient='';

$("document").ready(function (){
    paintReservations();
});

function getScores(){
    $.ajax({
        url : 'api/Score/all',
        type : 'GET',
        dataType : 'json',
        success : function(scores) {
            let cs=scores;
            console.log(cs);
            $("#scores").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].idScore+" "+'</td>'+
                    '<td>'+cs[i].score+" "+'</td>'+
                    '<td>'+cs[i].messageText+" "+'</td>'+
                    '<td>'+cs[i].reservation.idReservation+" "+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteScore("+cs[i].idScore+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailScore("+cs[i].idScore+")'>Actualizar</button></td></tr>"
                $("#scores").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getScoreInfo(){
    let idScore=$("#idScore").val();
    let scoreScore=$("#scoreScore").val();
    let messageTextScore=$("#messageTextScore").val();

    let score={
        id:idScore,
        score:scoreScore,
        messageText:messageTextScore,
        reservation:{
            idReservation:$("#reservation option:selected").val()
        }
    };
    return score;
}

function cleanInputs(){
    $("#idScore").val("");
    $("#scoreScore").val("");
    $("#messageTextScore").val("");
}

function saveScore(){
    let data=getScoreInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Score/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getScores();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteScore(idScore){
    let data={id:idScore};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(scores) {
            cleanInputs();
            getScores();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateScore(){
    let data=getScoreInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : myURLClient,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(scores) {
            cleanInputs();
            getScores();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailScore(idScore){
    $.ajax({
        url : 'api/Score'+"/"+idScore,
        type : 'GET',
        dataType : 'json',
        success : function(scores) {
            let cs=scores;
            console.log(cs);
            $("#idScore").val(cs.idScore);
            $("#scoreScore").val(cs.score);
            $("#messageTextScore").val(cs.messageText);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}