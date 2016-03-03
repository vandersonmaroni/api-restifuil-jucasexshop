var base_url = "http://localhost:8080/api-restiful/api";
var i = 0;
function menu() {

	var elemento = document.getElementById('nav');

	if (i % 2 == 0) {
		elemento.style.display = "block";
		i++;
	} else {
		elemento.style.display = "none";
		i++;
	}

}

function abrirModal() {
	document.getElementById("modal-fundo").style.display = "block";
	document.getElementById("login").style.display = "block";
	document.body.style.overflow = 'hidden';
}

function fecharModal() {
	document.getElementById("modal-fundo").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.body.style.overflow = 'auto';
}

function logar() {
	var username = document.getElementById("usuario").value;
	var password = document.getElementById("senha").value;

	if (usuario == '' || senha == '') {
		alert("Digite algum usuario e senha!")
	} else {
		var json = '{"usuario":"' + username + '", "senha":"' + password + '"}';
		var xmlhttp = new XMLHttpRequest();
		var url = base_url + "/login";
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type", "application/json");

		xmlhttp.onload = function(e) {
			if (xmlhttp.status == 200) {
				var obj = JSON.parse(xmlhttp.responseText);
				sessionStorage.setItem('token', obj.token);
				window.location.href = "console/destaques.html";
			} else {
				alert("Usuário ou senha inválido");
			}
		}

		xmlhttp.onerror = function(e) {
			console.log("Deu erro");
		}
		xmlhttp.send(json);
	}
}

function pegar_token() {
	if (sessionStorage.token === undefined) {
		return "";
	} else {
		return sessionStorage.token;
	}
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.withCredentials = false;

var urlDestaques = base_url + "/site/destaques";
var urlProdutos = base_url + "/site/produtos";
var urlServicos = base_url + "/site/servicos";
var html = "";

xmlhttp.open("GET", urlDestaques, true);

xmlhttp.onload = function(e) {
	var obj = JSON.parse(xmlhttp.responseText);
	if (obj.destaque.length === undefined) {
		for (key in obj) {
			html += "<p class='title-comment'>" + obj[key].titulo + "</p>"
					+ "<div class='title-border'></div>"
					+ "<p class='comment'>" + obj[key].descricao + "</p>";
			document.getElementById("banner").src = "img/" + obj[key].imagem;
		}
	} else {
		html += "<p class='title-comment'>" + obj.destaque[0].titulo + "</p>"
				+ "<div class='title-border'></div>" + "<p class='comment'>"
				+ obj.destaque[0].descricao + "</p>";
		document.getElementById("banner").src = "img/"
				+ obj.destaque[0].imagem;
	}

	document.getElementById("shadow-comment").innerHTML = html;

	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", urlProdutos, true);
	xmlhttp.onload = function(e) {

		var obj = JSON.parse(xmlhttp.responseText);
		html = "";
		for (key in obj.produto) {
			html += "<div class='product'>" + "<img src='img/"
					+ obj.produto[key].imagem + "' alt='"
					+ obj.produto[key].nome + "'>" + "<h3>"
					+ obj.produto[key].nome + "</h3>" + "<p>"
					+ obj.produto[key].descricao + "</p>" + "</div>";
		}
		document.getElementById("grid-products").innerHTML = html;

		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", urlServicos, true);
		html = "";
		xmlhttp.onload = function(e) {
			var obj = JSON.parse(xmlhttp.responseText);
			for (key in obj.servico) {

				html += "<div class='service'>" + "<div class='image'>"
						+ "<img src='img/" + obj.servico[key].imagem
						+ "' alt='" + obj.servico[key].nome + "'>" + "</div>"
						+ "<div class='text'>" + "<h3>" + obj.servico[key].nome
						+ "</h3>" + "<p class='small-text-service'>"
						+ obj.servico[key].descricao + "</p>"
						+ "<p class='big-text-service'>"
						+ obj.servico[key].descricao + "</p>" + "</div>"
						+ "</div>";

			}
			document.getElementById("grid-service").innerHTML = html;
		}

		xmlhttp.send();
	}
	xmlhttp.send();

}

xmlhttp.onerror = function(e) {
	console.error(xmlhttp.statusText);
};

xmlhttp.send();
