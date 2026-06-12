const whatif_single_it = [
    "E se la gravità si spegnesse esattamente per 1 minuto ogni giorno?",
    "E se gli animali potessero parlare, ma si lamentassero solo del tempo?",
    "E se tutti gli oceani fossero sostituiti con succo d'arancia?",
    "E se potessi muoverti solo saltando come un canguro?",
    "E se ogni bugia ti facesse crescere il naso letteralmente come Pinocchio?",
    "E se le nuvole fossero fatte di zucchero filato dolce?",
    "E se le persone brillassero al buio quando sono felici?",
    "E se i soldi crescessero davvero sugli alberi del giardino?",
    "E se gli umani non avessero più bisogno di dormire?",
    "E se tutti gli insetti diventassero grandi come cani di media taglia?",
    "E se ridere forte ti facesse fluttuare nell'aria?",
    "E se potessimo mangiare solo pastelli colorati?",
    "E se il nostro riflesso nello specchio avesse una personalità propria?",
    "E se i giocattoli prendessero vita solo quando tutti in casa dormono?",
    "E se i dinosauri non fossero mai scomparsi e vivessero tra noi come animali domestici?",
    "E se gli alberi potessero spostarsi in un altro posto quando si annoiano?",
    "E se le ombre potessero fare scherzi e muoversi indipendentemente da noi?",
    "E se il cioccolato fosse il cibo più sano sulla Terra?",
    "E se potessimo registrare e rivedere i nostri sogni come film?",
    "E se gli animali domestici diventassero i capi e gli umani dovessero obbedir loro?",
    "E se ogni scala diventasse uno scivolo dopo il tramonto?",
    "E se le finestre della classe potessero mostrare il tempo di domani?",
    "E se lo zaino accettasse solo oggetti che corrispondono all'umore di oggi?",
    "E se i semafori cambiassero in base al suono più forte nelle vicinanze?",
    "E se i libri della biblioteca dimenticassero il finale fino al mattino?",
    "E se ogni albero lasciasse cadere uno strumento utile invece delle foglie?",
    "E se le scarpe facessero un ritmo diverso per ogni emozione?",
    "E se le porte ricordassero l'ultima canzone che hanno sentito?",
    "E se l'oceano seguisse l'orario scolastico invece della Luna?",
    "E se le cartoline arrivassero prima di essere scritte?",
    "E se un cucchiaio di pioggia potesse alimentare una piccola lampada per un'ora?",
    "E se la tua ombra puntasse sempre verso l'oggetto nascosto più vicino?",
    "E se ogni canzone che canticchi attirasse un insetto diverso?",
    "E se gli scaffali del supermercato si riorganizzassero in base alla difficoltà dei puzzle?",
    "E se gli specchi mostrassero la persona che hai aiutato più di recente?",
    "E se le matite si allungassero ogni volta che risolvi un problema?",
    "E se le nuvole potessero essere conservate in barattoli e riaperte dopo?",
    "E se gli autobus scegliessero da soli il percorso più breve?",
    "E se ogni ricetta cambiasse a seconda di chi cucina?",
    "E se la campanella della scuola suonasse solo per gli studenti che hanno finito il lavoro?",
    "E se ogni città avesse un fiume sotterraneo nascosto di musica?",
    "E se la prima neve cancellasse istantaneamente ogni impronta?",
    "E se le tastiere digitassero la prossima parola che stai per pensare?",
    "E se le piante di casa potessero spiegare i loro bisogni in una sola frase?",
    "E se i compleanni arrivassero quando cambia il tuo colore preferito?",
    "E se le mappe si aggiornassero ogni volta che qualcuno sposta una sedia?",
    "E se i libri sullo scaffale si scambiassero di posto quando nessuno guarda?",
    "E se il vento portasse piccoli biglietti invece delle foglie?",
    "E se ogni palloncino dicesse la verità su dove è stato?",
    "E se un colpo sul muro potesse rivelare se qualcuno è dietro?"
];

