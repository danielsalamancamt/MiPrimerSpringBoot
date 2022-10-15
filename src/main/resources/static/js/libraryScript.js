let myURLClient='';

$("document").ready(function (){
    paintCategorys();
});

function getLibrarys(){
    $.ajax({
        url : 'api/Lib/all',
        type : 'GET',
        dataType : 'json',
        success : function(librarys) {
            let cs=librarys;
            console.log(cs);
            $("#librarys").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].name+" "+'</td>'+
                    '<td>'+cs[i].target+" "+'</td>'+
                    '<td>'+cs[i].capacity+'</td>'+
                    '<td>'+cs[i].description+'</td>'+
                    '<td>'+cs[i].category.name+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteLibrary("+cs[i].id+")'>Borrar</button</td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailLibrary("+cs[i].id+")'>Actualizar</button></td></tr>"
                $("#librarys").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getLibraryInfo(){
    let idLibrary=$("#idLibrary").val();
    let nameLibrary=$("#nameLibrary").val();
    let targetLibrary=$("#targetLibrary").val();
    let capacityLibrary=$("#capacityLibrary").val();
    let descriptionLibrary=$("#descriptionLibrary").val()

    let library={
        id:idLibrary,
        name:nameLibrary,
        target:targetLibrary,
        capacity:capacityLibrary,
        description:descriptionLibrary,
        category:{
            id:$("#category option:selected").val()
        }
    };
    return library;
}

function cleanInputs(){
    $("#idLibrary").val("");
    $("#nameLibrary").val("");
    $("#targetLibrary").val("");
    $("#capacityLibrary").val("");
    $("#descriptionLibrary").val("");
}

function saveLibrary(){
    let data=getLibraryInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Lib/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(librarys) {
            cleanInputs();
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteLibrary(idLibrary){
    let data={id:idLibrary};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(librarys) {
            cleanInputs();
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateLibrary(){
    let data=getLibraryInfo();
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
            getLibrarys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailLibrary(idLibrary){
    $.ajax({
        url : 'api/Lib'+"/"+idLibrary,
        type : 'GET',
        dataType : 'json',
        success : function(librarys) {
            let cs=librarys;
            console.log(cs);
            $("#idLibrary").val(cs.id);
            $("#nameLibrary").val(cs.name);
            $("#targetLibrary").val(cs.target);
            $("#capacityLibrary").val(cs.capacity);
            $("#descriptionLibrary").val(cs.description);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}