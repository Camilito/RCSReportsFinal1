var value_global = "1";
var ch_actual = "1";
var ch_global = "1";
var ch_principal ="0";
$(document).ready(function() {

    /* Today */
    var d1 = new Date();
    var month1 = d1.getMonth()+1;
    var day1 = d1.getDate();
    var o_today = ((''+day1).length<2 ? '0' : '') + day1 + '/' +
                ((''+month1).length<2 ? '0' : '') + month1 + '/' +
                d1.getFullYear();

    /* Yesterday */
    var d2 = new Date();
    var month2 = d2.getMonth()+1;
    var day2 = d2.getDate()-1;
    var o_yesterday = ((''+day2).length<2 ? '0' : '') + day2 + '/' +
                ((''+month2).length<2 ? '0' : '') + month2 + '/' +
                d2.getFullYear();

    /* STAR WEEKEND*/
    var o_today2 = d1.getFullYear() +  '-' +               
    ((''+month1).length<2 ? '0' : '') + month1 + '-' +
    ((''+day1).length<2 ? '0' : '') + day1 ;

      var  d= new Date(''+o_today2);
      var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
     
      var ASU = new Date(d.setDate(diff));
      var convertido = ASU;
      var dia = ASU.getDate();
      var mes = ASU.getMonth()+1;
      var año = ASU.getFullYear();
      var porfin =  ((''+dia).length<2 ? '0' : '')  + dia + '/' +
      ((''+mes).length<2 ? '0' : '') + mes + '/' +
       año ;

    /* */


    /* Week to Date */
    var d3 = new Date();
    d3.setMonth(d3.getMonth()+1,1);
    var month3 = d3.getMonth();
    var day3 = d3.getDate();
    var o_month = ((''+day3).length<2 ? '0' : '') + day3 + '/' +
                ((''+month3).length<2 ? '0' : '') + month3 + '/' +
                d3.getFullYear();

    /* Month to Date */
    var d4 = new Date();
    d4.setMonth(d3.getMonth()+1,1);
    var month3 = d3.getMonth();
    var day3 = d3.getDate();
    var o_month = ((''+day3).length<2 ? '0' : '') + day3 + '/' +
                ((''+month3).length<2 ? '0' : '') + month3 + '/' +
                d3.getFullYear(); 

    /* Year */
    var o_year = '01/' + '01/' + d1.getFullYear();      

    
    $('#time').text(o_today);
    $('#today').text(o_today);
    $('#yesterday').text(o_yesterday);
    $('#week').text(porfin);
    $('#month').text(o_month);
    $('#year').text(o_year);
    
});

$("ul.select-date").click(function(e) {
    $(this).closest("ul.select-date").children('li:not(.init)').slideToggle(100);
    e.stopPropagation();
});
$("ul.select-general").click(function(e) {
    $(this).closest("ul.select-general").children('li:not(.init)').slideToggle(100);
    e.stopPropagation();
});
$("ul.select-region").click(function(e) {
    // $('ul.select-region').toggleClass("open");
    $(this).closest("ul.select-region").children('li:not(.init)').slideToggle(100);
    e.stopPropagation();
});

$(document).click(function(e){
    $("ul.select-region").removeClass('open');
    $('ul.select-general li:not(.init)').hide();
    $('ul.select-date li:not(.init)').hide();
    $('ul.select-region li:not(.init)').hide();
});

var allOptionsG = $("ul.select-general").children('li:not(.init)');
var allOptions = $("ul.select-date").children('li:not(.init)');
var allOptions2 = $("ul.select-region").children('li:not(.init)');

$("ul.select-general").on("click", "li:not(.init)", function() {
    
    var value = $(this).attr("data-value");
    
    allOptionsG.removeClass('selected');
    $(this).addClass('selected');
    $("ul.select-general").children('.init').html($(this).html());
    $("ul.select-general").children('.init').attr("data-value",value);    

    //downloadGoal();
});

$("ul.select-date").on("click", "li:not(.init)", function() {
    
    var value_date = $(this).attr("data-value");
    
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $("ul.select-date").children('.init').html($(this).html());
    $("ul.select-date").children('.init').attr("data-value",value_date);

 
  if(value_global=='1'){
        $("#items").empty();
        downloadByCompany(ch_actual,ch_global);
    }else if(value_global=='2'){
        $("#items").empty();
        downloadByRegion(ch_actual,ch_global);
    }else if(value_global =='3'){
        $("#items").empty();
    
        downloadByStore(ch_actual,ch_global);
    }

});


