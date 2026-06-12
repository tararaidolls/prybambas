const whatif_single_sv = [
    "Tänk om gravitationen stängdes av i exakt 1 minut varje dag?",
    "Tänk om djur kunde prata, men bara klagade på vädret?",
    "Tänk om alla hav ersattes med apelsinjuice?",
    "Tänk om du bara kunde röra dig genom att hoppa som en känguru?",
    "Tänk om varje lögn fick näsan att växa som hos Pinocchio?",
    "Tänk om molnen var gjorda av söt sockervadd?",
    "Tänk om människor lyste i mörkret när de var glada?",
    "Tänk om pengar faktiskt växte på träd i trädgården?",
    "Tänk om människor inte behövde sova alls?",
    "Tänk om alla insekter blev lika stora som medelstora hundar?",
    "Tänk om högt skratt fick dig att sväva i luften?",
    "Tänk om vi bara fick äta färgkritor?",
    "Tänk om vår spegelbild hade sin egen personlighet?",
    "Tänk om leksaker vaknade till liv bara när alla i huset sov?",
    "Tänk om dinosaurier aldrig dog ut och levde bland oss som husdjur?",
    "Tänk om träd kunde gå till en ny plats när de blev uttråkade?",
    "Tänk om skuggor kunde busa och röra sig oberoende av oss?",
    "Tänk om choklad var den hälsosammaste maten på jorden?",
    "Tänk om vi kunde spela in och spela upp våra drömmar som filmer?",
    "Tänk om husdjur blev cheferna och människor var tvungna att lyda dem?",
    "Tänk om varje trappa blev en rutschkana efter solnedgången?",
    "Tänk om klassrumsfönster visade morgondagens väder?",
    "Tänk om din ryggsäck bara accepterade saker som passade dagens humör?",
    "Tänk om trafikljus bytte färg baserat på det högsta ljudet i närheten?",
    "Tänk om biblioteksböcker glömde sina slut fram till morgonen?",
    "Tänk om varje träd tappade ett användbart verktyg istället för löv?",
    "Tänk om skor gjorde en annan rytm för varje känsla?",
    "Tänk om dörrar kom ihåg den senaste låten de hörde?",
    "Tänk om havet följde skolans schema istället för månen?",
    "Tänk om vykort anlände innan de var skrivna?",
    "Tänk om en sked regn kunde driva en liten lampa i en timme?",
    "Tänk om din skugga alltid pekade mot det närmaste gömda föremålet?",
    "Tänk om varje låt du nynnade lockade en annan insekt?",
    "Tänk om hyllorna i mataffären ordnade om sig efter pusslets svårighetsgrad?",
    "Tänk om speglar visade personen du senast hjälpte?",
    "Tänk om pennor blev längre varje gång du löste ett problem?",
    "Tänk om moln kunde förvaras i burkar och öppnas senare?",
    "Tänk om bussar själva valde den kortaste rutten?",
    "Tänk om varje recept ändrades beroende på vem som lagade maten?",
    "Tänk om skolklockan bara ringde för elever som var klara med sitt arbete?",
    "Tänk om varje stad hade en dold underjordisk flod av musik?",
    "Tänk om den första snön raderade varje fotspår direkt?",
    "Tänk om tangentbord skrev nästa ord du tänkte på?",
    "Tänk om krukväxter kunde förklara sina behov i en mening?",
    "Tänk om födelsedagar inträffade när din favoritfärg ändrades?",
    "Tänk om kartor uppdaterades varje gång någon flyttade en stol?",
    "Tänk om böcker på hyllan bytte plats när ingen tittade?",
    "Tänk om vinden bar små lappar istället för löv?",
    "Tänk om varje ballong berättade sanningen om var den hade varit?",
    "Tänk om ett knack på väggen avslöjade om någon var bakom den?"
];

