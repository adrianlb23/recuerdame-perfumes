// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, genero, tipo, tipo2) {
        this.numero = numero; // Número identificador
        this.nombre = nombre; // Nombre del perfume
        this.marca = marca;   // Casa perfumista
        this.genero = genero; // Género
        this.tipo = tipo;     // Tipo olfativo
        this.tipo2 = tipo2;
    }
}

const perfumes = [
    new Perfume(1, "Layton", "Parfums de Marly", "Unisex", "Calido especiado", "Dulce"),
    new Perfume(2, "Aventus", "Creed", "Hombre", "Frutal", "Amaderado"),
    new Perfume(3, "Neroli Portofino", "Tom Ford", "Unisex", "Citrico", "Aromático"),
    new Perfume(4, "Tobacco Vanille", "Tom Ford", "Unisex", "Avainillado", "Dulce"),
    new Perfume(5, "Ombré Leather", "Tom Ford", "Unisex", "Cuero", "Amaderado"),
    new Perfume(6, "Erolfa", "Creed", "Hombre", "Citrico", "Aromático"),
    new Perfume(7, "Musc Ravageur", "Frederic Malle", "Unisex", "Calido especiado", "Ambarado"),
    new Perfume(8, "Andrés Croxatto Man", "Andrés Croxatto", "Hombre", "Citrico", "Amaderado"),
    new Perfume(9, "Erba Pura", "Xerjoff", "Unisex", "Frutal", "Dulce"),
    new Perfume(10, "Erba Pura Magica", "Sospiro Perfumes", "Unisex", "Frutal", "Dulce"),
    new Perfume(11, "Naxos", "Xerjoff", "Unisex", "Dulce", "Tabaco"),
    new Perfume(12, "Delina", "Parfums de Marly", "Mujer", "Rosa", "Dulce"),
    new Perfume(13, "Black Orchid", "Tom Ford", "Mujer", "Calido especiado", "Terroso"),
    new Perfume(14, "Irish Leather", "Memo París", "Unisex", "Aromático", "Cuero"),
    new Perfume(15, "Alexandria II", "Xerjoff", "Unisex", "Amaderado", "Dulce"),
    new Perfume(16, "Elisyum", "Roja Parfums", "Hombre", "Aromático", "Citrico"),
    new Perfume(17, "Red Tobacco", "Mancera", "Unisex", "Calido especiado", "Tabaco"),
    new Perfume(18, "Interlude Man", "Amouage", "Hombre", "Ambarado", "Incienso"),
    new Perfume(19, "Invite Only Amber 23", "Kayali Fragances", "Unisex", "Dulce", "Ambarado"),
    new Perfume(20, "Baccarat Rouge 540", "Maison Francis Kurkdijan", "Unisex", "Amaderado", "Dulce"),
    new Perfume(21, "Creed for Her", "Creed", "Mujer", "Frutal", "Floral"),
    new Perfume(22, "Black Phantom", "Kilian", "Unisex", "Dulce", "Amaderado"),
    new Perfume(23, "L’Immensité", "Louis Vuitton", "Hombre", "Citrico", "Aromático"),
    new Perfume(24, "Santal 33", "Le Labo", "Unisex", "Amaderado", "Aromático"),
    new Perfume(25, "Tygar", "Bvlgari", "Hombre", "Citrico", "Aromático"),
    new Perfume(26, "Green Irish Tweed", "Creed", "Hombre", "Citrico", "Aromático"),
    new Perfume(27, "Paradoxe", "Prada", "Mujer", "Floral", "Dulce"),
    new Perfume(28, "The Collection: Noble Wood", "Hugo Boss", "Hombre", "Amaderado", "Aromático"),
    new Perfume(29, "The Collection: Magnetic Musk", "Hugo Boss", "Hombre", "Amaderado", "Aromático"),
    new Perfume(30, "Oud for Greatness", "Initio Parfums", "Unisex", "Calido especiado", "Amaderado"),
    new Perfume(31, "Purple Accento", "Sospiro Perfumes", "Unisex", "Dulce", "Frutal"),
    new Perfume(32, "Instant Crush", "Mancera", "Unisex", "Calido especiado", "Amaderado"),
    new Perfume(33, "1872", "Clive Christian", "Hombre", "Citrico", "Aromático"),
    new Perfume(34, "Armani Prive Vert Malachite", "Giorgio Armani", "Unisex", "Floral", "Avainillado"),
    new Perfume(35, "Imagination", "Louis Vuitton", "Unisex", "Citrico", "Aromático"),
    new Perfume(36, "Angels Share", "Kilian", "Unisex", "Amaderado", "Dulce"),
    new Perfume(37, "Pardon", "Nasomatto", "Hombre", "Calido especiado", "Tabaco"),
    new Perfume(38, "Oriana", "Parfums de Marly", "Mujer", "Dulce", "Frutal"),
    new Perfume(39, "Carmina", "Creed", "Mujer", "Ambarado", "Floral"),
    new Perfume(40, "Holy Peony", "Christian Dior", "Mujer", "Frutal", "Floral"),
    new Perfume(41, "Oud Wood", "Tom Ford", "Unisex", "Amaderado", "Aromático"),
    new Perfume(42, "The Collection: Courageous Rose", "Hugo Boss", "Unisex", "Fresco especiado", "Floral"),
    new Perfume(43, "Renaissance", "Xerjoff", "Unisex", "Citrico", "Aromático"),
    new Perfume(44, "Chocolate Greedy", "Montale", "Unisex", "Avainillado", "Dulce"),
    new Perfume(45, "Percival", "Parfums de Marly", "Unisex", "Ambarado", "Aromático"),
    new Perfume(46, "Office for Men", "Jeremy Fragrance", "Hombre", "Ambarado", "Citrico"),
    new Perfume(47, "Hacivat", "Nishane", "Unisex", "Amaderado", "Citrico"),
    new Perfume(48, "Althair", "Parfums de Marly", "Hombre", "Dulce", "Aromático"),
    new Perfume(49, "Costa Azzurra", "Tom Ford", "Unisex", "Aromática", "Marino"),
    new Perfume(50, "Love Don’t Be Shy", "Kilian", "Mujer", "Dulce", "Frutal"),
    new Perfume(51, "Ani", "Nishane", "Unisex", "Calido especiado", "Aromático"),
    new Perfume(52, "Vanilla Sex", "Tom Ford", "Unisex", "Avainillado", "Dulce"),
    new Perfume(53, "Bianco Latte", "Giardini Di Toscana", "Unisex", "Avainillado", "Dulce"),
    new Perfume(54, "Amore Caffé", "Mancera", "Unisex", "Dulce", "Citrico"),
    new Perfume(55, "Pegasus", "Parfums de Marly", "Hombre", "Avainillado", "Aromático"),
    new Perfume(56, "Ege", "Nishane", "Unisex", "Verde", "Aromático"),
    new Perfume(57, "Bitter Peach", "Tom Ford", "Unisex", "Frutal", "Dulce"),
    new Perfume(58, "Absolu Aventus", "Creed", "Hombre", "Citrico", "Amaderado"),
    new Perfume(59, "By The Fireplace", "Maison Martin Margiela", "Unisex", "Amaderado", "Dulce"),
    new Perfume(60, "Kirke", "Tiziana Terenzi", "Unisex", "Frutal", "Dulce"),
    new Perfume(61, "Cedrat Boise", "Mancera", "Unisex", "Frutal", "Citrico"),
    new Perfume(62, "Terroni", "Orto Parisi", "Unisex", "Amaderado", "Tabaco"),
    new Perfume(63, "Greenley", "Parfums de Marly", "Unisex", "Citrico", "Aromático"),
    new Perfume(64, "Flamenco", "Ramón Monegal", "Unisex", "Frutal", "Dulce"),
    new Perfume(65, "Millésime Impérial", "Creed", "Unisex", "Marino", "Citrico"),
    new Perfume(66, "Bergamote 22", "Le Labo", "Unisex", "Citrico", "Aromático"),
    new Perfume(67, "Juniper Sling", "Penhaligon’s", "Unisex", "Aromático", "Fresco especiado"),
    new Perfume(68, "Matcha Meditation", "Maison Martin Margiela", "Unisex", "Floral", "Aromático"),
    new Perfume(69, "Under The Lemon Tree", "Maison Martin Margiela", "Unisex", "Citrico", "Marino"),
    new Perfume(70, "Silver Mountain Water", "Creed", "Unisex", "Citrico", "Marino"),
    new Perfume(71, "Bleecker Street", "Bond No. 9", "Unisex", "Frutal", "Aromático"),
    new Perfume(72, "Arabians Tonka", "Montale", "Unisex", "Dulce", "Ambarado"),
    new Perfume(73, "Megamare", "Orto Parisi", "Unisex", "Marino", "Citrico"),
    new Perfume(74, "Side Effect", "Initio Parfums", "Unisex", "Calido especiado", "Ambarado"),
    new Perfume(75, "Vanilla Powder", "Matiere Premiere", "Unisex", "Avainillado", "Dulce"),
    new Perfume(76, "Cassiopea", "Tiziana Terenzi", "Unisex", "Dulce", "Aromático"),
    new Perfume(77, "Sunshine Woman", "Amouage", "Mujer", "Frutal", "Floral"),
    new Perfume(78, "Yum Pistachio Gelatto", "Kayali Fragances", "Unisex", "Dulce", "Frutal"),
    new Perfume(79, "Electric Cherry", "Tom Ford", "Unisex", "Frutal", "Aromático"),
    new Perfume(80, "Pacific Chill", "Louis Vuitton", "Unisex", "Citrico", "Aromático"),
    new Perfume(81, "Vanille Absolu", "Montale", "Mujer", "Avainillado", "Dulce"),
    new Perfume(82, "Tobacco Mandarin", "Byredo", "Unisex", "Fresco especiado", "Tabaco"),
    new Perfume(83, "Kalan", "Parfums de Marly", "Unisex", "Calido especiado", "Aromático"),
    new Perfume(84, "Intense Café", "Montale", "Unisex", "Avainillado", "Dulce"),
    new Perfume(85, "Delina Exclusif", "Parfums de Marly", "Mujer", "Floral", "Dulce"),
    new Perfume(86, "Milk", "Commodity", "Unisex", "Dulce", "Ambarado"),
    new Perfume(87, "Fico Di Amalfi", "Acqua Di Parma", "Unisex", "Citrico", "Frutal"),
    new Perfume(88, "Curacao Bay", "Jacques Fath", "Unisex", "Citrico", "Aromático"),
    new Perfume(89, "Oud Maracujá", "Maison Crivelli", "Unisex", "Frutal", "Amaderado"),
    new Perfume(90, "Can’t Stop Loving You", "Kilian", "Mujer", "Floral", "Dulce"),
    new Perfume(91, "Lafayette Street", "Bond No. 9", "Unisex", "Ambarado", "Aromático"),
    new Perfume(92, "God Of Fire", "Stephane Humbert Lucas 777", "Unisex", "Frutal", "Dulce"),
    new Perfume(93, "Smoking Hot", "Kilian", "Unisex", "Tabaco", "Ambarado"),
    new Perfume(94, "Ombre Nomade", "Louis Vuitton", "Unisex", "Ambarado", "Amaderado"),
    new Perfume(95, "Hadar", "Spirit of Kings", "Unisex", "Avainillado", "Dulce"),
    new Perfume(96, "Perseus", "Parfums de Marly", "Hombre", "Citrico", "Aromático"),
    new Perfume(97, "Summer Hammer", "Lorenzo Pazzaglia", "Unisex", "Frutal", "Citrico"),
    new Perfume(98, "Grand Soir", "Maison Francis Kurkdjian", "Unisex", "Ambarado", "Dulce"),
    new Perfume(99, "Jazz Club", "Maison Martin Margiela", "Hombre", "Tabaco", "Amaderado"),
    new Perfume(100, "Torino 22", "Xerjoff", "Unisex", "Amaderado", "Ambarado"),
    new Perfume(101, "New York Nights", "Bond No. 9", "Unisex", "Caramelo", "Dulce"),
    new Perfume(102, "Lira", "Xerjoff", "Mujer", "Citrico", "Dulce"),
    new Perfume(103, "Greenwich Village", "Bond No. 9", "Unisex", "Floral", "Frutal"),
];

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfumes();

    document.querySelectorAll('input[name="aroma"]').forEach(radio => {
        radio.addEventListener('change', actualizarTabla);
    });

    const searchInput = document.getElementById('search-input-nicho');
    searchInput.addEventListener('input', actualizarTabla);
});

function actualizarTabla() {
    const tipoSeleccionado = document.querySelector('input[name="aroma"]:checked');
    const searchValue = document.getElementById('search-input-nicho').value.trim().toLowerCase();

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

        const tdGenero = document.createElement('td');
        tdGenero.textContent = perfume.genero;
        tr.appendChild(tdGenero);

        tbody.appendChild(tr);
    });
}

function deseleccionarRadios() {
    const radios = document.querySelectorAll('input[name="aroma"]');
    radios.forEach(radio => radio.checked = false);
    mostrarPerfumes();
}



