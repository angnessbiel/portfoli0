
// Algoritmo 9: Metas semanais
let metasSemana = [];
metasSemana.push(prompt("Adicione a primeira meta da semana:"));
metasSemana.push(prompt("Adicione a segunda meta da semana:"));
metasSemana.push(prompt("Adicione a terceira meta da semana:"));
if (metasSemana[1] !== "exercício físico") {
    metasSemana[1] = "praticar esportes";
}
console.log("Metas semanais:", metasSemana);
