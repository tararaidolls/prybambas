const whatif_single_da = [
    "Hvad nu hvis tyngdekraften slukkede i præcis 1 minut hver dag?",
    "Hvad nu hvis dyr kunne tale, men kun klagede over vejret?",
    "Hvad nu hvis alle oceaner blev erstattet med appelsinjuice?",
    "Hvad nu hvis du kun kunne bevæge dig ved at hoppe som en kænguru?",
    "Hvad nu hvis hver løgn fik din næse til bogstaveligt at vokse som Pinocchios?",
    "Hvad nu hvis skyerne var lavet af sød candyfloss?",
    "Hvad nu hvis mennesker glødede i mørket, når de var glade?",
    "Hvad nu hvis penge faktisk voksede på træer i baghaven?",
    "Hvad nu hvis mennesker slet ikke havde brug for søvn?",
    "Hvad nu hvis alle insekter voksede til størrelsen af mellemstore hunde?",
    "Hvad nu hvis højt grin fik dig til at svæve i luften?",
    "Hvad nu hvis vi kun måtte spise farvede farveblyanter?",
    "Hvad nu hvis vores spejlbillede havde sin egen personlighed?",
    "Hvad nu hvis legetøj kom til live kun når alle i huset sov?",
    "Hvad nu hvis dinosaurer aldrig uddøde og levede blandt os som kæledyr?",
    "Hvad nu hvis træer kunne gå til et nyt sted, når de blev kede af det?",
    "Hvad nu hvis skygger kunne lave narrestreger og bevæge sig uafhængigt af os?",
    "Hvad nu hvis chokolade var den sundeste mad på Jorden?",
    "Hvad nu hvis vi kunne optage og afspille vores drømme som film?",
    "Hvad nu hvis kæledyr blev cheferne, og mennesker måtte adlyde dem?",
    "Hvad nu hvis hver trappe blev til en rutsjebane efter solnedgang?",
    "Hvad nu hvis klasseværelsets vinduer viste morgendagens vejr?",
    "Hvad nu hvis din rygsæk kun accepterede ting, der passede til dagens humør?",
    "Hvad nu hvis lyskryds skiftede baseret på den højeste lyd i nærheden?",
    "Hvad nu hvis biblioteksbøger glemte deres slutninger inden morgen?",
    "Hvad nu hvis hvert træ tabte ét nyttigt redskab i stedet for blade?",
    "Hvad nu hvis sko lavede en anden rytme for hver følelse?",
    "Hvad nu hvis døre huskede den sidste sang, de hørte?",
    "Hvad nu hvis havet fulgte skolens tidsplan i stedet for månen?",
    "Hvad nu hvis postkort ankom, før de var skrevet?",
    "Hvad nu hvis en skefuld regn kunne drive en lille lampe i en time?",
    "Hvad nu hvis din skygge altid pegede mod det nærmeste skjulte objekt?",
    "Hvad nu hvis hver sang, du nynner, tiltrak et andet insekt?",
    "Hvad nu hvis supermarkedets hylder omarrangerede sig efter puslesværhedsgrad?",
    "Hvad nu hvis spejle viste den person, du senest hjalp?",
    "Hvad nu hvis blyanter blev længere, hver gang du løste et problem?",
    "Hvad nu hvis skyer kunne gemmes i glas og åbnes senere?",
    "Hvad nu hvis busser selv valgte den korteste rute?",
    "Hvad nu hvis hver opskrift ændrede sig afhængigt af, hvem der lavede maden?",
    "Hvad nu hvis skoleklokken kun ringede for elever, der var færdige med deres arbejde?",
    "Hvad nu hvis hver by havde en skjult undergrundsflod af musik?",
    "Hvad nu hvis den første sne slettede hvert fodaftryk med det samme?",
    "Hvad nu hvis tastaturer skrev det næste ord, du var ved at tænke?",
    "Hvad nu hvis stueplanter kunne forklare deres behov i én sætning?",
    "Hvad nu hvis fødselsdage skete, når din yndlingsfarve skiftede?",
    "Hvad nu hvis kort opdaterede sig, hver gang nogen flyttede en stol?",
    "Hvad nu hvis bøger på en hylde byttede plads, når ingen kiggede?",
    "Hvad nu hvis vinden bar små sedler i stedet for blade?",
    "Hvad nu hvis hver ballon fortalte sandheden om, hvor den havde været?",
    "Hvad nu hvis et slag på væggen kunne afsløre, om der var nogen bag den?"
];

