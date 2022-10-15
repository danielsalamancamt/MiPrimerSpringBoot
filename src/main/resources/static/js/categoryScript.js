let myURLClient='';

/*$("document").ready(function (){
    getClients();
});*/

function getCategorys(){
    $.ajax({
        url : 'api/Category/all',
        type : 'GET',
        dataType : 'json',
        success : function(categorys) {
            let cs=categorys;
            console.log(cs);
            $("#categorys").empty();
            for(let i=0;i<cs.length;i++){
                let k='<tr>'+
                    '<td>'+cs[i].name+" "+'</td>'+
                    '<td>'+cs[i].description+" "+'</td>'+
                    "<td><button class=\"btn btn-danger\" onclick='deleteCategory("+cs[i].id+")'>Borrar</button></td>"+
                    "<td><button class=\"btn btn-secondary\" onclick='getDetailCategory("+cs[i].id+")'>Actualizar</button></td></tr>"
                $("#categorys").append(k);
            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getCategoryInfo(){
    let idCategory=$("#idCategory").val();
    let nameCategory=$("#nameCategory").val();
    let descriptionCategory=$("#descriptionCategory").val();

    let category={
        id:idCategory,
        name:nameCategory,
        description:descriptionCategory,
    };
    return category;
}

function cleanInputs(){
    $("#idCategory").val("");
    $("#nameCategory").val("");
    $("#descriptionCategory").val("");
}

function saveCategory(){
    let data=getCategoryInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : 'api/Category/save',
        type : 'POST',
        contentType : 'application/json',
        data:dataToSend,
        success : function(categorys) {
            cleanInputs();
            getCategorys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function deleteCategory(idCategory){
    let data={id:idCategory};
    let dataToSend=JSON.stringify(data);
    $.ajax({
        url : myURLClient,
        type : 'DELETE',
        contentType : 'application/json',
        data:dataToSend,
        success : function(categorys) {
            cleanInputs();
            getCategorys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function updateCategory(){
    let data=getCategoryInfo();
    let dataToSend=JSON.stringify(data);
    console.log(data);
    console.log(dataToSend);

    $.ajax({
        url : myURLClient,
        type : 'PUT',
        contentType : 'application/json',
        data:dataToSend,
        success : function(categorys) {
            cleanInputs();
            getCategorys();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function getDetailCategory(idCategory){
    $.ajax({
        url : 'api/Category'+"/"+idCategory,
        type : 'GET',
        dataType : 'json',
        success : function(categorys) {
            let cs=categorys;
            console.log(cs);
            $("#idCategory").val(cs.id);
            $("#nameCategory").val(cs.name);
            $("#descriptionCategory").val(cs.description);
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}