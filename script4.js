/*
4. Criar uma função que realiza o cálculo do IMC, a função deve receber dois parâmetros, altura e peso e
retornar o IMC seguido da respectiva classificação. O IMC é calculado com PESO / ALTURA². As
classificações são:
*/

function calcular() {
  const pesoRecebido = parseFloat(document.getElementById('peso').value);
  const alturaRecebida = parseFloat(document.getElementById('altura').value);
  const imc = pesoRecebido / (alturaRecebida ** 2);

  if (imc <= 18.4) {
    alert("Abaixo do peso");
  } else if (imc <= 24.9) {
    alert("Peso normal");
  } else if (imc <= 29.9) {
    alert("Acima do peso");
  } else {
    alert("Obeso");
  }
}