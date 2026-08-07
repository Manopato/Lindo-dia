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

for (let i = 1; i <= 48; i++) {
    const img = document.createElement("img");

    img.src = "imagenes/1 (" + i + ").jpeg";
    img.alt = "Foto " + i;

    img.addEventListener("click", function () {
        imagenGrande.src = this.src;
        visor.style.display = "flex";
    });

    galeria.appendChild(img);
}

cerrar.addEventListener("click", function () {
    visor.style.display = "none";
});

visor.addEventListener("click", function (e) {
    if (e.target === visor) {
        visor.style.display = "none";
    }
});