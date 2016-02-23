var i = 0;

function menu() {

  var elemento = document.getElementById('nav');

  if(i % 2 == 0) {
    elemento.style.display = "block";
    i++;
  }else {
    elemento.style.display = "none";
    i++;
  }

}

var xmlhttp = new XMLHttpRequest();
xmlhttp.withCredentials = false;

var urlDestaques = "http://localhost:8080/api-restiful/api/destaques";
var urlProdutos = "http://localhost:8080/api-restiful/api/produtos";
var urlServicos = "http://localhost:8080/api-restiful/api/servicos";

xmlhttp.open("GET", urlDestaques, true);

xmlhttp.onload = function (e) {
   var obj = JSON.parse(xmlhttp.responseText);
   for(key in obj){
	   document.getElementById("banner").src = "img/"+obj[key].imagem;
	   document.getElementById("tituloDestaque").innerHTML = obj[key].titulo;
	   document.getElementById("commentDestaque").innerHTML = obj[key].descricao;   
   }

   xmlhttp = new XMLHttpRequest();
   xmlhttp.open("GET", urlProdutos, true);
   xmlhttp.onload = function (e) {
		
		var obj = JSON.parse(xmlhttp.responseText);
		for(key in obj.produto){
			document.getElementById("img_"+obj.produto[key].id).src = "img/"+obj.produto[key].imagem;
			document.getElementById("titulo_"+obj.produto[key].id).innerHTML = obj.produto[key].nome;
			document.getElementById("descricao_"+obj.produto[key].id).innerHTML = obj.produto[key].descricao;
			i++;
		}
		
		xmlhttp = new XMLHttpRequest();
	   xmlhttp.open("GET", urlServicos, true);
	   xmlhttp.onload = function (e) {
			var obj = JSON.parse(xmlhttp.responseText);
			for(key in obj.servico){
				document.getElementById("img_servico_"+obj.servico[key].id).src = "img/"+obj.servico[key].imagem;
				document.getElementById("titulo_servico_"+obj.servico[key].id).innerHTML = obj.servico[key].nome;
				document.getElementById("descricao_servico_pequena_"+obj.servico[key].id).innerHTML = obj.servico[key].descricao;
				document.getElementById("descricao_servico_grande_"+obj.servico[key].id).innerHTML = obj.servico[key].descricao;
				i++;
			}
	   }

	   xmlhttp.send();
   }
   xmlhttp.send();
   
}

xmlhttp.onerror = function (e) {
 console.error(xmlhttp.statusText);
};

xmlhttp.send();

