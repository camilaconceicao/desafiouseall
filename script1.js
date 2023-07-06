import numeroPorExtenso from 'numero-por-extenso';

const numeroPorExtenso = require('numero-por-extenso');

//const numeroExtenso = numeroPorExtenso.porExtenso(55);
//console.log(numeroExtenso);  // Saída: "quarenta e dois"

function converter() {
  debugger
  let numero = parseInt(document.getElementById('numero').value);

  if (isNaN(numero) || numero < 0 || numero > 9999) {
    document.getElementById('resultado').value = alert('Número inválido.');
    return;
  }

  let porExtenso = numeroPorExtenso.porExtenso(numero);
  document.getElementById('resultadoExtenso').value = porExtenso;
}