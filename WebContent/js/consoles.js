// Console
var base_url = "http://localhost:8080/api-restiful/api";
var valorTotalPorPagina = 5;

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

function novoProduto() {
	window.location.href = "produto.html";
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
			alert("Erro ao deletar o Serviço");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}
	xmlhttp.send();
}

function excluirProduto(data) {
	var id = data.getAttribute('data-id');
	console.log(id);
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/produtos/" + id;

	xmlhttp.open("DELETE", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", pegar_token());

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			window.location.href = "produtos.html";
		} else {
			alert("Erro ao deletar o Produto");
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

function editarProduto(data) {
	var id = data.getAttribute('data-id');
	console.log(data)
	window.location.href = "produto.html?id=" + id;
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

function cancelarProduto() {
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

function selecionarLinhaProduto(data) {
	var id = data.getAttribute('data-id');
	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/produtos/" + id;
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

function exibirDestaques(valorAux, selecionado) {
	var xmlhttp = new XMLHttpRequest(), url = base_url + "/destaques/total", token = pegar_token(), html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			buscarDestaques(obj.total, valorTotalPorPagina, valorAux,
					selecionado);
		}
	}
	xmlhttp.send();
}

function exibirServicos(valorAux, selecionado) {
	var xmlhttp = new XMLHttpRequest(), url = base_url + "/servicos/total", token = pegar_token(), html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			buscarServicos(obj.total, valorTotalPorPagina, valorAux,
					selecionado);
		}
	}
	xmlhttp.send();
}

function exibirProdutos(valorAux, selecionado) {
	var xmlhttp = new XMLHttpRequest(), url = base_url + "/produtos/total", token = pegar_token(), html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			buscarProdutos(obj.total, valorTotalPorPagina, valorAux,
					selecionado);
		}
	}
	xmlhttp.send();
}

function valorEQauntidadeDeBotoes(total) {
	var obj = {
		quantidadeDePaginas : 0,
		valorDasPaginas : []
	};
	var aux = 0;
	for (i = 0; i < total; i++) {
		if (i % valorTotalPorPagina == 0) {
			obj.valorDasPaginas[aux] = i;
			obj.quantidadeDePaginas = obj.quantidadeDePaginas + 1;
			aux = aux + 1;
		}
	}
	console.log(obj);

	return obj;
}

function botoesPaginacao(obj, pagina, selecionado) {
	if (selecionado === undefined) {
		selecionado = 1;
	}
	var container = document.getElementById("paginacao");
	var html = '';
	for (i = 0; i < obj.quantidadeDePaginas; i++) {
		if (i === 0) {
			if (selecionado === 1) {
				html += '<button type="button" class="botao-opacity" onclick="exibir'
						+ pagina
						+ '('
						+ obj.valorDasPaginas[selecionado - 1]
						+ ',' + (i + selecionado) + ')" disabled> < </button>';
			} else {
				html += '<button type="button" class="botao-selecionavel" onclick="exibir'
						+ pagina
						+ '('
						+ obj.valorDasPaginas[selecionado - 2]
						+ ',' + (selecionado - 1) + ')"> < </button>';
			}
		}
		html += '<button type="button" id="botao_' + (i + 1)
				+ '" onclick="exibir' + pagina + '(' + obj.valorDasPaginas[i]
				+ ',' + (i + 1) + ')">' + (i + 1) + '</button>';
		if (i === (obj.quantidadeDePaginas - 1)) {
			if (selecionado <= (obj.quantidadeDePaginas - 1)) {
				html += '<button type="button" class="botao-selecionavel" onclick="exibir'
						+ pagina
						+ '('
						+ obj.valorDasPaginas[selecionado]
						+ ','
						+ (selecionado + 1) + ')"> > </button>';
			} else {
				html += '<button type="button" class="botao-opacity" onclick="exibir'
						+ pagina
						+ '('
						+ obj.valorDasPaginas[selecionado - 1]
						+ ',' + (i + 1) + ')" disabled> > </button>';
			}
		}
	}
	container.innerHTML = html;
	botaoSelecionado(selecionado);
}

function botaoSelecionado(selecionado) {
	document.getElementById("botao_" + selecionado).className = "selecionado-botao";
}

function buscarDestaquesPelosBotoes(valorBotao) {
	exibirDestaques(valorBotao);
}

function buscarDestaques(total, totalPorPagina, valorAux, selecionado) {
	if (valorAux === undefined) {
		valorAux = 0;
	}

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques/" + valorAux + "/" + totalPorPagina;
	var token = pegar_token(), html = "";
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

	botoesPaginacao(valorEQauntidadeDeBotoes(total), "Destaques", selecionado);
}

function buscarServicos(total, totalPorPagina, valorAux, selecionado) {
	if (valorAux === undefined) {
		valorAux = 0;
	}

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos/" + valorAux + "/" + totalPorPagina;
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
	botoesPaginacao(valorEQauntidadeDeBotoes(total), "Servicos", selecionado);
}

function buscarProdutos(total, totalPorPagina, valorAux, selecionado) {
	if (valorAux === undefined) {
		valorAux = 0;
	}

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/produtos/" + valorAux + "/" + totalPorPagina;
	var token = pegar_token();
	var html = "";
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	html += "<tr><th>Titulo</th><th>Descricao</th><th>Status</th><th>Data de Cadastro</th><th>Editar</th><th>Excluir</th></tr>";

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			if (obj.produto.length === undefined) {
				for (key in obj) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ obj[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ statusDisplay(obj[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj[key].id
							+ "'>"
							+ toDate(obj[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editarProduto(this)'  data-id='"
							+ obj[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluirProduto(this)' data-id='"
							+ obj[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			} else {
				for (key in obj.produto) {

					html += "<tr class='selecao-de-linha' data-id='"
							+ obj.produto[key].id
							+ "'>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj.produto[key].id
							+ "'>"
							+ obj.produto[key].titulo
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj.produto[key].id
							+ "'>"
							+ obj.produto[key].descricao
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj.produto[key].id
							+ "'>"
							+ statusDisplay(obj.produto[key].status)
							+ "</td>"
							+ "<td onclick='selecionarLinhaProduto(this)' data-id='"
							+ obj.produto[key].id
							+ "'>"
							+ toDate(obj.produto[key].dataCadastro)
							+ "</td>"
							+ "<td><input type='image' onclick='editarProduto(this)'  data-id='"
							+ obj.produto[key].id
							+ "' class='edit' src='../img/edit.png' alt='edit' />"
							+ "</td>"
							+ "<td><input type='image' onclick='excluirProduto(this)' data-id='"
							+ obj.produto[key].id
							+ "' class='trash' src='../img/trash.png' alt='trash' />"
							+ "</td>" + "</tr>";
				}
			}

			document.getElementById("tabela-produto").innerHTML = html;
		} else {
			alert("Token inválido!");
		}
	}

	xmlhttp.send();
	botoesPaginacao(valorEQauntidadeDeBotoes(total), "Produtos", selecionado);
}

if (pegarPaginaAtual() === "destaques") {
	exibirDestaques();
} else if (pegarPaginaAtual() === "servicos") {
	exibirServicos();
} else {
	exibirProdutos();
}
