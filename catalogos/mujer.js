// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, tipo, tipo2) {
        this.numero = numero;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.tipo2 = tipo2;
    }
}

const perfumes =[
    new Perfume(1, "Calandre", "Paco Rabanne", "Verde", "Atalcado"),
    new Perfume(2, "CK In2u", "Calvin Klein", "Citrico", "Ambarado"),
    new Perfume(3, "Chanel No. 5", "Chanel", "Citrico", "Atalcado"),
    new Perfume(4, "Poison", "Dior", "Frutal", "Calido especiado"),
    new Perfume(5, "Tresor", "Lancome", "Frutal", "Floral"),
    new Perfume(6, "Poeme", "Lancome", "Floral amarillo", "Dulce"),
    new Perfume(7, "Paloma Picasso", "Paloma Picasso", "Amaderado", "Calido especiado"),
    new Perfume(8, "L’Eau D’Issey", "Issey Miyake", "Floral", "Fresco especiado"),
    new Perfume(9, "Carolina Herrera", "Carolina Herrera", "Floral blanco", "Fresco especiado"),
    new Perfume(10, "Big Pony 2", "Ralph Lauren", "Frutal", "Dulce"),
    new Perfume(11, "Acqua Di Gioia", "Giorgio Armani", "Citrico", "Fresco especiado"),
    new Perfume(12, "Organza", "Givenchy", "Floral blanco", "Ambarado"),
    new Perfume(13, "212", "Carolina Herrera", "Floral blanco", "Citrico"),
    new Perfume(14, "Noa", "Cacharel", "Floral", "Amaderado"),
    new Perfume(15, "Eternity", "Calvin Klein", "Floral", "Verde"),
    new Perfume(16, "Opium", "Yves Saint Laurent", "Ambarado", "Calido especiado"),
    new Perfume(17, "Lou Lou", "Cacharel", "Atalcado", "Ambarado"),
    new Perfume(18, "Eden", "Cacharel", "Floral blanco", "Verde"),
    new Perfume(19, "Anaís Anaís", "Cacharel", "Floral blanco", "Atalcado"),
    new Perfume(20, "Hugo Woman", "Hugo Boss", "Frutal", "Floral"),
    new Perfume(21, "Black Opium", "Yves Saint Laurent", "Avainillado", "Dulce"),
    new Perfume(22, "O", "Lancome", "Citrico", "Verde"),
    new Perfume(23, "Oscar", "Oscar de la Renta", "Floral blanco", "Atalcado"),
    new Perfume(24, "Angel", "Thierry Mugler", "Dulce", "Amaderado"),
    new Perfume(25, "Hypnotic", "Dior", "Avainillado", "Calido especiado"),
    new Perfume(26, "The One", "Dolce & Gabbana", "Floral blanco", "Ambarado"),
    new Perfume(27, "Thank U, Next", "Ariana Grande", "Dulce", "Frutal"),
    new Perfume(28, "Ralph", "Ralph Lauren", "Floral", "Citrico"),
    new Perfume(29, "Libre", "Yves Saint Laurent", "Floral blanco", "Ambarado"),
    new Perfume(30, "J’Adore", "Dior", "Floral blanco", "Frutal"),
    new Perfume(31, "Dolce Vita", "Dior", "Calido especiado", "Ambarado"),
    new Perfume(32, "Hot Couture", "Givenchy", "Frutal", "Amaderado"),
    new Perfume(33, "Tommy Girl", "Tommy Hilfiger", "Citrico", "Fresco especiado"),
    new Perfume(34, "Paris", "Yves Saint Laurent", "Floral", "Atalcado"),
    new Perfume(35, "Ange ou Demon", "Givenchy", "Avainillado", "Calido especiado"),
    new Perfume(36, "Miracle", "Lancome", "Fresco especiado", "Floral"),
    new Perfume(37, "Ultraviolet", "Paco Rabanne", "Floral", "Calido especiado"),
    new Perfume(38, "212 VIP Rosé", "Carolina Herrera", "Floral", "Frutal"),
    new Perfume(39, "Elixir des Merveilles", "Hermès", "Ambarado", "Calido especiado"),
    new Perfume(40, "DKNY Women", "Donna Karan", "Citrico", "Fresco especiado"),
    new Perfume(41, "Si", "Giorgio Armani", "Amaderado", "Frutal"),
    new Perfume(42, "Halloween", "Jesús del Pozo", "Floral", "Calido especiado"),
    new Perfume(43, "Amor Amor", "Cacharel", "Citrico", "Dulce"),
    new Perfume(44, "Plus Plus Feminine", "Diesel", "Dulce", "Calido especiado"),
    new Perfume(45, "Flower", "Kenzo", "Atalcado", "Floral"),
    new Perfume(46, "212 Sexy", "Carolina Herrera", "Dulce", "Avainillado"),
    new Perfume(47, "Light Blue", "Dolce & Gabbana", "Citrico", "Fresco especiado"),
    new Perfume(48, "Euphoria", "Calvin Klein", "Amaderado", "Calido especiado"),
    new Perfume(49, "Fantasy", "Britney Spears", "Dulce", "Frutal"),
    new Perfume(50, "Curious", "Britney Spears", "Floral", "Dulce"),
    new Perfume(51, "CH Woman", "Carolina Herrera", "Citrico", "Amaderado"),
    new Perfume(52, "Olimpea", "Paco Rabanne", "Avainillado", "Ambarado"),
    new Perfume(53, "Eros", "Versace", "Citrico", "Calido especiado"),
    new Perfume(54, "My Way", "Giorgio Armani", "Floral blanco", "Citrico"),
    new Perfume(55, "Midnight Fantasy", "Britney Spears", "Dulce", "Frutal"),
    new Perfume(56, "La Nuit Trésor", "Lancome", "Calido especiado", "Dulce"),
    new Perfume(57, "Black XS", "Paco Rabanne", "Frutal", "Amaderado"),
    new Perfume(58, "Because It’s You", "Giorgio Armani", "Frutal", "Dulce"),
    new Perfume(59, "Can Can", "Paris Hilton", "Frutal", "Avainillado"),
    new Perfume(60, "Lady Million", "Paco Rabanne", "Floral blanco", "Dulce"),
    new Perfume(61, "Good Girl", "Carolina Herrera", "Dulce", "Amaderado"),
    new Perfume(62, "212 VIP", "Carolina Herrera", "Avainillado", "Dulce"),
    new Perfume(63, "Tresor Midnight Rose", "Lancome", "Frutal", "Floral"),
    new Perfume(64, "Eilish", "Billie Eilish", "Avainillado", "Dulce"),
    new Perfume(65, "Yes I Am", "Cacharel", "Dulce", "Calido especiado"),
    new Perfume(66, "Coco Mademoiselle", "Chanel", "Citrico", "Amaderado"),
    new Perfume(67, "Ralph Hot", "Ralph Lauren", "Avainillado", "Calido especiado"),
    new Perfume(68, "Big Pony 4", "Ralph Lauren", "Citrico", "Floral"),
    new Perfume(69, "Scandal", "Jean Paul Gaultier", "Dulce", "Ambarado"),
    new Perfume(70, "Cheap & Chic I Love Love", "Moschino", "Citrico", "Fresco especiado"),
    new Perfume(71, "Cool Water", "Davidoff", "Fresco especiado", "Citrico"),
    new Perfume(72, "Lolita Lempicka", "Lolita Lempicka", "Dulce", "Fresco especiado"),
    new Perfume(73, "Kenzo Amour", "Kenzo", "Avainillado", "Floral"),
    new Perfume(74, "DKNY Be Delicious", "Donna Karan", "Frutal", "Citrico"),
    new Perfume(75, "Armani Code", "Giorgio Armani", "Ambarado", "Calido especiado"),
    new Perfume(76, "Hypnose", "Lancome", "Avainillado", "Dulce"),
    new Perfume(77, "La Vie Est Belle", "Lancome", "Dulce", "Avainillado"),
    new Perfume(78, "Pure XS", "Paco Rabanne", "Ambarado", "Dulce"),
    new Perfume(79, "Chance", "Chanel", "Frutal", "Floral"),
    new Perfume(80, "Nina", "Nina Ricci", "Frutal", "Dulce"),
    new Perfume(81, "Narciso Rodríguez for Her", "Narciso Rodríguez", "Amaderado", "Floral"),
    new Perfume(82, "RI RI", "Rihanna", "Frutal", "Dulce"),
    new Perfume(83, "Cloud", "Ariana Grande", "Dulce", "Avainillado"),
    new Perfume(84, "Devotion", "Dolce & Gabbana", "Amaderado", "Avainillado"),
    new Perfume(85, "Fame", "Paco Rabanne", "Avainillado", "Frutal"),
    new Perfume(86, "Gucci Bloom", "Gucci", "Floral", "Blanco"),
    new Perfume(87, "Miss Dior", "Dior", "Floral", "Dulce"),
    new Perfume(88, "Bombshell", "Victoria Secret", "Frutal", "Floral"),
    new Perfume(89, "Sweet Like Candy", "Ariana Grande", "Dulce", "Frutal"),
    new Perfume(90, "Toy Boy 2 Bubble Gum", "Moschino", "Dulce", "Frutal"),
    new Perfume(91, "212 Heroes", "Carolina Herrera", "Frutal", "Dulce"),
    new Perfume(92, "Dylan Turquoise", "Versace", "Frutal", "Fresco especiado"),
    new Perfume(93, "Idole", "Lancome", "Frutal", "Floral"),
    new Perfume(94, "Good Girl Blush", "Carolina Herrera", "Dulce", "Floral blanco"),
    new Perfume(95, "Goddess", "Burberry", "Dulce", "Avainillado"),
    new Perfume(96, "Ajwad", "Lattafa", "Avainillado", "Dulce"),
    new Perfume(97, "Good Girl Légère", "Carolina Herrera", "Ambarado", "Dulce"),
    new Perfume(98, "Gaultier Divine", "Jean Paul Gaultier", "Dulce", "Floral"),
    new Perfume(99, "Pineapple", "Dolce & Gabbana", "Frutal", "Tropical"),
    new Perfume(100, "Yara Candy", "Lattafa", "Dulce", "Frutal"),
    new Perfume(101, "L’Impératrice 3", "Dolce & Gabbana", "Frutal", "Fresco"),
    new Perfume(102, "My Way Intense", "Giorgio Armani", "Citrico", "Floral blanco"),
    new Perfume(103, "Donna Born In Roma", "Valentino", "Ambarado", "Calido especiado"),
    new Perfume(104, "Her Elixir de Parfum", "Burberry", "Dulce", "Frutal"),
    new Perfume(105, "Mod Vanilla", "Ariana Grande", "Avainillado", "Dulce"),
    new Perfume(106, "La Belle Le Parfum", "Jean Paul Gaultier", "Dulce", "Ambarado"),
    new Perfume(107, "Crush Cheirosa 62'", "Sol de Janeiro", "Avainillado", "Dulce"),
    new Perfume(108, "Noble Blush", "Lattaffa", "Dulce", "Atalcado")
]

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfumes();

    document.querySelectorAll('input[name="aroma"]').forEach(radio => {
        radio.addEventListener('change', actualizarTabla);
    });

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', actualizarTabla);
});

