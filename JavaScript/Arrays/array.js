const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

// adicionar elementos
// push() adiciona elementos no fim do array

arr.push("Boromir");

// unshift() adiciona elementos no inicio do array

arr.unshift("Boromir");

// pop() remove elementos no final do array

let lastElement = arr.pop();

// shift() remove elementos no inicio do array

lastElement = arr.shift();

// Pesquisa por elementos
// includes() pesquisar  se um elemento está no array

const inclui = arr.includes("Boromir");

// indexOf() pesquisar o elemento pelo indice

const indice = arr.indexOf("Boromir");

// Cortar e concatenar
// slice() corta e guarda num novo array

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4); // inicia o corte partindo do final

// concat() permite "juntar" vários arrays e inserir novos valores

const sociedade = hobbits.concat(outros, "Boromir");

//Substituir elementos ou remover um grupo de elementos

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Maluco");
console.log(elementosRemovidos);
console.log(sociedade);

//iterar / percorrer um array

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " encontra-se na posição " + indice);
}
