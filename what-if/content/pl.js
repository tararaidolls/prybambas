const whatif_single_pl = [
    "Co by było, gdyby grawitacja wyłączała się na dokładnie 1 minutę każdego dnia?",
    "Co by było, gdyby zwierzęta potrafiły mówić, ale tylko narzekały na pogodę?",
    "Co by było, gdyby wszystkie oceany zostały zastąpione sokiem pomarańczowym?",
    "Co by było, gdybyś mógł poruszać się tylko skacząc jak kangur?",
    "Co by było, gdyby każde kłamstwo sprawiało, że twój nos dosłownie rósłby jak u Pinokia?",
    "Co by było, gdyby chmury były zrobione ze słodkiej waty cukrowej?",
    "Co by było, gdyby ludzie świecili w ciemności, gdy są szczęśliwi?",
    "Co by było, gdyby pieniądze naprawdę rosły na drzewach na podwórku?",
    "Co by było, gdyby ludzie w ogóle nie potrzebowali snu?",
    "Co by było, gdyby wszystkie owady urosły do rozmiarów średniego psa?",
    "Co by było, gdyby głośny śmiech sprawiał, że unosisz się w powietrzu?",
    "Co by było, gdybyśmy mogli jeść tylko kolorowe kredki?",
    "Co by było, gdyby nasze odbicie w lustrze miało własną osobowość?",
    "Co by było, gdyby zabawki ożywały tylko wtedy, gdy wszyscy w domu śpią?",
    "Co by było, gdyby dinozaury nigdy nie wyginęły i żyły wśród nas jako zwierzęta domowe?",
    "Co by było, gdyby drzewa mogły przejść w nowe miejsce, kiedy się nudzą?",
    "Co by było, gdyby cienie mogły płatać figle i poruszać się niezależnie od nas?",
    "Co by było, gdyby czekolada była najzdrowszym jedzeniem na Ziemi?",
    "Co by było, gdybyśmy mogli nagrywać i odtwarzać nasze sny jak filmy?",
    "Co by było, gdyby zwierzęta domowe zostały szefami, a ludzie musieli ich słuchać?",
    "Co by było, gdyby każde schody zamieniały się w zjeżdżalnię po zachodzie słońca?",
    "Co by było, gdyby okna w klasie pokazywały jutrzejszą pogodę?",
    "Co by było, gdyby twój plecak przyjmował tylko rzeczy pasujące do dzisiejszego nastroju?",
    "Co by było, gdyby światła zmieniały kolor w zależności od najgłośniejszego dźwięku w pobliżu?",
    "Co by było, gdyby książki w bibliotece zapominały zakończenie do rana?",
    "Co by było, gdyby każde drzewo zrzucało jeden przydatny przedmiot zamiast liści?",
    "Co by było, gdyby buty wydawały inny rytm dla każdej emocji?",
    "Co by było, gdyby drzwi pamiętały ostatnią piosenkę, którą usłyszały?",
    "Co by było, gdyby ocean podążał za planem lekcji zamiast za Księżycem?",
    "Co by było, gdyby pocztówki docierały zanim zostały napisane?",
    "Co by było, gdyby łyżka deszczu mogła zasilić małą lampę na godzinę?",
    "Co by było, gdyby twój cień zawsze wskazywał najbliższy ukryty przedmiot?",
    "Co by było, gdyby każda zanuciona piosenka przyciągała inny owad?",
    "Co by było, gdyby półki w supermarkecie układały się według trudności puzzli?",
    "Co by było, gdyby lustra pokazywały osobę, której ostatnio pomogłeś?",
    "Co by było, gdyby kredki wydłużały się za każdym razem, gdy rozwiązujesz problem?",
    "Co by było, gdyby chmury można było przechowywać w słoikach i otwierać później?",
    "Co by było, gdyby autobusy same wybierały najkrótszą trasę?",
    "Co by było, gdyby każdy przepis zmieniał się w zależności od tego, kto gotuje?",
    "Co by było, gdyby dzwonek szkolny dzwonił tylko dla uczniów, którzy skończyli pracę?",
    "Co by było, gdyby każde miasto miało ukrytą podziemną rzekę muzyki?",
    "Co by było, gdyby pierwszy śnieg natychmiast wymazywał każdy ślad?",
    "Co by było, gdyby klawiatury pisały następne słowo, które masz właśnie pomyśleć?",
    "Co by było, gdyby rośliny doniczkowe mogły wyjaśnić swoje potrzeby w jednym zdaniu?",
    "Co by było, gdyby urodziny przychodziły, gdy zmieniasz swój ulubiony kolor?",
    "Co by było, gdyby mapy aktualizowały się za każdym razem, gdy ktoś przesuwa krzesło?",
    "Co by było, gdyby książki na półce zamieniały się miejscami, gdy nikt nie patrzy?",
    "Co by było, gdyby wiatr niósł małe karteczki zamiast liści?",
    "Co by było, gdyby każdy balon mówił prawdę o tym, gdzie był?",
    "Co by było, gdyby stuknięcie w ścianę pokazywało, czy ktoś jest po drugiej stronie?"
];

