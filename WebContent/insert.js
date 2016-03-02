// Console
var base_url = "http://localhost:8080/api-restiful/api";

function pegar_token() {
	if (sessionStorage.token == undefined) {
		return "";
	} else {
		return sessionStorage.token;
	}
}

function statusDisplay(data) {
	if (data == 1) {
		return "ATIVO";
	} else {
		return "INATIVO";
	}
}

function mostrarFormulario() {
	var i = 0;
	var form = document.getElementsByClassName("formulario-incluir");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "block";
	}
	document.getElementById("novo").style.display = "none";
}

function cancelar() {
	window.location.href = "console.html";
}

function toDate(dateStr) {
    var parts = dateStr.split("-");
    var parts2 = parts[2].split("T");
    var dia = parts2[0];
    var mes = parts[1];
    var ano = parts[0];
    return dia+"/"+mes+"/"+ano;
}

