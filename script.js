//Carrusel de fotos
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Cambiar la imagen cada 3 segundos
setInterval(showNextSlide, 5000);

//Función de búsqueda tabla hombre/mujer
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const tableRows = document.querySelectorAll("tbody tr");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        tableRows.forEach((row) => {
            const perfumeName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
            const typeName = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            const matchesSearchTerm = perfumeName.includes(searchTerm) || typeName.includes(searchTerm);
            row.style.display = matchesSearchTerm ? "" : "none";
        });
    });

});

//Menu 
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

