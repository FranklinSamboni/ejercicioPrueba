/*var contenedor = document.getElementById("contenedor");
var valoruno = document.createElement("input");
var valordos = document.createElement("input");
var btn_calcular = document.createElement("input");
var result = document.createElement("div");


btn_calcular.type = "button";
btn_calcular.id = "btn_cal";
btn_calcular.value= "CALCULAR";
btn_calcular.onclick = function calcular(){
	var a = parseInt(valoruno.value);
	var b = parseInt(valordos.value);
	var resultado = a + b;
	var r = document.createElement("label");
	contenedor.appendChild(r);
	r.value = resultado;
}

contenedor.appendChild(btn_calcular);
contenedor.appendChild(valoruno);
contenedor.appendChild(valordos);
contenedor.appendChild(result);*/


var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var label = document.getElementById("labelResultado");
var btnCalcular = document.getElementById("btnCalcular");
label.style.display = 'none';
btnCalcular.onclick = function calcular(){
	var a = parseInt(valor1.value);
	var b = parseInt(valor2.value);
	var resultado = a + b;
	label.innerText = "El resultado es " + resultado;
	//label.className = '';
	label.style.display = 'inline';
}