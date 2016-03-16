// Console
var getId = window.location.search.replace("?id=", "");
var base_url = "http://localhost:8080/api-restiful/api";
var base_img = "http://localhost:8080/api-restiful/img/produto-tres.jpg";

if (getId === "") {
	mostarCadastrar();
} else {
	mostarAlterar();

	var xmlhttp = new XMLHttpRequest();
	if (pegarPaginaAtual() === "destaque") {
		var url = base_url + "/destaques/" + getId;
	} else if (pegarPaginaAtual() === "servico") {
		var url = base_url + "/servicos/" + getId;
	} else {
		var url = base_url + "/produtos/" + getId;
	}

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
			document.getElementById("fileName").innerHTML = obj.imagem;
			document.getElementById("mostrarImagem").src = base_img;
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

function pegarPaginaAtual() {
	var aux = window.location.pathname;
	var aux2 = aux.split("/");
	var aux3 = aux2[3].split(".");
	var url = aux3[0];
	return url;
}

// function cadastrarDestaque() {
// var e = document.getElementById("status");
// var status = e.options[e.selectedIndex].value;
// var titulo = document.getElementById("titulo").value;
// var descricao = document.getElementById("descricao").value;
// var imagem = document.getElementById("imagem").value;
//
// if (!validarCampos(titulo, status, descricao, imagem)) {
// return;
// }
//
// var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
// + '", "imagem": "' + imagem + '", "status": "' + status + '" }';
// var json = JSON.stringify(stringJson);
// json = JSON.parse(json);
//
// var xmlhttp = new XMLHttpRequest();
// var url = base_url + "/destaques";
// xmlhttp.open("POST", url, true);
// xmlhttp.setRequestHeader("Content-type", "application/json");
//
// xmlhttp.onload = function(e) {
// if (xmlhttp.status == 200) {
// var obj = JSON.parse(xmlhttp.responseText);
// window.location.href = "destaques.html";
// } else {
// alert("Erro ao inserir o Destaque");
// }
// }
//
// xmlhttp.onerror = function(e) {
// console.log("Deu erro");
// }
// xmlhttp.send(json);
// }

function alterarDestaque() {
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = document.getElementById("imagem").value;
	var token = pegar_token();

	if (!validarCampos(titulo, status, descricao, imagem)) {
		return;
	}

	var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
			+ '", "imagem": "' + imagem + '", "status": "' + status + '" }';
	var json = JSON.stringify(stringJson);
	json = JSON.parse(json);

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/destaques/" + getId;
	xmlhttp.open("PUT", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			window.location.href = "destaques.html";
		} else {
			alert("Erro ao alterar o Destaque");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}
	xmlhttp.send(json);
}

function alterarServico(fileBase64) {
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = document.getElementById("imagem").value;
	var token = pegar_token();

	if (!validarCampos(titulo, status, descricao, imagem)) {
		return;
	}

	var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
			+ '", "imagem": "' + imagem + '", "status": "' + status + '" }';
	var json = JSON.stringify(stringJson);
	json = JSON.parse(json);

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos/" + getId;
	xmlhttp.open("PUT", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			window.location.href = "servicos.html";
		} else {
			alert("Erro ao alterar o Servico");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}
	xmlhttp.send(json);
}

function alterarProduto(fileBase64) {
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = document.getElementById("imagem").value;
	var hasAlteracaoImagem = true;
	if (fileBase64 === undefined) {
		imagem = document.getElementById("fileName").innerHTML;
		hasAlteracaoImagem = false;
	} else {
		imagem = fileBase64;
	}

	var token = pegar_token();
	if (!validarCampos(titulo, status, descricao, imagem)) {
		return;
	}

	var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
			+ '", "imagem": "' + imagem + '", "status": "' + status + '" }';
	var json = JSON.stringify(stringJson);
	json = JSON.parse(json);

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/produtos/" + getId + "/" + hasAlteracaoImagem;
	xmlhttp.open("PUT", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");
	xmlhttp.setRequestHeader("Authorization", token);

	xmlhttp.upload.addEventListener("load", function() {
		console.log('upload complete!');
	}, false);
	// progresso
	xmlhttp.upload.addEventListener("progress", function(evt) {
		if (evt.lengthComputable) {
			console.log((evt.loaded / evt.total) * 100);
		} else {
			console.log("Error uploading.");
		}
	}, false);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			window.location.href = "produtos.html";
		} else {
			alert("Erro ao inserir o Produto");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}

	xmlhttp.send(json);
	// quando estiver pronto
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			console.log("Status: " + this.status);
			console.log("readyState: " + this.readyState);
			console.log("responseText: (" + this.responseText + " )");
		}
	};
}

function validarCampos(titulo, status, descricao, imagem) {
	if (titulo.trim() == '') {
		alert("Digite um titulo");
		return false;
	}
	if (status.trim() == '') {
		alert("Selecione um status");
		return false;
	}
	if (descricao.trim() == '') {
		alert("Digite uma descrição");
		return false;
	}
	if (imagem.trim() == '') {
		alert("Digite uma imagem");
		return false;
	}
	return true;
}

