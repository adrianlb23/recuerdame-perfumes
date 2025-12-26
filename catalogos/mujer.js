// Clase Perfume
class Perfume {
    constructor(numero, nombre, marca, tipo, tipo2, url, dispo) {
        this.numero = numero;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.tipo2 = tipo2;
        this.url = url;
        this.dispo = dispo;
    }
}

const perfumes =[
    new Perfume(1, "Calandre", "Rabanne", "Verde", "Floral", "https://www.fragrantica.es/perfume/Rabanne/Calandre-522.html"),
    new Perfume(2, "Cry Baby Perfume Milk", "Melanie Martinez", "Afrutado", "Dulce", "https://www.fragrantica.es/perfume/Melanie-Martinez/Cry-Baby-Perfume-Milk-41799.html"),
    new Perfume(3, "Chanel No. 5", "Chanel", "Citrico", "Atalcado", "https://www.fragrantica.es/perfume/Chanel/Chanel-No-5-L-Eau-38543.html"),
    new Perfume(4, "Poison", "Dior", "Frutal", "Calido especiado", "https://www.fragrantica.es/perfume/Dior/Poison-218.html",),
    new Perfume(5, "Tresor", "Lancome", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Lancome/Tresor-172.html"),
    new Perfume(6, "Poeme", "Lancome", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Lancome/Tresor-172.html"),
    new Perfume(7, "Paloma Picasso", "Paloma Picasso", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Paloma-Picasso/Paloma-Picasso-1009.html"),
    new Perfume(8, "L’Eau D’Issey", "Issey Miyake", "Floral", "Fresco especiado", "https://www.fragrantica.es/perfume/Issey-Miyake/L-eau-d-Issey-720.html"),
    new Perfume(9, "Carolina Herrera", "Carolina Herrera", "Floral", "Fresco especiado", "https://www.fragrantica.es/perfume/Carolina-Herrera/Carolina-Herrera-by-Carolina-Herrera-286.html"),
    new Perfume(10, "Big Pony 2", "Ralph Lauren", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Big-Pony-2-for-Women-14446.html"),
    new Perfume(11, "Acqua Di Gioia", "Giorgio Armani", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Giorgio-Armani/Acqua-di-Gioia-8442.html"),
    new Perfume(12, "Organza", "Givenchy", "Floral blanco", "Ambarado", "https://www.fragrantica.es/perfume/Givenchy/Organza-4.html"),
    new Perfume(13, "212", "Carolina Herrera", "Floral blanco", "Citrico", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-296.html"),
    new Perfume(14, "Noa", "Cacharel", "Floral", "Amaderado", "https://www.fragrantica.es/perfume/Cacharel/Noa-242.html"),
    new Perfume(15, "Eternity", "Calvin Klein", "Floral", "Verde", "https://www.fragrantica.es/perfume/Calvin-Klein/Eternity-257.html", "sold"),
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
    new Perfume(37, "Ultraviolet", "Rabanne", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Rabanne/Ultraviolet-519.html"),
    new Perfume(38, "212 VIP Rosé", "Carolina Herrera", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-Rose-22857.html"),
    new Perfume(39, "Elixir des Merveilles", "Hermès", "Ambarado", "Calido especiado", "https://www.fragrantica.es/perfume/Hermes/Elixir-des-Merveilles-3168.html"),
    new Perfume(40, "DKNY Women", "Donna Karan", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Donna-Karan/DKNY-Women-504.html"),
    new Perfume(41, "Si", "Giorgio Armani", "Amaderado", "Frutal", "https://www.fragrantica.es/perfume/Giorgio-Armani/Si-18453.html"),
    new Perfume(42, "Halloween", "Jesús del Pozo", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Halloween/Halloween-1444.html"),
    new Perfume(43, "Amor Amor", "Cacharel", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Cacharel/Amor-Amor-238.html"),
    new Perfume(44, "Honey", "Marc Jacobs", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Marc-Jacobs/Honey-18272.html"),
    new Perfume(45, "Flower", "Kenzo", "Atalcado", "Floral", "https://www.fragrantica.es/perfume/Kenzo/Flower-by-Kenzo-72.html"),
    new Perfume(46, "212 Sexy", "Carolina Herrera", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-Sexy-306.html"),
    new Perfume(47, "Light Blue", "Dolce & Gabbana", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Light-Blue-485.html"),
    new Perfume(48, "Euphoria", "Calvin Klein", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Calvin-Klein/Euphoria-253.html"),
    new Perfume(49, "Fantasy", "Britney Spears", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Britney-Spears/Fantasy-600.html"),
    new Perfume(50, "Curious", "Britney Spears", "Floral", "Dulce", "https://www.fragrantica.es/perfume/Britney-Spears/Curious-141.html"),
    new Perfume(51, "CH Woman", "Carolina Herrera", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Carolina-Herrera/CH-2015-31507.html"),
    new Perfume(52, "Olympéa", "Rabanne", "Avainillado", "Ambarado", "https://www.fragrantica.es/perfume/Rabanne/Olympea-31666.html"),
    new Perfume(53, "Eros", "Versace", "Citrico", "Calido especiado", "https://www.fragrantica.es/perfume/Versace/Eros-Pour-Femme-28958.html"),
    new Perfume(54, "My Way", "Giorgio Armani", "Floral blanco", "Citrico", "https://www.fragrantica.es/perfume/Giorgio-Armani/My-Way-62036.html"),
    new Perfume(55, "Midnight Fantasy", "Britney Spears", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Britney-Spears/Midnight-Fantasy-802.html"),
    new Perfume(56, "La Nuit Trésor", "Lancome", "Calido especiado", "Dulce", "https://www.fragrantica.es/perfume/Lancome/La-Nuit-Tresor-Le-Parfum-89120.html"),
    new Perfume(57, "Black XS", "Rabanne", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Rabanne/Black-XS-for-Her-1138.html"),
    new Perfume(58, "Because It’s You", "Giorgio Armani", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Giorgio-Armani/Emporio-Armani-Because-It-s-You-45257.html"),
    new Perfume(59, "Can Can", "Paris Hilton", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Paris-Hilton/Can-Can-1202.html"),
    new Perfume(60, "Lady Million", "Rabanne", "Floral blanco", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Lady-Million-9045.html"),
    new Perfume(61, "Good Girl", "Carolina Herrera", "Dulce", "Amaderado", "https://www.fragrantica.es/perfume/Carolina-Herrera/Good-Girl-39681.html"),
    new Perfume(62, "212 VIP", "Carolina Herrera", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Carolina-Herrera/212-VIP-10126.html"),
    new Perfume(63, "Tresor Midnight Rose", "Lancome", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Lancome/Tresor-Midnight-Rose-11721.html"),
    new Perfume(64, "Eilish", "Billie Eilish", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Billie-Eilish/Eilish-70052.html"),
    new Perfume(65, "Yes I Am", "Cacharel", "Dulce", "Calido especiado", "https://www.fragrantica.es/perfume/Cacharel/Yes-I-Am-48112.html"),
    new Perfume(66, "Coco Mademoiselle", "Chanel", "Citrico", "Amaderado", "https://www.fragrantica.es/perfume/Chanel/Coco-Mademoiselle-611.html"),
    new Perfume(67, "Ralph Hot", "Ralph Lauren", "Avainillado", "Calido especiado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Ralph-Hot-1898.html"),
    new Perfume(68, "My Way Nectar", "Giorgio Armani", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Giorgio-Armani/My-Way-Nectar-88938.html"),
    new Perfume(69, "Scandal", "Jean Paul Gaultier", "Dulce", "Ambarado", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/Scandal-45651.html"),
    new Perfume(70, "Cheap & Chic I Love Love", "Moschino", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Moschino/Cheap-Chic-I-Love-Love-728.html"),
    new Perfume(71, "Irresistible", "Givenchy", "Floral", "Frutal", "https://www.fragrantica.es/perfume/Givenchy/Irresistible-Givenchy-60891.html"),
    new Perfume(72, "Lolita Lempicka", "Lolita Lempicka", "Dulce", "Fresco especiado", "https://www.fragrantica.es/perfume/Lolita-Lempicka/Lolita-Lempicka-456.html"),
    new Perfume(73, "Kenzo Amour", "Kenzo", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Kenzo/Kenzo-Amour-664.html"),
    new Perfume(74, "DKNY Be Delicious", "Donna Karan", "Frutal", "Citrico", "https://www.fragrantica.es/perfume/Donna-Karan/DKNY-Be-Delicious-498.html"),
    new Perfume(75, "Armani Code", "Giorgio Armani", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Giorgio-Armani/Armani-Code-for-Women-413.html"),
    new Perfume(76, "Hypnose", "Lancome", "Avainillado", "Floral", "https://www.fragrantica.es/perfume/Lancome/Hypnose-170.html"),
    new Perfume(77, "La Vie Est Belle", "Lancome", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Lancome/La-Vie-Est-Belle-14982.html"),
    new Perfume(78, "Pure XS", "Rabanne", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Rabanne/Pure-XS-For-Her-51424.html",),
    new Perfume(79, "Chance", "Chanel", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Chanel/Chance-Eau-Tendre-8069.html"),
    new Perfume(80, "Nina", "Nina Ricci", "Citrico", "Dulce", "https://www.fragrantica.es/perfume/Nina-Ricci/Nina-147.html"),
    new Perfume(81, "Narciso Rodríguez for Her", "Narciso Rodríguez", "Citrico", "Floral", "https://www.fragrantica.es/perfume/Narciso-Rodriguez/Narciso-Rodriguez-For-Her-209.html",),
    new Perfume(82, "RiRi", "Rihanna", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Rihanna/RiRi-31629.html", "sold"),
    new Perfume(83, "Cloud", "Ariana Grande", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Ariana-Grande/Cloud-50384.html"),
    new Perfume(84, "Devotion", "Dolce & Gabbana", "Amaderado", "Avainillado", "https://www.fragrantica.es/perfume/Dolce-Gabbana/Devotion-84951.html"),
    new Perfume(85, "Fame", "Rabanne", "Avainillado", "Frutal", "https://www.fragrantica.es/perfume/Rabanne/Fame-74962.html"),
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
    new Perfume(103, "Donna Born In Roma", "Valentino", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Valentino/Valentino-Donna-Born-In-Roma-55805.html",),
    new Perfume(104, "Her Elixir de Parfum", "Burberry", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Burberry/Burberry-Her-Elixir-de-Parfum-75968.html"),
    new Perfume(105, "Mod Vanilla", "Ariana Grande", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Ariana-Grande/Mod-Vanilla-77799.html"),
    new Perfume(106, "La Belle Le Parfum", "Jean Paul Gaultier", "Dulce", "Ambarado", "https://www.fragrantica.es/perfume/Jean-Paul-Gaultier/La-Belle-Le-Parfum-65175.html"),
    new Perfume(107, "Crush Cheirosa 62'", "Sol de Janeiro", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Sol-de-Janeiro/Cheirosa-62-56062.html"),
    new Perfume(108, "Noble Blush", "Lattaffa", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Noble-Blush-98937.html"),
    new Perfume(109, "Cloud Pink", "Ariana Grande", "Dulce", "Frutal", "https://www.fragrantica.es/perfume/Ariana-Grande/Cloud-Pink-83995.html"),
    new Perfume(110, "Toy 2 Pearl", "Moschino", "Citrico", "Fresco especiado", "https://www.fragrantica.es/perfume/Moschino/Toy-2-Pearl-84718.html"),
    new Perfume(111, "Angel Nova", "Mugler", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Mugler/Angel-Nova-61519.html"),
    new Perfume(112, "Million Gold", "Rabanne", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Rabanne/Million-Gold-For-Her-95640.html"),
    new Perfume(113, "Green Stravaganza", "Valentino", "Floral blanco", "Avainillado", "https://www.fragrantica.es/perfume/Valentino/Valentino-Donna-Born-in-Roma-Green-Stravaganza-88988.html", "sold"),
    new Perfume(114, "Very Good Girl", "Carolina Herrera", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Carolina-Herrera/Very-Good-Girl-65560.html", "sold"),
    new Perfume(115, "La Vie est Belle L'Elixir", "Lancome", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Lancome/La-Vie-est-Belle-L-Elixir-95856.html"),
    new Perfume(116, "Aura", "Mugler", "Verde", "Amaderado", "https://www.fragrantica.es/perfume/Mugler/Aura-Mugler-45639.html"),
    new Perfume(117, "Gloria", "Cacharel", "Frutal", "Avainillado", "https://www.fragrantica.es/perfume/Cacharel/Gloria-246.html"),
    new Perfume(118, "Romance", "Raplh Lauren", "Floral", "Calido especiado", "https://www.fragrantica.es/perfume/Ralph-Lauren/Romance-825.html"),
    new Perfume(119, "Libre Intense", "Yves Saint Laurent", "Avainillado", "Floral blanco", "https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Libre-Intense-62318.html",),
    new Perfume(120, "Miss Dior Parfum", "Dior", "Frutal", "Amaderado", "https://www.fragrantica.es/perfume/Dior/Miss-Dior-Parfum-2024-89584.html"),
    new Perfume(121, "La Vie est Belle Soleil Cristal", "Lancome", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Lancome/La-Vie-Est-Belle-Soleil-Cristal-65156.html"),
    new Perfume(122, "Her", "Burberry", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Burberry/Burberry-Her-51694.html"),
    new Perfume(123, "Sweet Tooth", "Sabrina Carpenter", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Sabrina-Carpenter/Sweet-Tooth-76824.html"),
    new Perfume(124, "Crush Cheirosa 59'", "Sol de Janeiro", "Atalcado", "Dulce", "https://www.fragrantica.es/perfume/Sol-de-Janeiro/Cheirosa-59-88722.html"),
    new Perfume(125, "Crush Cheirosa 68'", "Sol de Janeiro", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Sol-de-Janeiro/Cheirosa-68-73990.html"),
    new Perfume(126, "Sweet Tooth Cherry Baby", "Sabrina Carpentes", "Frutal", "Dulce", "https://www.fragrantica.es/perfume/Sabrina-Carpenter/Sweet-Tooth-Cherry-Baby-95861.html"),
    new Perfume(127, "Crush Cheirosa 71'", "Sol de Janeiro", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Sol-de-Janeiro/Cheirosa-71-63079.html"),
    new Perfume(128, "Vanilla Suede", "Ariana Grande", "Avainillado", "Atalcado", "https://www.fragrantica.es/perfume/Ariana-Grande/Vanilla-Suede-96257.html"),
    new Perfume(129, "Khamra", "Lattafa", "Calido especiado", "Dulce", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-75805.html"),
    new Perfume(130, "Bright Crystal", "Versace", "Floral", "Citrico", "https://www.fragrantica.es/perfume/Versace/Bright-Crystal-632.html"),
    new Perfume(131, "Sweet Tooth Me Expresso", "Sabrina Carpenter", "Avainillado", "Dulce", "https://www.fragrantica.es/perfume/Sabrina-Carpenter/Sweet-Tooth-Me-Espresso-100729.html"),
    new Perfume(132, "Yara Moi", "Lattafa", "Amaderado", "Floral blanco", "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-Moi-80722.html"),
    new Perfume(133, "Chance EDT", "Chanel", "Amaderado", "Citrico", "https://www.fragrantica.es/perfume/Chanel/Chance-Eau-de-Toilette-610.html"),
    new Perfume(134, "Woman", "Ralph Lauren", "Floral blanco", "Frutal", "https://www.fragrantica.es/perfume/Ralph-Lauren/Woman-by-Ralph-Lauren-45741.html"),
    new Perfume(135, "Crystal Noir Parfum", "Versace", "Amaderado", "Calido especiado", "https://www.fragrantica.es/perfume/Versace/Crystal-Noir-Parfum-92276.html"),
    new Perfume(136, "La Bomba", "Carolina Herrera", "Frutal", "Floral", "https://www.fragrantica.es/perfume/Carolina-Herrera/La-Bomba-105931.html"),
    new Perfume(137, "Flowerbomb", "Viktor & Rolf", "Floral blanco", "Floral", "https://www.fragrantica.es/perfume/Viktor-Rolf/Flowerbomb-1460.html"),
    new Perfume(138, "Dylan Purple", "Versace", "Afrutado", "Floral", "https://www.fragrantica.es/perfume/Versace/Versace-Pour-Femme-Dylan-Purple-76274.html"),
    new Perfume(139, "Sweet Tooth Caramel Dream", "Sabrina Carpenter", "Dulce", "Avainillado", "https://www.fragrantica.es/perfume/Sabrina-Carpenter/Sweet-Tooth-Caramel-Dream-84095.html"),
    new Perfume(140, "Miss Dior EDP (2021)", "Dior", "Atalcado", "Avainillado", "https://www.fragrantica.es/perfume/Dior/Miss-Dior-Eau-de-Parfum-2021-68905.html"),
    new Perfume(141, "R.E.M.", "Ariana Grande", "Dulce", "Atalcado", "https://www.fragrantica.es/perfume/Dior/Miss-Dior-Eau-de-Parfum-2021-68905.html"),
    new Perfume(142, "Miss Dior EDP (2021)", "Dior", "Atalcado", "Avainillado", "https://www.fragrantica.es/perfume/Ariana-Grande/R-E-M-62578.html"),
    new Perfume(143, "Coral Fantasy", "Valentino", "Frutal", "Citrico", "https://www.fragrantica.es/perfume/Valentino/Valentino-Donna-Born-In-Roma-Coral-Fantasy-71760.html"),
]


document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfumes();

    // Filtros por tipo de aroma
    const radios = document.querySelectorAll('input[name="aroma"]');
    radios.forEach(radio => {
        radio.addEventListener('change', actualizarPerfumes);
    });

    // Filtro por búsqueda de texto
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', actualizarPerfumes);
    }

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', actualizarPerfumes);
    }

    // Toggle de filtros para móviles
    const filterToggle = document.getElementById('filter-toggle');
    const filterOptions = document.getElementById('filter-options');

    if (filterToggle && filterOptions) {
        filterToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            filterOptions.classList.toggle('active');
            this.classList.toggle('active');
        });

        document.addEventListener('click', function () {
            filterOptions.classList.remove('active');
            filterToggle.classList.remove('active');
        });

        filterOptions.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
});

function actualizarPerfumes() {
    const tipoSeleccionado = document.querySelector('input[name="aroma"]:checked');
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";

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

        if (perfume.dispo === 'sold') {
            card.classList.add('sold');
        }

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

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const perfumeHouse = document.createElement('p');
        perfumeHouse.className = 'perfume-house';
        perfumeHouse.textContent = perfume.marca;
        cardBody.appendChild(perfumeHouse);

        const perfumeNotes = document.createElement('div');
        perfumeNotes.className = 'perfume-notes';

        if (perfume.tipo) {
            const noteTag1 = document.createElement('span');
            noteTag1.className = 'note-tag';
            noteTag1.textContent = perfume.tipo;
            perfumeNotes.appendChild(noteTag1);
        }

        if (perfume.tipo2) {
            const noteTag2 = document.createElement('span');
            noteTag2.className = 'note-tag';
            noteTag2.textContent = perfume.tipo2;
            perfumeNotes.appendChild(noteTag2);
        }

        cardBody.appendChild(perfumeNotes);
        card.appendChild(cardBody);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';

        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'details-btn';
        detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i> Ver detalles';

        detailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (perfume.url) {
                window.open(perfume.url, '_blank');
            }
        });

        cardFooter.appendChild(detailsBtn);
        card.appendChild(cardFooter);

        card.addEventListener('click', () => {
            if (perfume.url) {
                window.open(perfume.url, '_blank');
            }
        });

        perfumeGrid.appendChild(card);
    });
}

function deseleccionarRadios() {
    const radios = document.querySelectorAll('input[name="aroma"]');
    radios.forEach(radio => radio.checked = false);
    actualizarPerfumes();
}
