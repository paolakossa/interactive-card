function trocaNome(){
	let nome = document.querySelector('#nomesobrenome').value; 
	document.querySelector('#card__front--nome').innerText = nome;

}

function trocaNumero(){
	let numero = document.querySelector('#numerodocartao').value; 
	document.querySelector('#card__front--numero--num').innerText = numero;

}

function trocaData() {
	let validade = document.querySelector('#data').value;
	document.querySelector('.card__front--validade-mes').innerText = validade;
	
	
}

