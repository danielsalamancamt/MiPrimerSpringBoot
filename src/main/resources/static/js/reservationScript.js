let myURLClient='';

/*$("document").ready(function (){
    getClients();
});*/

function getReservations(){
    $.ajax({
        url : 'api/Reservation/all',
        type : 'GET',
        dataType : 'json',
        success : function(reservations) {
            let cs=reservations;
            console.log(cs);
            $("#reservations").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].idReservation+" "+'</td>'+
                    '<td>'+cs[i].startDate+" "+'</td>'+
                    '<td>'+cs[i].devolutionDate+" "+'</td>'+
                    '<td>'+cs[i].status+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteReservation("+cs[i].idReservation+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailReservation("+cs[i].idReservation+")'>Actualizar</button></td></tr>"
                $("#reservations").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getReservationInfo(){
    let idReservation=$("#idReservation").val();
    let startDateReservation=$("#startDateReservation").val();
    let devolutionDateReservation=$("#devolutionDateReservation").val();
    let statusReservation=$("#statusReservation").val();

    let reservation={
        idReservation:idReservation,
        startDate:startDateReservation,
        devolutionDate:devolutionDateReservation,
        status:statusReservation,
    };
    return reservation;
}

function cleanInputs(){
    $("#idReservation").val("");
    $("#startDateReservation").val("");
    $("#devolutionDateReservation").val("");
    $("#statusReservation").val("");
}

function saveReservation(){
    let data=getReservationInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Reservation/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(clients) {
            cleanInputs();
            getReservations();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteReservation(idReservation){
    let data={id:idReservation};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(reservations) {
            cleanInputs();
            getReservations();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateReservation(){
    let data=getReservationInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : myURLClient,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(reservations) {
            cleanInputs();
            getReservations();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailReservation(idReservation){
    $.ajax({
        url : 'api/Reservation'+"/"+idReservation,
        type : 'GET',
        dataType : 'json',
        success : function(reservations) {
            let cs=reservations;
            console.log(cs);
            $("#idReservation").val(cs.idReservation);
            $("#startDateReservation").val(cs.startDate);
            $("#devolutionDateReservation").val(cs.devolutionDate);
            $("#statusReservation").val(cs.status);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}