const whatif_chain_pl = [
    {
        start: "Co by było, gdyby grawitacja wyłączała się na dokładnie 1 minutę każdego dnia?",
        steps: ["Ludzie i przedmioty unoszą się w powietrzu.", "Wszyscy uderzają się w głowę o sufit.", "Kaski stają się obowiązkową modą domową."],
        end: "Kaski stają się obowiązkową modą domową."
    },
    {
        start: "Co by było, gdyby zwierzęta potrafiły mówić, ale tylko narzekały na pogodę?",
        steps: ["Psy odmawiają spacerów w deszczu i głośno się kłócą.", "Sprzedaż specjalnych parasoli dla psów gwałtownie rośnie.", "Prognozę pogody robi się, pytając gołębie."],
        end: "Prognozę pogody robi się, pytając gołębie."
    },
    {
        start: "Co by było, gdyby wszystkie oceany zostały zastąpione sokiem pomarańczowym?",
        steps: ["Ocean staje się bardzo kwaśny i słodki.", "Ryby rozwijają mutacje, żeby przetrwać kwas cytrynowy.", "Rekiny uzależniają się od cukru i pływają szybciej."],
        end: "Rekiny uzależniają się od cukru i pływają szybciej."
    },
    {
        start: "Co by było, gdybyś mógł poruszać się tylko skacząc jak kangur?",
        steps: ["Chodzenie i bieganie stają się całkowicie niemożliwe.", "Sufity we wszystkich domach buduje się trzy razy wyżej.", "Chodniki zastępują ogromne trampoliny."],
        end: "Trampoliny zastępują wszystkie miejskie chodniki."
    },
    {
        start: "Co by było, gdyby każde kłamstwo sprawiało, że twój nos rósł jak u Pinokia?",
        steps: ["Politycy mają nosy długie na 3 metry.", "Drzwi w biurach i domach trzeba poszerzyć.", "Przycinanie nosa staje się codzienną poranną rutyną."],
        end: "Przycinanie nosa staje się codzienną poranną rutyną."
    },
    {
        start: "Co by było, gdyby chmury były zrobione ze słodkiej waty cukrowej?",
        steps: ["Pada lepki, słodki deszcz.", "Wszystkie samochody i ulice stają się bardzo lepkie.", "Myjnie samochodowe zastępują maszyny do lizania."],
        end: "Myjnie samochodowe zastępują maszyny do lizania."
    },
    {
        start: "Co by było, gdyby drzewa mogły przejść w nowe miejsce, kiedy się nudzą?",
        steps: ["Lasy nieustannie zmieniają układ w ciągu nocy.", "Mapy GPS stają się bezużyteczne i nieaktualne w kilka godzin.", "Ludzie budują domy na kółkach, żeby podążać za ulubionymi drzewami."],
        end: "Ludzie budują domy na kółkach, żeby podążać za ulubionymi drzewami."
    },
    {
        start: "Co by było, gdybyśmy mogli nagrywać i odtwarzać nasze sny jak filmy?",
        steps: ["Kina snów stają się popularniejsze niż zwykłe kina.", "Ludzie sprzedają swoje najlepsze koszmary jako horrory.", "Sprzedaje się kaski blokujące sny, żeby chronić prywatność snu."],
        end: "Sprzedaje się kaski blokujące sny, żeby chronić prywatność snu."
    },
    {
        start: "Co by było, gdyby dinozaury nigdy nie wyginęły i żyły wśród nas jako zwierzęta domowe?",
        steps: ["Dinozaury T-Rex zastępują psy stróżujące na dużych podwórkach.", "Miasta muszą budować ogromne samochody do sprzątania dinozaurich odchodów.", "Mini-triceratopsy stają się popularną rasą do mieszkań."],
        end: "Mini-triceratopsy stają się popularną rasą do mieszkań."
    },
    {
        start: "Co by było, gdyby cienie mogły poruszać się niezależnie od nas?",
        steps: ["Cienie wymykają się nocą na imprezy bez swoich właścicieli.", "Ludzie budzą się z cudzym cieniem przy sobie.", "Powstaje nowy zawód łapaczy cieni, żeby zwracać uciekające cienie."],
        end: "Powstaje nowy zawód łapaczy cieni."
    },
    {
        start: "Co by było, gdyby rowery mogły jeździć tylko po namalowanych liniach?",
        steps: [
            "Drogi zaczęłyby wyglądać jak wielkie kolorowanki.",
            "Inżynierowie ruchu pracowaliby razem z artystami.",
            "Miasta malowałyby trasy co noc, żeby były czytelne."
        ],
        end: "Malarze ulic staliby się tak ważni jak budowniczowie dróg."
    },
    {
        start: "Co by było, gdyby na każdym krześle w klasie można było usiąść tylko raz dziennie?",
        steps: [
            "Szkoły rotowałyby krzesła między salami.",
            "Uczniowie zaczęliby nosić własne podkładki na siedzenie.",
            "Firmy meblowe projektowałyby szybsze systemy wymiany."
        ],
        end: "Dzielenie się krzesłami stałoby się normalną szkolną rutyną."
    },
    {
        start: "Co by było, gdyby kawiarnie podawały napoje tylko w przezroczystych kubkach?",
        steps: [
            "Klienci zaczęliby zauważać warstwy, kolory i błędy.",
            "Bariści rywalizowaliby przez design napojów.",
            "Menu stałyby się bardziej wizualne i oparte na kolorach."
        ],
        end: "Prezentacja napoju stałaby się częścią zamówienia."
    },
    {
        start: "Co by było, gdyby każde drzwi otwierały się dopiero po krótkiej rymowance?",
        steps: [
            "Ludzie wymyślaliby rymowanki wejściowe do każdego budynku.",
            "Szkoły uczyłyby etykiety rymowanek.",
            "Nikt nie zapominałby kluczy, ale wielu zapominałoby wersu."
        ],
        end: "Poezja stałaby się przydatna w codziennym życiu."
    },
    {
        start: "Co by było, gdyby każda stacja metra pachniała jednym owocem?",
        steps: [
            "Pasażerowie zapamiętywaliby stacje po zapachu, nie po znakach.",
            "Systemy transportu używałyby zapachu jako narzędzia nawigacji.",
            "Reklamodawcy próbowaliby brandować całe dzielnice zapachem."
        ],
        end: "Miasta zaczęłyby używać zapachów jako części nawigacji."
    },
    {
        start: "Co by było, gdyby zgubiona skarpetka zawsze teleportowała się do najbliższego kosza na pranie?",
        steps: [
            "Ludzie przestaliby szukać pod łóżkiem.",
            "Umiejscowienie kosza na pranie stałoby się poważną strategią.",
            "Czyste pokoje planowałoby się wokół stref z koszami."
        ],
        end: "Kosze na pranie stałyby się najważniejszym meblem w domu."
    },
    {
        start: "Co by było, gdyby bateria telefonu ładowała się tylko, gdy trzymasz go obiema rękami?",
        steps: [
            "Ludzie planowaliby przerwy na ładowanie jak spotkania.",
            "Stojaki na telefony stałyby się popularne wszędzie.",
            "Kawiarnie tworzyłyby specjalne strefy ładowania."
        ],
        end: "Ładowanie stałoby się nawykiem towarzyskim, a nie samotnym."
    },
    {
        start: "Co by było, gdyby każda książka w bibliotece szeptała jeden fakt po otwarciu?",
        steps: [
            "Czytelnicy zaczęliby polować na zaskakujące książki.",
            "Bibliotekarze układaliby półki według poziomu ciekawości.",
            "Nauka stałaby się bardziej jak eksploracja labiryntu."
        ],
        end: "Biblioteki zamieniłyby się w żywe labirynty faktów."
    },
    {
        start: "Co by było, gdyby czytanie przepisu na głos trochę go zmieniało?",
        steps: [
            "Kucharze zaczęliby zapamiętywać przepisy zamiast czytać je na głos.",
            "Przepisy audio wymagałyby dokładnego testowania.",
            "Rutyna w kuchni zależałaby od tonu, tempa i ciszy."
        ],
        end: "Gotowanie stałoby się mieszanką czytania i występu."
    },
    {
        start: "Co by było, gdyby cień każdego drzewa wskazywał najbliższe źródło wody?",
        steps: [
            "Wędrowcy zaczęliby celowo podążać za cieniami drzew.",
            "Parki sadziłyby drzewa jako przewodników szlaków.",
            "Aplikacje map porównywałyby cienie z danymi GPS."
        ],
        end: "Drzewa stałyby się naturalnymi pomocnikami nawigacji."
    },
    {
        start: "Co by było, gdyby za każdym razem, gdy kłamiesz, twoje buty piszczały?",
        steps: [
            "Uczciwość stałaby się czymś, co można usłyszeć.",
            "Przemówienia publiczne nagle stałyby się dużo cichsze.",
            "Firmy obuwnicze zaczęłyby robić filtry antypiszczenie."
        ],
        end: "Sprawdzanie prawdy stałoby się branżą obuwniczą."
    },
    {
        start: "Co by było, gdyby przyciski windy można było naciskać tylko parami?",
        steps: [
            "Ludzie musieliby uzgadniać wybór piętra.",
            "Ruch w budynkach stałby się wolniejszy, ale bardziej zaplanowany.",
            "Przyjaciele zaczęliby celowo jeździć windą razem."
        ],
        end: "Jazda windą w górę lub w dół stałaby się aktywnością towarzyską."
    },
    {
        start: "Co by było, gdyby każda skrzynka pocztowa dostarczała jeden dodatkowy niespodziankowy przedmiot?",
        steps: [
            "Ludzie sprawdzaliby pocztę z większym entuzjazmem.",
            "Niespodziewane przedmioty tworzyłyby nowe nawyki sortowania.",
            "Ubezpieczenie pocztowe stałoby się dużo popularniejsze."
        ],
        end: "Poczta wydawałaby się codzienną loterią."
    },
    {
        start: "Co by było, gdyby rozlaną szklankę wody zamieniała się w małą mapę?",
        steps: [
            "Wypadki zaczęłyby stawać się wskazówkami.",
            "Dzieci i detektywi studiowaliby kałuże dokładniej.",
            "Gry w czytanie map używałyby plam wody jako puzzli."
        ],
        end: "Bałagan zacząłby nosić informacje."
    },
    {
        start: "Co by było, gdyby każdy pęknięty balon wypuszczał jedno wypowiedziane zdanie?",
        steps: [
            "Dzieci oszczędzałyby balony na wiadomości.",
            "Imprezy byłyby pełne przypadkowych ogłoszeń.",
            "Producenci balonów drukowaliby ostrzeżenia i etykiety z wiadomościami."
        ],
        end: "Balony stałyby się nosicielami tajnych notatek."
    }
];

