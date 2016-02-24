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

var xmlhttp = new XMLHttpRequest();
xmlhttp.withCredentials = false;

var urlDestaques = "http://localhost:8080/api-restiful/api/destaques";
var urlProdutos = "http://localhost:8080/api-restiful/api/produtos";
var urlServicos = "http://localhost:8080/api-restiful/api/servicos";
var html = "";

xmlhttp.open("GET", urlDestaques, true);

xmlhttp.onload = function(e) {
	var obj = JSON.parse(xmlhttp.responseText);
	for (key in obj) {
		html += "<p class='title-comment'>" + obj[key].titulo + "</p>";
		+"<div class='title-border'></div>";
		+"<p class='comment'>" + obj[key].descricao + "</p>";
		document.getElementById("banner").src = "img/" + obj[key].imagem;
	}
	document.getElementById("shadow-comment").innerHTML = html;

	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", urlProdutos, true);
	xmlhttp.onload = function(e) {

		var obj = JSON.parse(xmlhttp.responseText);
		html = "";
		for (key in obj.produto) {
			html += "<div class='product'>";
			+"<img src='img/" + obj.produto[key].imagem + "' alt='"
					+ obj.produto[key].nome + "'>";
			+"<h3>" + obj.produto[key].nome + "</h3>";
			+"<p>" + obj.produto[key].descricao + "</p>";
			+"</div>";
		}
		document.getElementById("grid-products").innerHTML = html;

		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", urlServicos, true);
		html = "";
		xmlhttp.onload = function(e) {
			var obj = JSON.parse(xmlhttp.responseText);
			for (key in obj.servico) {

				html += "<div class='service'>";
				+"<div class='image'>";
				+"<img src='img/" + obj.servico[key].imagem + "' alt='"
						+ obj.servico[key].nome + "'>";
				+"</div>";
				+"<div class='text'>";
				+"<h3>" + obj.servico[key].nome + "</h3>";
				+"<p class='small-text-service'>" + obj.servico[key].descricao
						+ "</p>";
				+"<p class='big-text-service'>" + obj.servico[key].descricao
						+ "</p>";
				+"</div>";
				+"</div>";

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
