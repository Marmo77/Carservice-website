export const contactInfo = {
    name: "Nord Car Serwis",
    owner: "Piotr Wiśniewski",
    street: "ul. Potulicka 12c",
    city: "72-100 Marszewo",
    phone: "517 842 311",
    phoneRoadAssistance: "603 214 907",
    email: "biuro@nordcarserwis.pl",
    nip: "856-194-27-61",
    regon: "321874562",
    phones: {
        sprzedaz: ["602-118-447", "511-903-228"],
        serwis: ["91 418 27 64", "517-842-311"]
    },
    emails: {
        sprzedaz: "salon@nordcarserwis.pl",
        serwis: "serwis@nordcarserwis.pl"
    },
    hours: {
        weekdays: "8:00 - 17:00",
        saturday: "8:00 - 14:00",
        sunday: "Zamknięte"
    }
};

export const navLinks = [
    { name: "Strona główna", path: "/" },
    { name: "Nasza oferta", path: "/#oferta" },
    { name: "Diagnostyka ECU", path: "/uslugi/diagnostyka-ecu" },
    { name: "Kontakt", path: "/kontakt" }
];

export const bookingServices = [
    "Badanie techniczne samochodu do dowodu rejestracyjnego",
    "Wymiana kół / opon z wyważeniem",
    "Obsługa / nabicie klimatyzacji",
    "Odgrzybianie klimatyzacji z wymianą filtra kabinowego",
    "Ozonowanie klimatyzacji (80 zł)",
    "Duży przegląd zgodnie z programem serwisowym",
    "Mały przegląd zgodnie z programem serwisowym",
    "Wymiana oleju i filtra oleju",
    "Wymiana oleju w automatycznej skrzyni biegów",
    "Wymiana paska rozrządu z pompą wody",
    "Wymiana / naprawa układu hamulcowego",
    "Naprawa zawieszenia",
    "Ustawienie geometrii / zbieżności kół"
];

export const services = [
    {
        id: "skp",
        title: "Stacja Kontroli Pojazdów (SKP)",
        description:
            "Wykonujemy kompleksowe badania techniczne samochodów osobowych i dostawczych. Oferujemy rzetelną ocenę stanu pojazdu oraz profesjonalną obsługę na każdym etapie wizyty.",
        icon: "CarFront",
        bannerImage:
            "https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "serwis",
        title: "Serwis Samochodowy",
        description:
            "Oferujemy szeroki zakres napraw bieżących, wymianę rozrządu, serwis układu hamulcowego oraz profesjonalną diagnostykę komputerową.",
        icon: "Wrench"
    },
    {
        id: "chiptuning",
        title: "Diagnostyka ECU / Optymalizacja",
        description:
            "Profesjonalna diagnostyka elektroniki pojazdu, poprawa parametrów pracy silnika oraz indywidualna optymalizacja ustawień sterownika.",
        icon: "Zap",
        bannerImage:
            "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1600&auto=format&fit=crop",
        partnerText:
            "Oferujemy nowoczesne rozwiązania z zakresu elektroniki pojazdowej, diagnostyki sterowników oraz poprawy kultury pracy jednostki napędowej.",
        featuresList: [
            "Diagnostyka ECU",
            "Optymalizacja parametrów silnika",
            "Rozwiązania dla aut na gwarancji",
            "Pomiar i analiza osiągów"
        ],
        faq: [
            {
                question: "1. Czym jest optymalizacja ECU i jakie daje korzyści?",
                answer:
                    "Optymalizacja ECU polega na dopasowaniu parametrów sterownika silnika do realnego stanu pojazdu. Dzięki temu auto może pracować płynniej, lepiej reagować na gaz i w wielu przypadkach osiągać lepszą elastyczność oraz niższe zużycie paliwa."
            },
            {
                question: "2. Czy taka usługa jest bezpieczna dla samochodu?",
                answer:
                    "Tak, pod warunkiem że cały proces jest poprzedzony diagnostyką i wykonywany indywidualnie. Kluczowe znaczenie ma stan techniczny samochodu oraz odpowiednie sprawdzenie podzespołów przed wprowadzeniem zmian."
            },
            {
                question: "3. Jak wygląda to od strony technicznej?",
                answer:
                    "Sterownik silnika zarządza m.in. dawką paliwa, zapłonem i pracą osprzętu. Usługa polega na analizie tych ustawień oraz ich dopasowaniu w taki sposób, aby poprawić kulturę pracy jednostki i zachować bezpieczne parametry działania."
            },
            {
                question: "4. Dlaczego auta mają zapas osiągów od producenta?",
                answer:
                    "Fabryczne ustawienia muszą uwzględniać różne warunki eksploatacji, jakość paliwa, normy emisji i założenia marketingowe producenta. Dlatego część potencjału jednostki napędowej pozostaje zachowawczo ograniczona."
            },
            {
                question: "5. Jakich efektów można się spodziewać?",
                answer:
                    "Efekty zależą od typu silnika i stanu technicznego pojazdu. Najczęściej kierowcy zauważają lepszą elastyczność, sprawniejsze przyspieszanie oraz przy spokojnej jeździe możliwość obniżenia spalania."
            }
        ]
    },
    {
        id: "autoholowanie",
        title: "Pomoc drogowa i Autoholowanie",
        description:
            "Dowóz paliwa, uruchamianie auta, holowanie. Rozliczamy usługę w przejrzysty sposób i stawiamy na szybką pomoc na miejscu zdarzenia.",
        icon: "Truck",
        bannerImage: "/autoholowanie_bg.jpg"
    },
    {
        id: "sprzedaz",
        title: "Sprzedaż Samochodów",
        description:
            "Oferujemy sprawdzone samochody osobowe pochodzące z krajowych i europejskich źródeł. Stawiamy na rzetelną weryfikację stanu technicznego i przejrzystą historię pojazdu.",
        icon: "CheckCircle"
    }
];

