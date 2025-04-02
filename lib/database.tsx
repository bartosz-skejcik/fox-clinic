import { Facebook, Instagram, Phone } from "lucide-react";

export const navigationLinks = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "Zabiegi", href: "/zabiegi" },
  { label: "Cennik", href: "/cennik" },
  { label: "Voucher", href: "/voucher" },
  { label: "Opinie", href: "/opinie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const contact = {
  icon: <Phone className="h-4 w-4 text-[#274e13] mr-2" />,
  phone: "733 011 833",
  url: "tel:733011833",
  booksy:
    "https://booksy.com/pl-pl/117583_fox-clinic_medycyna-estetyczna_4353_piaseczno#ba_s=seo",
};

export const socials = [
  {
    name: "facebook",
    url: "https://facebook.com",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: <Instagram className="h-5 w-5" />,
  },
];

export const testimonials = [
  {
    rating: 5,
    name: "Anna Kowalska",
    avatar: "/placeholder.svg?height=100&width=100",
    description: `
        Jestem mega zadowolona z rezultatów. Korzystałam z zabiegów
        na urządzeniu, Focus. Już po jednym zabiegu zarysowała się talia,
        którą straciłam jakiś czas temu!! Taki sam zabieg miałam również
        na uda, z podobnym efektem. Bardzo polecam to miejsce, jest
        komfortowo, a Panie profesjonalne i bardzo miłe
    `,
  },
  {
    rating: 5,
    name: "Ola Nowak",
    avatar: "/placeholder.svg?height=100&width=100",
    description: `
        Bardzo profesjonalne podejście do klienta, przemiła
        atmosfera i rewelacyjne efekty zabiegów na ciało! A wszystko to w
        otoczeniu wysokiej jakości produktów. Polecam serdecznie!
    `,
  },
  {
    rating: 5,
    name: "Alek Janowski",
    avatar: "/placeholder.svg?height=100&width=100",
    description: `
        Chciałbym podzielić się swoją bardzo pozytywną opinią na
        temat zabiegu oczyszczania twarzy u Pani Ivony w Fox Clinic.
        Zabieg ten był absolutnie fantastyczny i przyniósł mi wiele
        korzyści. Pani Ivona była nie tylko profesjonalna, ale także
        niezwykle uprzejma i troskliwa. Jej umiejętności i wiedza w
        dziedzinie oczyszczania twarzy były imponujące.
`,
  },
];

// Kategorie zabiegów
export const treatmentCategories = [
  {
    id: "kosmetologia",
    name: "Kosmetologia",
    description: "Zabiegi kosmetologiczne poprawiające kondycję skóry.",
  },
  {
    id: "medycyna-estetyczna",
    name: "Medycyna Estetyczna",
    description: "Zaawansowane zabiegi z zakresu medycyny estetycznej.",
  },
  {
    id: "zabiegi-na-cialo",
    name: "Zabiegi na Ciało",
    description:
      "Zabiegi modelujące sylwetkę i poprawiające kondycję skóry ciała.",
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Zajęcia pilates dla poprawy kondycji i sylwetki.",
  },
];

