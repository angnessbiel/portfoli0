
// Algoritmo 8: Tarefas de limpeza semanal
let tarefasLimpeza = [];
tarefasLimpeza.push(prompt("Adicione a primeira tarefa de limpeza:"));
tarefasLimpeza.push(prompt("Adicione a segunda tarefa de limpeza:"));
tarefasLimpeza.push(prompt("Adicione a terceira tarefa de limpeza:"));
tarefasLimpeza.push(prompt("Adicione a quarta tarefa de limpeza:"));
tarefasLimpeza.splice(2, 1); // Remove a terceira tarefa
tarefasLimpeza[1] = "limpar banheiro"; // Altera a segunda tarefa
console.log("Tarefas de limpeza atualizadas:", tarefasLimpeza);
