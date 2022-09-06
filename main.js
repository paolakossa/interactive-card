//Manipulação dos dados do cartão

function trocaNome(){
	const nome = document.querySelector('#nomesobrenome').value; 
	document.querySelector('#card__front--nome').innerText = nome;

};

function trocaNumero(){
	const numero = document.querySelector('#numerodocartao').value; 
	document.querySelector('#card__front--numero--num').innerText = numero;
};

function trocaDataMes() {
	const validade = document.querySelector('#data').value;
	document.querySelector('.card__front--validade-mes').innerText = validade;
	
	
};

function trocaDataAno() {
	const validade = document.querySelector('#data-ano').value;
	document.querySelector('.card__front--validade-ano').innerText = validade;
	
	
};

function trocaCVC() {
	const cvc = document.querySelector('#numerodeseguranca').value;
	document.querySelector('.card__back--texto--p').innerText = cvc;
	
	
};

// Validar formulário e mostrar a tela de obrigado 

function enviar() {
	
	const nome = document.querySelector('#nomesobrenome').value;
	const numero = document.querySelector('#numerodocartao').value; 
	const mes = document.querySelector('#data').value;
	const ano = document.querySelector('#data-ano').value;
	const cvc = document.querySelector('#numerodeseguranca').value;

	if( nome === ''){

	document.querySelector('.mensagem__obrigado').style.display = 'none';
	document.querySelector('.mensagem__branco-1').style.display = 'block';
	document.querySelector('#nomesobrenome').style.borderColor = 'hsl(0, 100%, 66%)';


} else{

	document.querySelector('.mensagem__obrigado').style.display = 'block';
	document.querySelector('.mensagem__branco-1').style.display = 'none';
	document.querySelector('#nomesobrenome').style.borderColor = 'hsl(270, 3%, 87%)';
	
}

if( numero === ''){

	document.querySelector('.mensagem__obrigado').style.display = 'none';
	document.querySelector('.mensagem__erro').style.display = 'block';
	document.querySelector('#numerodocartao').style.borderColor = 'hsl(0, 100%, 66%)';
	
} else{

	document.querySelector('.mensagem__obrigado').style.display = 'block';
	document.querySelector('.mensagem__erro').style.display = 'none';
	document.querySelector('#numerodocartao').style.borderColor = 'hsl(270, 3%, 87%)';
}

if( mes === ''){

	document.querySelector('.mensagem__obrigado').style.display = 'none';
	document.querySelector('.mensagem__branco-2').style.display = 'block';
	document.querySelector('#data').style.borderColor = 'hsl(0, 100%, 66%)';

} else{

	document.querySelector('.mensagem__obrigado').style.display = 'block';
	document.querySelector('.mensagem__branco-2').style.display = 'none';
	document.querySelector('#data').style.borderColor = 'hsl(270, 3%, 87%)';

}

if( ano === ''){

	document.querySelector('.mensagem__obrigado').style.display = 'none';
	document.querySelector('.mensagem__branco-3').style.display = 'block';
	document.querySelector('#data-ano').style.borderColor = 'hsl(0, 100%, 66%)';

} else{

	document.querySelector('.mensagem__obrigado').style.display = 'block';
	document.querySelector('.mensagem__branco-3').style.display = 'none';
	document.querySelector('#data-ano').style.borderColor = 'hsl(270, 3%, 87%)';

}

if( cvc === ''){

	document.querySelector('.mensagem__obrigado').style.display = 'none';
	document.querySelector('.mensagem__branco-4').style.display = 'block';
	document.querySelector('#numerodeseguranca').style.borderColor = 'hsl(0, 100%, 66%)';


} else{

	document.querySelector('.mensagem__obrigado').style.display = 'block';
	document.querySelector('.mensagem__branco-4').style.display = 'none';
	document.querySelector('#numerodeseguranca').style.borderColor = 'hsl(270, 3%, 87%)';
}


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


