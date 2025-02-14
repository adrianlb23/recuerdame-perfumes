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
    new Perfume(1, "Paco Rabanne Pour Homme", "Paco Rabanne", "Fresco especiado", "Dulce"),
    new Perfume(2, "Quorum", "Antonio Puig", "Amaderado", "Aromático"),
    new Perfume(3, "Jazz", "Yves Saint Laurent", "Aromático", "Fresco especiado"),
    new Perfume(4, "Azzaro Pour Homme", "Azzaro", "Citrico", "Aromático"),
    new Perfume(5, "Polo Sport", "Ralph Lauren", "Marino", "Aromático"),
    new Perfume(6, "Carolina Herrera", "Carolina Herrera", "Floral", "Verde"),
    new Perfume(7, "Drakkar Noir", "Guy Laroche", "Amaderado", "Aromático"),
    new Perfume(8, "One", "Calvin Klein", "Citrico", "Dulce"),
    new Perfume(9, "Acqua Di Gio", "Giorgio Armani", "Marino", "Aromático"),
    new Perfume(10, "Safari", "Ralph Lauren", "Amaderado", "Especiado"),
    new Perfume(11, "Farenheit", "Dior", "Amaderado", "Dulce"),
    new Perfume(12, "Egoist Platinum", "Chanel", "Aromático", "Amaderado"),
    new Perfume(13, "Eternity", "Calvin Klein", "Citrico", "Aromático"),
    new Perfume(14, "Polo Green", "Ralph Lauren", "Amaderado", "Aromático"),
    new Perfume(15, "212", "Carolina Herrera", "Citrico", "Verde"),
    new Perfume(16, "XS", "Paco Rabanne", "Aromático", "Fresco especiado"),
    new Perfume(17, "Hugo Boss (Cantimplora)", "Hugo Boss", "Fresco especiado", "Aromático"),
    new Perfume(18, "Pino Silvestre", "Lino Vidal", "Amaderado", "Aromático"),
    new Perfume(19, "The Most Wanted Parfum", "Azzaro", "Amaderado", "Dulce"),
    new Perfume(20, "Le Male", "Jean Paul Gaultier", "Aromático", "Avainillado"),
    new Perfume(21, "Tommy", "Tommy Hilfiger", "Fresco especiado", "Verde"),
    new Perfume(22, "Pour Homme", "Kenzo", "Marino", "Aromático"),
    new Perfume(23, "Stronger With You Oud", "Giorgio Armani", "Avainillado", "Amaderado"),
    new Perfume(24, "Stronger With You", "Giorgio Armani", "Avainillado", "Amaderado"),
    new Perfume(25, "Agua Brava", "Antonio Puig", "Citrico", "Aromático"),
    new Perfume(26, "Opium", "Yves Saint Laurent", "Fresco especiado", "Frutal"),
    new Perfume(27, "XS Pure", "Paco Rabanne", "Avainillado", "Calido especiado"),
    new Perfume(28, "Ted Lapidus", "Ted Lapidus", "Amaderado", "Aromático"),
    new Perfume(29, "K", "Dolce & Gabbana", "Citrico", "Amaderado"),
    new Perfume(30, "Polo Blue", "Ralph Lauren", "Citrico", "Aromático"),
    new Perfume(31, "Essential", "Lacoste", "Aromático", "Citrico"),
    new Perfume(32, "Ultraviolet", "Paco Rabanne", "Verde", "Aromático"),
    new Perfume(33, "Armani Code Profumo", "Giorgio Armani", "Avainillado", "Amaderado"),
    new Perfume(34, "Black XS", "Paco Rabanne", "Calido especiado", "Dulce"),
    new Perfume(35, "Polo Red Extreme", "Ralph Lauren", "Aromático", "Calido especiado"),
    new Perfume(36, "212 Sexy Men", "Carolina Herrera", "Avainillado", "Amaderado"),
    new Perfume(37, "Lacoste Red", "Lacoste", "Citrico", "Aromático"),
    new Perfume(38, "Lacoste Pour Homme", "Lacoste", "Amaderado", "Aromático"),
    new Perfume(39, "Boss Bottled Night", "Hugo Boss", "Amaderado", "Floral"),
    new Perfume(40, "Bleu", "Chanel", "Citrico", "Amaderado"),
    new Perfume(41, "Polo Red", "Ralph Lauren", "Citrico", "Frutal"),
    new Perfume(42, "Fuel for Life", "Diesel", "Fresco especiado", "Aromático"),
    new Perfume(43, "Armani Black Code", "Giorgio Armani", "Citrico", "Amaderado"),
    new Perfume(44, "Eros", "Versace", "Avainillado", "Dulce"),
    new Perfume(45, "Pour Homme", "Dolce & Gabbana", "Citrico", "Amaderado"),
    new Perfume(46, "Polo Ultra Blue", "Ralph Lauren", "Citrico", "Amaderado"),
    new Perfume(47, "Angel Men", "Thierry Mugler", "Dulce", "Amaderado"),
    new Perfume(48, "One Million", "Paco Rabanne", "Calido especiado", "Ambaraado"),
    new Perfume(49, "Armani Diamonds", "Giorgio Armani", "Amaderado", "Citrico"),
    new Perfume(51, "The One", "Dolce & Gabbana", "Ambarado", "Calido especiado"),
    new Perfume(52, "Boss Bottled", "Hugo Boss", "Frutal", "Amaderado"),
    new Perfume(53, "Allure Blanche", "Chanel", "Citrico", "Avainillado"),
    new Perfume(54, "Blue Seduction", "Antonio Banderas", "Marino", "Aromático"),
    new Perfume(55, "Allure Sport", "Chanel", "Marino", "Aromático"),
    new Perfume(56, "L'Homme", "Prada", "Atalcado", "Amaderado"),
    new Perfume(57, "Chrome", "Azzaro", "Aromático", "Citrico"),
    new Perfume(58, "Dylan Blue", "Versace", "Aromático", "Amaderado"),
    new Perfume(59, "Xerius Rouge", "Givenchy", "Amaderado", "Aromático"),
    new Perfume(60, "L'Eau D'Issey", "Issey Miyake", "Marino", "Aromático"),
    new Perfume(61, "Sauvage", "Dior", "Fresco especiado", "Ambarado"),
    new Perfume(62, "Style In Play", "Lacoste", "Frutal", "Aromático"),
    new Perfume(63, "212 VIP", "Carolina Herrera", "Ambarado", "Aromático"),
    new Perfume(64, "CH", "Carolina Herrera", "Avainillado", "Dulce"),
    new Perfume(65, "Club De Nuit Intense", "Armaf", "Frutal", "Citrico"),
    new Perfume(66, "Invictus", "Paco Rabanne", "Marino", "Citrico"),
    new Perfume(67, "Invictus Victory Elixir", "Paco Rabanne", "Calido especiado", "Avainillado"),
    new Perfume(68, "Kouros", "Yves Saint Laurent", "Aromático", "Amaderado"),
    new Perfume(69, "Dior Homme", "Dior", "Amaderado", "Calido especiado"),
    new Perfume(70, "Bad Boy", "Carolina Herrera", "Calido especiado", "Aromático"),
    new Perfume(71, "Y EDT", "Yves Saint Laurent", "Aromático", "Citrico"),
    new Perfume(72, "Acqua Di Gio Profumo", "Giorgio Armani", "Marino", "Amaderado"),
    new Perfume(73, "Hugo Red", "Hugo Boss", "Frutal", "Amaderado"),
    new Perfume(74, "Light Blue", "Dolce & Gabbana", "Marino", "Citrico"),
    new Perfume(75, "Ungaro III", "Emanuel Ungaro", "Amaderado", "Aromático"),
    new Perfume(76, "L12 12 Blanc", "Lacoste", "Aromático", "Citrico"),
    new Perfume(77, "212 VIP Black", "Carolina Herrera", "Aromático", "Amaderado"),
    new Perfume(78, "Terre D’Hermes", "Hermès", "Citrico", "Amaderado"),
    new Perfume(79, "Oscar de la Renta", "Oscar de la Renta", "Aromático", "Floral"),
    new Perfume(80, "Luna Rossa Ocean", "Prada", "Aromático", "Marino"),
    new Perfume(81, "Scandal Absolu", "Jean Paul Gaultier", "Ambarado", "Dulce"),
    new Perfume(82, "Phantom", "Paco Rabanne", "Citrico", "Avainillado"),
    new Perfume(83, "Ralph’s Club", "Ralph Lauren", "Amaderado", "Aromático"),
    new Perfume(84, "Britt", "Burberry", "Amaderado", "Calido especiado"),
    new Perfume(85, "212 Heroes", "Carolina Herrera", "Aromático", "Frutal"),
    new Perfume(86, "Polo Explorer", "Ralph Lauren", "Amaderado", "Aromático"),
    new Perfume(87, "L’Homme Le Parfum", "Yves Saint Laurent", "Aromático", "Amaderado"),
    new Perfume(88, "Black XS L’Exces", "Paco Rabanne", "Citrico", "Amaderado"),
    new Perfume(89, "Gucci Guilty", "Gucci", "Citrico", "Amaderado"),
    new Perfume(90, "Ultra Male", "Jean Paul Gaultier", "Avainillado", "Frutal"),
    new Perfume(91, "Sauvage Elixir", "Dior", "Aromático", "Amaderado"),
    new Perfume(92, "Just Different", "Hugo Boss", "Aromático", "Verde"),
    new Perfume(93, "Swiss Unlimited", "Victorinox Swiss Army", "Aromático", "Amaderado"),
    new Perfume(94, "One Million Elixir", "Paco Rabanne", "Dulce", "Ambarado"),
    new Perfume(95, "L’Homme", "Yves Saint Laurent", "Calido especiado", "Citrico"),
    new Perfume(96, "Invictus Platinum", "Paco Rabanne", "Aromático", "Fresco especiado"),
    new Perfume(97, "Oud for Glory", "Lataffa", "Amaderado", "Aromático"),
    new Perfume(98, "Hugo Energise", "Hugo Boss", "Aromático", "Citrico"),
    new Perfume(99, "Scandal EDT", "Jean Paul Gaultier", "Ambarado", "Dulce"),
    new Perfume(100, "L’Eau Pour Homme", "Kenzo", "Citrico", "Aromático"),
    new Perfume(101, "Armani Eau Pour Homme", "Giorgio Armani", "Citrico", "Aromático"),
    new Perfume(102, "Sauvage Parfum", "Dior", "Ambarado", "Citrico"),
    new Perfume(103, "Stronger With You Freeze", "Giorgio Armani", "Citrico", "Amaderado"),
    new Perfume(104, "La Nuit de l'Homme", "Yves Saint Laurent", "Aromático", "Calido especiado"),
    new Perfume(105, "Man In Black", "Bvlgari", "Amaderado", "Calido especiado"),
    new Perfume(106, "Invictus Victory", "Paco Rabanne", "Dulce", "Aromático"),
    new Perfume(107, "Le Beau EDT", "Jean Paul Gaultier", "Dulce", "Avainillado"),
    new Perfume(108, "Acqua Di Gio Profondo", "Giorgio Armani", "Marino", "Aromático"),
    new Perfume(109, "One Million Royal", "Paco Rabanne", "Aromático", "Calido especiado"),
    new Perfume(110, "One Million Lucky", "Paco Rabanne", "Dulce", "Amaderado"),
    new Perfume(111, "Uomo Born In Roma", "Valentino", "Amaderado", "Aromático"),
    new Perfume(112, "Spicebomb Extreme", "Viktor & Rolf", "Calido especiado", "Aromático"),
    new Perfume(113, "Valentino Uomo", "Valentino", "Amaderado", "Aromático"),
    new Perfume(114, "Dior Homme Intense", "Dior", "Amaderado", "Aromático"),
    new Perfume(115, "Stronger With You Intensely", "Giorgio Armani", "Dulce", "Ambarado"),
    new Perfume(116, "Y EDP", "Yves Saint Laurent", "Aromático", "Amaderado"),
    new Perfume(117, "Bvlgari Man", "Bvlgari", "Amaderado", "Ambarado"),
    new Perfume(118, "Golden Secret", "Antonio Banderas", "Amaderado", "Aromático"),
    new Perfume(119, "A*Men", "Thierry Mugler", "Dulce", "Aromático"),
    new Perfume(120, "Legend Spirit", "Montblanc", "Aromático", "Amaderado"),
    new Perfume(121, "Luna Rossa Black", "Prada", "Ambarado", "Aromático"),
    new Perfume(122, "Montblanc Explorer", "Montblanc", "Amaderado", "Aromático"),
    new Perfume(123, "Invictus Intense", "Paco Rabanne", "Ambarado", "Aromático"),
    new Perfume(124, "Scandal Le Parfum", "Jean Paul Gaultier", "Ambarado", "Dulce"),
    new Perfume(125, "Eros Flame", "Versace", "Citrico", "Fresco especiado"),
    new Perfume(126, "Le Male Elixir", "Jean Paul Gaultier", "Avainillado", "Dulce"),
    new Perfume(127, "Stronger With You Absolutely", "Giorgio Armani", "Ambarado", "Dulce"),
    new Perfume(128, "Boss Bottled Elixir", "Hugo Boss", "Amaderado", "Aromático"),
    new Perfume(129, "Acqua Di Gio Parfum", "Giorgio Armani", "Marino", "Aromático"),
    new Perfume(130, "Phantom Parfum", "Paco Rabanne", "Aromático", "Dulce"),
    new Perfume(131, "Luna Rossa Carbon", "Prada", "Fresco especiado", "Aromático"),
    new Perfume(132, "Selection", "Hugo Boss", "Amaderado", "Aromático"),
    new Perfume(133, "Born In Roma Coral Fantasy", "Valentino", "Dulce", "Aromático"),
    new Perfume(134, "Le Beau Le Parfum", "Jean Paul Gaultier", "Dulce", "Aromático"),
    new Perfume(135, "Le Beau Paradise Garden", "Jean Paul Gaultier", "Verde", "Dulce"),
    new Perfume(136, "Y EDP Intense", "Yves Saint Laurent", "Amaderado", "Aromático"),
    new Perfume(137, "Myslf", "Yves Saint Laurent", "Citrico", "Amaderado"),
    new Perfume(138, "Invictus Parfum", "Paco Rabanne", "Marino", "Aromático"),
    new Perfume(139, "Polo 67", "Ralph Lauren", "Frutal", "Citrico"),
    new Perfume(140, "Million Gold", "Paco Rabanne", "Amaderado", "Calido especiado"),
    new Perfume(141, "Le Male Le Parfum", "Jean Paul Gaultier", "Avainillado", "Calido especiado"),
    new Perfume(142, "Play", "Givenchy", "Citrico", "Fresco especiado"),
    new Perfume(143, "Light Blue Italian Love", "Dolce & Gabbana", "Citrico", "Amaderado"),
    new Perfume(144, "Gentleman Reserve Privée", "Givenchy", "Amaderado", "Calido especiado"),
    new Perfume(145, "Boss The Scent", "Hugo Boss", "Citrico", "Calido especiado"),
    new Perfume(146, "Polo Black", "Ralph Lauren", "Frutal", "Amaderado"),
    new Perfume(147, "Halloween Man", "Halloween", "Calido especiado", "Citrico"),
    new Perfume(148, "Toy Boy", "Moschino", "Floral", "Fresco especiado"),
    new Perfume(149, "Armani Code Parfum", "Giorgio Armani", "Amaderado", "Aromático"),
    new Perfume(150, "Wanted", "Azzaro", "Aromático", "Calido especiado"),
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