const whatif_chain_da = [
    {
        start: "Hvad nu hvis tyngdekraften slukkede i præcis 1 minut hver dag?",
        steps: ["Mennesker og genstande svæver op i luften.", "Alle slår hovedet mod loftet.", "Hjelme bliver obligatorisk indendørs mode."],
        end: "Hjelme bliver obligatorisk indendørs mode."
    },
    {
        start: "Hvad nu hvis dyr kunne tale, men kun klagede over vejret?",
        steps: ["Hunde nægter at gå i regn og skændes højt.", "Salg af særlige hundeparaplyer eksploderer.", "Vejrudsigten laves ved at spørge duer."],
        end: "Vejrudsigten laves ved at spørge duer."
    },
    {
        start: "Hvad nu hvis alle oceaner blev erstattet med appelsinjuice?",
        steps: ["Havet bliver meget surt og sødt.", "Fisk udvikler mutationer for at overleve citronsyren.", "Hajer bliver afhængige af sukker og svømmer hurtigere."],
        end: "Hajer bliver afhængige af sukker og svømmer hurtigere."
    },
    {
        start: "Hvad nu hvis du kun kunne bevæge dig ved at hoppe som en kænguru?",
        steps: ["At gå og løbe bliver helt umuligt.", "Lofter i alle huse bygges 3 gange højere.", "Fortove erstattes af kæmpe trampoliner."],
        end: "Trampoliner erstatter alle byfortove."
    },
    {
        start: "Hvad nu hvis hver løgn fik din næse til bogstaveligt at vokse som Pinocchios?",
        steps: ["Politikere får 3 meter lange næser.", "Døre i kontorer og huse skal gøres bredere.", "Næsetrimning bliver en daglig morgenrutine."],
        end: "Næsetrimning bliver en daglig morgenrutine."
    },
    {
        start: "Hvad nu hvis skyerne var lavet af sød candyfloss?",
        steps: ["Det regner klæbrigt sukkervand.", "Alle biler og gader bliver utroligt klæbrige.", "Bilvask erstattes af slikke-maskiner."],
        end: "Bilvask erstattes af slikke-maskiner."
    },
    {
        start: "Hvad nu hvis træer kunne gå til et nyt sted, når de blev kede af det?",
        steps: ["Skove ændrer konstant deres layout om natten.", "GPS-kort bliver ubrugelige og forældede på få timer.", "Folk bygger huse på hjul for at følge deres yndlingstræer."],
        end: "Folk bygger huse på hjul for at følge deres yndlingstræer."
    },
    {
        start: "Hvad nu hvis vi kunne optage og afspille vores drømme som film?",
        steps: ["Drømmebiografer bliver mere populære end almindelige biografer.", "Folk sælger deres bedste mareridt som gyserblockbustere.", "Drømmeblokerende hjelme sælges for at beskytte søvnens privatliv."],
        end: "Drømmeblokerende hjelme sælges for at beskytte søvnens privatliv."
    },
    {
        start: "Hvad nu hvis dinosaurer aldrig uddøde og levede blandt os som kæledyr?",
        steps: ["T-Rex-dinosaurer erstatter vagthunde i store haver.", "Byer må bygge kæmpe dinosaur-lorte-rensere.", "Mini-triceratops bliver en populær race til lejligheder."],
        end: "Mini-triceratops bliver en populær race til lejligheder."
    },
    {
        start: "Hvad nu hvis skygger kunne bevæge sig uafhængigt af os?",
        steps: ["Skygger sniger sig ud om natten for at feste uden deres ejere.", "Folk vågner med en andens skygge på sig.", "Et nyt erhverv som skyggejægere opfindes for at returnere løbske skygger."],
        end: "Et nyt erhverv som skyggejægere opfindes."
    },
    {
        start: "Hvad nu hvis cykler kun kunne køre på malede streger?",
        steps: [
            "Veje ville begynde at ligne kæmpe malebøger.",
            "Trafikingeniører ville arbejde sammen med kunstnere.",
            "Byer ville male ruter om hver nat for at holde dem tydelige."
        ],
        end: "Gademalere ville blive lige så vigtige som vejbyggere."
    },
    {
        start: "Hvad nu hvis hver klassestol kun kunne siddes på én gang om dagen?",
        steps: [
            "Skoler ville rotere stole mellem forskellige lokaler.",
            "Elever ville begynde at bære personlige siddepuder.",
            "Møbelfirmaer ville designe hurtigere ombytningssystemer."
        ],
        end: "Stoledeling ville blive en normal skolerutine."
    },
    {
        start: "Hvad nu hvis caféer kun serverede drikke i gennemsigtige kopper?",
        steps: [
            "Kunder ville begynde at bemærke lag, farver og fejl.",
            "Baristaer ville konkurrere gennem drikkedesign.",
            "Menuer ville blive mere visuelle og farvebaserede."
        ],
        end: "Drikkepræsentation ville blive en del af bestillingen."
    },
    {
        start: "Hvad nu hvis hver dør kun åbnede efter en kort rim?",
        steps: [
            "Folk ville opfinde indgangsrim for hver bygning.",
            "Skoler ville undervise i rim-etikette.",
            "Ingen ville glemme deres nøgler, men mange ville glemme verset."
        ],
        end: "Poesi ville blive nyttigt i hverdagen."
    },
    {
        start: "Hvad nu hvis hver metrostation lugtede af én frugt?",
        steps: [
            "Rejsende ville huske stationer efter duft i stedet for skilte.",
            "Transportsystemer ville begynde at bruge lugt som navigationsværktøj.",
            "Annoncører ville forsøge at brande hele kvarterer med duft."
        ],
        end: "Byer ville begynde at bruge lugte som en del af navigationen."
    },
    {
        start: "Hvad nu hvis en tabt sok altid teleporterede til den nærmeste vasketøjskurv?",
        steps: [
            "Folk ville stoppe med at lede under sengen.",
            "Placering af vasketøjskurve ville blive en seriøs strategi.",
            "Rene rum ville blive planlagt omkring kurv-zoner."
        ],
        end: "Vasketøjskurve ville blive det vigtigste møbel i huset."
    },
    {
        start: "Hvad nu hvis telefonbatterier kun opladede, mens du holdt telefonen med begge hænder?",
        steps: [
            "Folk ville planlægge opladningspauser som møder.",
            "Telefonholdere ville blive populære overalt.",
            "Caféer ville skabe særlige opladningslounges."
        ],
        end: "Opladning ville blive en social vane i stedet for noget, man gør alene."
    },
    {
        start: "Hvad nu hvis hver biblioteksbog hviskede ét faktum, når den blev åbnet?",
        steps: [
            "Læsere ville begynde at jagte overraskende bøger.",
            "Bibliotekarer ville organisere hylder efter nysgerrighedsniveau.",
            "At studere ville føles mere som at udforske en labyrint."
        ],
        end: "Biblioteker ville blive til levende fakta-labyrinter."
    },
    {
        start: "Hvad nu hvis det at læse en opskrift højt ændrede den en smule?",
        steps: [
            "Kokke ville begynde at huske opskrifter i stedet for at læse dem højt.",
            "Lydopskrifter ville kræve omhyggelig testning.",
            "Køkkenrutiner ville afhænge af tone, timing og stilhed."
        ],
        end: "Madlavning ville blive en blanding af læsning og optræden."
    },
    {
        start: "Hvad nu hvis skyggen af hvert træ pegede mod den nærmeste vandkilde?",
        steps: [
            "Vandrere ville begynde at følge træskygger med vilje.",
            "Parker ville plante træer som stiskilte.",
            "Kort-apps ville sammenligne skygger med GPS-data."
        ],
        end: "Træer ville blive naturlige navigationshjælpere."
    },
    {
        start: "Hvad nu hvis hver gang nogen lyver, knirker deres sko?",
        steps: [
            "Ærlighed ville blive noget, man kan høre.",
            "Offentlige taler ville pludselig blive meget stille.",
            "Skofirmaer ville begynde at lave anti-knirre-filtre."
        ],
        end: "Sandhedstjek ville blive en skoindustri."
    },
    {
        start: "Hvad nu hvis elevator-knapper kun kunne trykkes i par?",
        steps: [
            "Folk ville skulle koordinere deres etagevalg.",
            "Bygningstrafik ville blive langsommere, men mere planlagt.",
            "Venner ville begynde at tage elevatorer sammen med vilje."
        ],
        end: "At gå op eller ned ville blive en social aktivitet."
    },
    {
        start: "Hvad nu hvis hver postkasse leverede én ekstra overraskelsesgenstand?",
        steps: [
            "Folk ville tjekke posten med mere spænding.",
            "Uventede genstande ville skabe nye sorteringsvaner.",
            "Postforsikring ville blive meget mere populær."
        ],
        end: "Post ville føles som et dagligt lotteri."
    },
    {
        start: "Hvad nu hvis et spildt glas vand blev til et lille kort?",
        steps: [
            "Uheld ville begynde at blive til spor.",
            "Børn og detektiver ville studere pytter mere omhyggeligt.",
            "Kortlæsningslege ville bruge vandpytter som gåder."
        ],
        end: "Rod ville begynde at bære information."
    },
    {
        start: "Hvad nu hvis hver sprunget ballon frigav én talt sætning?",
        steps: [
            "Børn ville gemme balloner til beskeder.",
            "Fester ville blive fyldt med tilfældige meddelelser.",
            "Ballonproducenter ville trykke advarsler og besked-etiketter."
        ],
        end: "Balloner ville blive hemmelige beskedbærere."
    }
];