const whatif_deduction_pl = [
    {
        start: "Co by było, gdyby czekolada była najzdrowszym jedzeniem na Ziemi?",
        end: "Dentyści całkowicie zamykają swoje gabinety."
    },
    {
        start: "Co by było, gdyby ludzie w ogóle nie potrzebowali snu?",
        end: "Pojęcie „nocy” jest zakazane przez rady miast."
    },
    {
        start: "Co by było, gdyby wszystkie owady urosły do rozmiarów średniego psa?",
        end: "Moskitiery zastępują stalowe bramy garażowe."
    },
    {
        start: "Co by było, gdyby głośny śmiech sprawiał, że unosisz się w powietrzu?",
        end: "Kluby komediowe buduje się z wyściełanymi sufitami."
    },
    {
        start: "Co by było, gdyby zwierzęta domowe zostały szefami w domu?",
        end: "Ludzie muszą nosić obroże i spać na dywanikach."
    },
    {
        start: "Co by było, gdyby zabawki ożywały tylko wtedy, gdy wszyscy w domu śpią?",
        end: "Dzieci zostają na nogach przez dni, próbując złapać swoje pluszaki."
    },
    {
        start: "Co by było, gdyby nasze odbicie w lustrze miało własną osobowość?",
        end: "Ludzie kupują drugie lustro, żeby kłócić się ze swoim odbiciem."
    },
    {
        start: "Co by było, gdyby deszcz padał w losowych kolorach zamiast wody?",
        end: "Białe ubrania są zakazane prawem, żeby zapobiec tęczowym plamom."
    },
    {
        start: "Co by było, gdyby rośliny krzyczały, gdy je tniesz?",
        end: "Kosiarki zastępuje delikatne nożyczki do przycinania roślin."
    },
    {
        start: "Co by było, gdyby książki czytały się same na głos po otwarciu?",
        end: "Biblioteki stają się najgłośniejszymi i najbardziej chaotycznymi miejscami na Ziemi."
    }
];
