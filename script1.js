function converterNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  const porExtenso = numeroPorExtenso(numero);
  document.getElementById('resultado').textContent = porExtenso;
}


function espacamento() {
  const espaco = document.getElementById('resultado');
  espaco.innerHTML = exemplo.numero.join('e ');
}


function numeroPorExtenso(numero) {
  const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
  const especiais = ['', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

  if (numero === 0) {
    return 'zero';
  }

  let porExtenso = '';
  document.getElementById('numero').value = ""

  // milhar
  const unidadeDeMilhar = Math.floor(numero / 1000);
  if (unidadeDeMilhar > 0) {
    porExtenso += unidades[unidadeDeMilhar] + ' mil ';
  }

  // centena
  const centena = Math.floor((numero % 1000) / 100);
  if (centena > 0) {
    porExtenso += centenas[centena] + ' ';
  }

  // dezena e a unidade
  const dezenaUnidade = numero % 100;
  if (dezenaUnidade >= 11 && dezenaUnidade <= 19) {
    porExtenso += especiais[dezenaUnidade - 10];
  } else {
    const dezena = Math.floor(dezenaUnidade / 10);
    const unidade = dezenaUnidade % 10;
    if (dezena > 0) {
      porExtenso += dezenas[dezena] + ' ';
    }
    if (unidade > 0) {
      porExtenso += unidades[unidade];
    }
  }

  return porExtenso.trim('');
}