const whatif_chain_it = [
    {
        start: "E se la gravità si spegnesse esattamente per 1 minuto ogni giorno?",
        steps: ["Persone e oggetti fluttuano nell'aria.", "Tutti si battono la testa contro il soffitto.", "I caschi diventano moda obbligatoria in casa."],
        end: "I caschi diventano moda obbligatoria in casa."
    },
    {
        start: "E se gli animali potessero parlare, ma si lamentassero solo del tempo?",
        steps: ["I cani rifiutano di uscire sotto la pioggia e protestano ad alta voce.", "Le vendite di ombrelli speciali per cani esplodono.", "Le previsioni del tempo si fanno chiedendo ai piccioni."],
        end: "Le previsioni del tempo si fanno chiedendo ai piccioni."
    },
    {
        start: "E se tutti gli oceani fossero sostituiti con succo d'arancia?",
        steps: ["L'oceano diventa molto acido e molto dolce.", "I pesci mutano per sopravvivere all'acido citrico.", "Gli squali diventano dipendenti dallo zucchero e nuotano più velocemente."],
        end: "Gli squali diventano dipendenti dallo zucchero e nuotano più velocemente."
    },
    {
        start: "E se potessi muoverti solo saltando come un canguro?",
        steps: ["Camminare e correre diventano rigorosamente impossibili.", "I soffitti di tutte le case sono costruiti 3 volte più alti.", "I marciapiedi sono sostituiti da enormi trampolini."],
        end: "I trampolini sostituiscono tutti i marciapiedi della città."
    },
    {
        start: "E se ogni bugia ti facesse crescere il naso come Pinocchio?",
        steps: ["I politici hanno nasi lunghi 3 metri.", "Le porte di uffici e case devono essere allargate.", "Tagliare il naso diventa una routine quotidiana del mattino."],
        end: "Tagliare il naso diventa una routine quotidiana del mattino."
    },
    {
        start: "E se le nuvole fossero fatte di zucchero filato dolce?",
        steps: ["Piove acqua zuccherata e appiccicosa.", "Tutte le auto e le strade diventano estremamente appiccicose.", "I lavaggi auto sono sostituiti da macchine da leccare."],
        end: "I lavaggi auto sono sostituiti da macchine da leccare."
    },
    {
        start: "E se gli alberi potessero spostarsi in un altro posto quando si annoiano?",
        steps: ["Le foreste cambiano continuamente disposizione durante la notte.", "Le mappe GPS diventano inutili e obsolete in poche ore.", "Le persone costruiscono case su ruote per seguire i loro alberi preferiti."],
        end: "Le persone costruiscono case su ruote per seguire i loro alberi preferiti."
    },
    {
        start: "E se potessimo registrare e rivedere i nostri sogni come film?",
        steps: ["I cinema dei sogni diventano più popolari dei cinema normali.", "Le persone vendono i loro migliori incubi come blockbuster horror.", "Vengono venduti caschi anti-sogno per proteggere la privacy del sonno."],
        end: "Vengono venduti caschi anti-sogno per proteggere la privacy del sonno."
    },
    {
        start: "E se i dinosauri non fossero mai scomparsi e vivessero tra noi come animali domestici?",
        steps: ["I T-Rex sostituiscono i cani da guardia nei grandi giardini.", "Le città devono costruire enormi camion per pulire le feci dei dinosauri.", "I mini-triceratopo diventano animali domestici popolari per gli appartamenti."],
        end: "I mini-triceratopo diventano animali domestici popolari per gli appartamenti."
    },
    {
        start: "E se le ombre potessero muoversi indipendentemente da noi?",
        steps: ["Le ombre scappano di notte per fare festa senza i loro proprietari.", "Le persone si svegliano con l'ombra di qualcun altro attaccata a loro.", "Viene inventata una nuova professione di cacciatori di ombre per riportare le ombre fuggitive."],
        end: "Viene inventata una nuova professione di cacciatori di ombre."
    },
    {
        start: "E se le biciclette potessero muoversi solo su linee dipinte?",
        steps: [
            "Le strade sembrerebbero enormi libri da colorare.",
            "Gli ingegneri stradali lavorerebbero insieme agli artisti.",
            "Le città ridipingerebbero i percorsi ogni notte per tenerli chiari."
        ],
        end: "I pittori di strada diventerebbero importanti quanto i costruttori di strade."
    },
    {
        start: "E se ogni sedia della classe potesse essere usata solo una volta al giorno?",
        steps: [
            "Le scuole farebbero ruotare le sedie tra diverse aule.",
            "Gli studenti inizierebbero a portare i propri tappetini per sedersi.",
            "Le aziende di mobili progetterebbero sistemi di scambio più veloci."
        ],
        end: "La condivisione delle sedie diventerebbe una routine scolastica normale."
    },
    {
        start: "E se i bar servissero bevande solo in bicchieri trasparenti?",
        steps: [
            "I clienti inizierebbero a notare strati, colori e errori.",
            "I baristi competerebbero attraverso il design delle bevande.",
            "I menu diventerebbero più visivi e basati sui colori."
        ],
        end: "La presentazione delle bevande diventerebbe parte dell'ordine."
    },
    {
        start: "E se ogni porta si aprisse solo dopo una breve rima?",
        steps: [
            "Le persone inventerebbero rime d'ingresso per ogni edificio.",
            "Le scuole insegnerebbero l'etichetta delle rime.",
            "Nessuno dimenticherebbe le chiavi, ma molti dimenticherebbero il verso."
        ],
        end: "La poesia diventerebbe utile nella vita quotidiana."
    },
    {
        start: "E se ogni stazione della metropolitana profumasse di un frutto diverso?",
        steps: [
            "I passeggeri ricorderebbero le stazioni dall'odore invece che dai cartelli.",
            "I sistemi di trasporto userebbero l'odore come strumento di navigazione.",
            "Gli inserzionisti cercherebbero di marchiare interi quartieri con il profumo."
        ],
        end: "Le città inizierebbero a usare gli odori come parte della navigazione."
    },
    {
        start: "E se un calzino perso si teletrasportasse sempre nel cesto della biancheria più vicino?",
        steps: [
            "Le persone smetterebbero di cercare sotto i letti.",
            "Il posizionamento del cesto della biancheria diventerebbe una strategia seria.",
            "Le stanze pulite sarebbero pianificate intorno alle zone dei cesti."
        ],
        end: "I cesti della biancheria diventerebbero il mobile più importante della casa."
    },
    {
        start: "E se le batterie del telefono si caricassero solo mentre tieni il telefono con entrambe le mani?",
        steps: [
            "Le persone pianificherebbero pause di ricarica come riunioni.",
            "I supporti per telefono diventerebbero popolari ovunque.",
            "I bar creerebbero salotti speciali per la ricarica."
        ],
        end: "La ricarica diventerebbe un'abitudine sociale invece che un'attività solitaria."
    },
    {
        start: "E se ogni libro della biblioteca sussurrasse un fatto quando lo apri?",
        steps: [
            "I lettori inizierebbero a cercare libri sorprendenti.",
            "I bibliotecari organizzerebbero gli scaffali per livello di curiosità.",
            "Studiare sembrerebbe più esplorare un labirinto."
        ],
        end: "Le biblioteche si trasformerebbero in labirinti di fatti viventi."
    },
    {
        start: "E se leggere una ricetta ad alta voce la modificasse leggermente?",
        steps: [
            "Gli chef memorizzerebbero le ricette invece di leggerle ad alta voce.",
            "Le ricette audio richiederebbero test accurati.",
            "Le routine di cucina dipenderebbero da tono, tempismo e silenzio."
        ],
        end: "Cucinare diventerebbe un mix di lettura e performance."
    },
    {
        start: "E se l'ombra di ogni albero puntasse verso la fonte d'acqua più vicina?",
        steps: [
            "Gli escursionisti inizierebbero a seguire le ombre degli alberi apposta.",
            "I parchi pianterebbero alberi come guide dei sentieri.",
            "Le app delle mappe confronterebbero le ombre con i dati GPS."
        ],
        end: "Gli alberi diventerebbero aiuti naturali alla navigazione."
    },
    {
        start: "E se le scarpe scricchiolassero ogni volta che qualcuno mente?",
        steps: [
            "L'onestà diventerebbe qualcosa che si può sentire.",
            "I discorsi pubblici diventerebbero improvvisamente molto più silenziosi.",
            "Le aziende di scarpe svilupperebbero filtri anti-scricchiolio."
        ],
        end: "Il controllo della verità diventerebbe un'industria delle calzature."
    },
    {
        start: "E se i pulsanti dell'ascensore potessero essere premuti solo in coppia?",
        steps: [
            "Le persone dovrebbero coordinare le scelte del piano.",
            "Il traffico negli edifici diventerebbe più lento ma più pianificato.",
            "Gli amici prenderebbero l'ascensore insieme apposta."
        ],
        end: "Salire o scendere diventerebbe un'attività sociale."
    },
    {
        start: "E se ogni cassetta della posta consegnasse un oggetto sorpresa in più?",
        steps: [
            "Le persone controllerebbero la posta con più entusiasmo.",
            "Gli oggetti inaspettati creerebbero nuove abitudini di smistamento.",
            "L'assicurazione postale diventerebbe molto più popolare."
        ],
        end: "La posta sembrerebbe una lotteria quotidiana."
    },
    {
        start: "E se un bicchiere d'acqua rovesciato si trasformasse in una piccola mappa?",
        steps: [
            "Gli incidenti inizierebbero a diventare indizi.",
            "Bambini e detective esaminerebbero le pozzanghere più attentamente.",
            "I giochi di lettura delle mappe userebbero le pozzanghere come puzzle."
        ],
        end: "Il disordine inizierebbe a portare informazioni."
    },
    {
        start: "E se ogni palloncino scoppiato rilasciasse una frase parlata?",
        steps: [
            "I bambini conserverebbero i palloncini per i messaggi.",
            "Le feste sarebbero piene di annunci accidentali.",
            "I produttori di palloncini stamperebbero avvertimenti ed etichette dei messaggi."
        ],
        end: "I palloncini diventerebbero portatori di note segrete."
    }
];

