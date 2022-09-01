let opçao = "";

do {
  opçao = prompt(
    "Bem vindo ao menu interativo" +
      "\nEscolha uma das seguintes opções: " +
      "\n1.Menu" +
      "\n2.Sobre" +
      "\n3.Produtos" +
      "\n4.Serviços" +
      "\n5.Encerrar"
  );
  switch (opçao) {
    case "1":
      alert("Foi escolhida a opção 1");
      break;
    case "2":
      alert("Foi escolhida a opção 2");
      break;
    case "3":
      alert("Foi escolhida a opção 3");
      break;
    case "4":
      alert("Foi escolhida a opção 4");
      break;
    case "5":
      alert("Escolheu encerrar!");
      alert("A encerrar...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opçao !== "5");
