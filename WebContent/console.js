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

function novo() {
	var i = 0;
	var form = document.getElementsByClassName("formulario-incluir");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "block";
	}
	document.getElementById("novo").style.display = "none";
}

function cancelar() {
	var i = 0;
	var form = document.getElementsByClassName("formulario-incluir");
	var formAlterar = document.getElementsByClassName("formulario-alterar");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "none";
		form[i].style.value = "";
	}
	for (i = 0; i < formAlterar.length; i++) {
		formAlterar[i].style.display = "none";
		formAlterar[i].style.value = "";
	}

	document.getElementById("novo").style.display = "block";
}

var xmlhttp = new XMLHttpRequest();
var url = base_url + "/destaques";
var token = pegar_token();
var html = "";
xmlhttp.open("GET", url, true);
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.setRequestHeader("Authorization", token);

html += "<tr><th>ID</th><th>Titulo</th><th>Descricao</th><th>Status</th><th>Data de Cadastro</th></tr>";

xmlhttp.onload = function(e) {
	if (xmlhttp.status == 200) {
		var obj = JSON.parse(xmlhttp.responseText);
		for (key in obj) {
			html += "<tr>" + "<td>" + obj[key].id + "</td>" + "<td>"
					+ obj[key].titulo + "</td>" + "<td>" + obj[key].descricao
					+ "</td>" + "<td>" + statusDisplay(obj[key].status)
					+ "</td>" + "<td>" + obj[key].dataCadastro + "</td>"
					+ "</tr>";
		}

		document.getElementById("tabela-destaque").innerHTML = html;
	}else{
		alert("Token inválido!");
	}
}

xmlhttp.send();
