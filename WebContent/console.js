// Console
var base_url = "http://localhost:8080/api-restiful/api";

function pegar_token() {
	return sessionStorage.token;
}

function statusDisplay(data) {
	if (data == 1) {
		return "ATIVO";
	} else {
		return "INATIVO";
	}
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
	var obj = JSON.parse(xmlhttp.responseText);
	for (key in obj) {
		console.log(obj[key]);
		html += "<tr>" + "<td>" + obj[key].id + "</td>" +
		"<td>" + obj[key].titulo + "</td>" +
		"<td>" + obj[key].descricao + "</td>" +
		"<td>" + statusDisplay(obj[key].status) + "</td>" +
		"<td>" + obj[key].dataCadastro + "</td>" +
		"</tr>";
	}

	document.getElementById("tabela-destaque").innerHTML = html;
}

xmlhttp.send();
