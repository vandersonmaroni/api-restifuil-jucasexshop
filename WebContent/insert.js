// Console
var getId = window.location.search.replace("?id=", "");
var base_url = "http://localhost:8080/api-restiful/api";

if (getId == "") {
	mostarCadastrar();
} else {
	mostarAlterar();

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques/" + getId;
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);

			document.getElementById("titulo").value = obj.titulo;
			document.getElementById("descricao").value = obj.descricao;
			document.getElementById("dataCadastro").value = toDate(obj.dataCadastro);
			document.getElementById("status").value = obj.status;
			document.getElementById("imagem").value = obj.imagem;
		} else {
			alert("ID não existe");
		}
	}

	xmlhttp.send();
}

function mostarAlterar() {
	var i = 0;
	var form = document.getElementsByClassName("alterar");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "block";
	}
	var form2 = document.getElementsByClassName("cadastrar");
	for (i = 0; i < form2.length; i++) {
		form2[i].style.display = "none";
	}
}

function mostarCadastrar() {
	var i = 0;
	var form = document.getElementsByClassName("alterar");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "none";
	}
	var form2 = document.getElementsByClassName("cadastrar");
	for (i = 0; i < form2.length; i++) {
		form2[i].style.display = "block";
	}
}

function cadastrar(){
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = document.getElementById("imagem").value;
	
	if(!validarCampos(titulo,status,descricao,imagem)){
		return;
	}
	
}

function validarCampos(titulo,status,descricao,imagem){
	if(titulo.trim() == ''){
		alert("Digite um titulo");
		return false;
	}
	if(status.trim() == ''){
		alert("Selecione um status");
		return false;
	}
	if(descricao.trim() == ''){
		alert("Digite uma descrição");
		return false;
	}
	if(imagem.trim() == ''){
		alert("Digite uma imagem");
		return false;
	}
	return true;
}

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
	return dia + "/" + mes + "/" + ano;
}
