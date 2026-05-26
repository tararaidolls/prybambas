// Для розробників: Щоб додати нову мову, просто скопіюйте цей файл, 
// перейменуйте його в код вашої мови (наприклад, es.js) 
// та змініть суфікс змінних на _es (whatif_single_es, whatif_chain_es, whatif_deduction_es).

const whatif_single_ro = [
    "Ce-ar fi dacă gravitația s-ar opri timp de exact 1 minut în fiecare zi?",
    "Ce-ar fi dacă animalele ar putea vorbi, dar s-ar plânge doar de vreme?",
    "Ce-ar fi dacă toate oceanele ar fi înlocuite cu suc de portocale?",
    "Ce-ar fi dacă te-ai putea deplasa doar sărind ca un cangur?",
    "Ce-ar fi dacă fiecare minciună ți-ar face nasul să crească ca la Pinocchio?",
    "Ce-ar fi dacă norii ar fi făcuți din vată de zahăr dulce?",
    "Ce-ar fi dacă oamenii ar lumina în întuneric atunci când sunt fericiți?",
    "Ce-ar fi dacă banii ar crește literalmente în copacii din curte?",
    "Ce-ar fi dacă oamenii nu ar avea nevoie de somn deloc?",
    "Ce-ar fi dacă toate insectele ar crește de mărimea unor câini medii?",
    "Ce-ar fi dacă râsul în hohote te-ar face să plutești în aer?",
    "Ce-ar fi dacă am putea mânca doar creioane colorate?",
    "Ce-ar fi dacă reflexia noastră în oglindă ar avea propria sa personalitate?",
    "Ce-ar fi dacă jucăriile ar prinde viață doar când toată lumea din casă doarme?",
    "Ce-ar fi dacă dinozaurii nu ar fi dispărut niciodată și ar trăi printre noi ca animale de companie?",
    "Ce-ar fi dacă copacii ar putea merge într-un loc nou când se plictisesc?",
    "Ce-ar fi dacă umbrele ar putea face farse și s-ar mișca independent de noi?",
    "Ce-ar fi dacă ciocolata ar fi cel mai sănătos aliment de pe Pământ?",
    "Ce-ar fi dacă am putea înregistra și reda visele noastre ca pe niște filme?",
    "Ce-ar fi dacă animalele de companie ar deveni șefii, iar oamenii ar trebui să se supună?"
];

const whatif_chain_ro = [
    {
        start: "Ce-ar fi dacă gravitația s-ar opri timp de exact 1 minut în fiecare zi?",
        steps: ["Oamenii și obiectele plutesc în aer.", "Toată lumea se lovește cu capul de tavan.", "Căștile devin modă obligatorie de interior."],
        end: "Căștile devin modă obligatorie de interior."
    },
    {
        start: "Ce-ar fi dacă animalele ar putea vorbi, dar s-ar plânge doar de vreme?",
        steps: ["Câinii refuză să meargă prin ploaie și se ceartă zgomotos.", "Vânzările de umbrele speciale pentru câini explodează.", "Prognoza meteo se face întrebând porumbeii."],
        end: "Prognoza meteo se face întrebând porumbeii."
    },
    {
        start: "Ce-ar fi dacă toate oceanele ar fi înlocuite cu suc de portocale?",
        steps: ["Oceanul devine extrem de acid și dulce.", "Peștii dezvoltă mutații pentru a supraviețui acidului citric.", "Rechinii devin dependenți de zahăr și înoată mai repede."],
        end: "Rechinii devin dependenți de zahăr și înoată mai repede."
    },
    {
        start: "Ce-ar fi dacă te-ai putea deplasa doar sărind ca un cangur?",
        steps: ["Mersul și alergatul devin strict imposibile.", "Tavanele în toate casele sunt construite de 3 ori mai înalte.", "Trotuarele sunt înlocuite de trambuline masive."],
        end: "Trambulinele înlocuiesc toate trotuarele din oraș."
    },
    {
        start: "Ce-ar fi dacă fiecare minciună ți-ar face nasul să crească ca la Pinocchio?",
        steps: ["Politicienii au nasul lung de 3 metri.", "Ușile birourilor și caselor trebuie lărgite.", "Tăierea nasului devine o rutină zilnică de dimineață."],
        end: "Tăierea nasului devine o rutină zilnică de dimineață."
    },
    {
        start: "Ce-ar fi dacă norii ar fi făcuți din vată de zahăr dulce?",
        steps: ["Plouă cu apă dulce și lipicioasă.", "Toate mașinile și străzile devin extrem de lipicioase.", "Spălătoriile auto sunt înlocuite de mașini de lins."],
        end: "Spălătoriile auto sunt înlocuite de mașini de lins."
    }
];

const whatif_deduction_ro = [
    {
        start: "Ce-ar fi dacă ciocolata ar fi cel mai sănătos aliment de pe Pământ?",
        end: "Dentiștii își închid complet cabinetele."
    },
    {
        start: "Ce-ar fi dacă oamenii nu ar avea nevoie de somn deloc?",
        end: "Conceptul de 'timp de noapte' este interzis de consiliul local."
    },
    {
        start: "Ce-ar fi dacă toate insectele ar crește de mărimea unor câini medii?",
        end: "Plasele de țânțari sunt înlocuite cu uși de garaj din oțel."
    },
    {
        start: "Ce-ar fi dacă râsul în hohote te-ar face să plutești în aer?",
        end: "Cluburile de comedie sunt construite cu tavane căptușite."
    },
    {
        start: "Ce-ar fi dacă animalele de companie ar deveni șefii casei?",
        end: "Oamenii sunt obligați să poarte zgărzi și să doarmă pe covorașe."
    }
];
