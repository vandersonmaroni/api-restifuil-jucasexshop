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

function novoDestaque() {
	window.location.href = "destaque.html";
}

function novoServico() {
	window.location.href = "servico.html";
}

function excluir(data) {
	var id = data.getAttribute('data-id');
	console.log(id);
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques/" + id;

	xmlhttp.open("DELETE", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", pegar_token());

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			window.location.href = "destaques.html";
		} else {
			alert("Erro ao deletar o Destaque");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}
	xmlhttp.send();
}

function excluirServico(data) {
	var id = data.getAttribute('data-id');
	console.log(id);
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos/" + id;

	xmlhttp.open("DELETE", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", pegar_token());

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			window.location.href = "servicos.html";
		} else {
			alert("Erro ao deletar o Destaque");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}
	xmlhttp.send();
}

function editar(data) {
	var id = data.getAttribute('data-id');
	console.log(data)
	window.location.href = "destaque.html?id=" + id;
}

function editarServico(data) {
	var id = data.getAttribute('data-id');
	console.log(data)
	window.location.href = "servico.html?id=" + id;
}

function mostrarFormulario() {
	var i = 0;
	var form = document.getElementsByClassName("formulario-incluir");
	for (i = 0; i < form.length; i++) {
		form[i].style.display = "block";
	}
	document.getElementById("novo").style.display = "none";
}

function cancelarDestaque() {
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

function cancelarServico() {
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

function toDate(dateStr) {
	var parts = dateStr.split("-");
	var parts2 = parts[2].split("T");
	var dia = parts2[0];
	var mes = parts[1];
	var ano = parts[0];
	return dia + "/" + mes + "/" + ano;
}

function selecionarLinhaDestaque(data) {
	var id = data.getAttribute('data-id');
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques/" + id;
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		console.log(xmlhttp.responseText);
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);

			document.getElementById("titulo").value = obj.titulo;
			document.getElementById("descricao").value = obj.descricao;
			document.getElementById("dataCadastro").value = toDate(obj.dataCadastro);
			document.getElementById("status").value = obj.status;
			document.getElementById("imagem").value = obj.imagem;
			document.getElementById("descricaoDisabled").style.backgroundColor = "#FFF";
		}
	}

	xmlhttp.send();

	mostrarFormulario();
}

function selecionarLinhaServico(data) {
	var id = data.getAttribute('data-id');
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos/" + id;
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		console.log(xmlhttp.responseText);
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);

			document.getElementById("titulo").value = obj.titulo;
			document.getElementById("descricao").value = obj.descricao;
			document.getElementById("dataCadastro").value = toDate(obj.dataCadastro);
			document.getElementById("status").value = obj.status;
			document.getElementById("imagem").value = obj.imagem;
			document.getElementById("descricaoDisabled").style.backgroundColor = "#FFF";
		}
	}

	xmlhttp.send();

	mostrarFormulario();
}

function pegarPaginaAtual() {
	var aux = window.location.pathname;
	var aux2 = aux.split("/");
	var aux3 = aux2[3].split(".");
	var url = aux3[0];
	return url;
}

function exibirDestaques() {
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques";
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	html += "<tr><th>Titulo</th><th>Descricao</th><th>Status</th><th>Data de Cadastro</th><th>Editar</th><th>Excluir</th></tr>";

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			if (obj.destaque.length === undefined) {
				for (key in obj) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ statusDisplay(obj[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ toDate(obj[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editar(this)'  data-id='"
							+ obj[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluir(this)' data-id='"
							+ obj[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			} else {
				for (key in obj.destaque) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj.destaque[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj.destaque[key].id
							+ "'>"
							+ obj.destaque[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj.destaque[key].id
							+ "'>"
							+ obj.destaque[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj.destaque[key].id
							+ "'>"
							+ statusDisplay(obj.destaque[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaDestaque(this)' data-id='"
							+ obj.destaque[key].id
							+ "'>"
							+ toDate(obj.destaque[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editar(this)'  data-id='"
							+ obj.destaque[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluir(this)' data-id='"
							+ obj.destaque[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			}

			document.getElementById("tabela-destaque").innerHTML = html;
		} else {
			alert("Token inválido!");
		}
	}

	xmlhttp.send();
}

function exibirServicos() {
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos";
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	html += "<tr><th>Titulo</th><th>Descricao</th><th>Status</th><th>Data de Cadastro</th><th>Editar</th><th>Excluir</th></tr>";

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			if (obj.servico.length === undefined) {
				for (key in obj) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ statusDisplay(obj[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ toDate(obj[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editarServico(this)'  data-id='"
							+ obj[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluirServico(this)' data-id='"
							+ obj[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			} else {
				for (key in obj.servico) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj.servico[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj.servico[key].id
							+ "'>"
							+ obj.servico[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj.servico[key].id
							+ "'>"
							+ obj.servico[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj.servico[key].id
							+ "'>"
							+ statusDisplay(obj.servico[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaServico(this)' data-id='"
							+ obj.servico[key].id
							+ "'>"
							+ toDate(obj.servico[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editarServico(this)'  data-id='"
							+ obj.servico[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluirServico(this)' data-id='"
							+ obj.servico[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			}

			document.getElementById("tabela-servico").innerHTML = html;
		} else {
			alert("Token inválido!");
		}
	}

	xmlhttp.send();

}

if (pegarPaginaAtual() === "destaques") {
	exibirDestaques();
} else if (pegarPaginaAtual() === "servicos") {
	exibirServicos();
}