function actualizarTabla() {
    const tipoSeleccionado = document.querySelector('input[name="aroma"]:checked');
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();

    let perfumesFiltrados = perfumes;

    if (tipoSeleccionado) {
        const tipoAroma = tipoSeleccionado.value;
        perfumesFiltrados = perfumesFiltrados.filter(perfume =>
            perfume.tipo === tipoAroma || perfume.tipo2 === tipoAroma
        );
    }

    if (searchValue) {
        perfumesFiltrados = perfumesFiltrados.filter(perfume =>
            perfume.nombre.toLowerCase().includes(searchValue) ||
            perfume.marca.toLowerCase().includes(searchValue)
        );
    }

    mostrarPerfumes(perfumesFiltrados);
}

function mostrarPerfumes(perfumesFiltrados = perfumes) {
    const tbody = document.getElementById('perfume-body');
    tbody.innerHTML = '';

    if (perfumesFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">No se encontraron perfumes.</td></tr>';
        return;
    }

    perfumesFiltrados.forEach(perfume => {
        const tr = document.createElement('tr');

        const tdNumero = document.createElement('td');
        tdNumero.textContent = perfume.numero;
        tr.appendChild(tdNumero);

        const tdNombre = document.createElement('td');
        tdNombre.textContent = perfume.nombre;
        tr.appendChild(tdNombre);

        const tdMarca = document.createElement('td');
        tdMarca.textContent = perfume.marca;
        tr.appendChild(tdMarca);

        tbody.appendChild(tr);
    });
}

function deseleccionarRadios() {
    const radios = document.querySelectorAll('input[name="aroma"]');
    radios.forEach(radio => radio.checked = false);
    mostrarPerfumes();
}