// Zabiegi
export const treatments = [
  // Kosmetologia
  {
    id: 1,
    categoryId: "kosmetologia",
    name: "Konsultacja kosmetologiczna/ medycyna estetyczna",
    slug: "konsultacja-kosmetologiczna",
    shortDescription:
      "Profesjonalna konsultacja z zakresu kosmetologii i medycyny estetycznej",
    description:
      "Profesjonalna konsultacja z zakresu kosmetologii i medycyny estetycznej, podczas której specjalista oceni stan skóry i dobierze odpowiednie zabiegi.",
    duration: "60 minut",
    price: "150 zł",
    effects: [
      "Profesjonalna ocena stanu skóry",
      "Indywidualny dobór zabiegów",
      "Plan pielęgnacji domowej",
    ],
  },
  {
    id: 2,
    categoryId: "kosmetologia",
    name: "Oczyszczanie twarzy ultradźwiękami",
    slug: "oczyszczanie-twarzy-ultradzwiekami",
    shortDescription: "Głębokie oczyszczanie skóry za pomocą ultradźwięków",
    description:
      "Zabieg oczyszczania twarzy ultradźwiękami to nieinwazyjna metoda głębokiego oczyszczania skóry. Ultradźwięki delikatnie usuwają zanieczyszczenia, martwy naskórek i nadmiar sebum, nie powodując podrażnień.",
    duration: "80 minut",
    price: "290 zł",
    effects: [
      "Głębokie oczyszczenie skóry",
      "Redukcja zaskórników",
      "Poprawa kolorytu skóry",
      "Wygładzenie i rozjaśnienie cery",
    ],
  },
  {
    id: 3,
    categoryId: "kosmetologia",
    name: "Oczyszczanie manualne/lecznicze z peelingiem",
    slug: "oczyszczanie-manualne-lecznicze",
    shortDescription: "Dogłębne oczyszczanie skóry metodą manualną",
    description:
      "Zabieg oczyszczania manualnego to klasyczna metoda dogłębnego oczyszczania skóry. Zabieg obejmuje demakijaż, peeling, rozmiękczanie skóry, manualne oczyszczanie oraz maskę łagodzącą.",
    duration: "120 minut",
    price: "390 zł",
    effects: [
      "Dogłębne oczyszczenie skóry",
      "Usunięcie zaskórników i wyprysków",
      "Złuszczenie martwego naskórka",
      "Poprawa kolorytu i tekstury skóry",
    ],
  },
  {
    id: 4,
    categoryId: "kosmetologia",
    name: "Oczyszczanie wodorowe twarz",
    slug: "oczyszczanie-wodorowe",
    shortDescription: "Innowacyjna metoda oczyszczania skóry wodorem",
    description:
      "Oczyszczanie wodorowe to innowacyjna metoda oczyszczania skóry, która wykorzystuje wodór do neutralizacji wolnych rodników i głębokiego oczyszczenia porów.",
    duration: "60 minut",
    price: "290 zł",
    effects: [
      "Głębokie oczyszczenie skóry",
      "Neutralizacja wolnych rodników",
      "Nawilżenie i odżywienie skóry",
      "Rozjaśnienie przebarwień",
    ],
  },
  {
    id: 5,
    categoryId: "kosmetologia",
    name: "PRX-T33 twarz",
    slug: "prx-t33-twarz",
    shortDescription: "Biorewitalizacja skóry bez nakłuć",
    description:
      "PRX-T33 to innowacyjny zabieg biorewitalizacji skóry bez nakłuć. Preparat zawiera kwas trójchlorooctowy, nadtlenek wodoru i kojowy, które stymulują odnowę skóry bez uszkadzania naskórka.",
    duration: "30 minut",
    price: "300 zł",
    effects: [
      "Stymulacja produkcji kolagenu i elastyny",
      "Poprawa jędrności i elastyczności skóry",
      "Redukcja drobnych zmarszczek",
      "Rozjaśnienie przebarwień",
    ],
  },
  {
    id: 6,
    categoryId: "kosmetologia",
    name: "PRX-T33 twarz, szyja, dekolt",
    slug: "prx-t33-twarz-szyja-dekolt",
    shortDescription: "Biorewitalizacja skóry twarzy, szyi i dekoltu",
    description:
      "PRX-T33 to innowacyjny zabieg biorewitalizacji skóry bez nakłuć. Zabieg obejmuje twarz, szyję i dekolt, zapewniając kompleksową odnowę skóry.",
    duration: "50 minut",
    price: "400 zł",
    effects: [
      "Stymulacja produkcji kolagenu i elastyny",
      "Poprawa jędrności i elastyczności skóry",
      "Redukcja drobnych zmarszczek",
      "Rozjaśnienie przebarwień",
    ],
  },
  {
    id: 7,
    categoryId: "kosmetologia",
    name: "Kwas medyczny",
    slug: "kwas-medyczny",
    shortDescription: "Intensywny peeling chemiczny",
    description:
      "Zabieg z użyciem kwasu medycznego to intensywny peeling chemiczny, który złuszcza martwy naskórek, stymuluje odnowę komórkową i poprawia wygląd skóry.",
    duration: "60 minut",
    price: "550 zł",
    effects: [
      "Złuszczenie martwego naskórka",
      "Stymulacja odnowy komórkowej",
      "Redukcja przebarwień i blizn",
      "Poprawa tekstury i kolorytu skóry",
    ],
  },
  {
    id: 8,
    categoryId: "kosmetologia",
    name: "Focus RF Talus twarz, szyja, dekolt",
    slug: "focus-rf-talus-twarz",
    shortDescription: "Lifting skóry za pomocą fal radiowych",
    description:
      "Focus RF Talus to zabieg wykorzystujący fale radiowe do liftingu i ujędrniania skóry. Zabieg stymuluje produkcję kolagenu i elastyny, poprawiając jędrność i elastyczność skóry.",
    duration: "90 minut",
    price: "490 zł",
    effects: [
      "Lifting i ujędrnienie skóry",
      "Stymulacja produkcji kolagenu i elastyny",
      "Redukcja drobnych zmarszczek",
      "Poprawa owalu twarzy",
    ],
  },
  {
    id: 9,
    categoryId: "kosmetologia",
    name: "HIFU twarz",
    slug: "hifu-twarz",
    shortDescription: "Niechirurgiczny lifting twarzy",
    description:
      "HIFU (High Intensity Focused Ultrasound) to niechirurgiczny lifting twarzy, który wykorzystuje skoncentrowane ultradźwięki do stymulacji głębokich warstw skóry.",
    duration: "60 minut",
    price: "800 zł",
    effects: [
      "Lifting i ujędrnienie skóry",
      "Stymulacja produkcji kolagenu",
      "Redukcja zmarszczek",
      "Poprawa owalu twarzy",
    ],
  },
  {
    id: 10,
    categoryId: "kosmetologia",
    name: "HIFU twarz, szyja, dekolt",
    slug: "hifu-twarz-szyja-dekolt",
    shortDescription: "Niechirurgiczny lifting twarzy, szyi i dekoltu",
    description:
      "HIFU (High Intensity Focused Ultrasound) to niechirurgiczny lifting, który wykorzystuje skoncentrowane ultradźwięki do stymulacji głębokich warstw skóry. Zabieg obejmuje twarz, szyję i dekolt.",
    duration: "90 minut",
    price: "1100 zł",
    effects: [
      "Lifting i ujędrnienie skóry",
      "Stymulacja produkcji kolagenu",
      "Redukcja zmarszczek",
      "Poprawa owalu twarzy",
    ],
  },
  {
    id: 11,
    categoryId: "kosmetologia",
    name: "Derma Pen twarz",
    slug: "derma-pen-twarz",
    shortDescription: "Mikronakłuwanie skóry twarzy",
    description:
      "Derma Pen to zabieg mikronakłuwania skóry, który stymuluje naturalną regenerację i produkcję kolagenu. Zabieg poprawia teksturę skóry, redukuje blizny, zmarszczki i przebarwienia.",
    duration: "60 minut",
    price: "550 zł",
    effects: [
      "Stymulacja produkcji kolagenu",
      "Poprawa tekstury skóry",
      "Redukcja blizn i przebarwień",
      "Odmłodzenie skóry",
    ],
  },
  {
    id: 12,
    categoryId: "kosmetologia",
    name: "Derma Pen twarz, szyja, dekolt",
    slug: "derma-pen-twarz-szyja-dekolt",
    shortDescription: "Mikronakłuwanie skóry twarzy, szyi i dekoltu",
    description:
      "Derma Pen to zabieg mikronakłuwania skóry, który stymuluje naturalną regenerację i produkcję kolagenu. Zabieg obejmuje twarz, szyję i dekolt.",
    duration: "90 minut",
    price: "750 zł",
    effects: [
      "Stymulacja produkcji kolagenu",
      "Poprawa tekstury skóry",
      "Redukcja blizn i przebarwień",
      "Odmłodzenie skóry",
    ],
  },
  {
    id: 13,
    categoryId: "kosmetologia",
    name: "Mikrodermabrazja twarz",
    slug: "mikrodermabrazja-twarz",
    shortDescription: "Mechaniczny peeling skóry twarzy",
    description:
      "Mikrodermabrazja to zabieg mechanicznego złuszczania naskórka, który usuwa martwe komórki, stymuluje odnowę skóry i poprawia jej wygląd.",
    duration: "60 minut",
    price: "190 zł",
    effects: [
      "Złuszczenie martwego naskórka",
      "Stymulacja odnowy komórkowej",
      "Wygładzenie i rozjaśnienie skóry",
      "Poprawa tekstury i kolorytu",
    ],
  },
  {
    id: 14,
    categoryId: "kosmetologia",
    name: "Kuracja trądzikowa Recovery Line COB",
    slug: "kuracja-tradzikowa",
    shortDescription: "Specjalistyczna kuracja dla skóry trądzikowej",
    description:
      "Specjalistyczna kuracja dla skóry z trądzikiem pospolitym, różowatym, zaskórnikowym oraz krostkowo-grudkowym. Zabieg oczyszcza skórę, redukuje stany zapalne i reguluje wydzielanie sebum.",
    duration: "90 minut",
    price: "450 zł",
    effects: [
      "Oczyszczenie skóry",
      "Redukcja stanów zapalnych",
      "Regulacja wydzielania sebum",
      "Poprawa wyglądu skóry trądzikowej",
    ],
  },
  {
    id: 15,
    categoryId: "kosmetologia",
    name: "IQ Hydro Line COB",
    slug: "iq-hydro-line",
    shortDescription: "Zabieg nawilżający dla skóry suchej",
    description:
      "Specjalistyczny zabieg do skóry suchej, podrażnionej i odwodnionej. Zabieg intensywnie nawilża, odżywia i regeneruje skórę, przywracając jej komfort i zdrowy wygląd.",
    duration: "90 minut",
    price: "390 zł",
    effects: [
      "Intensywne nawilżenie skóry",
      "Odżywienie i regeneracja",
      "Ukojenie podrażnień",
      "Przywrócenie komfortu skórze",
    ],
  },
  {
    id: 16,
    categoryId: "kosmetologia",
    name: "Medi Gold Line",
    slug: "medi-gold-line",
    shortDescription: "Ekskluzywny zabieg odmładzający",
    description:
      "Ekskluzywny zabieg odmładzający bazujący na właściwościach Nano złota, peptydów oraz kolagenu. Zabieg intensywnie regeneruje skórę, poprawia jej jędrność i elastyczność oraz redukuje oznaki starzenia.",
    duration: "90 minut",
    price: "390 zł",
    effects: [
      "Intensywna regeneracja skóry",
      "Poprawa jędrności i elastyczności",
      "Redukcja oznak starzenia",
      "Rozświetlenie i odmłodzenie skóry",
    ],
  },
  {
    id: 17,
    categoryId: "kosmetologia",
    name: "Sensi Line COB",
    slug: "sensi-line",
    shortDescription: "Terapia dla skóry z przebarwieniami",
    description:
      "Aktywna terapia dla skóry zmagającej się z problemami takimi jak przebarwienia. Zabieg rozjaśnia przebarwienia, wyrównuje koloryt skóry i zapobiega powstawaniu nowych zmian pigmentacyjnych.",
    duration: "90 minut",
    price: "390 zł",
    effects: [
      "Rozjaśnienie przebarwień",
      "Wyrównanie kolorytu skóry",
      "Zapobieganie powstawaniu nowych przebarwień",
      "Poprawa wyglądu skóry",
    ],
  },

  // Medycyna Estetyczna
  {
    id: 18,
    categoryId: "medycyna-estetyczna",
    name: "Karisma- innowacyjna metoda NATURAL V-LIFT",
    slug: "karisma-natural-v-lift",
    shortDescription: "Naturalny lifting twarzy",
    description:
      "Karisma to innowacyjna metoda NATURAL V-LIFT, która zapewnia naturalny efekt liftingu twarzy. Zabieg poprawia owal twarzy, redukuje zmarszczki i przywraca młodzieńczy wygląd.",
    duration: "60 minut",
    price: "890 zł",
    effects: [
      "Naturalny efekt liftingu",
      "Poprawa owalu twarzy",
      "Redukcja zmarszczek",
      "Odmłodzenie wyglądu",
    ],
  },
  {
    id: 19,
    categoryId: "medycyna-estetyczna",
    name: "Xela Rederm 1,8%/2,2% 2ml",
    slug: "xela-rederm",
    shortDescription: "Biorewitalizacja skóry",
    description:
      "Xela Rederm to preparat do biorewitalizacji skóry, który łączy kwas hialuronowy z sukcynianem sodu. Zabieg intensywnie nawilża, regeneruje i odmładza skórę.",
    duration: "60 minut",
    price: "850 zł",
    effects: [
      "Intensywne nawilżenie skóry",
      "Regeneracja i odmłodzenie",
      "Poprawa elastyczności",
      "Redukcja drobnych zmarszczek",
    ],
  },
  {
    id: 20,
    categoryId: "medycyna-estetyczna",
    name: "RRS HA Long Casting",
    slug: "rrs-ha-long-casting",
    shortDescription: "Długotrwałe nawilżenie i regeneracja skóry",
    description:
      "RRS HA Long Casting to preparat do mezoterapii, który zapewnia długotrwałe nawilżenie i regenerację skóry. Zabieg poprawia jędrność, elastyczność i ogólny wygląd skóry.",
    duration: "60 minut",
    price: "750 zł",
    effects: [
      "Długotrwałe nawilżenie skóry",
      "Regeneracja i odmłodzenie",
      "Poprawa jędrności i elastyczności",
      "Redukcja oznak starzenia",
    ],
  },
  {
    id: 21,
    categoryId: "medycyna-estetyczna",
    name: "Tropokolagen Guana Tissue",
    slug: "tropokolagen-guana-tissue",
    shortDescription: "Stymulacja produkcji kolagenu",
    description:
      "Tropokolagen Guana Tissue to preparat, który stymuluje produkcję kolagenu w skórze. Zabieg poprawia jędrność, elastyczność i ogólny wygląd skóry.",
    duration: "45 minut",
    price: "250 zł",
    effects: [
      "Stymulacja produkcji kolagenu",
      "Poprawa jędrności i elastyczności skóry",
      "Redukcja drobnych zmarszczek",
      "Odmłodzenie wyglądu",
    ],
  },
  {
    id: 22,
    categoryId: "medycyna-estetyczna",
    name: "Prostrolaine Inner B",
    slug: "prostrolaine-inner-b",
    shortDescription: "Intensywna regeneracja skóry",
    description:
      "Prostrolaine Inner B to preparat do mezoterapii, który intensywnie regeneruje skórę. Zabieg poprawia jędrność, elastyczność i ogólny wygląd skóry.",
    duration: "60 minut",
    price: "650 zł",
    effects: [
      "Intensywna regeneracja skóry",
      "Poprawa jędrności i elastyczności",
      "Redukcja oznak starzenia",
      "Odmłodzenie wyglądu",
    ],
  },
  {
    id: 23,
    categoryId: "medycyna-estetyczna",
    name: "Dr Cyj Mezoterapia skóry głowy",
    slug: "dr-cyj-mezoterapia-skory-glowy",
    shortDescription: "Stymulacja wzrostu włosów",
    description:
      "Dr Cyj to preparat do mezoterapii skóry głowy, który stymuluje wzrost włosów, wzmacnia cebulki i zapobiega wypadaniu włosów.",
    duration: "60 minut",
    price: "550 zł",
    effects: [
      "Stymulacja wzrostu włosów",
      "Wzmocnienie cebulek",
      "Zapobieganie wypadaniu włosów",
      "Poprawa kondycji włosów",
    ],
  },
  {
    id: 24,
    categoryId: "medycyna-estetyczna",
    name: "Mezoterapia twarzy: odmładzająca/ nawilżająca",
    slug: "mezoterapia-twarzy",
    shortDescription: "Intensywne nawilżenie i odmłodzenie skóry",
    description:
      "Mezoterapia twarzy to zabieg polegający na wprowadzeniu substancji aktywnych do głębszych warstw skóry. W zależności od użytego preparatu, zabieg może być ukierunkowany na nawilżenie, odżywienie, regenerację skóry czy redukcję oznak starzenia.",
    duration: "60 minut",
    price: "350 zł",
    effects: [
      "Intensywne nawilżenie skóry",
      "Odżywienie i regeneracja",
      "Redukcja oznak starzenia",
      "Poprawa ogólnego wyglądu skóry",
    ],
  },
  {
    id: 25,
    categoryId: "medycyna-estetyczna",
    name: "Powiększanie ust",
    slug: "powiekszanie-ust",
    shortDescription: "Modelowanie i powiększanie ust",
    description:
      "Zabieg powiększania ust polega na wprowadzeniu preparatu kwasu hialuronowego w czerwień wargową i kontur ust. Zabieg pozwala na modelowanie kształtu ust, zwiększenie ich objętości i poprawę symetrii.",
    duration: "70 minut",
    price: "750-1100 zł",
    priceNote: "Cena zależna od ilości i rodzaju preparatu",
    effects: [
      "Zwiększenie objętości ust",
      "Modelowanie kształtu",
      "Poprawa symetrii",
      "Nawilżenie i odżywienie",
    ],
  },
  {
    id: 26,
    categoryId: "medycyna-estetyczna",
    name: "Wypełnienie bruzd nosowo-wargowych",
    slug: "wypelnienie-bruzd-nosowo-wargowych",
    shortDescription: "Redukcja bruzd nosowo-wargowych",
    description:
      "Zabieg wypełnienia bruzd nosowo-wargowych polega na wprowadzeniu preparatu kwasu hialuronowego w okolice bruzd. Zabieg redukuje widoczność bruzd, odmładza wygląd i przywraca harmonię twarzy.",
    duration: "60 minut",
    price: "650-850 zł",
    priceNote: "Cena zależna od ilości i rodzaju preparatu",
    effects: [
      "Redukcja widoczności bruzd",
      "Odmłodzenie wyglądu",
      "Przywrócenie harmonii twarzy",
      "Naturalne efekty",
    ],
  },
  {
    id: 27,
    categoryId: "medycyna-estetyczna",
    name: "Niwelowanie marionetek/ wypełnianie ubytków",
    slug: "niwelowanie-marionetek",
    shortDescription: "Redukcja zmarszczek marionetek",
    description:
      "Zabieg niwelowania marionetek polega na wprowadzeniu preparatu kwasu hialuronowego w okolice zmarszczek marionetek. Zabieg redukuje widoczność zmarszczek, odmładza wygląd i przywraca harmonię twarzy.",
    duration: "60 minut",
    price: "650-850 zł",
    priceNote: "Cena zależna od ilości i rodzaju preparatu",
    effects: [
      "Redukcja widoczności zmarszczek marionetek",
      "Odmłodzenie wyglądu",
      "Przywrócenie harmonii twarzy",
      "Naturalne efekty",
    ],
  },

  // Zabiegi na Ciało
  {
    id: 28,
    categoryId: "zabiegi-na-cialo",
    name: "Liposukcja Kawitacyjna",
    slug: "liposukcja-kawitacyjna-45",
    shortDescription: "Nieinwazyjna redukcja tkanki tłuszczowej",
    description:
      "Liposukcja kawitacyjna to nieinwazyjna metoda redukcji tkanki tłuszczowej. Zabieg wykorzystuje ultradźwięki do rozbijania komórek tłuszczowych, które są następnie naturalnie usuwane z organizmu.",
    duration: "45 minut",
    price: "240 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Poprawa wyglądu skóry",
      "Brak okresu rekonwalescencji",
    ],
  },
  {
    id: 29,
    categoryId: "zabiegi-na-cialo",
    name: "Liposukcja Kawitacyjna",
    slug: "liposukcja-kawitacyjna-30",
    shortDescription: "Nieinwazyjna redukcja tkanki tłuszczowej",
    description:
      "Liposukcja kawitacyjna to nieinwazyjna metoda redukcji tkanki tłuszczowej. Zabieg wykorzystuje ultradźwięki do rozbijania komórek tłuszczowych, które są następnie naturalnie usuwane z organizmu.",
    duration: "30 minut",
    price: "200 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Poprawa wyglądu skóry",
      "Brak okresu rekonwalescencji",
    ],
  },
  {
    id: 30,
    categoryId: "zabiegi-na-cialo",
    name: "EMS",
    slug: "ems",
    shortDescription: "Elektrostymulacja mięśni",
    description:
      "EMS (Elektrostymulacja Mięśni) to zabieg, który wykorzystuje prąd elektryczny do stymulacji mięśni. Zabieg wzmacnia mięśnie, modeluje sylwetkę i poprawia napięcie skóry.",
    duration: "30 minut",
    price: "350 zł",
    effects: [
      "Wzmocnienie mięśni",
      "Modelowanie sylwetki",
      "Poprawa napięcia skóry",
      "Redukcja cellulitu",
    ],
  },
  {
    id: 31,
    categoryId: "zabiegi-na-cialo",
    name: "Focus RF Talus - 1 partia",
    slug: "focus-rf-talus-cialo",
    shortDescription: "Lifting i ujędrnianie skóry ciała",
    description:
      "Focus RF Talus to zabieg wykorzystujący fale radiowe do liftingu i ujędrniania skóry ciała. Zabieg stymuluje produkcję kolagenu i elastyny, poprawiając jędrność i elastyczność skóry.",
    duration: "90 minut",
    price: "450 zł",
    effects: [
      "Lifting i ujędrnienie skóry",
      "Stymulacja produkcji kolagenu i elastyny",
      "Redukcja cellulitu",
      "Modelowanie sylwetki",
    ],
  },
  {
    id: 32,
    categoryId: "zabiegi-na-cialo",
    name: "Focus RF Talus - 5 zabiegów",
    slug: "focus-rf-talus-pakiet",
    shortDescription: "Pakiet 5 zabiegów Focus RF Talus",
    description:
      "Pakiet 5 zabiegów Focus RF Talus do wykorzystania na twarz lub/i ciało. Cena jednego zabiegu w pakiecie wynosi 350 zł.",
    duration: "5x30 minut",
    price: "1750 zł",
    effects: [
      "Lifting i ujędrnienie skóry",
      "Stymulacja produkcji kolagenu i elastyny",
      "Redukcja cellulitu",
      "Modelowanie sylwetki",
    ],
  },
  {
    id: 33,
    categoryId: "zabiegi-na-cialo",
    name: "Lipolaser pakiet 10 zabiegów",
    slug: "lipolaser-pakiet",
    shortDescription: "Pakiet 10 zabiegów lipolasera",
    description:
      "Lipolaser to nieinwazyjna metoda redukcji tkanki tłuszczowej. Zabieg wykorzystuje światło lasera do rozbijania komórek tłuszczowych, które są następnie naturalnie usuwane z organizmu.",
    duration: "10x30 minut",
    price: "700 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Poprawa wyglądu skóry",
      "Brak okresu rekonwalescencji",
    ],
  },
  {
    id: 34,
    categoryId: "zabiegi-na-cialo",
    name: "Lipolaser",
    slug: "lipolaser",
    shortDescription: "Nieinwazyjna redukcja tkanki tłuszczowej",
    description:
      "Lipolaser to nieinwazyjna metoda redukcji tkanki tłuszczowej. Zabieg wykorzystuje światło lasera do rozbijania komórek tłuszczowych, które są następnie naturalnie usuwane z organizmu.",
    duration: "30 minut",
    price: "140 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Poprawa wyglądu skóry",
      "Brak okresu rekonwalescencji",
    ],
  },
  {
    id: 35,
    categoryId: "zabiegi-na-cialo",
    name: "Bańka chińska",
    slug: "banka-chinska",
    shortDescription: "Masaż próżniowy redukujący cellulit",
    description:
      "Bańka chińska to masaż próżniowy, który redukuje cellulit, poprawia krążenie i ujędrnia skórę. Zabieg polega na zasysaniu fałdu skórnego do bańki i przesuwaniu jej po skórze.",
    duration: "40 minut",
    price: "140 zł",
    effects: [
      "Redukcja cellulitu",
      "Poprawa krążenia",
      "Ujędrnienie skóry",
      "Modelowanie sylwetki",
    ],
  },
  {
    id: 36,
    categoryId: "zabiegi-na-cialo",
    name: "Elektrostymulacja",
    slug: "elektrostymulacja",
    shortDescription: "Stymulacja mięśni prądem elektrycznym",
    description:
      "Elektrostymulacja to zabieg, który wykorzystuje prąd elektryczny do stymulacji mięśni. Zabieg wzmacnia mięśnie, modeluje sylwetkę i poprawia napięcie skóry.",
    duration: "30 minut",
    price: "55 zł",
    effects: [
      "Wzmocnienie mięśni",
      "Modelowanie sylwetki",
      "Poprawa napięcia skóry",
      "Redukcja cellulitu",
    ],
  },
  {
    id: 37,
    categoryId: "zabiegi-na-cialo",
    name: "Multipolar RF",
    slug: "multipolar-rf-30",
    shortDescription: "Ujędrnianie skóry falami radiowymi",
    description:
      "Multipolar RF to zabieg wykorzystujący fale radiowe do ujędrniania skóry. Zabieg stymuluje produkcję kolagenu i elastyny, poprawiając jędrność i elastyczność skóry.",
    duration: "30 minut",
    price: "220 zł",
    effects: [
      "Ujędrnienie skóry",
      "Stymulacja produkcji kolagenu i elastyny",
      "Redukcja cellulitu",
      "Modelowanie sylwetki",
    ],
  },
  {
    id: 38,
    categoryId: "zabiegi-na-cialo",
    name: "Multipolar RF",
    slug: "multipolar-rf-45",
    shortDescription: "Ujędrnianie skóry falami radiowymi",
    description:
      "Multipolar RF to zabieg wykorzystujący fale radiowe do ujędrniania skóry. Zabieg stymuluje produkcję kolagenu i elastyny, poprawiając jędrność i elastyczność skóry.",
    duration: "45 minut",
    price: "260 zł",
    effects: [
      "Ujędrnienie skóry",
      "Stymulacja produkcji kolagenu i elastyny",
      "Redukcja cellulitu",
      "Modelowanie sylwetki",
    ],
  },
  {
    id: 39,
    categoryId: "zabiegi-na-cialo",
    name: "Kriopoliza - jedno przyłożenie",
    slug: "kriopoliza-jedno",
    shortDescription: "Zamrażanie komórek tłuszczowych",
    description:
      "Kriopoliza to nieinwazyjna metoda redukcji tkanki tłuszczowej poprzez kontrolowane zamrażanie. Komórki tłuszczowe są bardziej wrażliwe na zimno niż otaczające je tkanki, dzięki czemu ulegają krystalizacji i naturalnej eliminacji z organizmu.",
    duration: "60 minut",
    price: "300 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Brak okresu rekonwalescencji",
      "Nieinwazyjność zabiegu",
    ],
  },
  {
    id: 40,
    categoryId: "zabiegi-na-cialo",
    name: "Kriopoliza - dwa przyłożenia",
    slug: "kriopoliza-dwa",
    shortDescription: "Zamrażanie komórek tłuszczowych",
    description:
      "Kriopoliza to nieinwazyjna metoda redukcji tkanki tłuszczowej poprzez kontrolowane zamrażanie. Komórki tłuszczowe są bardziej wrażliwe na zimno niż otaczające je tkanki, dzięki czemu ulegają krystalizacji i naturalnej eliminacji z organizmu.",
    duration: "120 minut",
    price: "490 zł",
    effects: [
      "Redukcja lokalnych nadmiarów tkanki tłuszczowej",
      "Modelowanie sylwetki",
      "Brak okresu rekonwalescencji",
      "Nieinwazyjność zabiegu",
    ],
  },

  // Pilates
  {
    id: 41,
    categoryId: "pilates",
    name: "Early Birds - 4 wejścia",
    slug: "early-birds-4",
    shortDescription: "Pakiet 4 zajęć pilates Early Birds",
    description:
      "Early Birds to poranne zajęcia pilates, które poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "310 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 42,
    categoryId: "pilates",
    name: "Early Birds - 8 wejść",
    slug: "early-birds-8",
    shortDescription: "Pakiet 8 zajęć pilates Early Birds",
    description:
      "Early Birds to poranne zajęcia pilates, które poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "650 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 43,
    categoryId: "pilates",
    name: "Pilates Private - 1 wejście",
    slug: "pilates-private",
    shortDescription: "Indywidualne zajęcia pilates",
    description:
      "Pilates Private to indywidualne zajęcia pilates, które są dostosowane do potrzeb i możliwości uczestnika. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "150 zł",
    effects: [
      "Indywidualne podejście",
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
    ],
  },
  {
    id: 44,
    categoryId: "pilates",
    name: "Pilates Reformer - 1 wejście",
    slug: "pilates-reformer-1",
    shortDescription: "Zajęcia pilates na reformerze",
    description:
      "Pilates Reformer to zajęcia pilates na specjalnym urządzeniu - reformerze. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "410 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 45,
    categoryId: "pilates",
    name: "Pilates Reformer - 4 wejścia",
    slug: "pilates-reformer-4",
    shortDescription: "Pakiet 4 zajęć pilates na reformerze",
    description:
      "Pilates Reformer to zajęcia pilates na specjalnym urządzeniu - reformerze. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "410 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 46,
    categoryId: "pilates",
    name: "Pilates Reformer - 6 wejść",
    slug: "pilates-reformer-6",
    shortDescription: "Pakiet 6 zajęć pilates na reformerze",
    description:
      "Pilates Reformer to zajęcia pilates na specjalnym urządzeniu - reformerze. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "570 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 47,
    categoryId: "pilates",
    name: "Pilates Reformer - 8 wejść",
    slug: "pilates-reformer-8",
    shortDescription: "Pakiet 8 zajęć pilates na reformerze",
    description:
      "Pilates Reformer to zajęcia pilates na specjalnym urządzeniu - reformerze. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "700 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
  {
    id: 48,
    categoryId: "pilates",
    name: "Pilates Reformer - 12 wejść",
    slug: "pilates-reformer-12",
    shortDescription: "Pakiet 12 zajęć pilates na reformerze",
    description:
      "Pilates Reformer to zajęcia pilates na specjalnym urządzeniu - reformerze. Zajęcia poprawiają kondycję, wzmacniają mięśnie i poprawiają elastyczność ciała.",
    price: "980 zł",
    effects: [
      "Poprawa kondycji",
      "Wzmocnienie mięśni",
      "Poprawa elastyczności ciała",
      "Redukcja stresu",
    ],
  },
];

