document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

const $cartas = document.querySelectorAll(".carta");
for (let i = 0; i < $cartas.length; i++) {
let elemento = $cartas[i];
elemento.setAttribute('id', `carta${i}`);

let idCarta = document.getElementById(elemento.id);
idCarta.addEventListener( "click", () => {
idCarta.classList.toggle("vuelta");
});
}





