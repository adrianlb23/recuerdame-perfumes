// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, tipo, tipo2, url) {
        this.numero = numero;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.tipo2 = tipo2;
        this.url = url;
    }
}

const perfumes =[
    new Perfume(1, "Calandre", "Paco Rabanne", "Verde", "Floral", "https://www.fragrantica.es/perfume/Rabanne/Calandre-522.html"),
    new Perfume(2, "CK In2u", "Calvin Klein", "Citrico", "Ambarado", "https://www.fragrantica.es/perfume/Calvin-Klein/CK-IN2U-for-Her-934.htmll"),
    new Perfume(3, "Chanel No. 5", "Chanel", "Citrico", "Atalcado", "https://www.fragrantica.es/perfume/Chanel/Chanel-No-5-L-Eau-38543.html"),
    new Perfume(4, "Poison", "Dior", "Frutal", "Calido especiado", "https://www.fragrantica.es/perfume/Dior/Poison-218.html"),
    new Perfume(5, "Tresor", "Lancome", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Lancome/Tresor-172.html"),
    new Perfume(6, "Poeme", "Lancome", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Lancome/Tresor-172.html"),
    new Perfume(7, "Paloma Picasso", "Paloma Picasso", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Paloma-Picasso/Paloma-Picasso-1009.html"),
    new Perfume(8, "L’Eau D’Issey", "Issey Miyake", "Floral", "Fresco especiado", "https://www.fragrantica.es/perfume/Issey-Miyake/L-eau-d-Issey-720.html"),
    new Perfume(9, "Carolina Herrera", "Carolina Herrera", "Floral", "Fresco especiado", "https://www.fragrantica.es/perfume/Carolina-Herrera/Carolina-Herrera-by-Carolina-Herrera-286.html"),
    new Perfume(10, "Big Pony 2", "Ralph Lauren", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Ralph-Lauren/Big-Pony-2-for-Women-14446.html"),
    new Perfume(11, "Acqua Di Gioia", "Giorgio Armani", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gioia-8442.html"),
    new Perfume(12, "Organza", "Givenchy", "Floral blanco", "Ambarado", "https://www.fragrantica.es/perfume/Givenchy/Organza-4.html"),
    new Perfume(13, "212", "Carolina Herrera", "Floral blanco", "Citrico", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-296.html"),
    new Perfume(14, "Noa", "Cacharel", "Floral", "Amaderado", "https://www.fragrantica.es/perfume/Cacharel/Noa-242.html"),
    new Perfume(15, "Eternity", "Calvin Klein", "Floral", "Verde", "https://www.fragrantica.es/perfume/Calvin-Klein/Eternity-257.html"),
    new Perfume(16, "Opium", "Yves Saint Laurent", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Opium-Eau-de-Parfum-2009-7399.html"),
    new Perfume(17, "Lou Lou", "Cacharel", "Atalcado", "Ambarado", "https://www.fragrantica.es/perfume/Cacharel/LouLou-1276.html"),
    new Perfume(18, "Eden", "Cacharel", "Floral blanco", "Verde", "https://www.fragrantica.es/perfume/Cacharel/Eden-244.html"),
    new Perfume(19, "Anaís Anaís", "Cacharel", "Floral blanco", "Atalcado", "https://www.fragrantica.es/perfume/Cacharel/Anais-Anais-236.html"),
    new Perfume(20, "Hugo Woman", "Hugo Boss", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Hugo-Boss/Hugo-Woman-380.html"),
    new Perfume(21, "Black Opium", "Yves Saint Laurent", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Black-Opium-25324.html"),
    new Perfume(22, "O", "Lancome", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Lancome/O-de-Lancome-187.html"),
    new Perfume(23, "Oscar", "Oscar de la Renta", "Floral", "Atalcado", "https://www.fragrantica.es/perfume/Oscar-de-la-Renta/Oscar-1131.html"),
    new Perfume(24, "Angel", "Thierry Mugler", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/Mugler/Angel-704.html"),
    new Perfume(25, "Hypnotic", "Dior", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Dior/Hypnotic-Poison-Eau-Sensuelle-9600.html"),
    new Perfume(26, "The One", "Dolce & Gabbana", "Floral blanco", "Ambarado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/The-One-698.html"),
    new Perfume(27, "Thank U, Next", "Ariana Grande", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Ariana-Grande/Thank-U-Next-56741.html"),
    new Perfume(28, "Ralph", "Ralph Lauren", "Floral", "Citrico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Ralph-826.html"),
    new Perfume(29, "Libre", "Yves Saint Laurent", "Floral", "Ambarado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Libre-56077.html"),
    new Perfume(30, "J’Adore", "Dior", "Floral blanco", "Frutal", "https://www.fragrantica.es/perfume/Dior/J-adore-210.html"),
    new Perfume(31, "Dolce Vita", "Dior", "Calido especiado", "Ambarado", "https://www.fragrantica.es/perfume/Dior/Dolce-Vita-222.html"),
    new Perfume(32, "Hot Couture", "Givenchy", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Givenchy/Hot-Couture-35.html"),
    new Perfume(33, "Tommy Girl", "Tommy Hilfiger", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Tommy-Hilfiger/Tommy-Girl-3016.html"),
    new Perfume(34, "Paris", "Yves Saint Laurent", "Floral", "Atalcado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Paris-94.html"),
    new Perfume(35, "Ange ou Demon", "Givenchy", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Givenchy/Ange-ou-Demon-701.html"),
    new Perfume(36, "Miracle", "Lancome", "Fresco especiado", "Floral", "https://www.fragrantica.es/perfume/Lancome/Miracle-184.html"),
    new Perfume(37, "Ultraviolet", "Paco Rabanne", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/Ultraviolet-519.html"),
    new Perfume(38, "212 VIP Rosé", "Carolina Herrera", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-Rose-22857.html"),
    new Perfume(39, "Elixir des Merveilles", "Hermès", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Hermes/Elixir-des-Merveilles-3168.html"),
    new Perfume(40, "DKNY Women", "Donna Karan", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Donna-Karan/DKNY-Women-504.html"),
    new Perfume(41, "Si", "Giorgio Armani", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Giorgio-Armani/Si-18453.html"),
    new Perfume(42, "Halloween", "Jesús del Pozo", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Halloween/Halloween-1444.html"),
    new Perfume(43, "Amor Amor", "Cacharel", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Cacharel/Amor-Amor-238.html"),
    new Perfume(44, "Plus Plus Feminine", "Diesel", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Diesel/Plus-Plus-Feminine-3670.html"),
    new Perfume(45, "Flower", "Kenzo", "Atalcado", "Floral", "https://www.fragrantica.es/perfume/Kenzo/Flower-by-Kenzo-72.html"),
    new Perfume(46, "212 Sexy", "Carolina Herrera", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Sexy-306.html"),
    new Perfume(47, "Light Blue", "Dolce & Gabbana", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Light-Blue-485.html"),
    new Perfume(48, "Euphoria", "Calvin Klein", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Calvin-Klein/Euphoria-253.html"),
    new Perfume(49, "Fantasy", "Britney Spears", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Britney-Spears/Fantasy-600.html"),
    new Perfume(50, "Curious", "Britney Spears", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Britney-Spears/Curious-141.html"),
    new Perfume(51, "CH Woman", "Carolina Herrera", "Citrico", "Amaderado"), "https://www.fragrantica.es/perfume/Carolina-Herrera/CH-2015-31507.html",
    new Perfume(52, "Olimpea", "Paco Rabanne", "Avainillado", "Ambarado", "https://www.fragrantica.es/perfume/Rabanne/Olympea-31666.html"),
    new Perfume(53, "Eros", "Versace", "Citrico", "Calido especiado", "https://www.fragrantica.es/perfume/Versace/Eros-Pour-Femme-28958.html"),
    new Perfume(54, "My Way", "Giorgio Armani", "Floral blanco", "Citrico", "https://www.fragrantica.es/perfume/Giorgio-Armani/My-Way-62036.html"),
    new Perfume(55, "Midnight Fantasy", "Britney Spears", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Britney-Spears/Midnight-Fantasy-802.html"),
    new Perfume(56, "La Nuit Trésor", "Lancome", "Calido especiado", "Dulce", "https://www.fragrantica.es/perfume/Lancome/La-Nuit-Tresor-Le-Parfum-89120.html"),
    new Perfume(57, "Black XS", "Paco Rabanne", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Rabanne/Black-XS-for-Her-1138.html"),
    new Perfume(58, "Because It’s You", "Giorgio Armani", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Because-It-s-You-45257.html"),
    new Perfume(59, "Can Can", "Paris Hilton", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Paris-Hilton/Can-Can-1202.html"),
    new Perfume(60, "Lady Million", "Paco Rabanne", "Floral blanco", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Lady-Million-9045.html"),
    new Perfume(61, "Good Girl", "Carolina Herrera", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/Carolina-Herrera/Good-Girl-39681.html"),
    new Perfume(62, "212 VIP", "Carolina Herrera", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-10126.html"),
    new Perfume(63, "Tresor Midnight Rose", "Lancome", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Lancome/Tresor-Midnight-Rose-11721.html"),
    new Perfume(64, "Eilish", "Billie Eilish", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Billie-Eilish/Eilish-70052.html"),
    new Perfume(65, "Yes I Am", "Cacharel", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Cacharel/Yes-I-Am-48112.html"),
    new Perfume(66, "Coco Mademoiselle", "Chanel", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Chanel/Coco-Mademoiselle-611.html"),
    new Perfume(67, "Ralph Hot", "Ralph Lauren", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Ralph-Hot-1898.html"),
    new Perfume(68, "Big Pony 4", "Ralph Lauren", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Ralph-Lauren/Big-Pony-4-for-Women-14448.html"),
    new Perfume(69, "Scandal", "Jean Paul Gaultier", "Dulce", "Ambarado", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Scandal-45651.html"),
    new Perfume(70, "Cheap & Chic I Love Love", "Moschino", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Moschino/Cheap-Chic-I-Love-Love-728.html"),
    new Perfume(71, "Cool Water", "Davidoff", "Fresco Floral", "Frutal", "https://www.fragrantica.es/perfume/Davidoff/Cool-Water-508.html"),
    new Perfume(72, "Lolita Lempicka", "Lolita Lempicka", "Dulce", "Fresco especiado", "https://www.fragrantica.es/perfume/Lolita-Lempicka/Lolita-Lempicka-456.html"),
    new Perfume(73, "Kenzo Amour", "Kenzo", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Kenzo/Kenzo-Amour-664.html"),
    new Perfume(74, "DKNY Be Delicious", "Donna Karan", "Frutal", "Citrico", "https://www.fragrantica.es/perfume/Donna-Karan/DKNY-Be-Delicious-498.html"),
    new Perfume(75, "Armani Code", "Giorgio Armani", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Code-for-Women-413.html"),
    new Perfume(76, "Hypnose", "Lancome", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Lancome/Hypnose-170.html"),
    new Perfume(77, "La Vie Est Belle", "Lancome", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Lancome/La-Vie-Est-Belle-14982.html"),
    new Perfume(78, "Pure XS", "Paco Rabanne", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Pure-XS-For-Her-51424.html"),
    new Perfume(79, "Chance", "Chanel", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Chanel/Chance-Eau-Tendre-8069.html"),
    new Perfume(80, "Nina", "Nina Ricci", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Nina-Ricci/Nina-147.html"),
    new Perfume(81, "Narciso Rodríguez for Her", "Narciso Rodríguez", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Narciso-Rodriguez/Narciso-Rodriguez-For-Her-209.html"),
    new Perfume(82, "RiRi", "Rihanna", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Rihanna/RiRi-31629.html"),
    new Perfume(83, "Cloud", "Ariana Grande", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Ariana-Grande/Cloud-50384.html"),
    new Perfume(84, "Devotion", "Dolce & Gabbana", "Amaderado", "Avainillado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Devotion-84951.html"),
    new Perfume(85, "Fame", "Paco Rabanne", "Avainillado", "Frutal", "https://www.fragrantica.es/perfume/Rabanne/Fame-74962.html"),
    new Perfume(86, "Gucci Bloom", "Gucci", "Floral", "Citrico", "https://www.fragrantica.es/perfume/Gucci/Gucci-Bloom-44894.html"),
    new Perfume(87, "Miss Dior", "Dior", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Dior/Miss-Dior-2012-17796.html"),
    new Perfume(88, "Bombshell", "Victoria Secret", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Victoria-s-Secret/Bombshell-10190.html"),
    new Perfume(89, "Sweet Like Candy", "Ariana Grande", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Ariana-Grande/Sweet-Like-Candy-39970.html"),
    new Perfume(90, "Toy 2 Bubble Gum", "Moschino", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Moschino/Toy-2-Bubble-Gum-66098.html"),
    new Perfume(91, "212 Heroes", "Carolina Herrera", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Heroes-Forever-Young-72453.html"),
    new Perfume(92, "Dylan Turquoise", "Versace", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Versace/Versace-Pour-Femme-Dylan-Turquoise-62966.html"),
    new Perfume(93, "Idole", "Lancome", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Lancome/Idole-55795.html"),
    new Perfume(94, "Good Girl Blush", "Carolina Herrera", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Carolina-Herrera/Good-Girl-Blush-78576.html"),
    new Perfume(95, "Goddess", "Burberry", "Calido especiado", "Avainillado", "https://www.fragrantica.es/perfume/Burberry/Goddess-83483.html"),
    new Perfume(96, "Ajwad", "Lattafa", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Ajwad-75099.html"),
    new Perfume(97, "Good Girl Légère", "Carolina Herrera", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Carolina-Herrera/Good-Girl-Legere-48103.html"),
    new Perfume(98, "Gaultier Divine", "Jean Paul Gaultier", "Dulce", "Floral", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Gaultier-Divine-83889.html"),
    new Perfume(99, "Pineapple", "Dolce & Gabbana", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Pineapple-59231.html"),
    new Perfume(100, "Yara Candy", "Lattafa", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-Candy-95752.html"),
    new Perfume(101, "L’Impératrice 3", "Dolce & Gabbana", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Dolce-Gabbana/D-G-Anthology-L-Imperatrice-3-6086.html"),
    new Perfume(102, "My Way Intense", "Giorgio Armani", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Giorgio-Armani/My-Way-Intense-68596.html"),
    new Perfume(103, "Donna Born In Roma", "Valentino", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Valentino/Valentino-Donna-Born-In-Roma-55805.html"),
    new Perfume(104, "Her Elixir de Parfum", "Burberry", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Burberry/Burberry-Her-Elixir-de-Parfum-75968.html"),
    new Perfume(105, "Mod Vanilla", "Ariana Grande", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Ariana-Grande/Mod-Vanilla-77799.html"),
    new Perfume(106, "La Belle Le Parfum", "Jean Paul Gaultier", "Dulce", "Ambarado", "ttps://www.fragrantica.es/perfume/Jean-Paul-Gaultier/La-Belle-Le-Parfum-65175.html"),
    new Perfume(107, "Crush Cheirosa 62'", "Sol de Janeiro", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Sol-de-Janeiro/Cheirosa-62-56062.html"),
    new Perfume(108, "Noble Blush", "Lattaffa", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Noble-Blush-98937.html"),
    new Perfume(109, "Cloud Pink", "Ariana Grande", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Ariana-Grande/Cloud-Pink-83995.html"),
    new Perfume(110, "Toy 2 Pearl", "Moschino", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Moschino/Toy-2-Pearl-84718.html"),
    new Perfume(111, "Angel Nova", "Mugler", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Mugler/Angel-Nova-61519.html"),
    new Perfume(112, "Million Gold", "Paco Rabanne", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Rabanne/Million-Gold-For-Her-95640.html"),
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

        // Redireccion a la página de detalles del perfume
        tr.addEventListener('click', () => {
            if (perfume.url) {
                window.location.href = perfume.url; 
            }
        });

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