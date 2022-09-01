let palavra = prompt("Insira a palavra que quer verificar:");

let analise = "";

for (i = palavra.length - 1; i >= 0; i--) {
  analise += palavra[i];
}

if (palavra === analise) {
  alert(palavra + " é um palindromo!");
} else {
  alert(
    palavra + " não é um palindromo!\n\n" + palavra + " diferente de " + analise
  );
}
