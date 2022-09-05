//Manipulação dos dados do cartão

function trocaNome(){
	let nome = document.querySelector('#nomesobrenome').value; 
	document.querySelector('#card__front--nome').innerText = nome;

};

function trocaNumero(){
	let numero = document.querySelector('#numerodocartao').value; 
	document.querySelector('#card__front--numero--num').innerText = numero;
};

function trocaDataMes() {
	let validade = document.querySelector('#data').value;
	document.querySelector('.card__front--validade-mes').innerText = validade;
	
	
};

function trocaDataAno() {
	let validade = document.querySelector('#data-ano').value;
	document.querySelector('.card__front--validade-ano').innerText = validade;
	
	
};

function trocaCVC() {
	let cvc = document.querySelector('#numerodeseguranca').value;
	document.querySelector('.card__back--texto--p').innerText = cvc;
	
	
};

// Mostrar a tela de obrigado 

function enviar() {
	document.querySelector('.mensagem__obrigado').style.display = 'block';

};

//Prevenir refresh automático do envio do formulário

const form = document.querySelector('.form')
form.addEventListener('submit', e => {
    e.preventDefault();
});

//Realizar o refresh da página com o botão "continue"

const btn = document.querySelector('.mensagem__obrigado-button');
btn.addEventListener("click", function() {
    
    location.reload();
});