export const autoholowaniePricing = [
    { id: 1, area: "Na terenie Goleniowa", priceLoyal: "110,00 zł", priceStandard: "160,00 zł" },
    { id: 2, area: "Do 20 km", priceLoyal: "160,00 zł", priceStandard: "210,00 zł" },
    { id: 3, area: "Powyżej 20 km", priceLoyal: "75,00 zł + 4,20 zł / km", priceStandard: "75,00 zł + 5,20 zł / km" },
    { id: 4, area: "Trasa 200 km - 500 km", priceLoyal: "4,20 zł / km", priceStandard: "5,20 zł / km" },
    { id: 5, area: "Trasa powyżej 500 km", priceLoyal: "3,80 zł / km", priceStandard: "4,20 zł / km" }
];

export const skpFeatures = [
    "Przeglądy rejestracyjne aut osobowych i dostawczych.",
    "Badania pojazdów z instalacją gazową (LPG).",
    "Przeglądy aut po naprawach blacharskich (powypadkowych).",
    "Pierwsze badania techniczne pojazdów sprowadzonych z zagranicy."
];

export const holowanieServices = [
    {
        id: "holowanie",
        icon: "Truck",
        title: "Autoholowanie i zabezpieczenie",
        description:
            "Bezpieczne holowanie pojazdów uszkodzonych i powypadkowych oraz pomoc przy wyciąganiu samochodów z rowów i poboczy."
    },
    {
        id: "naprawy",
        icon: "Wrench",
        title: "Drobne naprawy mobilne",
        description:
            "Pomoc w uruchomieniu samochodu na miejscu, wymiana koła oraz wsparcie przy podstawowych problemach eksploatacyjnych."
    },
    {
        id: "paliwo",
        icon: "Fuel",
        title: "Problemy z paliwem",
        description:
            "Dowóz paliwa we wskazane miejsce oraz pomoc w sytuacji błędnego tankowania."
    }
];

export const mechanikaUdogodnienia = [
    {
        id: "auta",
        icon: "🚗",
        title: "Auta Zastępcze",
        description:
            "Na czas naprawy oferujemy samochody zastępcze, aby ograniczyć niedogodności i zapewnić ciągłość Twojej mobilności."
    },
    {
        id: "door",
        icon: "🔄",
        title: "Door to Door",
        description:
            "Odbieramy samochód spod wskazanego adresu i po zakończonej naprawie odstawiamy go z powrotem do klienta."
    },
    {
        id: "floty",
        icon: "🏢",
        title: "Obsługa Flot",
        description:
            "Zapewniamy kompleksową opiekę serwisową dla aut firmowych, krótkie terminy realizacji i indywidualne warunki współpracy."
    }
];

