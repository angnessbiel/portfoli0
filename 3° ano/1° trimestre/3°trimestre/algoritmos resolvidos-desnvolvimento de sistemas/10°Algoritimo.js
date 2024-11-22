
// Algoritmo 10: Verificação de número no vetor
let numeros = [12, 34, 56, 78, 90, 12, 23, 34, 56, 78];
let numeroProcurado = parseInt(prompt("Qual número deseja verificar?"));
let indices = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado) {
        indices.push(i);
    }
}
if (indices.length > 0) {
    console.log("Número encontrado nos índices:", indices);
} else {
    console.log("Número não encontrado no vetor.");
}
