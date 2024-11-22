
// Algoritmo 2: Lista de compras automatizada
let listaCompras = [];
listaCompras.push(prompt("Adicione o primeiro item:"));
listaCompras.push(prompt("Adicione o segundo item:"));
listaCompras.push(prompt("Adicione o terceiro item:"));
if (listaCompras[listaCompras.length - 1] !== "leite") {
    listaCompras.push("leite");
}
console.log("Lista de Compras:", listaCompras);
