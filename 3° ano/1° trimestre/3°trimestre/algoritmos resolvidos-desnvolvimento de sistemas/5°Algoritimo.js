
// Algoritmo 5: Organização de filmes favoritos
let filmesFavoritos = ["Inception", "Interstellar", "Matrix"];
filmesFavoritos[0] = "Avatar";
if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}
console.log("Filmes favoritos:", filmesFavoritos);
