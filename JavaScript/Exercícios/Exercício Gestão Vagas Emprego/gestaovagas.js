let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao Sistema de Gestão de Vagas de Emprego " +
      "\nEscolha uma das seguintes opções: " +
      "\n1.Listar vagas disponíveis" +
      "\n2.Criar nova vaga" +
      "\n3.Consultar uma vaga" +
      "\n4.Inscrever candidato numa vaga" +
      "\n5.Excluir vaga" +
      "\n6.Fechar"
  );
  switch (opcao) {
    case "1":
      alert("Vagas disponíveis:");
      break;
    case "2":
      alert("Crie uma nova vaga:");
      break;
    case "3":
      alert("Qual a vaga que pretende consultar?");
      break;
    case "4":
      alert("Foi escolhida a opção 4");
      break;
    case "5":
      alert("Foi escolhida a opção 5");
      break;
    case "6":
      alert("Escolheu fechar a aplicação!");
      alert("A fechar...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "6");
