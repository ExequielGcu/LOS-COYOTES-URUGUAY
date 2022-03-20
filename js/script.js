

const $cartas = document.querySelectorAll(".carta");
for (let i = 0; i < $cartas.length; i++) {
let elemento = $cartas[i];
elemento.setAttribute('id', `carta${i}`);

let idCarta = document.getElementById(elemento.id);
idCarta.addEventListener( "click", () => {
idCarta.classList.toggle("vuelta");
});
}