const whatif_deduction_it = [
    {
        start: "E se il cioccolato fosse il cibo più sano sulla Terra?",
        end: "I dentisti falliscono completamente."
    },
    {
        start: "E se gli umani non avessero più bisogno di dormire?",
        end: "Il concetto di 'notte' è vietato dai consigli comunali."
    },
    {
        start: "E se tutti gli insetti diventassero grandi come cani di media taglia?",
        end: "Le zanzariere sono sostituite da porte da garage in acciaio."
    },
    {
        start: "E se ridere forte ti facesse fluttuare nell'aria?",
        end: "I club di commedia sono costruiti con soffitti imbottiti."
    },
    {
        start: "E se gli animali domestici diventassero i capi della casa?",
        end: "Gli umani sono costretti a indossare collari e dormire sui tappeti."
    },
    {
        start: "E se i giocattoli prendessero vita solo quando tutti in casa dormono?",
        end: "I bambini restano svegli per giorni cercando di catturare i loro orsacchiotti."
    },
    {
        start: "E se il nostro riflesso nello specchio avesse una personalità propria?",
        end: "Le persone comprano un secondo specchio per litigare con il proprio riflesso."
    },
    {
        start: "E se la pioggia cadesse in colori casuali invece che acqua?",
        end: "I vestiti bianchi sono vietati per legge per evitare macchie arcobaleno."
    },
    {
        start: "E se le piante urlassero quando le tagli?",
        end: "I tosaerba sono sostituiti da delicate forbici per piante."
    },
    {
        start: "E se i libri si leggessero da soli ad alta voce quando li apri?",
        end: "Le biblioteche diventano i posti più rumorosi e caotici sulla Terra."
    }
];