const whatif_deduction_da = [
    {
        start: "Hvad nu hvis chokolade var den sundeste mad på Jorden?",
        end: "Tandlæger går helt konkurs."
    },
    {
        start: "Hvad nu hvis mennesker slet ikke havde brug for søvn?",
        end: "Begrebet 'nat' forbydes af byråd."
    },
    {
        start: "Hvad nu hvis alle insekter voksede til størrelsen af mellemstore hunde?",
        end: "Myggenet erstattes af stålgarageporte."
    },
    {
        start: "Hvad nu hvis højt grin fik dig til at svæve i luften?",
        end: "Comedy-klubber bygges med bløde lofter."
    },
    {
        start: "Hvad nu hvis kæledyr blev cheferne i huset?",
        end: "Mennesker tvinges til at bære halsbånd og sove på tæpper."
    },
    {
        start: "Hvad nu hvis legetøj kom til live kun når alle i huset sov?",
        end: "Børn bliver vågne i dagevis for at fange deres bamser."
    },
    {
        start: "Hvad nu hvis vores spejlbillede havde sin egen personlighed?",
        end: "Folk køber et andet spejl for at skændes med deres eget spejlbillede."
    },
    {
        start: "Hvad nu hvis regn faldt i tilfældige farver i stedet for vand?",
        end: "Hvidt tøj forbydes ved lov for at undgå regnbuepletter."
    },
    {
        start: "Hvad nu hvis planter skreg, når du klippede dem?",
        end: "Plæneklippere erstattes af delikate plantesaks."
    },
    {
        start: "Hvad nu hvis bøger læste sig selv højt op, når de blev åbnet?",
        end: "Biblioteker bliver de højeste og mest kaotiske steder på Jorden."
    }
];
