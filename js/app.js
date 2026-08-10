const galeria = document.getElementById("galeria");

const visor = document.createElement("div");
visor.id = "visor";

const cerrar = document.createElement("div");
cerrar.id = "cerrar";
cerrar.innerHTML = "&times;";

const imagenGrande = document.createElement("img");

visor.appendChild(cerrar);
visor.appendChild(imagenGrande);
document.body.appendChild(visor);


// Función para agregar imágenes
function agregarImagen(ruta, numero) {
    const img = document.createElement("img");

    img.src = ruta;
    img.alt = "Foto " + numero;

    img.addEventListener("click", function () {
        imagenGrande.src = this.src;
        visor.style.display = "flex";
    });

    galeria.appendChild(img);
}


// Imágenes anteriores: 1 (1).jpeg hasta 1 (48).jpeg
for (let i = 1; i <= 48; i++) {
    agregarImagen(
        "imagenes/1 (" + i + ").jpeg",
        i
    );
}


// Nuevas imágenes: 49 (1).jpeg hasta 49 (26).jpeg
for (let i = 1; i <= 26; i++) {
    agregarImagen(
        "imagenes/49 (" + i + ").jpeg",
        48 + i
    );
}


// Cerrar imagen
cerrar.addEventListener("click", function () {
    visor.style.display = "none";
});


// Cerrar tocando fuera de la imagen
visor.addEventListener("click", function (e) {
    if (e.target === visor) {
        visor.style.display = "none";
    }
});