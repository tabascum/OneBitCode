let numero = parseFloat(
  prompt("Insira o número do qual pretende calcular a tabuada:")
);

let tabuada = "";

for (i = 1; i <= 20; i++) {
  tabuada += numero + " x " + i + " = " + numero * i + "\n";
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + tabuada);