const whatif_chain_sv = [
    {
        start: "Tänk om gravitationen stängdes av i exakt 1 minut varje dag?",
        steps: ["Människor och föremål svävar upp i luften.", "Alla slår huvudet i taket.", "Hjälmar blir obligatorisk inomhusmode."],
        end: "Hjälmar blir obligatorisk inomhusmode."
    },
    {
        start: "Tänk om djur kunde prata, men bara klagade på vädret?",
        steps: ["Hundar vägrar gå i regnet och bråkar högljutt.", "Försäljningen av speciella hundparaplyer skjuter i höjden.", "Väderprognoser görs genom att fråga duvor."],
        end: "Väderprognoser görs genom att fråga duvor."
    },
    {
        start: "Tänk om alla hav ersattes med apelsinjuice?",
        steps: ["Havet blir mycket surt och sött.", "Fiskar utvecklar mutationer för att överleva citronsyran.", "Hajar blir beroende av socker och simmar snabbare."],
        end: "Hajar blir beroende av socker och simmar snabbare."
    },
    {
        start: "Tänk om du bara kunde röra dig genom att hoppa som en känguru?",
        steps: ["Att gå och springa blir helt omöjligt.", "Tak i alla hus byggs tre gånger högre.", "Trottoarer ersätts av enorma studsmattor."],
        end: "Studsmattor ersätter alla stadens trottoarer."
    },
    {
        start: "Tänk om varje lögn fick näsan att växa som hos Pinocchio?",
        steps: ["Politiker får tre meter långa näsor.", "Kontors- och husdörrar måste breddas.", "Näsklippning blir en daglig morgonrutin."],
        end: "Näsklippning blir en daglig morgonrutin."
    },
    {
        start: "Tänk om molnen var gjorda av söt sockervadd?",
        steps: ["Det regnar klibbigt sockervatten.", "Alla bilar och gator blir otroligt klibbiga.", "Biltvättar ersätts av slickmaskiner."],
        end: "Biltvättar ersätts av slickmaskiner."
    },
    {
        start: "Tänk om träd kunde gå till en ny plats när de blev uttråkade?",
        steps: ["Skogar ändrar ständigt sin utformning över natten.", "GPS-kartor blir värdelösa och inaktuella på några timmar.", "Människor bygger hus på hjul för att följa sina favoritträd."],
        end: "Människor bygger hus på hjul för att följa sina favoritträd."
    },
    {
        start: "Tänk om vi kunde spela in och spela upp våra drömmar som filmer?",
        steps: ["Drömbiografer blir mer populära än vanliga biografer.", "Människor säljer sina bästa mardrömmar som skräckfilmer.", "Drömblockerande hjälmar säljs för att skydda sömnens integritet."],
        end: "Drömblockerande hjälmar säljs för att skydda sömnens integritet."
    },
    {
        start: "Tänk om dinosaurier aldrig dog ut och levde bland oss som husdjur?",
        steps: ["T-Rex ersätter vakthundar i stora trädgårdar.", "Städer måste bygga jättelika sopbilar för dinosauriespillning.", "Mini-triceratops blir en populär ras för lägenheter."],
        end: "Mini-triceratops blir en populär ras för lägenheter."
    },
    {
        start: "Tänk om skuggor kunde röra sig oberoende av oss?",
        steps: ["Skuggor smiter ut på natten och festar utan sina ägare.", "Människor vaknar med någon annans skugga fäst vid sig.", "Ett nytt yrke som skuggfångare uppfinner för att återlämna rymda skuggor."],
        end: "Ett nytt yrke som skuggfångare uppfinner."
    },
    {
        start: "Tänk om cyklar bara kunde röra sig på målade linjer?",
        steps: [
            "Vägar skulle börja se ut som jättestora målarböcker.",
            "Trafikingenjörer skulle arbeta tillsammans med konstnärer.",
            "Städer skulle måla om rutter varje natt för att hålla dem tydliga."
        ],
        end: "Gatukonstnärer skulle bli lika viktiga som vägbyggare."
    },
    {
        start: "Tänk om varje klassrumsstol bara kunde sitta på en gång per dag?",
        steps: [
            "Skolor skulle rotera stolar mellan olika rum.",
            "Elever skulle börja bära egna sitsmattor.",
            "Möbelföretag skulle designa snabbare bytesystem."
        ],
        end: "Att dela stolar skulle bli en normal skolrutin."
    },
    {
        start: "Tänk om kaféer bara serverade drycker i genomskinliga koppar?",
        steps: [
            "Kunder skulle börja lägga märke till lager, färger och misstag.",
            "Baristor skulle tävla genom dryckdesign.",
            "Menyer skulle bli mer visuella och färgbaserade."
        ],
        end: "Dryckspresentation skulle bli en del av beställningen."
    },
    {
        start: "Tänk om varje dörr bara öppnades efter en kort rimmad vers?",
        steps: [
            "Människor skulle hitta på entréverser för varje byggnad.",
            "Skolor skulle lära ut rim-etikett.",
            "Ingen skulle glömma sina nycklar, men många skulle glömma versen."
        ],
        end: "Poesi skulle bli användbart i vardagen."
    },
    {
        start: "Tänk om varje tunnelbanestation luktade som en enda frukt?",
        steps: [
            "Resenärer skulle komma ihåg stationer efter doft istället för skyltar.",
            "Kollektivtrafiksystem skulle börja använda doft som navigationsverktyg.",
            "Annonsörer skulle försöka varumärka hela stadsdelar efter doft."
        ],
        end: "Städer skulle börja använda dofter som en del av navigeringen."
    },
    {
        start: "Tänk om en tappad strumpa alltid teleporterades till närmaste tvättkorg?",
        steps: [
            "Människor skulle sluta leta under sängen.",
            "Placeringen av tvättkorgen skulle bli en seriös strategi.",
            "Rena rum skulle planeras runt korgzoner."
        ],
        end: "Tvättkorgar skulle bli den viktigaste möbeln i huset."
    },
    {
        start: "Tänk om telefonbatteriet bara laddades när du höll telefonen med båda händerna?",
        steps: [
            "Människor skulle schemalägga laddningspauser som möten.",
            "Telefonställ skulle bli populära överallt.",
            "Kaféer skulle skapa speciella laddningslounger."
        ],
        end: "Laddning skulle bli en social vana istället för en ensam."
    },
    {
        start: "Tänk om varje biblioteksbok viskade ett faktum när den öppnades?",
        steps: [
            "Läsare skulle börja jaga överraskande böcker.",
            "Bibliotekarier skulle organisera hyllor efter nyfikenhetsnivå.",
            "Att studera skulle bli mer som att utforska en labyrint."
        ],
        end: "Bibliotek skulle förvandlas till levande faktalabyrinter."
    },
    {
        start: "Tänk om att läsa ett recept högt ändrade det lite grann?",
        steps: [
            "Kockar skulle börja memorera recept istället för att läsa dem högt.",
            "Ljudrecept skulle behöva noggrann testning.",
            "Köksrutiner skulle bero på ton, timing och tystnad."
        ],
        end: "Matlagning skulle bli en blandning av läsning och föreställning."
    },
    {
        start: "Tänk om skuggan av varje träd pekade mot närmaste vattenkälla?",
        steps: [
            "Vandrare skulle börja följa trädskuggor med flit.",
            "Parker skulle plantera träd som ledstjärnor.",
            "Kartappar skulle jämföra skuggor med GPS-data."
        ],
        end: "Träd skulle bli naturliga navigationshjälpmedel."
    },
    {
        start: "Tänk om varje gång du ljög knarrade dina skor?",
        steps: [
            "Ärlighet skulle bli något man kunde höra.",
            "Offentliga tal skulle plötsligt bli mycket tystare.",
            "Skoföretag skulle börja göra anti-knarr-filter."
        ],
        end: "Sanningstest skulle bli en skoindustri."
    },
    {
        start: "Tänk om hissknappar bara kunde tryckas i par?",
        steps: [
            "Människor skulle behöva koordinera sina våningsval.",
            "Byggnadstrafik skulle bli långsammare men mer planerad.",
            "Vänner skulle börja ta hissen tillsammans med flit."
        ],
        end: "Att åka upp eller ner skulle bli en social aktivitet."
    },
    {
        start: "Tänk om varje brevlåda levererade ett extra överraskningsföremål?",
        steps: [
            "Människor skulle kolla posten med mer spänning.",
            "Oväntade föremål skulle skapa nya sorteringsvanor.",
            "Postförsäkring skulle bli mycket mer populär."
        ],
        end: "Posten skulle kännas som en daglig lotteri."
    },
    {
        start: "Tänk om ett spillt glas vatten förvandlades till en liten karta?",
        steps: [
            "Olyckor skulle börja bli ledtrådar.",
            "Barn och detektiver skulle studera pölar mer noggrant.",
            "Kartläsningslekar skulle använda vattenfläckar som pussel."
        ],
        end: "Röran skulle börja bära information."
    },
    {
        start: "Tänk om varje sprucken ballong släppte en talad mening?",
        steps: [
            "Barn skulle spara ballonger för meddelanden.",
            "Fester skulle bli fulla av oavsiktliga tillkännagivanden.",
            "Ballongtillverkare skulle trycka varningar och meddelandeetiketter."
        ],
        end: "Ballonger skulle bli hemliga meddelandebärare."
    }
];

