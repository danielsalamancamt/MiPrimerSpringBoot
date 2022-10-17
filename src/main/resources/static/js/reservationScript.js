
$("document").ready(function (){
    paintClients();
    paintLibrarys();
});

function paintReservations(){
    $.ajax({
        url : 'api/Reservation/all',
        type : 'GET',
        dataType : 'json',
        success : function(reservations) {
            let cs=reservations;
            console.log(cs);
            $("#reservation").empty();
            for(let i=0;i<cs.length;i++){
                let option="<option value='"+cs[i].idReservation+"'>"+cs[i].idReservation+"</option>";
                $("#reservation").append(option);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

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
                let dateStart=new Date(cs[i].startDate);
                let dateDevolution=new Date(cs[i].devolutionDate);
                let k='<tr>'+
                    '<td>'+cs[i].idReservation+" "+'</td>'+
                    '<td>'+dateStart.getFullYear()+"-"+parseInt(dateStart.getMonth()+1)+"-"+dateStart.getUTCDate()+" "+'</td>'+
                    '<td>'+dateDevolution.getFullYear()+"-"+parseInt(dateDevolution.getMonth()+1)+"-"+dateDevolution.getUTCDate()+'</td>'+
                    '<td>'+cs[i].status+'</td>'+
                    '<td>'+cs[i].lib.name+'</td>'+
                    '<td>'+cs[i].client.name+'</td>'+
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
        lib:{
            id:$("#library option:selected").val()
        },
        client:{
            idClient:$("#client option:selected").val()
        }
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
    data.idReservation=null;
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
        url : "api/Reservation/"+idReservation,
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
        url : "api/Reservation/update",
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
            let dateStart=new Date(cs.startDate);
            let dateDevolution=new Date(cs.devolutionDate);
            console.log(cs);
            $("#idReservation").val(cs.idReservation);
            $("#startDateReservation").val(dateStart.getFullYear()+"-"+parseInt(dateStart.getMonth()+1)+"-"+dateStart.getUTCDate());
            $("#devolutionDateReservation").val(dateDevolution.getFullYear()+"-"+parseInt(dateDevolution.getMonth()+1)+"-"+dateDevolution.getUTCDate());
            $("#statusReservation").val(cs.status);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}