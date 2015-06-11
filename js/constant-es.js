/*************INDEX**********/
function MSG_INSERT_ADDRESS_SERVER(){
	$("#lblmsg1").html("Ingrese la direccion IP del Servidor");
}

function MSG_PORT(){
	$("#lblmsg2").html("Puerto: ");
}

function MSG_ALIAS(){
	$("#lblmsg3").html("Alias: ");
}

function MSG_SITE(){
	$("#lblmsg4").html("Sitio: ");
}

function MSG_SITE(){
	$("#lblmsg4").html("Sitio: ");
}

function MSG_GO(){
	var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
	if(current_lang=='es')
		$("#btnenter").val("Ingresar");
	else
		$("#btnenter").val("Ok");
}
// Errores Index
	function MSG_CONNECTION_FAILURE(){
		if(current_lang=='es')
			return $("#").html("Fallo de Conexion");
		else
			return $("#").html("Error Conection");
	}

	function MSG_INVALID_IP(){
		$("#").html("IP Invalida")
	}
/**********************/


/*************LOGIN*********/
function MSG_NUMBER_PIN(){
	$("#lbllmsg1").html("Ingrese su numero Pin de Empleado");
}

function MSG_REMEMBER_PIN(){
	$("#checktext").html("Recordar Pin");
}

function BTN_LOGIN(){
	$("#btnlogin").val("Entrar");
}

/*****************************/

/********MENU******/
function MSG_LBL_GVS(){
	$("#lblgvst").html("Metas vs Ventas");	
}

function MSG_LBL_GVS_D(){
	$("#lblgvsd").html("Compare sus Metas vs Ventas en tiempo real.");	
}
function MSG_LBL_WORKING(){
	$("#lblworkd").html("Más Reportes Proximamente...");	
}
	//Modal Menu
	function MSG_LBL_CHANGE_ALIAS_T(){
		$("#lblchangealit").html("Seleccione Alias");	
	}
	function MSG_LBL_CHANGE_ALIAS_BUTTON(){
		$("#add_alias").html("Añadir Alias");	
	}
	function MSG_LBL_CHANGE_ALIAS_CONFIRM(){
		$("#lblchangealic").html("¿Desea cambiar de Servidor?");	
	}
	function MSG_LBL_DELETE_SERVER_MESSAGE(){
		$("#lbldeleteser").html("¿Desea eliminar este Servidor?");	
	}
	function MSG_LBL_CHANGE_ALIAS_CONFIRM_SI(){
		$("#btnsi").html("Si");	
		$("#btnsidelete").html("Si");		
	}

/******************************/


/**********STORES************/
function BTN_PREFERENCES_TXT(){
	$('#txtpreferences').html("Preferencias");
	$('#txtpreferences_title').html("Preferencias");
}
function BTN_REFRESH(){
	$('#storetitle').html("Metas vs Ventas");
}
function OPT_COMBO_GENERAL(){
	$('.select-general .init p').html("Por Compañia");
	$('.select-general .item:nth-child(2) p').html("Por Compañia");
	$('.select-general .item:nth-child(3) p').html("Por Región");
	$('.select-general .item:nth-child(4) p').html("Por Tienda");
}
function OPT_COMBO_DATE(){
	$('.select-date .init p').html("Hoy");
	$('.select-date .item:nth-child(2) p').html("Hoy");
	$('.select-date .item:nth-child(3) p').html("Ayer");
	$('.select-date .item:nth-child(4) p').html("Inicio de Semana");
	$('.select-date .item:nth-child(5) p').html("Inicio de Mes");
	$('.select-date .item:nth-child(6) p').html("Inicio de Año");
}
function OPT_COMBO_STORES(){
	$('.select-region .init p').html("Seleccione Region");
	$('.select-region .item:nth-child(2) p').html("Seleccione Region");
}
	//Preferences
	function BTN_BACK(){
		$('#exit span').html("Regresar");
	}
	function MSGS_VISUALIZATION(){
		$('.changeView span').html("Visualización");
		$('.checkbox_view .current').html("Mostrar Actual");
		$('.checkbox_view .global').html("Mostrar Global");
	}
	function MSGS_ORDER(){
		$('.changeOrden span').html("Ordenar por");
		$('.checkbox_view #txtchksales').html("Ventas");
		$('.checkbox_view #txtchkgoals').html("Metas");
	}


	//Modal Stores
	function MSG_DICT_TITLE(){
		$('#lblmodaldicc').html("Diccionario");
	}
	function MSG_SHORTCUTS(){
		$('#show_info .modal-body div:nth-child(1) div').html("MH:");
		$('#show_info .modal-body div:nth-child(2) div').html("VH:");
		$('#show_info .modal-body div:nth-child(3) div').html("MA:");
		$('#show_info .modal-body div:nth-child(4) div').html("VA:");
		$('#show_info .modal-body div:nth-child(5) div').html("MS:");
		$('#show_info .modal-body div:nth-child(6) div').html("VS:");
		$('#show_info .modal-body div:nth-child(7) div').html("MM:");
		$('#show_info .modal-body div:nth-child(8) div').html("VM:");
		$('#show_info .modal-body div:nth-child(9) div').html("MA:");
		$('#show_info .modal-body div:nth-child(10) div').html("VA:");
		$('#show_info .modal-body div:nth-child(11) div').html("MAC:");
		$('#show_info .modal-body div:nth-child(12) div').html("VAH:");

		$('#show_info .modal-body div:nth-child(1) span').html("Meta de Hoy");
		$('#show_info .modal-body div:nth-child(2) span').html("Venta de Hoy");
		$('#show_info .modal-body div:nth-child(3) span').html("Meta de Ayer");
		$('#show_info .modal-body div:nth-child(4) span').html("Venta de Ayer");
		$('#show_info .modal-body div:nth-child(5) span').html("Meta Semana a Hoy");
		$('#show_info .modal-body div:nth-child(6) span').html("Venta Semana a Hoy");
		$('#show_info .modal-body div:nth-child(7) span').html("Meta Mes a Hoy");
		$('#show_info .modal-body div:nth-child(8) span').html("Venta Mes a Hoy");
		$('#show_info .modal-body div:nth-child(9) span').html("Meta Año a Hoy");
		$('#show_info .modal-body div:nth-child(10) span').html("Venta Año a Hoy");
		$('#show_info .modal-body div:nth-child(11) span').html("Meta Año Completo");
		$('#show_info .modal-body div:nth-child(12) span').html("Venta Año a Hoy");
	}
	function BTN_OK(){
		$('#btnok').html("Aceptar");
	}	
/*****************************/


/*******MODAL_MENU_NEW_SERVER*****/

function MSG_TITLE_SELECT_ALIAS(){
	$('#').html("Seleccione su Alias");
}
function MSG_BTN_ADDALIAS(){
	$('#').html("Nuevo Alias");
}
/*******************************/




