const baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );
  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.unshift(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.shift();
      if (!cartaPuxada) {
        alert("Sem cartas no baralho!");
      } else {
        alert("Puxou a carta " + cartaPuxada);
      }
      break;
    case "3":
      alert("A sair...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
