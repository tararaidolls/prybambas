const whatif_single_ro = [
    "Ce s-ar întâmpla dacă gravitația s-ar opri exact 1 minut în fiecare zi?",
    "Ce s-ar întâmpla dacă animalele ar putea vorbi, dar s-ar plânge doar de vreme?",
    "Ce s-ar întâmpla dacă toate oceanele ar fi înlocuite cu suc de portocale?",
    "Ce s-ar întâmpla dacă ai putea să te miști doar sărind ca un cangur?",
    "Ce s-ar întâmpla dacă fiecare minciună ți-ar face nasul să crească ca la Pinocchio?",
    "Ce s-ar întâmpla dacă norii ar fi făcuți din vată de zahăr dulce?",
    "Ce s-ar întâmpla dacă oamenii ar străluci în întuneric când sunt fericiți?",
    "Ce s-ar întâmpla dacă banii ar crește cu adevărat în copacii din curte?",
    "Ce s-ar întâmpla dacă oamenii n-ar mai avea nevoie deloc de somn?",
    "Ce s-ar întâmpla dacă toate insectele ar ajunge la mărimea unui câine mediu?",
    "Ce s-ar întâmpla dacă râsul tare te-ar face să plutești în aer?",
    "Ce s-ar întâmpla dacă am putea mânca doar creioane colorate?",
    "Ce s-ar întâmpla dacă reflexia din oglindă ar avea propria personalitate?",
    "Ce s-ar întâmpla dacă jucăriile ar prinde viață doar când toată lumea din casă doarme?",
    "Ce s-ar întâmpla dacă dinozaurii n-ar fi dispărut niciodată și ar trăi printre noi ca animale de companie?",
    "Ce s-ar întâmpla dacă copacii s-ar putea muta într-un alt loc când li se face plictiseală?",
    "Ce s-ar întâmpla dacă umbrele ar face farse și s-ar mișca independent de noi?",
    "Ce s-ar întâmpla dacă ciocolata ar fi cea mai sănătoasă mâncare de pe Pământ?",
    "Ce s-ar întâmpla dacă am putea înregistra și reda visele ca filme?",
    "Ce s-ar întâmpla dacă animalele de companie ar deveni șefii, iar oamenii ar trebui să le asculte?",
    "Ce s-ar întâmpla dacă fiecare scară ar deveni tobogan după apus?",
    "Ce s-ar întâmpla dacă ferestrele din clasă ar arăta vremea de mâine?",
    "Ce s-ar întâmpla dacă ghiozdanul tău ar accepta doar lucruri care se potrivesc cu starea de azi?",
    "Ce s-ar întâmpla dacă semafoarele s-ar schimba în funcție de cel mai tare sunet din apropiere?",
    "Ce s-ar întâmpla dacă cărțile din bibliotecă ar uita finalul până dimineață?",
    "Ce s-ar întâmpla dacă fiecare copac ar lăsa jos un obiect util în loc de frunze?",
    "Ce s-ar întâmpla dacă pantofii ar face un ritm diferit pentru fiecare emoție?",
    "Ce s-ar întâmpla dacă ușile și-ar aminti ultima melodie pe care au auzit-o?",
    "Ce s-ar întâmpla dacă oceanul ar urma orarul școlii în loc de Luna?",
    "Ce s-ar întâmpla dacă cărțile poștale ar ajunge înainte să fie scrise?",
    "Ce s-ar întâmpla dacă o lingură de ploaie ar putea alimenta o lampă mică timp de o oră?",
    "Ce s-ar întâmpla dacă umbra ta ar arăta mereu spre cel mai apropiat obiect ascuns?",
    "Ce s-ar întâmpla dacă fiecare cântec fredonat ar atrage un alt insect?",
    "Ce s-ar întâmpla dacă rafturile din supermarket s-ar rearanja după dificultatea puzzle-urilor?",
    "Ce s-ar întâmpla dacă oglinzile ar arăta persoana pe care ai ajutat-o cel mai recent?",
    "Ce s-ar întâmpla dacă creioanele s-ar lungi de fiecare dată când rezolvi o problemă?",
    "Ce s-ar întâmpla dacă norii ar putea fi păstrați în borcane și deschiși mai târziu?",
    "Ce s-ar întâmpla dacă autobuzele ar alege singure cea mai scurtă rută?",
    "Ce s-ar întâmpla dacă fiecare rețetă s-ar schimba în funcție de cine gătește?",
    "Ce s-ar întâmpla dacă clopoțeii școlii ar suna doar pentru elevii care și-au terminat treaba?",
    "Ce s-ar întâmpla dacă fiecare oraș ar avea un râu subteran ascuns de muzică?",
    "Ce s-ar întâmpla dacă prima zăpadă ar șterge instant fiecare urmă?",
    "Ce s-ar întâmpla dacă tastaturile ar tasta următorul cuvânt pe care urmează să-l gândești?",
    "Ce s-ar întâmpla dacă plantele de apartament și-ar putea explica nevoile într-o singură propoziție?",
    "Ce s-ar întâmpla dacă zilele de naștere ar veni când îți schimbi culoarea preferată?",
    "Ce s-ar întâmpla dacă hărțile s-ar actualiza de fiecare dată când cineva mută un scaun?",
    "Ce s-ar întâmpla dacă cărțile de pe raft și-ar schimba locul când nimeni nu se uită?",
    "Ce s-ar întâmpla dacă vântul ar duce notițe mici în loc de frunze?",
    "Ce s-ar întâmpla dacă fiecare balon ar spune adevărul despre unde a fost?",
    "Ce s-ar întâmpla dacă o bătaie pe perete ar arăta dacă cineva e în spatele lui?"
];

