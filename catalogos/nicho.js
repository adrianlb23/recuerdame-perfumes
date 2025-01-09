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
    new Perfume(21, "Creed for Her", "Creed", "Mujer", "Frutal"),
    new Perfume(22, "Black Phantom", "Kilian", "Unisex", "Dulce"),
    new Perfume(23, "L’Immensité", "Louis Vuitton", "Hombre", "Citrico"),
    new Perfume(24, "Santal 33", "Le Labo", "Unisex", "Amaderado"),
    new Perfume(25, "Tygar", "Bvlgari", "Hombre", "Citrico"),
    new Perfume(26, "Green Irish Tweed", "Creed", "Hombre", "Citrico"),
    new Perfume(27, "Paradoxe", "Prada", "Mujer", "Floral blanco"),
    new Perfume(28, "The Collection: Noble Wood", "Hugo Boss", "Hombre", "Amaderado"),
    new Perfume(29, "The Collection: Magnetic Musk", "Hugo Boss", "Hombre", "Atalcado"),
    new Perfume(30, "Oud for Greatness", "Initio Parfums", "Unisex", "Calido especiado"),
    new Perfume(31, "Purple Accento", "Sospiro Perfumes", "Unisex", "Dulce"),
    new Perfume(32, "Instant Crush", "Mancera", "Unisex", "Calido especiado"),
    new Perfume(33, "1872", "Clive Christian", "Hombre", "Citrico"),
    new Perfume(34, "Armani Prive Vert Malachite", "Giorgio Armani", "Unisex", "Floral blanco"),
    new Perfume(35, "Imagination", "Louis Vuitton", "Unisex", "Citrico"),
    new Perfume(36, "Angels Share", "Kilian", "Unisex", "Amaderado"),
    new Perfume(37, "Pardon", "Nasomatto", "Hombre", "Calido especiado"),
    new Perfume(38, "Oriana", "Parfums de Marly", "Mujer", "Dulce"),
    new Perfume(39, "Carmina", "Creed", "Mujer", "Rosas"),
    new Perfume(40, "Holy Peony", "Christian Dior", "Mujer", "Rosas"),
    new Perfume(41, "Oud Wood", "Tom Ford", "Unisex", "Amaderado"),
    new Perfume(42, "The Collection: Courageous Rose", "Hugo Boss", "Unisex", "Fresco especiado"),
    new Perfume(43, "Renaissance", "Xerjoff", "Unisex", "Citrico"),
    new Perfume(44, "Chocolate Greedy", "Montale", "Unisex", "Avainillado"),
    new Perfume(45, "Percival", "Parfums de Marly", "Unisex", "Ambarado"),
    new Perfume(46, "Office for Men", "Jeremy Fragrance", "Hombre", "Ambarado"),
    new Perfume(47, "Hacivat", "Nishane", "Unisex", "Amaderado"),
    new Perfume(48, "Althair", "Parfums de Marly", "Hombre", "Dulce"),
    new Perfume(49, "Costa Azzurra", "Tom Ford", "Unisex", "Aromática"),
    new Perfume(50, "Love Don’t Be Shy", "Kilian", "Mujer", "Dulce"),
    new Perfume(51, "Ani", "Nishane", "Unisex", "Calido especiado"),
    new Perfume(52, "Vanilla Sex", "Tom Ford", "Unisex", "Avainillado"),
    new Perfume(53, "Bianco Latte", "Giardini Di Toscana", "Unisex", "Avainillado"),
    new Perfume(54, "Amore Caffé", "Mancera", "Unisex", "Dulce"),
    new Perfume(55, "Pegasus", "Parfums de Marly", "Hombre", "Avainillado"),
    new Perfume(56, "Ege", "Nishane", "Unisex", "Verde"),
    new Perfume(57, "Bitter Peach", "Tom Ford", "Unisex", "Frutal"),
    new Perfume(58, "Absolu Aventus", "Creed", "Hombre", "Citrico"),
    new Perfume(59, "By The Fireplace", "Maison Martin Margiela", "Unisex", "Amaderado"),
    new Perfume(60, "Kirke", "Tiziana Terenzi", "Unisex", "Frutal"),
    new Perfume(61, "Cedrat Boise", "Mancera", "Unisex", "Frutal"),
    new Perfume(62, "Terroni", "Orto Parisi", "Unisex", "Amaderado"),
    new Perfume(63, "Greenley", "Parfums de Marly", "Unisex", "Citrico"),
    new Perfume(64, "Flamenco", "Ramón Monegal", "Unisex", "Frutal"),
    new Perfume(65, "Millésime Impérial", "Creed", "Unisex", "Marino"),
    new Perfume(66, "Bergamote 22", "Le Labo", "Unisex", "Citrico"),
    new Perfume(67, "Juniper Sling", "Penhaligon’s", "Unisex", "Aromático"),
    new Perfume(68, "Matcha Meditation", "Maison Martin Margiela", "Unisex", "Floral blanco"),
    new Perfume(69, "Under The Lemon Tree", "Maison Martin Margiela", "Unisex", "Citrico"),
    new Perfume(70, "Silver Mountain Water", "Creed", "Unisex", "Citrico"),
    new Perfume(71, "Bleecker Street", "Bond No. 9", "Unisex", "Frutal"),
    new Perfume(72, "Arabians Tonka", "Montale", "Unisex", "Dulce"),
    new Perfume(73, "Megamare", "Orto Parisi", "Unisex", "Marino"),
    new Perfume(74, "Side Effect", "Initio Parfums", "Unisex", "Calido especiado"),
    new Perfume(75, "Vanilla Powder", "Matiere Premiere", "Unisex", "Avainillado"),
    new Perfume(76, "Cassiopea", "Tiziana Terenzi", "Unisex", "Dulce"),
    new Perfume(77, "Sunshine Woman", "Amouage", "Mujer", "Frutal"),
    new Perfume(78, "Yum Pistachio Gelatto", "Kayali Fragances", "Unisex", "Dulce"),
    new Perfume(79, "Electric Cherry", "Tom Ford", "Unisex", "Frutal"),
    new Perfume(80, "Pacific Chill", "Louis Vuitton", "Unisex", "Citrico"),
    new Perfume(81, "Vanille Absolu", "Montale", "Mujer", "Avainillado"),
    new Perfume(82, "Tobacco Mandarin", "Byredo", "Unisex", "Fresco especiado"),
    new Perfume(83, "Kalan", "Parfums de Marly", "Unisex", "Calido especiado"),
    new Perfume(84, "Intense Café", "Montale", "Unisex", "Rosas"),
    new Perfume(85, "Delina Exclusif", "Parfums de Marly", "Mujer", "Rosas"),
    new Perfume(86, "Milk", "Commodity", "Unisex", "Dulce"),
    new Perfume(87, "Fico Di Amalfi", "Acqua Di Parma", "Unisex", "Citrico"),
    new Perfume(88, "Curacao Bay", "Jacques Fath", "Unisex", "Citrico"),
    new Perfume(89, "Oud Maracujá", "Maison Crivelli", "Unisex", "Frutal"),
    new Perfume(90, "Can’t Stop Loving You", "Kilian", "Mujer", "Floral blanco"),
    new Perfume(91, "Lafayette Street", "Bond No. 9", "Unisex", "Ambarado"),
    new Perfume(92, "God Of Fire", "Stephane Humbert Lucas 777", "Unisex", "Frutal"),
    new Perfume(93, "Smoking Hot", "Kilian", "Unisex", "Tabaco"),
    new Perfume(94, "Ombre Nomade", "Louis Vuitton", "Unisex", "Ambarado"),
    new Perfume(95, "Hadar", "Spirit of Kings", "Unisex", "Avainillado"),
    new Perfume(96, "Perseus", "Parfums de Marly", "Hombre", "Citrico"),
    new Perfume(97, "Summer Hammer", "Lorenzo Pazzaglia", "Unisex", "Frutal"),
    new Perfume(98, "Grand Soir", "Maison Francis Kurkdjian", "Unisex", "Ambarado"),
    new Perfume(99, "Jazz Club", "Maison Martin Margiela", "Hombre", "Tabaco"),
    new Perfume(100, "Torino 22", "Xerjoff", "Unisex", "Amaderado"),
    new Perfume(101, "New York Nights", "Bond No. 9", "Unisex", "Caramelo"),
    new Perfume(102, "Lira", "Xerjoff", "Mujer", "Citrico"),
    new Perfume(103, "Greenwich Village", "Bond No. 9", "Unisex", "Floral")
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



