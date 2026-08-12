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
// IMÁGENES ANTERIORES
// 1 (1).jpeg hasta 1 (74).jpeg
// =====================================

for (let i = 1; i <= 74; i++) {

    agregarImagen(
        "imagenes/1 (" + i + ").jpeg",
        i
    );

}


// =====================================
// 47 IMÁGENES NUEVAS
// 74 (1).jpeg hasta 74 (47).jpeg
// =====================================

for (let i = 1; i <= 47; i++) {

    agregarImagen(
        "imagenes/74 (" + i + ").jpeg",
        74 + i
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