const whatif_chain_ro = [
    {
        start: "Ce s-ar întâmpla dacă gravitația s-ar opri exact 1 minut în fiecare zi?",
        steps: ["Oamenii și obiectele plutesc în aer.", "Toată lumea se lovește cu capul de tavan.", "Căștile devin modă obligatorie de interior."],
        end: "Căștile devin modă obligatorie de interior."
    },
    {
        start: "Ce s-ar întâmpla dacă animalele ar putea vorbi, dar s-ar plânge doar de vreme?",
        steps: ["Câinii refuză să meargă prin ploaie și se ceartă zgomotos.", "Vânzările de umbrele speciale pentru câini explodează.", "Prognoza meteo se face întrebând porumbeii."],
        end: "Prognoza meteo se face întrebând porumbeii."
    },
    {
        start: "Ce s-ar întâmpla dacă toate oceanele ar fi înlocuite cu suc de portocale?",
        steps: ["Oceanul devine extrem de acid și dulce.", "Peștii dezvoltă mutații pentru a supraviețui acidului citric.", "Rechinii devin dependenți de zahăr și înoată mai repede."],
        end: "Rechinii devin dependenți de zahăr și înoată mai repede."
    },
    {
        start: "Ce s-ar întâmpla dacă ai putea să te miști doar sărind ca un cangur?",
        steps: ["Mersul și alergatul devin strict imposibile.", "Tavanele în toate casele sunt construite de trei ori mai înalte.", "Trotuarele sunt înlocuite de trambuline masive."],
        end: "Trambulinele înlocuiesc toate trotuarele din oraș."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare minciună ți-ar face nasul să crească ca la Pinocchio?",
        steps: ["Politicienii au nasul lung de 3 metri.", "Ușile birourilor și caselor trebuie lărgite.", "Tăierea nasului devine o rutină zilnică de dimineață."],
        end: "Tăierea nasului devine o rutină zilnică de dimineață."
    },
    {
        start: "Ce s-ar întâmpla dacă norii ar fi făcuți din vată de zahăr dulce?",
        steps: ["Plouă cu apă dulce și lipicioasă.", "Toate mașinile și străzile devin extrem de lipicioase.", "Spălătoriile auto sunt înlocuite de mașini de lins."],
        end: "Spălătoriile auto sunt înlocuite de mașini de lins."
    },
    {
        start: "Ce s-ar întâmpla dacă copacii s-ar putea muta într-un alt loc când li se face plictiseală?",
        steps: ["Pădurile își schimbă constant aspectul peste noapte.", "Hărțile GPS devin inutile și depășite în câteva ore.", "Oamenii construiesc case pe roți pentru a-și urmări copacii preferați."],
        end: "Oamenii construiesc case pe roți pentru a-și urmări copacii preferați."
    },
    {
        start: "Ce s-ar întâmpla dacă am putea înregistra și reda visele ca filme?",
        steps: ["Cinematografele de vise devin mai populare decât cele obișnuite.", "Oamenii își vând cele mai bune coșmaruri ca blockbustere de groază.", "Se vând căști de blocare a viselor pentru a proteja intimitatea somnului."],
        end: "Se vând căști de blocare a viselor pentru a proteja intimitatea somnului."
    },
    {
        start: "Ce s-ar întâmpla dacă dinozaurii n-ar fi dispărut niciodată și ar trăi printre noi ca animale de companie?",
        steps: ["Dinozaurii T-Rex înlocuiesc câinii de pază în curțile mari.", "Orașele trebuie să construiască camioane uriașe pentru curățarea excrementelor de dinozaur.", "Minitriceratopșii devin o rasă populară pentru apartamente."],
        end: "Minitriceratopșii devin o rasă populară pentru apartamente."
    },
    {
        start: "Ce s-ar întâmpla dacă umbrele s-ar mișca independent de noi?",
        steps: ["Umbrele se furișează noaptea la petreceri fără proprietarii lor.", "Oamenii se trezesc cu umbra altcuiva atașată de ei.", "Se inventează o nouă profesie de prinzători de umbre pentru a returna umbrele fugare."],
        end: "Se inventează o nouă profesie de prinzători de umbre."
    },
    {
        start: "Ce s-ar întâmpla dacă bicicletele s-ar putea mișca doar pe linii desenate?",
        steps: [
            "Drumurile ar începe să arate ca niște cărți de colorat uriașe.",
            "Inginerii de trafic ar lucra împreună cu artiștii.",
            "Orașele ar repicta rutele în fiecare noapte ca să rămână clare."
        ],
        end: "Vopsitorii de străzi ar deveni la fel de importanți ca constructorii de drumuri."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare scaun din clasă ar putea fi folosit o singură dată pe zi?",
        steps: [
            "Școlile ar roti scaunele între săli diferite.",
            "Elevii ar începe să poarte saltele personale pentru șezut.",
            "Companiile de mobilier ar proiecta sisteme de schimb mai rapide."
        ],
        end: "Împărțirea scaunelor ar deveni o rutină normală la școală."
    },
    {
        start: "Ce s-ar întâmpla dacă cafenelele ar servi băuturi doar în pahare transparente?",
        steps: [
            "Clienții ar începe să observe straturile, culorile și greșelile.",
            "Barista ar concura prin designul băuturilor.",
            "Meniurile ar deveni mai vizuale și bazate pe culori."
        ],
        end: "Prezentarea băuturii ar deveni parte din comandă."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare ușă s-ar deschide doar după o rimă scurtă?",
        steps: [
            "Oamenii ar inventa rime de intrare pentru fiecare clădire.",
            "Școlile ar preda eticheta rimelor.",
            "Nimeni n-ar uita cheile, dar mulți ar uita versul."
        ],
        end: "Poezia ar deveni utilă în viața de zi cu zi."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare stație de metrou ar mirosi a un singur fruct?",
        steps: [
            "Călătorii și-ar aminti stațiile după miros, nu după indicatoare.",
            "Sistemele de transport ar folosi mirosul ca instrument de orientare.",
            "Reclamele ar încerca să branduiască cartiere întregi după parfum."
        ],
        end: "Orașele ar începe să folosească mirosurile ca parte din navigație."
    },
    {
        start: "Ce s-ar întâmpla dacă un șosetă scăpată s-ar teleporta mereu în cel mai apropiat coș de rufe?",
        steps: [
            "Oamenii ar înceta să caute sub pat.",
            "Amplasarea coșului de rufe ar deveni o strategie serioasă.",
            "Camerele curate ar fi planificate în jurul zonelor cu coșuri."
        ],
        end: "Coșurile de rufe ar deveni cea mai importantă piesă de mobilier din casă."
    },
    {
        start: "Ce s-ar întâmpla dacă bateria telefonului s-ar încărca doar cât îl ții cu ambele mâini?",
        steps: [
            "Oamenii ar programa pauze de încărcare ca pe niște întâlniri.",
            "Suporturile pentru telefon ar deveni populare peste tot.",
            "Cafenelele ar crea lounge-uri speciale pentru încărcare."
        ],
        end: "Încărcarea ar deveni un obicei social, nu unul solitar."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare carte din bibliotecă ar șopti un fapt când e deschisă?",
        steps: [
            "Cititorii ar începe să vâneze cărți surprinzătoare.",
            "Bibliotecarii ar organiza rafturile după nivelul de curiozitate.",
            "Studiul ar deveni mai mult o explorare de labirint."
        ],
        end: "Bibliotecile s-ar transforma în labirinturi vii de fapte."
    },
    {
        start: "Ce s-ar întâmpla dacă citirea unei rețete cu voce tare ar schimba-o puțin?",
        steps: [
            "Bucătarii ar începe să memoreze rețetele în loc să le citească tare.",
            "Rețetele audio ar avea nevoie de testare atentă.",
            "Rutina din bucătărie ar depinde de ton, ritm și tăcere."
        ],
        end: "Gătitul ar deveni un amestec de citit și spectacol."
    },
    {
        start: "Ce s-ar întâmpla dacă umbra fiecărui copac ar arăta spre cea mai apropiată sursă de apă?",
        steps: [
            "Drumeții ar începe să urmeze umbrele copacilor intenționat.",
            "Parcurile ar planta copaci ca ghizi de traseu.",
            "Aplicațiile de hărți ar compara umbrele cu datele GPS."
        ],
        end: "Copacii ar deveni ajutoare naturale de orientare."
    },
    {
        start: "Ce s-ar întâmpla dacă de fiecare dată când minți, pantofii tăi ar scârțâi?",
        steps: [
            "Onestitatea ar deveni ceva ce poți auzi.",
            "Discursurile publice ar deveni brusc mult mai liniștite.",
            "Companiile de încălțăminte ar începe să facă filtre anti-scârțâit."
        ],
        end: "Verificarea adevărului ar deveni o industrie a încălțămintei."
    },
    {
        start: "Ce s-ar întâmpla dacă butoanele liftului ar putea fi apăsate doar în perechi?",
        steps: [
            "Oamenii ar trebui să-și coordoneze alegerile de etaj.",
            "Traficul din clădiri ar deveni mai lent, dar mai planificat.",
            "Prietenii ar începe să ia liftul împreună din plăcere."
        ],
        end: "Urcatul sau coborâtul ar deveni o activitate socială."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare cutie poștală ar livra un obiect-surpriză în plus?",
        steps: [
            "Oamenii ar verifica poșta cu mai mult entuziasm.",
            "Obiectele neașteptate ar crea noi obiceiuri de sortare.",
            "Asigurarea poștală ar deveni mult mai populară."
        ],
        end: "Poșta ar părea o loterie zilnică."
    },
    {
        start: "Ce s-ar întâmpla dacă un pahar de apă vărsat s-ar transforma într-o hartă mică?",
        steps: [
            "Accidentele ar începe să devină indicii.",
            "Copiii și detectivii ar studia bălțile mai atent.",
            "Jocurile de citit hărți ar folosi petele de apă ca puzzle-uri."
        ],
        end: "Dezordinea ar începe să poarte informații."
    },
    {
        start: "Ce s-ar întâmpla dacă fiecare balon spart ar elibera o propoziție rostită?",
        steps: [
            "Copiii ar păstra baloanele pentru mesaje.",
            "Petrecerile ar fi pline de anunțuri accidentale.",
            "Producătorii de baloane ar imprima avertismente și etichete cu mesaje."
        ],
        end: "Baloanele ar deveni purtători de note secrete."
    }
];

