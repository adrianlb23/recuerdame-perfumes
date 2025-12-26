// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, genero, tipo, tipo2, url, dispo) {
        this.numero = numero; // Número identificador
        this.nombre = nombre; // Nombre del perfume
        this.marca = marca;   // Casa perfumista
        this.genero = genero; // Género
        this.tipo = tipo;     // Tipo olfativo
        this.tipo2 = tipo2;
        this.url = url; //url fragrantica
        this.dispo = dispo; // Disponibilidad
    }
}

const perfumes = [
    new Perfume(1, "Layton", "Parfums de Marly", "Unisex", "Calido especiado", "Dulce","https://www.fragrantica.es/perfume/Parfums-de-Marly/Layton-39314.html"),
    new Perfume(2, "Aventus", "Creed", "Hombre", "Frutal", "Citrico","https://www.fragrantica.es/perfume/Creed/Aventus-9828.html"),
    new Perfume(3, "Neroli Portofino", "Tom Ford", "Unisex", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Tom-Ford/Neroli-Portofino-12192.html"),
    new Perfume(4, "Tobacco Vanille", "Tom Ford", "Unisex", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Tom-Ford/Tobacco-Vanille-1825.html"),
    new Perfume(5, "Ombré Leather", "Tom Ford", "Unisex", "Cuero", "Amaderado", "https://www.fragrantica.es/perfume/Tom-Ford/Ombre-Leather-2018-50239.html"),
    new Perfume(6, "Erolfa", "Creed", "Hombre", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Creed/Erolfa-4248.html"),
    new Perfume(7, "Musc Ravageur", "Frederic Malle", "Unisex", "Calido especiado", "Ambarado", "https://www.fragrantica.es/perfume/Frederic-Malle/Musc-Ravageur-1801.html",),
    new Perfume(8, "Andrés Croxatto Man", "Andrés Croxatto", "Hombre", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Andres-Croxatto/Andres-Croxatto-Man-68880.html"),
    new Perfume(9, "Erba Pura", "Xerjoff", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Xerjoff/Erba-Pura-55157.html"),
    new Perfume(10, "Erba Pura Magica", "Sospiro Perfumes", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Sospiro-Perfumes/Erba-Pura-Magica-75942.html"),
    new Perfume(11, "Naxos", "Xerjoff", "Unisex", "Dulce", "Tabaco", "https://www.fragrantica.es/perfume/Xerjoff/XJ-1861-Naxos-30529.html"),
    new Perfume(12, "Delina", "Parfums de Marly", "Mujer", "Rosa", "Dulce", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Delina-43871.html"),
    new Perfume(13, "Black Orchid", "Tom Ford", "Mujer", "Calido especiado", "Amaderado", "https://www.fragrantica.es/perfume/Tom-Ford/Black-Orchid-1018.html"),
    new Perfume(14, "Irish Leather", "Memo París", "Unisex", "Aromático", "Cuero", "https://www.fragrantica.es/perfume/Memo-Paris/Irish-Leather-18393.html"),
    new Perfume(15, "Alexandria II", "Xerjoff", "Unisex", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Xerjoff/Alexandria-II-17786.html"),
    new Perfume(16, "Elisyum", "Roja Parfums", "Hombre", "Aromático", "Citrico", "https://www.fragrantica.es/perfume/Roja-Dove/Elysium-Pour-Homme-Parfum-Cologne-46296.html"),
    new Perfume(17, "Red Tobacco", "Mancera", "Unisex", "Calido especiado", "Tabaco", "https://www.fragrantica.es/perfume/Mancera/Red-Tobacco-46663.html"),
    new Perfume(18, "Interlude Man", "Amouage", "Hombre", "Ambarado", "Fresco especiado", "https://www.fragrantica.es/perfume/Amouage/Interlude-Man-15294.html"),
    new Perfume(19, "Invite Only Amber 23", "Kayali", "Unisex", "Dulce", "Ambarado", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Invite-Only-Amber-23-68958.html"),
    new Perfume(20, "Baccarat Rouge 540", "Maison Francis Kurkdijan", "Unisex", "Amaderado", "Dulce", "https://www.fragrantica.es/perfume/Maison-Francis-Kurkdjian/Baccarat-Rouge-540-33519.html"),
    new Perfume(21, "Creed for Her", "Creed", "Mujer", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Creed/Aventus-for-Her-38497.html"),
    new Perfume(22, "Black Phantom", "Kilian", "Unisex", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/By-Kilian/Black-Phantom-43632.html"),
    new Perfume(23, "L’Immensité", "Louis Vuitton", "Hombre", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Louis-Vuitton/L-Immensite-49751.html"),
    new Perfume(24, "Santal 33", "Le Labo", "Unisex", "Amaderado", "Aromático", "https://www.fragrantica.es/perfume/Le-Labo/Santal-33-12201.html"),
    new Perfume(25, "Tygar", "Bvlgari", "Hombre", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Bvlgari/Tygar-41222.html"),
    new Perfume(26, "Green Irish Tweed", "Creed", "Hombre", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Creed/Green-Irish-Tweed-474.html"),
    new Perfume(27, "Paradoxe", "Prada", "Mujer", "Floral", "Citrico", "https://www.fragrantica.es/perfume/Prada/Prada-Paradoxe-75668.html"),
    new Perfume(28, "The Collection: Noble Wood", "Hugo Boss", "Hombre", "Amaderado", "Aromático", "https://www.fragrantica.es/perfume/Hugo-Boss/The-Collection-Noble-Wood-71675.html"),
    new Perfume(29, "The Collection: Magnetic Musk", "Hugo Boss", "Hombre", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Hugo-Boss/The-Collection-Magnetic-Musk-71677.html"),
    new Perfume(30, "Oud for Greatness", "Initio Parfums", "Unisex", "Calido especiado", "Amaderado", "https://www.fragrantica.es/perfume/Initio-Parfums-Prives/Oud-for-Greatness-53641.html"),
    new Perfume(31, "Purple Accento", "Sospiro Perfumes", "Unisex", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Sospiro-Perfumes/Purple-Accento-40706.html"),
    new Perfume(32, "Instant Crush", "Mancera", "Unisex", "Calido especiado", "Amaderado", "https://www.fragrantica.es/perfume/Mancera/Instant-Crush-54885.html"),
    new Perfume(33, "1872", "Clive Christian", "Hombre", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Clive-Christian/1872-For-Men-4646.html"),
    new Perfume(34, "Armani Prive Vert Malachite", "Giorgio Armani", "Unisex", "Floral", "Avainillado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Prive-Vert-Malachite-34588.html"),
    new Perfume(35, "Imagination", "Louis Vuitton", "Unisex", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Louis-Vuitton/Imagination-67370.html"),
    new Perfume(36, "Angels Share", "Kilian", "Unisex", "Amaderado", "Dulce", "https://www.fragrantica.es/perfume/By-Kilian/Angels-Share-62615.html",),
    new Perfume(37, "Pardon", "Nasomatto", "Hombre", "Calido especiado", "Tabaco", "https://www.fragrantica.es/perfume/Nasomatto/Pardon-12130.html"),
    new Perfume(38, "Oriana", "Parfums de Marly", "Mujer", "Dulce", "Citrico", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Oriana-69117.html"),
    new Perfume(39, "Carmina", "Creed", "Mujer", "Ambarado", "Floral", "https://www.fragrantica.es/perfume/Creed/Carmina-84206.html"),
    new Perfume(40, "Holy Peony", "Dior", "Mujer", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Dior/Holy-Peony-53124.html"),
    new Perfume(41, "Oud Wood", "Tom Ford", "Unisex", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Tom-Ford/Oud-Wood-1826.html"),
    new Perfume(42, "The Collection: Courageous Rose", "Hugo Boss", "Unisex", "Fresco especiado", "Amaderado", "https://www.fragrantica.es/perfume/Hugo-Boss/Courageous-Rose-101080.html"),
    new Perfume(43, "Renaissance", "Xerjoff", "Unisex", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Xerjoff/XJ-1861-Renaissance-12126.html"),
    new Perfume(44, "Chocolate Greedy", "Montale", "Unisex", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Montale/Chocolate-Greedy-2186.html"),
    new Perfume(45, "Percival", "Parfums de Marly", "Unisex", "Ambarado", "Aromático", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Percival-51037.html"),
    new Perfume(46, "Office for Men", "Jeremy Fragrance", "Hombre", "Ambarado", "Citrico", "https://www.fragrantica.es/perfume/Fragrance-One/Office-For-Men-55166.html"),
    new Perfume(47, "Hacivat", "Nishane", "Unisex", "Amaderado", "Citrico", "https://www.fragrantica.es/perfume/Nishane/Hacivat-44174.html"),
    new Perfume(48, "Althair", "Parfums de Marly", "Hombre", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Althair-84109.html"),
    new Perfume(49, "Costa Azzurra", "Tom Ford", "Unisex", "Citrico", "Marino", "https://www.fragrantica.es/perfume/Tom-Ford/Costa-Azzurra-64617.html"),
    new Perfume(50, "Love Don’t Be Shy", "Kilian", "Mujer", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/By-Kilian/Love-Don-t-Be-Shy-4322.html"),
    new Perfume(51, "Ani", "Nishane", "Unisex", "Calido especiado", "Avainillado", "https://www.fragrantica.es/perfume/Nishane/Ani-54785.html"),
    new Perfume(52, "Vanilla Sex", "Tom Ford", "Unisex", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Tom-Ford/Vanilla-Sex-88588.html"),
    new Perfume(53, "Bianco Latte", "Giardini Di Toscana", "Unisex", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Giardini-Di-Toscana/Bianco-Latte-64757.html"),
    new Perfume(54, "Amore Caffé", "Mancera", "Unisex", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Mancera/Amore-Caffe-87409.html"),
    new Perfume(55, "Pegasus", "Parfums de Marly", "Hombre", "Avainillado", "Aromático", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Pegasus-16938.html"),
    new Perfume(56, "Ege", "Nishane", "Unisex", "Verde", "Fresco especiado", "https://www.fragrantica.es/perfume/Nishane/EGE-AIGAIO-64092.html"),
    new Perfume(57, "Bitter Peach", "Tom Ford", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Tom-Ford/Bitter-Peach-62707.html"),
    new Perfume(58, "Absolu Aventus", "Creed", "Hombre", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Creed/Absolu-Aventus-84112.html", "sold"),
    new Perfume(59, "By The Fireplace", "Maison Martin Margiela", "Unisex", "Amaderado", "Avainillado", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/By-the-Fireplace-31623.html"),
    new Perfume(60, "Kirke", "Tiziana Terenzi", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Tiziana-Terenzi/Kirke-32172.html"),
    new Perfume(61, "Cedrat Boise", "Mancera", "Unisex", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Mancera/Cedrat-Boise-15211.html"),
    new Perfume(62, "Terroni", "Orto Parisi", "Unisex", "Amaderado", "Ambarado", "https://www.fragrantica.es/perfume/Orto-Parisi/Terroni-45475.html"),
    new Perfume(63, "Greenley", "Parfums de Marly", "Unisex", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Greenley-62101.html"),
    new Perfume(64, "Flamenco", "Ramón Monegal", "Unisex", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Ramon-Monegal/Flamenco-44233.html"),
    new Perfume(65, "Millésime Impérial", "Creed", "Unisex", "Marino", "Citrico", "https://www.fragrantica.es/perfume/Creed/Millesime-Imperial-466.html"),
    new Perfume(66, "Bergamote 22", "Le Labo", "Unisex", "Citrico", "Aromático","https://www.fragrantica.es/perfume/Le-Labo/Bergamote-22-6327.html"),
    new Perfume(67, "Juniper Sling", "Penhaligon’s", "Unisex", "Aromático", "Fresco especiado", "https://www.fragrantica.es/perfume/Penhaligon-s/Juniper-Sling-13266.html"),
    new Perfume(68, "Matcha Meditation", "Maison Martin Margiela", "Unisex", "Floral", "Verde", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/Matcha-Meditation-64805.html", "sold"),
    new Perfume(69, "Under The Lemon Tree", "Maison Martin Margiela", "Unisex", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/Under-The-Lemon-Tree-53379.html"),
    new Perfume(70, "Silver Mountain Water", "Creed", "Unisex", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Creed/Silver-Mountain-Water-472.html"),
    new Perfume(71, "Bleecker Street", "Bond No. 9", "Unisex", "Frutal", "Aromático", "https://www.fragrantica.es/perfume/Bond-No-9/Bleecker-Street-1301.html"),
    new Perfume(72, "Arabians Tonka", "Montale", "Unisex", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Montale/Arabians-Tonka-57384.html"),
    new Perfume(73, "Megamare", "Orto Parisi", "Unisex", "Marino", "Amabarado", "https://www.fragrantica.es/perfume/Orto-Parisi/Megamare-53471.html"),
    new Perfume(74, "Side Effect", "Initio Parfums", "Unisex", "Calido especiado", "Tabaco", "https://www.fragrantica.es/perfume/Initio-Parfums-Prives/Side-Effect-42260.html"),
    new Perfume(75, "Vanilla Powder", "Matiere Premiere", "Unisex", "Avainillado", "Amaderado", "https://www.fragrantica.es/perfume/Matiere-Premiere/Vanilla-Powder-84933.html", "sold"),
    new Perfume(76, "Cassiopea", "Tiziana Terenzi", "Unisex", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Tiziana-Terenzi/Cassiopea-30624.html"),
    new Perfume(77, "Sunshine Woman", "Amouage", "Mujer", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Amouage/Sunshine-Woman-28182.html"),
    new Perfume(78, "Yum Pistachio Gelatto", "Kayali", "Unisex", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Yum-Pistachio-Gelato-33-79846.html"),
    new Perfume(79, "Electric Cherry", "Tom Ford", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Tom-Ford/Electric-Cherry-78583.html"),
    new Perfume(80, "Pacific Chill", "Louis Vuitton", "Unisex", "Citrico", "Frutal", "https://www.fragrantica.es/perfume/Louis-Vuitton/Pacific-Chill-81423.html"),
    new Perfume(81, "Babycat", "Yves Saint Laurent", "Unisex", "Avainillado", "Fresco especiado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Babycat-73149.html"),
    new Perfume(82, "Tobacco Mandarin", "Byredo", "Unisex", "Fresco especiado", "Tabaco", "https://www.fragrantica.es/perfume/Byredo/Tobacco-Mandarin-63031.html"),
    new Perfume(83, "Kalan", "Parfums de Marly", "Unisex", "Calido especiado", "Aromático", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Kalan-56036.html"),
    new Perfume(84, "Blue Talisman", "Ex Nihilo", "Unisex", "Citrico", "Frutal", "https://www.fragrantica.es/perfume/Ex-Nihilo/Blue-Talisman-84224.html", "sold"),
    new Perfume(85, "Delina Exclusif", "Parfums de Marly", "Mujer", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Delina-Exclusif-50370.html"),
    new Perfume(86, "Milk", "Commodity", "Unisex", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/Commodity/Milk-69191.html"),
    new Perfume(87, "Fico Di Amalfi", "Acqua Di Parma", "Unisex", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Acqua-di-Parma/Acqua-di-Parma-Blu-Mediterraneo-Fico-di-Amalfi-1687.html"),
    new Perfume(88, "Curacao Bay", "Jacques Fath", "Unisex", "Citrico", "Marino", "https://www.fragrantica.es/perfume/Jacques-Fath/Curacao-Bay-32571.html"),
    new Perfume(89, "Oud Maracujá", "Maison Crivelli", "Unisex", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Maison-Crivelli/Oud-Maracuja-83842.html"),
    new Perfume(90, "Can’t Stop Loving You", "Kilian", "Mujer", "Floral", "Dulce", "https://www.fragrantica.es/perfume/By-Kilian/Can-t-Stop-Loving-You-78735.html"),
    new Perfume(91, "Lafayette Street", "Bond No. 9", "Unisex", "Ambarado", "Avainillado", "https://www.fragrantica.es/perfume/Bond-No-9/Lafayette-Street-51742.html"),
    new Perfume(92, "God Of Fire", "Stephane Humbert Lucas 777", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Stephane-Humbert-Lucas-777/God-of-Fire-72381.html"),
    new Perfume(93, "Smoking Hot", "Kilian", "Unisex", "Tabaco", "Frutal", "https://www.fragrantica.es/perfume/By-Kilian/Smoking-Hot-84413.html"),
    new Perfume(94, "Ombre Nomade", "Louis Vuitton", "Unisex", "Calido especiado", "Amaderado", "https://www.fragrantica.com/perfume/Louis-Vuitton/Ombre-Nomade-49755.html"),
    new Perfume(95, "Hadar", "Spirit of Kings", "Unisex", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Spirit-Of-Kings/Hadar-58238.html"),
    new Perfume(96, "Perseus", "Parfums de Marly", "Hombre", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Perseus-90199.html"),
    new Perfume(97, "Summer Hammer", "Lorenzo Pazzaglia", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Lorenzo-Pazzaglia/Summer-Hammer-81476.html"),
    new Perfume(98, "Grand Soir", "Maison Francis Kurkdjian", "Unisex", "Ambarado", "Dulce", "https://www.fragrantica.es/perfume/Maison-Francis-Kurkdjian/Grand-Soir-40816.html"),
    new Perfume(99, "Jazz Club", "Maison Martin Margiela", "Hombre", "Tabaco", "Dulce", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/Jazz-Club-20541.html"),
    new Perfume(100, "Torino 22", "Xerjoff", "Unisex", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Xerjoff/Torino22-77059.html"),
    new Perfume(101, "New York Nights", "Bond No. 9", "Unisex", "Calido especiado", "Dulce", "https://www.fragrantica.es/perfume/Bond-No-9/New-York-Nights-46057.html"),
    new Perfume(102, "Lira", "Xerjoff", "Mujer", "Citrico", "Avainillado", "https://www.fragrantica.es/perfume/Xerjoff/Lira-11801.html"),
    new Perfume(103, "Greenwich Village", "Bond No. 9", "Unisex", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Bond-No-9/Greenwich-Village-54157.html"),
    new Perfume(104, "Eden Juicy Apple", "Kayali", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Eden-Juicy-Apple-01-Eau-De-Parfum-70875.html"),
    new Perfume(105, "Pax", "Lorenzo Pazzaglia", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Lorenzo-Pazzaglia/Pax-69650.html"),
    new Perfume(106, "Symphony", "Louis Vuitton", "Unisex", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Louis-Vuitton/Symphony-68357.html"),
    new Perfume(107, "Vanilla 28", "Kayali", "Mujer", "Amabarado", "Avainillado", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Vanilla-28-52616.html"),
    new Perfume(108, "Virgin Island Water", "Creed", "Unisex", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Creed/Virgin-Island-Water-899.html"),
    new Perfume(109, "Layton Exclusif", "Parfums de Marly", "Unisex", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Layton-Exclusif-46633.html"),
    new Perfume(110, "Fucking Fabulous", "Tom Ford", "Unisex", "Aromatico", "Avainillado", "https://www.fragrantica.es/perfume/Tom-Ford/Fucking-Fabulous-46513.html"),
    new Perfume(111, "Aoud Lemon Mint", "Mancera", "Unisex", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Mancera/Aoud-Lemon-Mint-39181.html"),
    new Perfume(112, "Lost Cherry", "Tom Ford", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Tom-Ford/Lost-Cherry-51411.html"),
    new Perfume(113, "Cactus Garden", "Louis Vuitton", "Unisex", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Louis-Vuitton/Cactus-Garden-53946.html"),
    new Perfume(114, "Oajan", "Parfums de Marly", "Unisex", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Oajan-21548.html"),
    new Perfume(115, "Torino 21", "Xerjoff", "Unisex", "Aromatico", "Fresco especiado", "https://www.fragrantica.es/perfume/Xerjoff/Torino21-70424.html", "sold"),
    new Perfume(116, "Gris Charnel", "BDK Parfums", "Unisex", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/BDK-Parfums/Gris-Charnel-57038.html"),
    new Perfume(117, "Tuscan Leather", "Tom Ford", "Unisex", "Aromatico", "Afrutado", "https://www.fragrantica.es/perfume/Tom-Ford/Tuscan-Leather-1849.html"),
    new Perfume(118, "Afternoon Swim", "Louis Vuitton", "Unisex", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Louis-Vuitton/Afternoon-Swim-53947.html"),
    new Perfume(119, "Coffee Break", "Maison Martin Margiela", "Unisex", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/Coffee-Break-55926.html"),
    new Perfume(120, "Erba Gold", "Xerjoff", "Unisex", "Citrico", "Afrutado", "https://www.fragrantica.es/perfume/Xerjoff/Erba-Gold-76683.html"),
    new Perfume(121, "Noir Extreme", "Tom Ford", "Hombre", "Calido especiado", "Dulce", "https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html"),
    new Perfume(122, "Tribeca", "Bond No. 9", "Unisex", "Ambarado", "Amaderado", "https://www.fragrantica.es/perfume/Bond-No-9/TriBeCa-59904.html", "sold"),
    new Perfume(123, "The Tragedy of Lord George", "Penhaligon’s", "Hombre", "Amaderado", "Ambarado", "https://www.fragrantica.es/perfume/Penhaligon-s/The-Tragedy-of-Lord-George-40716.html"),
    new Perfume(124, "Centaurus", "Creed", "Unisex", "Calido especiado", "Ambarado", "https://www.fragrantica.es/perfume/Creed/Centaurus-95601.html"),
    new Perfume(125, "Eden Sparkling Lychee", "Kayali", "Mujer", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Eden-Sparkling-Lychee-39-Eau-de-Parfum-88197.html", "sold"),
    new Perfume(126, "Almaz", "Kajal", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Kajal/Almaz-73429.html"),
    new Perfume(127, "Narcotic Delight", "Initio", "Unisex", "Calido especiado", "Dulce", "https://www.fragrantica.es/perfume/Initio-Parfums-Prives/Narcotic-Delight-89368.html"),
    new Perfume(128, "Il Peace", "Ilmin", "Hombre", "Calido especiado", "Dulce", ""),
    new Perfume(129, "Attrape-Rêves", "Louis Vuitton", "Mujer", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Louis-Vuitton/Attrape-Reves-51016.html"),
    new Perfume(130, "Roses Vanille", "Mancera", "Mujer", "Floral","Avainillado", "https://www.fragrantica.es/perfume/Mancera/Roses-Vanille-15210.html"),
    new Perfume(131, "Cocktail Maracuja", "New Notes", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/New-Notes/Cocktail-Maracuja-83744.html"), 
    new Perfume(132, "Tobacco Honey", "Guerlain", "Unisex", "Dulce", "Tabaco", "https://www.fragrantica.es/perfume/Guerlain/Tobacco-Honey-84518.html"), 
    new Perfume(133, "Rolling in Love", "Kilian", "Unisex", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/By-Kilian/Rolling-in-Love-56402.html"), 
    new Perfume(134, "The Matcha 26", "Le Labo", "Unisex", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Le-Labo/The-Matcha-26-69731.html",), 
    new Perfume(135, "Yum Boujee Marshmallow", "Kayali", "Mujer", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Yum-Boujee-Marshmallow-81-99254.html",), 
    new Perfume(136, "Météore", "Louis Vuitton", "Hombre", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Louis-Vuitton/Meteore-62251.html",), 
    new Perfume(137, "Red Tobacco Intense", "Mancera", "Unisex", "Calido especiado", "Tabaco", "https://www.fragrantica.es/perfume/Mancera/Red-Tobacco-Intense-84246.html"),
    new Perfume(138, "Herod", "Parfums de Marly", "Hombre", "Avainillado", "Tabaco", "https://www.fragrantica.es/perfume/Parfums-de-Marly/Herod-16939.html"),
    new Perfume(139, "Guidance", "Amouage", "Unisex", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Amouage/Guidance-78656.html"),
    new Perfume(140, "Amber Intrigue", "Tom Ford", "Unisex", "Amaderado", "Ambarado", "https://www.fragrantica.es/perfume/Tom-Ford/Amber-Intrigue-97380.html"),
    new Perfume(141, "Viking Cologne", "Creed", "Hombre", "Aromático", "Citrico", "https://www.fragrantica.es/perfume/Creed/Viking-Cologne-67039.html"),
    new Perfume(142, "Atomic Rose", "Initio", "Unisex", "Floral", "Avainillado", "https://www.fragrantica.es/perfume/Initio-Parfums-Prives/Atomic-Rose-57587.html"),
    new Perfume(143, "Isola Blu", "Roja Parfums", "Unisex", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Roja-Dove/Isola-Blu-80177.html"),
    new Perfume(144, "Opus XIV Royal Tobacco", "Amouage", "Unisex", "Tabaco", "Ambarado", "https://www.fragrantica.es/perfume/Amouage/Opus-XIV-Royal-Tobacco-75064.html"),
    new Perfume(145, "Opus XV King Blue", "Amouage", "Unisex", "Amaderado", "Ambarado", "https://www.fragrantica.es/perfume/Amouage/Opus-XV-King-Blue-83394.html"),
    new Perfume(146, "Oud Cadenza", "Maison Crivelli", "Unisex", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Maison-Crivelli/Oud-Cadenza-95195.html"),
    new Perfume(147, "Soleil de Feu", "Tom Ford", "Mujer", "Amabarado", "Amaderado", "https://www.fragrantica.es/perfume/Tom-Ford/Soleil-de-Feu-80083.html"),
    new Perfume(148, "Lovefest Burning Cherry", "Kayali", "Unisex", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Kayali-Fragrances/Lovefest-Burning-Cherry-48-Eau-de-Parfum-75661.html"),
    new Perfume(149, "Tobacolor", "Dior", "Unisex", "Tabaco", "Dulce", "https://www.fragrantica.es/perfume/Dior/Tobacolor-65551.html"),
    new Perfume(150, "Sense", "Laverne", "Mujer", "Floral", "Citrico", "https://www.fragrantica.es/perfume/Laverne/Sense-102340.html"),
    new Perfume(151, "Hundred Silent Ways", "Nishane", "Unisex", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Nishane/Hundred-Silent-Ways-37602.html"),
    new Perfume(152, "Mefisto", "Xerjoff", "Unisex", "Citrico", "Aromático", "https://www.fragrantica.es/perfume/Xerjoff/Mefisto-6310.html"),
    new Perfume(153, "Beach Walk", "Maison Margiela", "Mujer", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Maison-Martin-Margiela/Beach-Walk-15261.html"),
    new Perfume(154, "English Pear & Freesia", "Jo Malone", "Mujer", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Jo-Malone-London/English-Pear-Freesia-10314.html"),
    new Perfume(155, "Fig & Lotus Flower", "Jo Malone", "Unisex", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Jo-Malone-London/Fig-Lotus-Flower-61929.html"),
    new Perfume(156, "Mimosa & Cardamom", "Jo Malone", "Unisex", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Jo-Malone-London/Mimosa-Cardamom-31825.html"),
    new Perfume(157, "Yuja Cologne", "Jo Malone", "Unisex", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Jo-Malone-London/Yuja-Cologne-60484.html"),
    new Perfume(158, "Another 13", "Le Labo", "Unisex", "Ambarado", "Amaderado", "https://www.fragrantica.es/perfume/Le-Labo/Another-13-10131.html"),
    new Perfume(159, "Rose 31", "Le Labo", "Unisex", "Floral", "Amaderado", "https://www.fragrantica.es/perfume/Le-Labo/Rose-31-3678.html"),
    new Perfume(160, "Vanille Absolu", "Montale", "Unisex", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Montale/Vanille-Absolu-4064.html"),
    new Perfume(161, "The Blazing Mr. Sam", "Penhaligon’s", "Hombre", "Tabaco", "Calido especiado", "https://www.fragrantica.es/perfume/Penhaligon-s/The-Blazing-Mr-Sam-50255.html"),
    new Perfume(162, "Lamar", "Kajal", "Unisex", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Kajal/Lamar-62571.html"),
    new Perfume(163, "Tuxedo", "Yves Saint Laurent", "Unisex", "Calido especiado", "Avainillado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Tuxedo-32269.html"),
]

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfumes();

    document.querySelectorAll('input[name="aroma"]').forEach(radio => {
        radio.addEventListener('change', actualizarPerfumes);
    });

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', actualizarPerfumes);
    
    // Si existe el botón de búsqueda, añadir evento
    const searchBtn = document.querySelector('.search-btn');
    if(searchBtn) {
        searchBtn.addEventListener('click', actualizarPerfumes);
    }
});

function actualizarPerfumes() {
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
            perfume.marca.toLowerCase().includes(searchValue) ||
            (perfume.tipo && perfume.tipo.toLowerCase().includes(searchValue)) ||
            (perfume.tipo2 && perfume.tipo2.toLowerCase().includes(searchValue))
        );
    }

    mostrarPerfumes(perfumesFiltrados);
}

function mostrarPerfumes(perfumesFiltrados = perfumes) {
    const perfumeGrid = document.getElementById('perfume-grid');
    perfumeGrid.innerHTML = '';

    if (perfumesFiltrados.length === 0) {
        perfumeGrid.innerHTML = '<div class="no-results">No se encontraron perfumes que coincidan con tu búsqueda.</div>';
        return;
    }

    perfumesFiltrados.forEach(perfume => {
        const card = document.createElement('div');
        card.className = 'perfume-card';
        
        // Si el perfume está agotado, aplicar clase "sold"
        if (perfume.dispo === 'sold') {
            card.classList.add('sold');
        }

        // Header de la tarjeta
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        
        const perfumeNumber = document.createElement('span');
        perfumeNumber.className = 'perfume-number';
        perfumeNumber.textContent = perfume.numero;
        cardHeader.appendChild(perfumeNumber);
        
        const perfumeName = document.createElement('h3');
        perfumeName.className = 'perfume-name';
        perfumeName.textContent = perfume.nombre;
        cardHeader.appendChild(perfumeName);
        
        const perfumeGender = document.createElement('span');
        perfumeGender.className = 'perfume-gender';
        perfumeGender.textContent = perfume.genero;
        cardHeader.appendChild(perfumeGender);
        
        card.appendChild(cardHeader);

        // Body de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const perfumeHouse = document.createElement('p');
        perfumeHouse.className = 'perfume-house';
        perfumeHouse.textContent = perfume.marca;
        cardBody.appendChild(perfumeHouse);
        
        const perfumeNotes = document.createElement('div');
        perfumeNotes.className = 'perfume-notes';
        
        if(perfume.tipo) {
            const noteTag1 = document.createElement('span');
            noteTag1.className = 'note-tag';
            noteTag1.textContent = perfume.tipo;
            perfumeNotes.appendChild(noteTag1);
        }
        
        if(perfume.tipo2) {
            const noteTag2 = document.createElement('span');
            noteTag2.className = 'note-tag';
            noteTag2.textContent = perfume.tipo2;
            perfumeNotes.appendChild(noteTag2);
        }
        
        cardBody.appendChild(perfumeNotes);
        card.appendChild(cardBody);

        // Footer de la tarjeta
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        
        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'details-btn';
        detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> Ver detalles';
        
        // Redirección a la página de detalles del perfume
        detailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(perfume.url) {
                window.open(perfume.url, '_blank');
            }
        });
        
        cardFooter.appendChild(detailsBtn);
        card.appendChild(cardFooter);

        // Click en toda la tarjeta también redirige
        card.addEventListener('click', () => {
            if(perfume.url) {
                window.open(perfume.url, '_blank');
            }
        });

        perfumeGrid.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfumes();

    // Configurar el toggle de filtros para móviles
    const filterToggle = document.getElementById('filter-toggle');
    const filterOptions = document.getElementById('filter-options');
    
    if(filterToggle && filterOptions) {
        filterToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            filterOptions.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Cerrar filtros al hacer clic fuera
        document.addEventListener('click', function() {
            filterOptions.classList.remove('active');
            filterToggle.classList.remove('active');
        });
        
        // Evitar que el clic en los filtros los cierre
        filterOptions.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});
function deseleccionarRadios() {
    const radios = document.querySelectorAll('input[name="aroma"]');
    radios.forEach(radio => radio.checked = false);
    actualizarPerfumes();
}