function pegar_token() {
	if (sessionStorage.token === undefined) {
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

function cancelarDestaque() {
	window.location.href = "destaques.html";
}

function cancelarServico() {
	window.location.href = "servicos.html";
}

function cancelarProduto() {
	window.location.href = "produtos.html";
}

function toDate(dateStr) {
	var parts = dateStr.split("-");
	var parts2 = parts[2].split("T");
	var dia = parts2[0];
	var mes = parts[1];
	var ano = parts[0];
	return dia + "/" + mes + "/" + ano;
}

function mostrarNomeDoArquivo(inputFile) {
	inputFile.offsetParent.getElementsByClassName('fileName')[0].innerHTML = inputFile.value
			.replace(/\\/g, '/').split('/').pop();
	console.log()
}

// Parte de upload de imagem

File.prototype.convertToBase64 = function(callback) {
	var FR = new FileReader();
	FR.onload = function(e) {
		callback(e.target.result)
	};
	FR.readAsDataURL(this);
}

function cadastrarProduto(fileBase64) {
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = fileBase64;

	console.log(document.getElementById("imagem"));

	if (!validarCampos(titulo, status, descricao, imagem)) {
		return;
	}

	var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
			+ '", "imagem": "' + imagem + '", "status": "' + status + '"}';
	var json = JSON.stringify(stringJson);
	json = JSON.parse(json);

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/produtos";
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");

	xmlhttp.upload.addEventListener("load", function() {
		console.log('upload complete!');
	}, false);
	// progresso
	xmlhttp.upload.addEventListener("progress", function(evt) {
		if (evt.lengthComputable) {
			console.log((evt.loaded / evt.total) * 100);
		} else {
			console.log("Error uploading.");
		}
	}, false);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			window.location.href = "produtos.html";
		} else {
			alert("Erro ao inserir o Produto");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}

	xmlhttp.send(json);
	// quando estiver pronto
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			console.log("Status: " + this.status);
			console.log("readyState: " + this.readyState);
			console.log("responseText: (" + this.responseText + " )");
		}
	};
}

function cadastrarServico(fileBase64) {
	var e = document.getElementById("status");
	var status = e.options[e.selectedIndex].value;
	var titulo = document.getElementById("titulo").value;
	var descricao = document.getElementById("descricao").value;
	var imagem = fileBase64;

	if (!validarCampos(titulo, status, descricao, imagem)) {
		return;
	}

	var stringJson = '{ "titulo": "' + titulo + '", "descricao": "' + descricao
			+ '", "imagem": "' + imagem + '", "status": "' + status + '"}';
	var json = JSON.stringify(stringJson);
	json = JSON.parse(json);

	var xmlhttp = new XMLHttpRequest();
	var url = base_url + "/servicos";
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/json");

	xmlhttp.upload.addEventListener("load", function() {
		console.log('upload complete!');
	}, false);
	// progresso
	xmlhttp.upload.addEventListener("progress", function(evt) {
		if (evt.lengthComputable) {
			console.log((evt.loaded / evt.total) * 100);
		} else {
			console.log("Error uploading.");
		}
	}, false);

	xmlhttp.onload = function(e) {
		if (xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);
			window.location.href = "servicos.html";
		} else {
			alert("Erro ao inserir o Produto");
		}
	}

	xmlhttp.onerror = function(e) {
		console.log("Deu erro");
	}

	xmlhttp.send(json);
	// quando estiver pronto
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			console.log("Status: " + this.status);
			console.log("readyState: " + this.readyState);
			console.log("responseText: (" + this.responseText + " )");
		}
	};
}

var controls = {
	init : function() {

		if (getId === "") {
			var buttonEnviar = document.getElementById("cadastrar");
			buttonEnviar.addEventListener("click", controls.handleFiles, false);
		} else {
			var buttonAlterar = document.getElementById("alterar");
			buttonAlterar
					.addEventListener("click", controls.handleFiles, false);
		}

	},

	handleFiles : function() {
		var inputFile = document.getElementById("imagem");
		if (inputFile.files[0] === undefined) {
			if (pegarPaginaAtual() === "servico") {
				if (getId === "") {
					cadastrarServico(undefined);
				} else {
					alterarServico(undefined);
				}
			} else {
				if (getId === "") {
					cadastrarProduto(undefined);
				} else {
					alterarProduto(undefined);
				}
			}
		} else {
			inputFile.files[0].convertToBase64(function(base64) {
				if (pegarPaginaAtual() === "servico") {
					if (getId === "") {
						cadastrarServico(base64);
					} else {
						alterarServico(base64);
					}
				} else {
					if (getId === "") {
						cadastrarProduto(base64);
					} else {
						alterarProduto(base64);
					}
				}
			});
		}

	}

};

window.addEventListener("load", controls.init, false);

//JCrop

$(function(){
	 
    $('#imagem').Jcrop({
        aspectRatio: 1,
        onSelect: updateCoords
    });

});

function updateCoords(c)
{
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
};

function checkCoords()
{
    if (parseInt($('#w').val())) return true;
    alert('Selecione a região para recortar.');
    return false;
};