const whatif_deduction_ro = [
    {
        start: "Ce s-ar întâmpla dacă ciocolata ar fi cea mai sănătoasă mâncare de pe Pământ?",
        end: "Dentiștii își închid complet cabinetele."
    },
    {
        start: "Ce s-ar întâmpla dacă oamenii n-ar mai avea nevoie deloc de somn?",
        end: "Conceptul de „noapte” este interzis de consiliile locale."
    },
    {
        start: "Ce s-ar întâmpla dacă toate insectele ar ajunge la mărimea unui câine mediu?",
        end: "Plasele de țânțari sunt înlocuite cu uși de garaj din oțel."
    },
    {
        start: "Ce s-ar întâmpla dacă râsul tare te-ar face să plutești în aer?",
        end: "Cluburile de comedie sunt construite cu tavane căptușite."
    },
    {
        start: "Ce s-ar întâmpla dacă animalele de companie ar deveni șefii casei?",
        end: "Oamenii sunt obligați să poarte zgărzi și să doarmă pe covorașe."
    },
    {
        start: "Ce s-ar întâmpla dacă jucăriile ar prinde viață doar când toată lumea din casă doarme?",
        end: "Copiii rămân treji zile întregi încercând să-și prindă urșii de pluș."
    },
    {
        start: "Ce s-ar întâmpla dacă reflexia din oglindă ar avea propria personalitate?",
        end: "Oamenii cumpără o a doua oglindă ca să se certe cu propria reflexie."
    },
    {
        start: "Ce s-ar întâmpla dacă ploaia ar cădea în culori aleatorii în loc de apă?",
        end: "Hainele albe sunt interzise prin lege ca să prevină petele de curcubeu."
    },
    {
        start: "Ce s-ar întâmpla dacă plantele ar țipa când le tai?",
        end: "Mașinile de tuns iarba sunt înlocuite cu foarfece delicate de tuns plantele."
    },
    {
        start: "Ce s-ar întâmpla dacă cărțile s-ar citi singure cu voce tare când sunt deschise?",
        end: "Bibliotecile devin cele mai zgomotoase și haotice locuri de pe Pământ."
    }
];
