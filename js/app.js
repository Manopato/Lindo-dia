const galeria = document.getElementById("galeria");

// =====================================
// VISOR DE IMÁGENES
// =====================================

const visor = document.createElement("div");
visor.id = "visor";

const cerrar = document.createElement("div");
cerrar.id = "cerrar";
cerrar.innerHTML = "&times;";

const imagenGrande = document.createElement("img");

visor.appendChild(cerrar);
visor.appendChild(imagenGrande);

document.body.appendChild(visor);


// =====================================
// FUNCIÓN PARA AGREGAR UNA IMAGEN
// =====================================

function agregarImagen(ruta, numero) {

    const img = document.createElement("img");

    img.src = ruta;
    img.alt = "Foto " + numero;

    img.addEventListener("click", function () {

        imagenGrande.src = this.src;
        visor.style.display = "flex";

    });

    img.addEventListener("error", function () {

        this.remove();

    });

    galeria.appendChild(img);
}


// =====================================
// CARGA DE IMÁGENES (NUEVO FORMATO: 001)
// =====================================

// Reemplaza el 100 por la cantidad total real de imágenes en tu carpeta
const totalImagenes = 122;

for (let i = 1; i <= totalImagenes; i++) {

    agregarImagen(
        "imagenes/001 (" + i + ").jpeg",
        i
    );

}


// =====================================
// CERRAR VISOR
// =====================================

cerrar.addEventListener("click", function () {

    visor.style.display = "none";
    imagenGrande.src = "";

});


// =====================================
// CERRAR TOCANDO FUERA
// =====================================

visor.addEventListener("click", function (e) {

    if (e.target === visor) {

        visor.style.display = "none";
        imagenGrande.src = "";

    }

});


// =====================================
// CERRAR CON ESC
// =====================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        visor.style.display = "none";
        imagenGrande.src = "";

    }

});