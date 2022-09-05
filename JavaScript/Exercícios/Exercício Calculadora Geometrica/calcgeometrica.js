function calcularAreaTriangulo() {
  const base = prompt("Indique a base do triangulo:");
  const altura = prompt("Indique a altura do triangulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Indique a base do retangulo:");
  const altura = prompt("Indique a altura do retangulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Indique o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Indique a base maior do trapezio"));
  const baseMenor = parseFloat(prompt("Indique a base menor do trapezio"));
  const altura = prompt("Indique a altura do trapezio:");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Indique o raio do circulo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Vamos calcular áreas!\n" +
      "\nEscolha uma das áreas a calcular:" +
      "\n1. Calcular área triangulo" +
      "\n2. Calcular área rectangulo" +
      "\n3. Calcular área quadrado" +
      "\n4. Calcular área trapezio" +
      "\n5. Calcular área circulo" +
      "\n6. Sair"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("A sair...");
        break;

      default:
        alert("Opção inválida");
        break;
    }

    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== "6");
}

executar();
