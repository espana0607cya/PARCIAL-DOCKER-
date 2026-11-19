
// =====================================
// INTERACCIÓN DE LAS TARJETAS
// RICK Y MORTY
// =====================================

// Seleccionar todos los botones de información
const infoButtons = document.querySelectorAll(".info-button");

// Recorrer cada botón
infoButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Buscar la información adicional de la tarjeta
        const extraInfo = button.nextElementSibling;

        // Comprobar si la información está oculta
        const isHidden = extraInfo.hidden;

        // Mostrar u ocultar información
        extraInfo.hidden = !isHidden;

        // Cambiar el texto del botón
        if (isHidden) {
            button.textContent = "Ver menos";
            button.setAttribute("aria-expanded", "true");
        } else {
            button.textContent = "Más información";
            button.setAttribute("aria-expanded", "false");
        }

    });

});

// =====================================
// MENSAJE EN CONSOLA
// =====================================

console.log("Aplicación Rick y Morty cargada correctamente.");
console.log("Galería de personajes lista para explorar.");
