let fila = [];
let opçao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º" + fila[i] + "\n";
  }

  opçao = prompt(
    "Bem vindo ao programa de gestão de pacientes! " +
      "Lista de pacientes " +
      pacientes +
      "\nO que pretende fazer?" +
      "\n1.Adicionar novo paciente" +
      "\n2.Consultar paciente" +
      "\n3.Sair"
  );
  switch (opçao) {
    case "1":
      const novoPaciente = prompt("Nome do paciente a adicionar: ");
      fila.push(novoPaciente);
      break;
    case "2":
      const removePaciente = fila.shift();
      if (removePaciente) {
        alert(removePaciente + " já não está na fila!");
      } else {
        alert("Não há pacientes na fila!");
      }

      break;
    case "3":
      alert("Escolheu 'Sair'" + "\nPrograma a encerrar!");
      break;
    default:
      alert("Opção inválida");
  }
} while (opçao !== "3");
