const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá mundo!";

  input.value;
  input.getAttribute("value"); // pega no valor inicial que está no HTML
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "text";
  /* input.setAttribute("type", "radio"); */ // só permite trocar, não devolve ao valor inicial como com operador ternário ^
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita a mensagem";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.something;
  console.log("O valor do atributo data é :" + data);
  input.dataset.something = "Outra coisa";
  console.log("O valor do atributo data agora é :" + input.dataset.something);
  //quando um atributo data em HTML tem mais de duas palavras (data-something-else), passa para camelCase em JS (somethingElse)
});