// Zespół
export const team = [
  {
    id: 1,
    name: "Dr Anna Kowalska",
    position: "Lekarz medycyny estetycznej",
    bio: "Dr Anna Kowalska to doświadczony lekarz medycyny estetycznej z ponad 15-letnim doświadczeniem. Specjalizuje się w zabiegach odmładzających i modelujących twarz.",
  },
  {
    id: 2,
    name: "Mgr Katarzyna Nowak",
    position: "Kosmetolog",
    bio: "Mgr Katarzyna Nowak to dyplomowany kosmetolog z pasją do nowoczesnych technologii w kosmetologii. Specjalizuje się w zabiegach pielęgnacyjnych i regeneracyjnych.",
  },
  {
    id: 3,
    name: "Mgr Magdalena Wiśniewska",
    position: "Fizjoterapeuta",
    bio: "Mgr Magdalena Wiśniewska to doświadczony fizjoterapeuta specjalizujący się w zabiegach modelujących sylwetkę i redukcji cellulitu.",
  },
];

// Lokalizacje
export const locations = [
  {
    id: 1,
    name: "Fox Clinic Ursynów",
    address: "Perkoza 1, 02-808 Warszawa Ursynów",
    phone: "733 011 833",
    email: "ursynow@foxclinic.pl",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.2887671254456!2d21.0500848!3d52.1500848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA5JzAwLjMiTiAyMcKwMDMnMDAuMyJF!5e0!3m2!1spl!2spl!4v1650000000000!5m2!1spl!2spl",
    hours: [
      { day: "poniedziałek", hours: "07:00–21:00" },
      { day: "wtorek", hours: "07:00–21:00" },
      { day: "środa", hours: "07:00–21:00" },
      { day: "czwartek", hours: "07:00–21:00" },
      { day: "piątek", hours: "07:00–21:00" },
      { day: "sobota", hours: "08:00–16:00" },
      { day: "niedziela", hours: "Zamknięte" },
    ],
  },
  {
    id: 2,
    name: "Fox Clinic Łomianki",
    address: "Kościelna Droga 33, 05-092 Łomianki Dolne",
    phone: "733 011 833",
    email: "lomianki@foxclinic.pl",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.2887671254456!2d21.0500848!3d52.1500848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA5JzAwLjMiTiAyMcKwMDMnMDAuMyJF!5e0!3m2!1spl!2spl!4v1650000000000!5m2!1spl!2spl",
    hours: [
      { day: "poniedziałek", hours: "06:00–21:00" },
      { day: "wtorek", hours: "06:00–21:00" },
      { day: "środa", hours: "06:00–21:00" },
      { day: "czwartek", hours: "06:00–21:00" },
      { day: "piątek", hours: "06:00–21:00" },
      { day: "sobota", hours: "08:00–16:00" },
      { day: "niedziela", hours: "Zamknięte" },
    ],
  },
];