const whatif_deduction_sv = [
    {
        start: "Tänk om choklad var den hälsosammaste maten på jorden?",
        end: "Tandläkare går helt i konkurs."
    },
    {
        start: "Tänk om människor inte behövde sova alls?",
        end: "Begreppet 'natt' förbjuds av kommunerna."
    },
    {
        start: "Tänk om alla insekter blev lika stora som medelstora hundar?",
        end: "Myggnät ersätts av stålgarageportar."
    },
    {
        start: "Tänk om högt skratt fick dig att sväva i luften?",
        end: "Komediklubbar byggs med vadderade tak."
    },
    {
        start: "Tänk om husdjur blev cheferna i huset?",
        end: "Människor tvingas bära halsband och sova på mattor."
    },
    {
        start: "Tänk om leksaker vaknade till liv bara när alla i huset sov?",
        end: "Barn håller sig vakna i dagar för att fånga sina nallar."
    },
    {
        start: "Tänk om vår spegelbild hade sin egen personlighet?",
        end: "Människor köper en andra spegel för att bråka med sin egen spegelbild."
    },
    {
        start: "Tänk om regnet föll i slumpmässiga färger istället för vatten?",
        end: "Vita kläder förbjuds enligt lag för att förhindra regnbågsfläckar."
    },
    {
        start: "Tänk om växter skrek när du klippte dem?",
        end: "Gräsklippare ersätts av ömtåliga plantsaxar."
    },
    {
        start: "Tänk om böcker läste sig själva högt när de öppnades?",
        end: "Bibliotek blir de högljuttaste och mest kaotiska platserna på jorden."
    }
];