export const mechanikaCzesci = [
    {
        id: "oem",
        color: "bg-green-500",
        title: "Części oryginalne (OEM)",
        description: "najwyższa jakość fabryczna."
    },
    {
        id: "high",
        color: "bg-yellow-400",
        title: "Zamienniki wysokiej klasy",
        description: "jakość porównywalna z oryginałem w rozsądnej cenie."
    },
    {
        id: "budget",
        color: "bg-red-500",
        title: "Zamienniki klasy budżetowej",
        description: "tańsze alternatywy",
        warning:
            "nie polecamy ich ze względu na trwałość, montujemy je wyłącznie na wyraźne życzenie klienta"
    }
];

export const mechanikaServices = [
    {
        id: "diagnostyka",
        title: "Diagnostyka i Elektronika",
        icon: "Cpu",
        items: [
            "Komputerowy test układów i diagnoza czujników.",
            "Naprawa instalacji elektrycznych oraz montaż dodatkowego wyposażenia."
        ],
        className: "md:col-span-2 lg:col-span-2"
    },
    {
        id: "silnik",
        title: "Silnik i Rozrząd",
        icon: "Wrench",
        description: "Naprawy silnika, wymiana pasków rozrządu i pomp wody."
    },
    {
        id: "zawieszenie",
        title: "Zawieszenie i Geometria",
        icon: "Car",
        description: "Test i wymiana amortyzatorów, wahaczy, łożysk oraz ustawianie geometrii."
    },
    {
        id: "hamulce",
        title: "Układ Hamulcowy",
        icon: "ShieldAlert",
        description: "Wymiana klocków, tarcz i płynu oraz kontrola skuteczności hamowania."
    },
    {
        id: "klimatyzacja",
        title: "Serwis Klimatyzacji",
        icon: "Snowflake",
        description: "Pełna obsługa klimatyzacji, dezynfekcja i wymiana filtrów."
    },
    {
        id: "wydech",
        title: "Układ Wydechowy / DPF",
        icon: "Wind",
        description: "Naprawa układu wydechowego oraz serwis filtrów cząstek stałych."
    }
];

export const heroData = {
    titleLine1: "KOMPLEKSOWA OBSŁUGA",
    titleLine2: "NORD CAR SERWIS",
    subtitle:
        "Zadbaj o swój samochód w nowoczesnym serwisie. Stawiamy na rzetelność, wysoką jakość napraw i kompleksową obsługę każdego pojazdu."
};

export const bookingData = {
    title: "Szybka Rezerwacja",
    subtitle:
        "Wypełnij formularz rezerwacyjny, a nasz pracownik skontaktuje się z Tobą w możliwie najkrótszym terminie.",
    contactTitle: "Dane Kontaktowe",
    openText: "Teraz otwarte",
    closedText: "Aktualnie zamknięte"
};

export const trustBadges = [
    { id: 1, title: "Rzetelna Diagnostyka", icon: "CheckCircle" },
    { id: 2, title: "Sprawna Realizacja", icon: "CheckCircle" },
    { id: 3, title: "Profesjonalna Obsługa", icon: "CheckCircle" }
];

export const valuesData = [
    {
        id: "transparentnosc",
        title: "Transparentność",
        description: "Informujemy o wszystkich kosztach przed rozpoczęciem prac.",
        icon: "Settings",
        bgClass: "bg-accent text-foreground border border-border",
        iconClass: "text-primary"
    },
    {
        id: "terminowosc",
        title: "Terminowość",
        description: "Szanujemy Twój czas i dbamy o sprawną realizację napraw.",
        icon: "Clock",
        bgClass: "bg-foreground text-primary-foreground border-transparent",
        iconClass: "text-primary"
    },
    {
        id: "fachowy-zespol",
        title: "Doświadczony Zespół",
        description: "Nasi mechanicy stale rozwijają umiejętności i pracują na nowoczesnym sprzęcie.",
        icon: "Users",
        bgClass: "bg-accent text-foreground border border-border",
        iconClass: "text-primary"
    }
];