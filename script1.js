
function converterNumero() {
  const numero = parseInt(document.getElementById('numero').value, 10);

  if (isNaN(numero) || numero < 0 || numero > 9999) {
    document.getElementById('resultado').value = 'Número inválido.';
    return;
  }

  const porExtenso = porExtenso(numero);
  document.getElementById('resultadoExtenso').value = porExtenso;
}

document.getElementById('converterBtn').addEventListener('click', converterNumero);