$("ul.select-region").on("click", "li:not(.init)", function() {
    
    var regionCode = $(this).attr("data-value");

    allOptions2.removeClass('selected');
    $(this).addClass('selected');
    $("ul.select-region").children('.init').html($(this).html());
    $("ul.select-region").children('.init').attr("data-value",regionCode);
    downloadByStore(ch_actual,ch_global);
});

function prueba(detalle){
    var altura = $('#graph'+detalle).height();
   
    if(altura>0){
        $('#graph'+detalle).removeClass("toogleChart");
    }else{
        for(var i=0;i<=9999;i++){
            if("#graph-"+i+"".length){
                $('#graph-'+i).removeClass("toogleChart");
            }else{
                i = 9999;
            }
        }
        
        $('#graph'+detalle).toggleClass('toogleChart');  
    }   
}

function selectAlias(){    
    $('#load').addClass('in').css( "display", "block" ).attr("aria-hidden",false);
    $('body').addClass('modal-open');
    $('body').append('<div class="modal-backdrop fade in"></div>');
    
}

function mostrarModal(){    
    $("#show_alias").on("show", function() {   
        $("#show_alias a.btn").on("click", function(e) {
            $("#show_alias").modal('hide');  
        });
    });
    $("#show_alias").on("show", function() {   
        $("#show_alias a.btn").on("click", function(e) {
            $("#show_alias").modal('hide');  
        });
    });

    $("#show_alias").on("hide", function() {    
        $("#show_alias a.btn").off("click");
    });

    $("#show_alias").on("hidden", function() {  // eliminar los elementos reales de la DOM cuando está completamente oculto
        $("#show_alias").remove();
    });

    $("#show_alias").modal({                    // cablear la funcionalidad real modal y mostrar el cuadro de diálogo
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true                     // garantizar el modal se muestra inmediatamente
    });

    getAllData();
    getDataInUse();
    
}

function mostrarModalMessage(){    
    $("#ModalMessage").on("show", function() {   
        $("#ModalMessage a.btn").on("click", function(e) {
            $("#ModalMessage").modal('hide');  
        });
    });
    $("#ModalMessage").on("show", function() {   
        $("#ModalMessage a.btn").on("click", function(e) {
            $("#ModalMessage").modal('hide');  
        });
    });

    $("#ModalMessage").on("hide", function() {    
        $("#ModalMessage a.btn").off("click");
    });

    $("#ModalMessage").on("hidden", function() {  // eliminar los elementos reales de la DOM cuando está completamente oculto
        $("#ModalMessage").remove();
    });

    $("#ModalMessage").modal({                    // cablear la funcionalidad real modal y mostrar el cuadro de diálogo
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true                     // garantizar el modal se muestra inmediatamente
    });
    
}

function mostrarInfo(){    
    //getDataInUse();  
    //getAllData();
    $("#show_info").on("show", function() {   
        $("#show_info a.btn").on("click", function(e) {
            $("#show_info").modal('hide');  
        });
    });
    $("#show_info").on("show", function() {   
        $("#show_info a.btn").on("click", function(e) {
            $("#show_info").modal('hide');  
        });
    });

    $("#show_info").on("hide", function() {    
        $("#show_info a.btn").off("click");
    });

    $("#show_info").on("hidden", function() {  // eliminar los elementos reales de la DOM cuando está completamente oculto
        $("#show_info").remove();
    });

    $("#show_info").modal({                    // cablear la funcionalidad real modal y mostrar el cuadro de diálogo
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true                     // garantizar el modal se muestra inmediatamente
    });
    
}

function showLoading(){    
    $("#show_loading").on("show", function() {   
        $("#show_loading a.btn").on("click", function(e) {
            $("#show_loading").modal('hide');  
        });
    });
    $("#show_loading").on("show", function() {   
        $("#show_loading a.btn").on("click", function(e) {
            $("#show_loading").modal('hide');  
        });
    });

    $("#show_loading").on("hide", function() {    
        $("#show_loading a.btn").off("click");
    });

    $("#show_loading").on("hidden", function() {  // eliminar los elementos reales de la DOM cuando está completamente oculto
        $("#show_loading").remove();
    });

    $("#show_loading").modal({                    // cablear la funcionalidad real modal y mostrar el cuadro de diálogo
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true                     // garantizar el modal se muestra inmediatamente
    });


}