// Opinie klientów
export const reviews = [
  {
    id: 1,
    name: "Anna",
    text: "Jestem mega zadowolona z rezultatów. Korzystałam z zabiegów na urządzeniu, Focus. Już po jednym zabiegu zarysowała się talia, którą straciłam jakiś czas temu!! Taki sam zabieg miałam również na uda, z podobnym efektem. Bardzo polecam to miejsce, jest komfortowo, a Panie profesjonalne i bardzo miłe",
  },
  {
    id: 2,
    name: "Ola",
    text: "Bardzo profesjonalne podejście do klienta, przemiła atmosfera i rewelacyjne efekty zabiegów na ciało! A wszystko to w otoczeniu wysokiej jakości produktów. Polecam serdecznie!",
  },
  {
    id: 3,
    name: "Alek",
    text: "Chciałbym podzielić się swoją bardzo pozytywną opinią na temat zabiegu oczyszczania twarzy u Pani Ivony w Fox Clinic. Zabieg ten był absolutnie fantastyczny i przyniósł mi wiele korzyści. Pani Ivona była nie tylko profesjonalna, ale także niezwykle uprzejma i troskliwa. Jej umiejętności i wiedza w dziedzinie oczyszczania twarzy były imponujące. Po zabiegu moja skóra była odświeżona, oczyszczona i promienna. Zdecydowanie polecam Panią Ivonę i Fox Clinic wszystkim, którzy szukają doskonałego zabiegu oczyszczania twarzy.",
  },
];

// Zalety kliniki
export const benefits = [
  {
    id: 1,
    title: "Indywidualne podejście",
    description:
      "Każdy pacjent traktowany jest indywidualnie, a plan zabiegów dostosowywany jest do jego potrzeb i oczekiwań.",
  },
  {
    id: 2,
    title: "Najwyższej jakości produkty i sprzęt",
    description:
      "Używamy wyłącznie certyfikowanych i sprawdzonych produktów oraz nowoczesnego sprzętu, gwarantując bezpieczeństwo i skuteczność zabiegów.",
  },
  {
    id: 3,
    title: "Gwarancja satysfakcji",
    description:
      "Jesteśmy przekonani o wysokiej jakości naszych usług i oferujemy gwarancję satysfakcji.",
  },
  {
    id: 4,
    title: "Kompleksowa oferta zabiegów",
    description:
      "Oferujemy szeroki wachlarz zabiegów z zakresu medycyny estetycznej, dostosowanych do różnych potrzeb i oczekiwań naszych pacjentów.",
  },
];
