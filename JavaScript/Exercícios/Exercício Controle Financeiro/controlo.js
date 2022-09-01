let dinheiro = prompt("Indique o valor inicial:");
dinheiro = parseFloat(dinheiro);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: € " +
      dinheiro +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );
  switch (opcao) {
    case "1":
      dinheiro += parseFloat(prompt("Indique o valor a ser adicionado: "));
      break;
    case "2":
      dinheiro -= prompt("Indique o valor a ser removido: ");
      break;
    case "3":
      alert("A sair...");
      break;
    default:
      alert("Opção inválida! Selecione uma opção:");
  }
} while (opcao !== "3");