function hideLoading(){    
    $("#txtocultaloading").click();
    //$('.modal-backdrop').remove();    
}

function hideCombo(){
    $("#divRegion").hide();
    $('body').addClass('ocultarRegion');
}

function mostrarModalGeneral(contenido){    
    $("#modalgeneral").on("show", function() {   
        $("#modalgeneral a.btn").on("click", function(e) {
            $("#modalgeneral").modal('hide');  
        });
    });
    $("#modalgeneral").on("show", function() {   
        $("#modalgeneral a.btn").on("click", function(e) {
            $("#modalgeneral").modal('hide');  
        });
    });

    $("#modalgeneral").on("hide", function() {    
        $("#modalgeneral a.btn").off("click");
    });

    $("#modalgeneral").on("hidden", function() {  // eliminar los elementos reales de la DOM cuando está completamente oculto
        $("#modalgeneral").remove();
    });

    $("#modalgeneral").modal({                    // cablear la funcionalidad real modal y mostrar el cuadro de diálogo
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true                     // garantizar el modal se muestra inmediatamente
    });

    $("#textgeneral").html(contenido);
    $("#btngeneral").html("OK");
}

function moveToLeft(){    
    $('body').addClass('clean');
    $('.container').addClass('ocultar');
    $('.preferences').addClass('move');
}


 function updateActual(){
            var principal = $("ul.select-general li:first-child()").attr("data-value");

     
           ch_principal = principal;
            if($('#check_actual').is(':checked')){  
             ch_actual = "1";
            }else{
                ch_actual = "0";
            }
              
}


function updateGlobal(){

    var principal = $("ul.select-general li:first-child()").attr("data-value");
        
           ch_principal = principal; 
            if($('#check_global').is(':checked')){
             ch_global = "1";
            }else{
              ch_global = "0";
            }
        
}



//AQUI
function retornarStores(principal){

  if(ch_principal == 1){
    downloadByCompany(ch_actual ,ch_global);
   }else if(ch_principal==2){
    downloadByRegion(ch_actual,ch_global);
   }else if(ch_principal==3){
    downloadByStore(ch_actual ,ch_global);
   }

    $('body').removeClass('clean');
    $('.container').removeClass('ocultar');
    $('.preferences').removeClass('move');
    
}

function cambiarMetas(){

    if($('#check_goals').is(':checked')){
        var text = "Goals ↓";
        $("#txtchkgoals").html(text);

    }else{
        var text = "Goals ↑";
        $("#txtchkgoals").html(text);

    }

}

function cambiarTotal(){
    
    if($('#check_sales').is(':checked')){
        var text = "Sales ↓";
        $("#txtchksales").html(text);

    }else{
        var text = "Sales ↑";
        $("#txtchksales").html(text);
    }

}


$("ul.select-general").on("click", "li:not(.init)", function() {
    
    value_global = $(this).attr("data-value");
    
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $("ul.select-general").children('.init').html($(this).html());
    $("ul.select-general").children('.init').attr("data-value",value_global);    


    if(value_global=='1'){
        $('body').removeClass('mostrarRegion');
        hideCombo();
        $("#items").empty();
        downloadByCompany(ch_actual,ch_global);
    }else if(value_global=='2'){
        $('body').removeClass('mostrarRegion');
        hideCombo();
        $("#items").empty();
        downloadByRegion(ch_actual,ch_global);
    }else if(value_global =='3'){
        
        $("#items").empty();

        loadComboRegions(ch_actual ,ch_global);
 
    }

});


function get_chActual(){

    return ch_actual;
}
function get_chGlobal(){
    return ch_global;
}



function prueba(detalle){
    var altura = $('#graph'+detalle).height();

    if(altura>0){
        $('#graph'+detalle).removeClass("toogleChart");
    }else{
        for(var i=0;i<=9999;i++){
            if("#graph-"+i+"".length){
                $('#graph-'+i).removeClass("toogleChart");
            }else{
                i = 999;
            }
        }        
        $('#graph'+detalle).toggleClass('toogleChart');  
    }   
}