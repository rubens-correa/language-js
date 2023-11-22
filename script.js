function plusDiv() {
  const intNumb = document.getElementById('numero');
  const resultNumb = document.getElementById('resultado');

  const numero = parseInt(intNumb.value);

  if (!isNaN(numero) && numero > 0) {
      const result = plusMult(numero);
      resultNumb.textContent = `O somatório dos múltiplos de 3 ou 5 menores que ${numero} é: ${result}`;
  } else {
      resultNumb.textContent = 'Por favor, digite um número inteiro positivo válido.';
  }
}

function plusMult(numero) {
  let plus = 0;

  for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          plus += i;
      }
  }

  return plus;
}
