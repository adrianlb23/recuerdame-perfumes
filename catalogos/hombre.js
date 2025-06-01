// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, tipo, tipo2, url, dispo /*, clima, ocasion, ocasion */) {
        this.numero = numero;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.tipo2 = tipo2;
        this.url = url;
        this.dispo = dispo;
        //this.clima = clima;
        //this.ocasion = ocasion;
        //this.ocasion = ocasion;
    }
}

const perfumes =[
    new Perfume(1, "Paco Rabanne Pour Homme", "Paco Rabanne", "Fresco especiado", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Paco-Rabanne-Pour-Homme-526.html"),
    new Perfume(2, "Quorum", "Antonio Puig", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Antonio-Puig/Quorum-3825.html"),
    new Perfume(3, "Jazz", "Yves Saint Laurent", "Aromatico", "Fresco especiado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Jazz-2539.html",),
    new Perfume(4, "Azzaro Pour Homme", "Azzaro", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Azzaro/Azzaro-pour-Homme-829.html"),
    new Perfume(5, "Polo Sport", "Ralph Lauren", "Citrico", "Aromatico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Sport-894.html"),
    new Perfume(6, "Carolina Herrera", "Carolina Herrera", "Floral", "Verde", "https://www.fragrantica.es/perfume/Carolina-Herrera/Carolina-Herrera-41888.html"),
    new Perfume(7, "Drakkar Noir", "Guy Laroche", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Guy-Laroche/Drakkar-Noir-2069.html"),
    new Perfume(8, "One", "Calvin Klein", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Calvin-Klein/CK-One-276.html"),
    new Perfume(9, "Acqua Di Gio", "Giorgio Armani", "Marino", "Citrico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gio-410.html"),
    new Perfume(10, "Safari", "Ralph Lauren", "Aromatico", "Verde", "https://www.fragrantica.es/perfume/Ralph-Lauren/Safari-897.html"),
    new Perfume(11, "Farenheit", "Dior", "Amaderado", "Fresco especiado", "https://www.fragrantica.es/perfume/Dior/Fahrenheit-228.html"),
    new Perfume(12, "Egoist Platinum", "Chanel", "Aromatico", "Fresco especiado", "https://www.fragrantica.es/perfume/Chanel/Egoiste-Platinum-614.html"),
    new Perfume(13, "Eternity", "Calvin Klein", "Citrico", "Aromatico", "https://www.fragrantica.es/perfume/Calvin-Klein/Eternity-For-Men-258.html"),
    new Perfume(14, "Polo Green", "Ralph Lauren", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-890.html"),
    new Perfume(15, "212", "Carolina Herrera", "Citrico", "Verde", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Men-297.html"),
    new Perfume(16, "XS", "Paco Rabanne", "Aromatico", "Fresco especiado", "https://www.fragrantica.es/perfume/Rabanne/XS-2018-49962.html", "sold"),
    new Perfume(17, "Hugo Boss (Cantimplora)", "Hugo Boss", "Fresco especiado", "Aromatico", "https://www.fragrantica.es/perfume/Hugo-Boss/Hugo-570.html"),
    new Perfume(18, "Pino Silvestre", "Lino Vidal", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Pino-Silvestre/Pino-Silvestre-Original-1522.html"),
    new Perfume(19, "The Most Wanted Parfum", "Azzaro", "Amaderado", "Avainillado", "https://www.fragrantica.es/perfume/Azzaro/The-Most-Wanted-Parfum-73664.html"),
    new Perfume(20, "Le Male", "Jean Paul Gaultier", "Aromatico", "Avainillado", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Male-430.html"),
    new Perfume(21, "Tommy", "Tommy Hilfiger", "Fresco especiado", "Verde", "https://www.fragrantica.es/perfume/Tommy-Hilfiger/Tommy-6314.html"),
    new Perfume(22, "Pour Homme", "Kenzo", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Kenzo/Kenzo-pour-Homme-77.html"),
    new Perfume(23, "Stronger With You Oud", "Giorgio Armani", "Avainillado", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Oud-76171.html"),
    new Perfume(24, "Stronger With You", "Giorgio Armani", "Avainillado", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-45258.html"),
    new Perfume(25, "Agua Brava", "Antonio Puig", "Citrico", "Aromatico", "https://www.fragrantica.es/perfume/Antonio-Puig/Agua-Brava-12673.html"),
    new Perfume(26, "Opium", "Yves Saint Laurent", "Fresco especiado", "Frutal", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Opium-Pour-Homme-562.html"),
    new Perfume(27, "Pure XS", "Paco Rabanne", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/Pure-XS-46038.html"),
    new Perfume(28, "Lapidus", "Ted Lapidus", "Amaderado", "Dulce", "https://www.fragrantica.es/perfume/Ted-Lapidus/Lapidus-Pour-Homme-5943.html"),
    new Perfume(29, "K", "Dolce & Gabbana", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/K-by-Dolce-Gabbana-Eau-de-Parfum-62311.html"),
    new Perfume(30, "Polo Blue", "Ralph Lauren", "Citrico", "Marino", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Blue-1198.html"),
    new Perfume(31, "Essential", "Lacoste", "Aromatico", "Citrico", "https://www.fragrantica.es/perfume/Lacoste-Fragrances/Essential-787.html", "sold"),
    new Perfume(32, "Ultraviolet", "Paco Rabanne", "Verde", "Aromatico", "https://www.fragrantica.es/perfume/Rabanne/Ultraviolet-521.html", "sold"),
    new Perfume(33, "Armani Code Profumo", "Giorgio Armani", "Avainillado", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Code-Profumo-34761.html"),
    new Perfume(34, "Black XS", "Paco Rabanne", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Black-XS-2018-49961.html"),
    new Perfume(35, "Polo Red Extreme", "Ralph Lauren", "Aromatico", "Calido especiado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Red-Extreme-43386.html"),
    new Perfume(36, "212 Sexy Men", "Carolina Herrera", "Avainillado", "Amaderado", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Sexy-Men-1054.html", "sold"),
    new Perfume(37, "Lacoste Red", "Lacoste", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Lacoste-Fragrances/Red-3189.html"),
    new Perfume(38, "Lacoste Pour Homme", "Lacoste", "Frutal", "Calido especiado", "https://www.fragrantica.es/perfume/Lacoste-Fragrances/Lacoste-Pour-Homme-670.html", "sold"),
    new Perfume(39, "Boss Bottled Night", "Hugo Boss", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Hugo-Boss/Boss-Bottled-Night-8825.html"),
    new Perfume(40, "Bleu de Chanel", "Chanel", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Chanel/Bleu-de-Chanel-9099.html"),
    new Perfume(41, "Polo Red", "Ralph Lauren", "Citrico", "Frutal", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Red-18598.html"),
    new Perfume(42, "Fuel for Life", "Diesel", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Diesel/Fuel-for-Life-Homme-1605.html"),
    new Perfume(43, "Armani Code", "Giorgio Armani", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Code-412.html"),
    new Perfume(44, "Eros", "Versace", "Avainillado", "Aromatico", "https://www.fragrantica.es/perfume/Versace/Eros-16657.html"),
    new Perfume(45, "Pour Homme", "Dolce & Gabbana", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Dolce-Gabbana-Pour-Homme-2012-15336.html"),
    new Perfume(46, "Polo Ultra Blue", "Ralph Lauren", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Ultra-Blue-48111.html"),
    new Perfume(47, "Angel Men", "Thierry Mugler", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Mugler/A-Men-705.html"),
    new Perfume(48, "One Million", "Paco Rabanne", "Calido especiado", "Citrico", "https://www.fragrantica.es/perfume/Rabanne/1-Million-3747.html"),
    new Perfume(49, "Armani Diamonds", "Giorgio Armani", "Amaderado", "Citrico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Diamonds-for-Men-3793.html"),
    new Perfume(50, "Insense Ultramarine", "Givenchy", "Verde", "Aromatico", "https://www.fragrantica.es/perfume/Givenchy/Insense-Ultramarine-858.html"),
    new Perfume(51, "The One", "Dolce & Gabbana", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/The-One-for-Men-2056.html"),
    new Perfume(52, "Boss Bottled", "Hugo Boss", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Hugo-Boss/Boss-Bottled-383.html"),
    new Perfume(53, "Allure Blanche", "Chanel", "Citrico", "Avainillado", "https://www.fragrantica.es/perfume/Chanel/Allure-Homme-Edition-Blanche-2653.html", "sold"),
    new Perfume(54, "Bleu de Chanel Parfum", "Chanel", "Amaderado", "Citrico", "https://www.fragrantica.es/perfume/Chanel/Bleu-de-Chanel-Parfum-49912.html", "sold"),
    new Perfume(55, "Allure Sport", "Chanel", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Chanel/Allure-Homme-Sport-607.html"),
    new Perfume(56, "L'Homme", "Prada", "Atalcado", "Amaderado", "https://www.fragrantica.es/perfume/Prada/Prada-L-Homme-39029.html", "sold"),
    new Perfume(57, "Chrome", "Azzaro", "Aromatico", "Citrico", "https://www.fragrantica.es/perfume/Azzaro/Chrome-788.html"),
    new Perfume(58, "Dylan Blue", "Versace", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Versace/Versace-Pour-Homme-Dylan-Blue-40031.html"),
    new Perfume(59, "Xerius Rouge", "Givenchy", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Givenchy/Xeryus-Rouge-862.html"),
    new Perfume(60, "L'Eau D'Issey", "Issey Miyake", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Issey-Miyake/L-Eau-d-Issey-Pour-Homme-721.html"),
    new Perfume(61, "Sauvage", "Dior", "Fresco especiado", "Ambarado", "https://www.fragrantica.es/perfume/Dior/Sauvage-31861.html"),
    new Perfume(62, "Style In Play", "Lacoste", "Frutal", "Aromatico", "https://www.fragrantica.es/perfume/Lacoste-Fragrances/Style-in-Play-4192.html", "sold"),
    new Perfume(63, "212 VIP", "Carolina Herrera", "Ambarado", "Aromatico", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-Men-12865.html"),
    new Perfume(64, "CH", "Carolina Herrera", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Carolina-Herrera/CH-Men-6759.html"),
    new Perfume(65, "Club De Nuit Intense", "Armaf", "Frutal", "Citrico", "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html"),
    new Perfume(66, "Invictus", "Paco Rabanne", "Marino", "Citrico", "https://www.fragrantica.es/perfume/Rabanne/Invictus-18471.html"),
    new Perfume(67, "Invictus Victory Elixir", "Paco Rabanne", "Calido especiado", "Avainillado", "https://www.fragrantica.es/perfume/Rabanne/Invictus-Victory-Elixir-78575.html"),
    new Perfume(68, "Kouros", "Yves Saint Laurent", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Kouros-735.html"),
    new Perfume(69, "Dior Homme", "Dior", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Dior/Dior-Homme-13015.html"),
    new Perfume(70, "Bad Boy", "Carolina Herrera", "Calido especiado", "Aromatico", "https://www.fragrantica.es/perfume/Carolina-Herrera/Bad-Boy-55449.html"),
    new Perfume(71, "Y EDT", "Yves Saint Laurent", "Aromatico", "Citrico", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Y-Eau-de-Toilette-73440.html"),
    new Perfume(72, "Acqua Di Gio Profumo", "Giorgio Armani", "Marino", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gio-Profumo-29727.html"),
    new Perfume(73, "Hugo Red", "Hugo Boss", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Hugo-Boss/Hugo-Red-17157.html"),
    new Perfume(74, "Light Blue", "Dolce & Gabbana", "Marino", "Citrico", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Light-Blue-pour-Homme-1068.html"),
    new Perfume(75, "Ungaro III", "Emanuel Ungaro", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Emanuel-Ungaro/Ungaro-pour-L-Homme-III-1118.html", "sold"),
    new Perfume(76, "L12 12 Blanc", "Lacoste", "Aromatico", "Citrico", "https://www.fragrantica.es/perfume/Lacoste-Fragrances/Eau-de-Lacoste-L-12-12-White-11043.html"),
    new Perfume(77, "212 VIP Black", "Carolina Herrera", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-Black-46093.html"),
    new Perfume(78, "Terre D’Hermes", "Hermès", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Hermes/Terre-d-Hermes-17.html", "sold"),
    new Perfume(79, "Oscar de la Renta", "Oscar de la Renta", "Aromatico", "Floral", "https://www.fragrantica.es/perfume/Oscar-de-la-Renta/Oscar-de-la-Renta-Pour-Lui-4542.html"),
    new Perfume(80, "Luna Rossa Ocean", "Prada", "Fresco especiado", "Ambarado", "https://www.fragrantica.es/perfume/Prada/Luna-Rossa-Ocean-68753.html"),
    new Perfume(81, "Scandal Absolu", "Jean Paul Gaultier", "Ambarado", "Dulce", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Scandal-Pour-Homme-Absolu-91053.html"),
    new Perfume(82, "Phantom", "Paco Rabanne", "Citrico", "Avainillado", "https://www.fragrantica.es/perfume/Rabanne/Phantom-68226.html"),
    new Perfume(83, "Ralph’s Club", "Ralph Lauren", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Ralph-s-Club-68282.html"),
    new Perfume(84, "Britt", "Burberry", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Burberry/Burberry-Brit-for-Men-1115.html", "sold"),
    new Perfume(85, "212 Heroes", "Carolina Herrera", "Aromatico", "Frutal", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Heroes-65988.html"),
    new Perfume(86, "Polo Explorer", "Ralph Lauren", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Explorer-1955.html"),
    new Perfume(87, "L’Homme Le Parfum", "Yves Saint Laurent", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/L-Homme-Le-Parfum-59731.html"),
    new Perfume(88, "Black XS L’Exces", "Paco Rabanne", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Rabanne/Black-XS-L-Exces-for-Him-13805.html"),
    new Perfume(89, "Gucci Guilty", "Gucci", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Gucci/Guilty-Pour-Homme-11037.html"),
    new Perfume(90, "Ultra Male", "Jean Paul Gaultier", "Avainillado", "Frutal", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Ultra-Male-30947.html"),
    new Perfume(91, "Sauvage Elixir", "Dior", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Dior/Sauvage-Elixir-68415.html"),
    new Perfume(92, "Just Different", "Hugo Boss", "Aromatico", "Verde", "https://www.fragrantica.es/perfume/Hugo-Boss/Hugo-Just-Different-12311.html", "sold"),
    new Perfume(93, "Swiss Unlimited", "Victorinox Swiss Army", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Victorinox-Swiss-Army/Swiss-Unlimited-6676.html"),
    new Perfume(94, "One Million Elixir", "Paco Rabanne", "Avainillado", "Frutal", "https://www.fragrantica.es/perfume/Rabanne/1-Million-Elixir-71708.html"),
    new Perfume(95, "L’Homme", "Yves Saint Laurent", "Calido especiado", "Citrico", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/L-Homme-734.html", "sold"),
    new Perfume(96, "Invictus Platinum", "Paco Rabanne", "Aromatico", "Fresco especiado", "https://www.fragrantica.es/perfume/Rabanne/Invictus-Platinum-72557.html"),
    new Perfume(97, "Oud for Glory", "Lattafa", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Oud-for-Glory-64948.html"),
    new Perfume(98, "Hugo Energise", "Hugo Boss", "Aromatico", "Citrico", "https://www.fragrantica.es/perfume/Hugo-Boss/Hugo-Energise-569.html"),
    new Perfume(99, "Scandal EDT", "Jean Paul Gaultier", "Ambarado", "Dulce", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Scandal-Pour-Homme-68074.html"),
    new Perfume(100, "L’Eau Pour Homme", "Kenzo", "Citrico", "Aromatico", "https://www.fragrantica.es/perfume/Kenzo/L-Eau-par-Kenzo-pour-Homme-79.html"),
    new Perfume(101, "Armani Eau Pour Homme", "Giorgio Armani", "Citrico", "Aromatico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Eau-Pour-Homme-409.html"),
    new Perfume(102, "Sauvage Parfum", "Dior", "Fresco especiado", "Citrico", "https://www.fragrantica.es/perfume/Dior/Sauvage-Parfum-56324.html"),
    new Perfume(103, "Stronger With You Freeze", "Giorgio Armani", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Freeze-58808.html"),
    new Perfume(104, "La Nuit de l'Homme", "Yves Saint Laurent", "Aromatico", "Calido especiado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/La-Nuit-de-l-Homme-5521.html"),
    new Perfume(105, "Man In Black", "Bvlgari", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/La-Nuit-de-l-Homme-5521.html"),
    new Perfume(106, "Invictus Victory", "Paco Rabanne", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/Invictus-Victory-65177.html"),
    new Perfume(107, "Le Beau", "Jean Paul Gaultier", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Beau-55785.html"),
    new Perfume(108, "Acqua Di Gio Profondo", "Giorgio Armani", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gio-Profondo-59532.html"),
    new Perfume(109, "One Million Royal", "Paco Rabanne", "Aromatico", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/1-Million-Royal-79159.html"),
    new Perfume(110, "One Million Lucky", "Paco Rabanne", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/Rabanne/1-Million-Lucky-48903.html"),
    new Perfume(111, "Uomo Born In Roma", "Valentino", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Valentino/Valentino-Uomo-Born-in-Roma-55963.html", "sold"),
    new Perfume(112, "Spicebomb Extreme", "Viktor & Rolf", "Calido especiado", "Aromatico", "https://www.fragrantica.es/perfume/Viktor-Rolf/Spicebomb-Extreme-30499.html"),
    new Perfume(113, "Valentino Uomo", "Valentino", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Valentino/Valentino-Uomo-19558.html", "sold"),
    new Perfume(114, "Dior Homme Intense", "Dior", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Dior/Dior-Homme-Intense-2011-13016.html"),
    new Perfume(115, "Stronger With You Intensely", "Giorgio Armani", "Dulce", "Ambarado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Intensely-52802.html"),
    new Perfume(116, "Y EDP", "Yves Saint Laurent", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Y-Eau-de-Parfum-50757.html"),
    new Perfume(117, "Bvlgari Man", "Bvlgari", "Amaderado", "Ambarado", "https://www.fragrantica.es/perfume/Bvlgari/Bvlgari-Man-9403.html"),
    new Perfume(118, "Golden Secret", "Antonio Banderas", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Antonio-Banderas/The-Golden-Secret-13549.html"),
    new Perfume(119, "A*Men", "Thierry Mugler", "Dulce", "Aromatico", "https://www.fragrantica.es/perfume/Mugler/A-Men-705.html", "sold"),
    new Perfume(120, "Legend Spirit", "Montblanc", "Aromatico", "Amaderado", "https://www.fragrantica.es/perfume/Montblanc/Legend-Spirit-33443.html"),
    new Perfume(121, "Luna Rossa Black", "Prada", "Ambarado", "Aromatico", "https://www.fragrantica.es/perfume/Prada/Luna-Rossa-Black-48682.html", "sold"),
    new Perfume(122, "Montblanc Explorer", "Montblanc", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Montblanc/Explorer-52002.html", "sold"),
    new Perfume(123, "Invictus Intense", "Paco Rabanne", "Ambarado", "Aromatico", "https://www.fragrantica.es/perfume/Rabanne/Invictus-Intense-42891.html"),
    new Perfume(124, "Scandal Le Parfum", "Jean Paul Gaultier", "Ambarado", "Dulce", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Scandal-Pour-Homme-Le-Parfum-74915.html", "sold"),
    new Perfume(125, "Eros Flame", "Versace", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Versace/Eros-Flame-52180.html"),
    new Perfume(126, "Le Male Elixir", "Jean Paul Gaultier", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-81642.html",),
    new Perfume(127, "Stronger With You Absolutely", "Giorgio Armani", "Ambarado", "Dulce", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Absolutely-64501.html"),
    new Perfume(128, "Boss Bottled Elixir", "Hugo Boss", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Hugo-Boss/Boss-Bottled-Elixir-84074.html"),
    new Perfume(129, "L'Homme Idéal EDP", "Guerlain", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Guerlain/L-Homme-Ideal-Eau-de-Parfum-37735.html"),
    new Perfume(130, "Acqua Di Gio Parfum", "Giorgio Armani", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gio-Parfum-81508.html", "sold"),
    new Perfume(131, "Phantom Parfum", "Paco Rabanne", "Aromatico", "Avainillado", "https://www.fragrantica.es/perfume/Rabanne/Phantom-Parfum-81927.html", "sold"),
    new Perfume(132, "Luna Rossa Carbon", "Prada", "Fresco especiado", "Ambarado", "https://www.fragrantica.es/perfume/Prada/Luna-Rossa-Carbon-43402.html"),
    new Perfume(133, "Selection", "Hugo Boss", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Hugo-Boss/Boss-Selection-387.html"),
    new Perfume(134, "Born In Roma Coral Fantasy", "Valentino", "Frutal", "Aromatico", "https://www.fragrantica.es/perfume/Valentino/Valentino-Uomo-Born-In-Roma-Coral-Fantasy-71761.html"),
    new Perfume(135, "Le Beau Le Parfum", "Jean Paul Gaultier", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Beau-Le-Parfum-72158.html"),
    new Perfume(136, "Le Beau Paradise Garden", "Jean Paul Gaultier", "Verde", "Dulce", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Beau-Paradise-Garden-88836.html", "sold"),
    new Perfume(137, "Y EDP Intense", "Yves Saint Laurent", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Y-Eau-de-Parfum-Intense-79243.html"),
    new Perfume(138, "Myslf", "Yves Saint Laurent", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/MYSLF-Eau-de-Parfum-84094.html", "sold"),
    new Perfume(139, "Invictus Parfum", "Paco Rabanne", "Marino", "Aromatico", "https://www.fragrantica.es/perfume/Rabanne/Invictus-Parfum-90433.html"),
    new Perfume(140, "Polo 67", "Ralph Lauren", "Frutal", "Citrico", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-67-90347.html"),
    new Perfume(141, "Million Gold", "Paco Rabanne", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/Million-Gold-95641.html"),
    new Perfume(142, "Le Male Le Parfum", "Jean Paul Gaultier", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Male-Le-Parfum-61856.html"),
    new Perfume(143, "Play", "Givenchy", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Givenchy/Givenchy-Play-Eau-de-Toilette-3906.html"),
    new Perfume(144, "Light Blue Italian Love", "Dolce & Gabbana", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Light-Blue-pour-Homme-Italian-Love-72622.html"),
    new Perfume(145, "Gentleman Reserve Privée", "Givenchy", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Givenchy/Gentleman-Eau-de-Parfum-Reserve-Privee-71272.html"),
    new Perfume(146, "Boss The Scent", "Hugo Boss", "Citrico", "Calido especiado", "https://www.fragrantica.es/perfume/Hugo-Boss/Boss-The-Scent-31445.html"),
    new Perfume(147, "Polo Black", "Ralph Lauren", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Ralph-Lauren/Polo-Black-1197.html"),
    new Perfume(148, "Halloween Man", "Halloween", "Calido especiado", "Citrico", "https://www.fragrantica.es/perfume/Halloween/Halloween-Man-15148.html"),
    new Perfume(149, "Toy Boy", "Moschino", "Floral", "Fresco especiado", "https://www.fragrantica.es/perfume/Moschino/Toy-Boy-55858.html"),
    new Perfume(150, "Armani Code Parfum", "Giorgio Armani", "Amaderado", "Aromatico", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Code-Parfum-75126.html"),
    new Perfume(151, "Wanted", "Azzaro", "Aromatico", "Calido especiado", "https://www.fragrantica.es/perfume/Azzaro/Wanted-38686.html"),
    new Perfume(152, "Asad Bourbon", "Lattafa" ,"Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Bourbon-101124.html"),
    new Perfume(153, "Born In Roma Intense", "Valentino", "Avainillado", "Aromático","https://www.fragrantica.es/perfume/Valentino/Valentino-Uomo-Born-In-Roma-Intense-78740.html"),
    new Perfume(154, "Animale for Men", "Animale", "Citrico", "Aromático","https://www.fragrantica.es/perfume/Animale/Animale-for-Men-5922.html"),
    new Perfume(155, "Versace Pour Homme", "Versace", "Citrico", "Aromático","https://www.fragrantica.es/perfume/Versace/Versace-Pour-Homme-2318.html"),
    new Perfume(156, "Honor & Glory", "Lattafa", "Dulce", "Frutal","https://www.fragrantica.es/perfume/Lattafa-Perfumes/Bade-e-Al-Oud-Honor-Glory-84302.html"),
    new Perfume(157, "Le Male Elixir Absolu", "Jean Paul Gaultier", "Dulce", "Calido especiado","https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Le-Male-Elixir-Absolu-101529.html"),
    new Perfume(158, "Stronger With You Parfum", "Giorgio Armani", "Avainillado", "Aromatico","https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Stronger-With-You-Parfum-100895.html"),
    new Perfume(159, "Impact", "Tommy Hilfiger", "Amaderado", "Citrico","https://www.fragrantica.es/perfume/Tommy-Hilfiger/Impact-59835.html"),
    new Perfume(160, "Eros Energy", "Versace", "Citrico", "Citrico","https://www.fragrantica.es/perfume/Versace/Eros-Energy-92647.html"),
    new Perfume(161, "The Most Wanted EDP Intense", "Azzaro", "Calido especiado", "Dulce","https://www.fragrantica.es/perfume/Azzaro/The-Most-Wanted-66826.html"),
    new Perfume(162, "L'Homme Intense", "Prada", "Floral", "Ambarado", "https://www.fragrantica.es/perfume/Prada/Prada-L-Homme-Intense-45396.html"),
    new Perfume(163, "Wanted by Night", "Azzaro", "Calido especiado", "Frutal", "https://www.fragrantica.es/perfume/Azzaro/Wanted-by-Night-49144.html",),
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

        // Si el perfume está agotado, aplicar clase "sold"
        if (perfume.dispo === 'sold') {
            tr.classList.add('sold')
        }

        // Redireccion a la página de detalles del perfume
        tr.addEventListener('click', () => {
                window.location.href = perfume.url;
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