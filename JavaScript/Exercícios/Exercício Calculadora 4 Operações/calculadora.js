const entrada1 = prompt("Informe o primeiro número:");
const entrada2 = prompt("Informe o segundo número:");

const x = parseFloat(entrada1); //parseFloat transforma uma string num number
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nMultiplicação: " +
    multiplicacao +
    "\nDivisão: " +
    divisao
);
