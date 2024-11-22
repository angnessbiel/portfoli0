
// Algoritmo 4: Organização de tarefas diárias
let tarefas = [];
tarefas.push(prompt("Adicione a primeira tarefa:"));
tarefas.push(prompt("Adicione a segunda tarefa:"));
tarefas.push(prompt("Adicione a terceira tarefa:"));
tarefas.splice(1, 1);  // Remove a segunda tarefa
tarefas.push("ligar para o médico");
console.log("Tarefas atualizadas:", tarefas);
