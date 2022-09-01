const turista = prompt("Olá, como se chama?");
let cidades = ""; //string vazia para receber o nome das cidades visitadas
let contagem = 0; //variável a iniciar em zero para fazer "acréscimo" à lista de cidades visitadas

let visitou = prompt(turista + " visitou alguma cidade? (Sim/Não)");

while (visitou === "Sim") {
  let cidade = prompt("Qual o nome da cidade que já visitou?");
  //cidades = cidades + ...
  cidades += " - " + cidade + "\n";
  //incrementa o número de cidades visitadas
  contagem++;
  visitou = prompt("E visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas: " +
    cidades
);
