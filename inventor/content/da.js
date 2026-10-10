// Inventor Lab — da (повний переклад; структура як у en.js)
const inventor_db_da = {
  "ui": {
    legendDone: "klaret", legendToday: "i dag", legendMissed: "misset", legendFuture: "kommende",
    "title": "Tænk som en opfinder",
    "howItWorks": "Sådan virker det",
    "start": "START",
    "menuNote": "Tryk på et ikon ovenfor for at se en sektion, og tryk så på Start.",
    "calPrompt": "Tryk på en dag for at se dagens observationsudfordring!",
    "dayLabel": "Dag",
    "example": "Se det i virkeligheden",
    "realInvention": "Ægte opfindelse",
    "searchAround": "🔍 Kig dig omkring",
    "searchHint": "Tryk for at se din minimission",
    "watchVideo": "▶ Se et eksempel på 30 sek.",
    "comingSoon": "Kommer snart",
    "toolOf": "Værktøj {n} af 8",
    "prev": "←",
    "next": "→",
    "submitCoach": "Send til AI-coachen",
    "writePlaceholder": "Skriv din idé her...",
    "useAllItems": "Brug alle 3 ting.",
    "inventory": "Dine ting",
    "hint": "Tip",
    "writeFirst": "Skriv først din opfindelse!",
    "rookie": "BEGYNDER",
    "agent": "AGENT",
    "elite": "ELITE",
    "rookieSub": "Let, med tip",
    "agentSub": "Mellem",
    "eliteSub": "Svær, med begrænsninger",
    "constraint": "Begrænsning",
    "openChallenge": "Åbn udfordringen",
    "unlockAfter": "Låses op efter i dag",
    "todaysLabel": "Dagens jagt",
    "completed": "✓ Fuldført",
    "noPenalty": "Ingen straf — fremskridt tæller stadig.",
    "futureHint": "Hele tjeklisten låses op, når du når denne dag.",
    "startDayHunt": "Start jagten for dag {n}",
    "notAvailable": "Ikke tilgængelig endnu",
    "previewTheme": "Tema",
    "completeLabel": "fuldført",
    "of30": "af 30",
    "weekLabel": "Uge",
    "streakLabel": "dage i træk",
    "doAgain": "↺ Gør det igen",
    "unlocksOn": "🔒 Låses op senere",
    "catchUp": "↺ Indhent når som helst",
    "dayComplete": "✓ Dagen er klaret — flot jagt!",
    "markFound": "✓ Markér som fundet",
    "backToToday": "← Tilbage til dagens jagt",
    "viewFullCalendar": "📅 Se hele kalenderen (alle 30 dage)",
    "questMap": "30-dages kort",
    "todaysObservation": "Dagens observation",
    "challengePlaceholder": "Beskriv din opfindelse: dele, materialer, hvordan den virker...",
    "writeDesignFirst": "Beskriv eller tegn din opfindelse først!",
    "submitDesign": "Send designet til AI-coachen",
    "learnTool": "↗ Lær dette TRIZ-værktøj",
    "bonusChallenge": "Bonus",
    "successLooks": "Sådan ser succes ud",
    "paperNote": "📓 Tegn på papir — og beskriv det nedenfor",
    "designSteps": "Dine designtrin",
    "constraints": "Begrænsninger",
    "designBrief": "Designopgave",
    "packOf": "Pakke {n} af {total}",
    "yourInvention": "Din opfindelse",
    "missionGoal": "Flugtmål",
    "anotherMission": "🎲 En anden mission",
    "hideHint": "－ Skjul tip",
    "showHint": "＋ Vis tip",
    "escapePlan": "Din flugtplan",
    "missionOf": "Mission {n} af {total}",
    "hideSteps": "－ Skjul designtrin",
    "showSteps": "＋ Vis designtrin"
  },
  "menu": {
    "m1": "Værktøjer og eksempler",
    "m2": "Observationskalender",
    "m3": "Udfordringer pr. værktøj",
    "m4": "Mission Possible",
    "back": "Tilbage",
    "backMenu": "Tilbage til menuen",
    "genBtn": "Lav en mission",
    "tcTitle": "Beskrivelse af udfordringen"
  },
  "modes": [
    {
      "title": "Værktøjer og eksempler",
      "rules": "<div><span>🛠️</span> Lær 8 TRIZ-værktøjer, som rigtige opfindere bruger hver dag.</div><div><span>👀</span> Se eksempler, og find dem så derhjemme!</div>"
    },
    {
      "title": "Observationskalender",
      "rules": "<div><span>📅</span> En interaktiv ingeniørjagt på 30 dage.</div><div><span>🔍</span> En ny TRIZ-jagt hver dag — kig rundt på værelset, i køkkenet eller i haven.</div>"
    },
    {
      "title": "Udfordringer pr. værktøj",
      "rules": "<div><span>🎯</span> Designudfordringer, hvor du skal bruge ét TRIZ-værktøj.</div><div><span>🧠</span> Tegn din idé, og send den til AI-coachen for feedback!</div>"
    },
    {
      "title": "Mission Possible",
      "rules": "<div><span>🚀</span> 24 escape-room-missioner: Begynder, Agent, Elite.</div><div><span>💡</span> Kombinér 3 tilfældige ting — opfind din vej ud!</div>"
    }
  ],
  "tools": [
    {
      "name": "1. Opdeling",
      "desc": "Del én ting op i selvstændige dele — eller gør den nem at skille ad og samle igen.",
      "realWorld": "Lego · Schweizerkniv",
      "examples": [
        {
          "icon": "🧱",
          "label": "Modulreoler",
          "note": "Tilføj eller fjern sektioner"
        },
        {
          "icon": "✏️",
          "label": "Kuglepen i flere dele",
          "note": "Hætte, skaft og refill hver for sig"
        }
      ],
      "searchTasks": [
        "Noget, der kan skilles ad i stykker",
        "Noget, du kan flytte rundt på eller ændre størrelsen på",
        "Noget, der er lettere at bære, fordi det kan deles"
      ],
      "ex": "Modulreoler eller en kuglepen i flere dele."
    },
    {
      "name": "2. Indlejring",
      "desc": "Sæt én ting inden i en anden — som russiske dukker, men til rigtig ingeniørkunst.",
      "realWorld": "Målebægre · Kikkert",
      "examples": [
        {
          "icon": "🥄",
          "label": "Målebægre",
          "note": "Det lille bæger passer ind i det store"
        },
        {
          "icon": "🪆",
          "label": "Stablede skåle",
          "note": "Samme form, den mindre inden i den større"
        }
      ],
      "searchTasks": [
        "To ting, der passer ind i hinanden",
        "Noget, der sparer plads ved at blive stablet",
        "Et sæt, hvor hver del har et 'hjem' inden i en anden"
      ],
      "ex": "Målebægre, russiske dukker eller en teleskoplinse."
    },
    {
      "name": "3. Sammensmeltning",
      "desc": "Saml to opgaver i én ting — eller gør to trin på samme tid.",
      "realWorld": "Schweizerkniv · Shampoo + balsam",
      "examples": [
        {
          "icon": "🖍️",
          "label": "Tusch med to ender",
          "note": "To farver, ét værktøj"
        },
        {
          "icon": "🪥",
          "label": "Tandbørste + tungeskraber",
          "note": "To opgaver, ét håndtag"
        }
      ],
      "searchTasks": [
        "Et værktøj, der klarer to forskellige opgaver",
        "Noget, der har samlet to gamle, separate ting",
        "En dims, der sparer dig et ekstra trin"
      ],
      "ex": "Tusch med to ender, tandbørste med tungeskraber."
    },
    {
      "name": "4. Asymmetri",
      "desc": "Gør en symmetrisk form ujævn — ofte for bedre greb, balance eller sikkerhed.",
      "realWorld": "Ergonomisk mus · Bølgesaks",
      "examples": [
        {
          "icon": "🖱️",
          "label": "Ergonomisk mus",
          "note": "Buet, så den passer til hånden"
        },
        {
          "icon": "✂️",
          "label": "Køkkensaks",
          "note": "Det ene håndtag er større for at give kraft"
        }
      ],
      "searchTasks": [
        "En ting, der IKKE er spejlsymmetrisk",
        "Noget, der er formet til en bestemt hånd eller side",
        "Noget, der er sværere at vælte på grund af sin form"
      ],
      "ex": "Ergonomisk computermus eller asymmetrisk køkkensaks."
    },
    {
      "name": "5. Feedback",
      "desc": "Tilføj en løkke: tingen mærker noget og justerer sig selv (eller beder dig justere).",
      "realWorld": "Termostat · Benzinmåler i bilen",
      "examples": [
        {
          "icon": "🌡️",
          "label": "Rumtermostat",
          "note": "Måler temperaturen → tænder/slukker varmen"
        },
        {
          "icon": "🔋",
          "label": "Batteriikon på telefonen",
          "note": "Viser status → du sætter den til opladning"
        }
      ],
      "searchTasks": [
        "En enhed med en skærm eller lampe, der viser status",
        "Noget, der bipper, når det er færdigt",
        "Noget, der tænder/slukker af sig selv efter forholdene"
      ],
      "ex": "En termostat, der styrer varmen efter rummets temperatur."
    },
    {
      "name": "6. Selvbetjening",
      "desc": "Få tingen til at vedligeholde eller oplade sig selv — mindre arbejde for mennesker.",
      "realWorld": "Robotstøvsuger · Selvvandende urtepotte",
      "examples": [
        {
          "icon": "🤖",
          "label": "Robotstøvsuger",
          "note": "Gør rent og kører tilbage til laderen"
        },
        {
          "icon": "🌱",
          "label": "Selvvandende krukke",
          "note": "Gemmer vand og giver rødderne det langsomt"
        }
      ],
      "searchTasks": [
        "Noget, der gør sig selv rent eller oplader sig selv",
        "En enhed, der fylder sig selv op eller nulstiller sig automatisk",
        "Noget, der klarer sin 'ekstra opgave' uden at blive bedt om det"
      ],
      "ex": "En robotstøvsuger, der selv kører tilbage til laderen."
    },
    {
      "name": "7. Kopiering",
      "desc": "Erstat en tung, skrøbelig eller dyr ting med en billig kopi — et foto, en scanning eller en simulation.",
      "realWorld": "Google Maps · 3D-print fra scanning",
      "examples": [
        {
          "icon": "📱",
          "label": "Kort på telefonen",
          "note": "Erstatter papirkort + kompas"
        },
        {
          "icon": "📸",
          "label": "Foto af et dokument",
          "note": "Du behøver ikke bære originalen"
        }
      ],
      "searchTasks": [
        "En digital udgave af en fysisk ting, du ejer",
        "Et foto eller en scanning, der bruges i stedet for den rigtige ting",
        "En prøve eller demo, du kan 'prøve, før du køber'"
      ],
      "ex": "Et kort på telefonen i stedet for en 3D-model i ler."
    },
    {
      "name": "8. Farveskift",
      "desc": "Skift farve eller gennemsigtighed for at vise en tilstand — varm, klar, sikker eller farlig.",
      "realWorld": "Humørring · Trafiklys",
      "examples": [
        {
          "icon": "🕶️",
          "label": "Solbriller, der skifter",
          "note": "Bliver mørkere i stærk sol"
        },
        {
          "icon": "🚦",
          "label": "Trafiklys",
          "note": "Farve = regel for handling"
        }
      ],
      "searchTasks": [
        "Noget, der skifter farve ved varme eller kulde",
        "En etiket eller et klistermærke, der viser 'færdig' eller 'advarsel'",
        "Noget gennemsigtigt, der bliver uigennemsigtigt (eller omvendt)"
      ],
      "ex": "Briller, der bliver mørkere i sollys."
    }
  ],
  "calendarDays": [
    {
      "day": 1,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Indlejringsjagt",
      "tool": "Indlejring",
      "hunt": "Find 2 ting, hvor den ene passer ind i den anden.",
      "hint": "Kig i køkkenet, legetøjskassen eller værktøjskassen.",
      "checklist": [
        "Én ting passer ind i en anden",
        "Tegn eller navngiv begge ting",
        "Bonus: hvor meget plads sparede indlejringen?"
      ],
      "unlock": "Indlejringspakke"
    },
    {
      "day": 2,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Opdelingsjagt",
      "tool": "Opdeling",
      "hunt": "Find noget, der kan skilles ad i stykker.",
      "hint": "Hvorfor delte opfinderen det op?",
      "checklist": [
        "Noget med separate dele",
        "Forklar, hvorfor opdelingen hjælper",
        "Bonus: kan du samle det på en anden måde?"
      ],
      "unlock": "Opdelingspakke"
    },
    {
      "day": 3,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Asymmetrijagt",
      "tool": "Asymmetri",
      "hunt": "Find én ting, der IKKE er symmetrisk.",
      "hint": "Sakse, krus og computermus er gode steder at kigge.",
      "checklist": [
        "Én asymmetrisk ting",
        "Gæt, hvorfor formen er ujævn",
        "Bonus: ville symmetri gøre den dårligere?"
      ],
      "unlock": "Asymmetripakke"
    },
    {
      "day": 4,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Sammensmeltningsjagt",
      "tool": "Sammensmeltning",
      "hunt": "Find et værktøj, der klarer to opgaver i én.",
      "hint": "Køkkenredskaber er fulde af sammensmeltede opfindelser.",
      "checklist": [
        "Et 2-i-1-værktøj",
        "Nævn begge dets opgaver",
        "Bonus: hvad ville du smelte sammen næste gang?"
      ],
      "unlock": "Sammensmeltningspakke"
    },
    {
      "day": 5,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Farveskiftejagt",
      "tool": "Farveskift",
      "hunt": "Find noget, der skifter farve ved varme, kulde eller lys.",
      "hint": "Hvad prøver det at fortælle dig?",
      "checklist": [
        "Én ting, der skifter farve",
        "Hvad udløser skiftet?",
        "Bonus: tegn før og efter"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 6,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Feedbackjagt",
      "tool": "Feedback",
      "hunt": "Find en enhed, der viser status med en skærm, en lampe eller et bip.",
      "hint": "Hvad måler den, eller hvad fortæller den dig?",
      "checklist": [
        "Én feedbackenhed",
        "Hvad sker der, når status ændrer sig?",
        "Bonus: hvad hvis den ikke havde noget signal?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 7,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Selvbetjeningsjagt",
      "tool": "Selvbetjening",
      "hunt": "Find noget, der gør sig selv rent, oplader sig selv eller fylder sig selv op.",
      "hint": "Robotstøvsugere og krukker tæller!",
      "checklist": [
        "Én selvbetjenende ting",
        "Hvilken ekstra opgave klarer den selv?",
        "Bonus: hvilken kedelig opgave fjernede den?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 8,
      "week": 1,
      "weekTheme": "Indlejring",
      "title": "Kopieringsjagt",
      "tool": "Kopiering",
      "hunt": "Find en digital kopi af noget fysisk.",
      "hint": "Fotos, scanninger og apps tæller alle sammen.",
      "checklist": [
        "Én kopi, der erstatter en fysisk ting",
        "Hvad erstattede kopien?",
        "Bonus: hvornår er kopien bedre end den rigtige ting?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 9,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Indlejringsjagt",
      "tool": "Indlejring",
      "hunt": "Find 2 ting, hvor den ene passer ind i den anden.",
      "hint": "Kig i køkkenet, legetøjskassen eller værktøjskassen.",
      "checklist": [
        "Én ting passer ind i en anden",
        "Tegn eller navngiv begge ting",
        "Bonus: hvor meget plads sparede indlejringen?"
      ],
      "unlock": "Indlejringspakke"
    },
    {
      "day": 10,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Opdelingsjagt",
      "tool": "Opdeling",
      "hunt": "Find noget, der kan skilles ad i stykker.",
      "hint": "Hvorfor delte opfinderen det op?",
      "checklist": [
        "Noget med separate dele",
        "Forklar, hvorfor opdelingen hjælper",
        "Bonus: kan du samle det på en anden måde?"
      ],
      "unlock": "Opdelingspakke"
    },
    {
      "day": 11,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Asymmetrijagt",
      "tool": "Asymmetri",
      "hunt": "Find én ting, der IKKE er symmetrisk.",
      "hint": "Sakse, krus og computermus er gode steder at kigge.",
      "checklist": [
        "Én asymmetrisk ting",
        "Gæt, hvorfor formen er ujævn",
        "Bonus: ville symmetri gøre den dårligere?"
      ],
      "unlock": "Asymmetripakke"
    },
    {
      "day": 12,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Sammensmeltningsjagt",
      "tool": "Sammensmeltning",
      "hunt": "Find et værktøj, der klarer to opgaver i én.",
      "hint": "Køkkenredskaber er fulde af sammensmeltede opfindelser.",
      "checklist": [
        "Et 2-i-1-værktøj",
        "Nævn begge dets opgaver",
        "Bonus: hvad ville du smelte sammen næste gang?"
      ],
      "unlock": "Sammensmeltningspakke"
    },
    {
      "day": 13,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Farveskiftejagt",
      "tool": "Farveskift",
      "hunt": "Find noget, der skifter farve ved varme, kulde eller lys.",
      "hint": "Hvad prøver det at fortælle dig?",
      "checklist": [
        "Én ting, der skifter farve",
        "Hvad udløser skiftet?",
        "Bonus: tegn før og efter"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 14,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Feedbackjagt",
      "tool": "Feedback",
      "hunt": "Find en enhed, der viser status med en skærm, en lampe eller et bip.",
      "hint": "Hvad måler den, eller hvad fortæller den dig?",
      "checklist": [
        "Én feedbackenhed",
        "Hvad sker der, når status ændrer sig?",
        "Bonus: hvad hvis den ikke havde noget signal?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 15,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Selvbetjeningsjagt",
      "tool": "Selvbetjening",
      "hunt": "Find noget, der gør sig selv rent, oplader sig selv eller fylder sig selv op.",
      "hint": "Robotstøvsugere og krukker tæller!",
      "checklist": [
        "Én selvbetjenende ting",
        "Hvilken ekstra opgave klarer den selv?",
        "Bonus: hvilken kedelig opgave fjernede den?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 16,
      "week": 2,
      "weekTheme": "Opdeling",
      "title": "Kopieringsjagt",
      "tool": "Kopiering",
      "hunt": "Find en digital kopi af noget fysisk.",
      "hint": "Fotos, scanninger og apps tæller alle sammen.",
      "checklist": [
        "Én kopi, der erstatter en fysisk ting",
        "Hvad erstattede kopien?",
        "Bonus: hvornår er kopien bedre end den rigtige ting?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 17,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Indlejringsjagt",
      "tool": "Indlejring",
      "hunt": "Find 2 ting, hvor den ene passer ind i den anden.",
      "hint": "Kig i køkkenet, legetøjskassen eller værktøjskassen.",
      "checklist": [
        "Én ting passer ind i en anden",
        "Tegn eller navngiv begge ting",
        "Bonus: hvor meget plads sparede indlejringen?"
      ],
      "unlock": "Indlejringspakke"
    },
    {
      "day": 18,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Opdelingsjagt",
      "tool": "Opdeling",
      "hunt": "Find noget, der kan skilles ad i stykker.",
      "hint": "Hvorfor delte opfinderen det op?",
      "checklist": [
        "Noget med separate dele",
        "Forklar, hvorfor opdelingen hjælper",
        "Bonus: kan du samle det på en anden måde?"
      ],
      "unlock": "Opdelingspakke"
    },
    {
      "day": 19,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Asymmetrijagt",
      "tool": "Asymmetri",
      "hunt": "Find én ting, der IKKE er symmetrisk.",
      "hint": "Sakse, krus og computermus er gode steder at kigge.",
      "checklist": [
        "Én asymmetrisk ting",
        "Gæt, hvorfor formen er ujævn",
        "Bonus: ville symmetri gøre den dårligere?"
      ],
      "unlock": "Asymmetripakke"
    },
    {
      "day": 20,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Sammensmeltningsjagt",
      "tool": "Sammensmeltning",
      "hunt": "Find et værktøj, der klarer to opgaver i én.",
      "hint": "Køkkenredskaber er fulde af sammensmeltede opfindelser.",
      "checklist": [
        "Et 2-i-1-værktøj",
        "Nævn begge dets opgaver",
        "Bonus: hvad ville du smelte sammen næste gang?"
      ],
      "unlock": "Sammensmeltningspakke"
    },
    {
      "day": 21,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Farveskiftejagt",
      "tool": "Farveskift",
      "hunt": "Find noget, der skifter farve ved varme, kulde eller lys.",
      "hint": "Hvad prøver det at fortælle dig?",
      "checklist": [
        "Én ting, der skifter farve",
        "Hvad udløser skiftet?",
        "Bonus: tegn før og efter"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 22,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Feedbackjagt",
      "tool": "Feedback",
      "hunt": "Find en enhed, der viser status med en skærm, en lampe eller et bip.",
      "hint": "Hvad måler den, eller hvad fortæller den dig?",
      "checklist": [
        "Én feedbackenhed",
        "Hvad sker der, når status ændrer sig?",
        "Bonus: hvad hvis den ikke havde noget signal?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 23,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Selvbetjeningsjagt",
      "tool": "Selvbetjening",
      "hunt": "Find noget, der gør sig selv rent, oplader sig selv eller fylder sig selv op.",
      "hint": "Robotstøvsugere og krukker tæller!",
      "checklist": [
        "Én selvbetjenende ting",
        "Hvilken ekstra opgave klarer den selv?",
        "Bonus: hvilken kedelig opgave fjernede den?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 24,
      "week": 3,
      "weekTheme": "Sammensmeltning og asymmetri",
      "title": "Kopieringsjagt",
      "tool": "Kopiering",
      "hunt": "Find en digital kopi af noget fysisk.",
      "hint": "Fotos, scanninger og apps tæller alle sammen.",
      "checklist": [
        "Én kopi, der erstatter en fysisk ting",
        "Hvad erstattede kopien?",
        "Bonus: hvornår er kopien bedre end den rigtige ting?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 25,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Indlejringsjagt",
      "tool": "Indlejring",
      "hunt": "Find 2 ting, hvor den ene passer ind i den anden.",
      "hint": "Kig i køkkenet, legetøjskassen eller værktøjskassen.",
      "checklist": [
        "Én ting passer ind i en anden",
        "Tegn eller navngiv begge ting",
        "Bonus: hvor meget plads sparede indlejringen?"
      ],
      "unlock": "Indlejringspakke"
    },
    {
      "day": 26,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Opdelingsjagt",
      "tool": "Opdeling",
      "hunt": "Find noget, der kan skilles ad i stykker.",
      "hint": "Hvorfor delte opfinderen det op?",
      "checklist": [
        "Noget med separate dele",
        "Forklar, hvorfor opdelingen hjælper",
        "Bonus: kan du samle det på en anden måde?"
      ],
      "unlock": "Opdelingspakke"
    },
    {
      "day": 27,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Asymmetrijagt",
      "tool": "Asymmetri",
      "hunt": "Find én ting, der IKKE er symmetrisk.",
      "hint": "Sakse, krus og computermus er gode steder at kigge.",
      "checklist": [
        "Én asymmetrisk ting",
        "Gæt, hvorfor formen er ujævn",
        "Bonus: ville symmetri gøre den dårligere?"
      ],
      "unlock": "Asymmetripakke"
    },
    {
      "day": 28,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Sammensmeltningsjagt",
      "tool": "Sammensmeltning",
      "hunt": "Find et værktøj, der klarer to opgaver i én.",
      "hint": "Køkkenredskaber er fulde af sammensmeltede opfindelser.",
      "checklist": [
        "Et 2-i-1-værktøj",
        "Nævn begge dets opgaver",
        "Bonus: hvad ville du smelte sammen næste gang?"
      ],
      "unlock": "Sammensmeltningspakke"
    },
    {
      "day": 29,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Farveskiftejagt",
      "tool": "Farveskift",
      "hunt": "Find noget, der skifter farve ved varme, kulde eller lys.",
      "hint": "Hvad prøver det at fortælle dig?",
      "checklist": [
        "Én ting, der skifter farve",
        "Hvad udløser skiftet?",
        "Bonus: tegn før og efter"
      ],
      "unlock": "Udfordringer pr. værktøj"
    },
    {
      "day": 30,
      "week": 4,
      "weekTheme": "Feedback og opfindelser",
      "title": "Feedbackjagt",
      "tool": "Feedback",
      "hunt": "Find en enhed, der viser status med en skærm, en lampe eller et bip.",
      "hint": "Hvad måler den, eller hvad fortæller den dig?",
      "checklist": [
        "Én feedbackenhed",
        "Hvad sker der, når status ændrer sig?",
        "Bonus: hvad hvis den ikke havde noget signal?"
      ],
      "unlock": "Udfordringer pr. værktøj"
    }
  ],
  "calendar": [
    "🔍 Indlejringsjagt: Find 3 ting derhjemme, hvor én ting passer ind i en anden. Tegn eller fotografér dem!",
    "🔍 Opdelingsjagt: Find noget, der kan skilles ad for at spare plads. Hvorfor delte opfinderen det op?",
    "🔍 Asymmetrijagt: Find én ting på dit værelse, der IKKE er symmetrisk. Hvilket problem løser formen?",
    "🔍 Sammensmeltningsjagt: Find et køkkenredskab, der klarer to opgaver i én. Ville du smelte noget andet sammen?",
    "🔍 Farveskiftejagt: Find noget, der skifter farve ved temperatur eller lys. Hvad signalerer det?",
    "🔍 Feedbackjagt: Find en enhed, der viser status med en skærm, en lampe eller et bip. Hvad måler den?",
    "🔍 Opdelingsjagt: Find modulmøbler eller legetøj, du kan flytte rundt på. Hvor mange opstillinger kan du lave?",
    "🔍 Kopieringsjagt: Find en digital kopi af noget fysisk (foto, scanning, app). Hvad erstattede kopien?"
  ],
  "toolChallenges": [
    {
      "name": "Indlejringspakke",
      "tool": "Indlejring",
      "icon": "🍱",
      "brief": "Design en madkasse til skoleturen, hvor hver tallerken, kop og hvert bestik passer ind i det næste — og hele stakken kan holdes i én hånd.",
      "constraints": [
        "Skal kunne indlejres i 3+ lag",
        "Passer i en lomme på en børnetaske",
        "Ingen løse dele"
      ],
      "steps": [
        "Tegn 3 indlejrede lag set ovenfra",
        "Navngiv hvert lag (tallerken, kop, gaffel...)",
        "Nævn materialet — hvorfor er det let?"
      ],
      "success": "En forælder kan pakke madkassen på under 10 sekunder uden løse dele.",
      "bonus": "Tilføj et skjult dessertrum, der kun kan åbnes fra siden.",
      "learnToolIndex": 1,
      "task": "Design en madkasse til skoleturen, hvor hver tallerken, kop og hvert bestik passer ind i det næste — og hele stakken kan holdes i én hånd."
    },
    {
      "name": "Opdelingspakke",
      "tool": "Opdeling",
      "icon": "🛴",
      "brief": "Genopfind et løbehjul til børn, så det kan deles i 3 dele på under 60 sekunder og passe i en almindelig rygsæk.",
      "constraints": [
        "Præcis 3 dele, der kan skilles ad",
        "Samles uden værktøj",
        "Sikkert fra 7 år"
      ],
      "steps": [
        "Tegn løbehjulet samlet OG skilt ad",
        "Opfind en samling (clips, drej, magnet?)",
        "Vis, hvor hver del ligger i tasken"
      ],
      "success": "En 9-årig kan folde det sammen selv, før skoleklokken ringer.",
      "bonus": "Én del fungerer også som lineal.",
      "learnToolIndex": 0,
      "task": "Genopfind et løbehjul til børn, så det kan deles i 3 dele på under 60 sekunder og passe i en almindelig rygsæk."
    },
    {
      "name": "Sammensmeltningspakke",
      "tool": "Sammensmeltning",
      "icon": "🖊️",
      "brief": "Design ÉN dims til skrivebordet, der samler et blyantsglas, en telefonholder med opladning og en læselampe — uden at blive klodset.",
      "constraints": [
        "3 funktioner, 1 plads",
        "Passer i et hjørne på 30 cm",
        "Styr på ledningerne"
      ],
      "steps": [
        "Skriv, hvad du smeltede sammen — og hvad du fjernede",
        "Skitse set ovenfra med navne",
        "Forklar den ENE ting, der gør den kompakt"
      ],
      "success": "En elev får ryddet skrivebordet ved at erstatte 3 ting med din ene dims.",
      "bonus": "Tilføj en 4. mini-funktion (tapeholder, timer osv.) uden at gøre den større.",
      "learnToolIndex": 2,
      "task": "Design ÉN dims til skrivebordet, der samler et blyantsglas, en telefonholder med opladning og en læselampe — uden at blive klodset."
    },
    {
      "name": "Asymmetripakke",
      "tool": "Asymmetri",
      "icon": "☕",
      "brief": "Design et krus til børn, der er meget svært at vælte — med en asymmetrisk bund eller hank.",
      "constraints": [
        "Skal kunne rumme 200 ml",
        "Asymmetri er det vigtigste trick",
        "Sikker kant (ingen skarpe hjørner)"
      ],
      "steps": [
        "Skitse fra siden, der viser den ujævne bund eller hank",
        "Markér tyngdepunktet — hvor er vægten?",
        "Forklar med 1 sætning, hvorfor det bliver stående"
      ],
      "success": "Kruset klarer et lille bump i bordet uden at spilde.",
      "bonus": "Gør det sjovt — en dyreform eller et ansigt, men stadig stabilt.",
      "learnToolIndex": 3,
      "task": "Design et krus til børn, der er meget svært at vælte — med en asymmetrisk bund eller hank."
    },
    {
      "name": "Feedbackpakke",
      "tool": "Feedback",
      "icon": "🌡️",
      "brief": "Design en dims til værelset, der viser børn, hvornår det er tid til en pause fra skærmen — med lys, lyd eller en enkel skærm.",
      "constraints": [
        "Kan ses på 3 meters afstand",
        "Kræver ingen telefon",
        "Barnet kan selv nulstille den"
      ],
      "steps": [
        "Tegn signalet (farve, ikon, lydmønster)",
        "Hvad måler den? (tid, kropsholdning, lys...)",
        "Hvad sker der, hvis man ignorerer den?"
      ],
      "success": "Et barn ved, at det er pausetid, uden at en voksen skal mase.",
      "bonus": "Tilføj et positivt belønningssignal, når de kommer tilbage til tiden.",
      "learnToolIndex": 4,
      "task": "Design en dims til værelset, der viser børn, hvornår det er tid til en pause fra skærmen — med lys, lyd eller en enkel skærm."
    },
    {
      "name": "Selvbetjeningspakke",
      "tool": "Selvbetjening",
      "icon": "🤖",
      "brief": "Design en rygsæk, der 'nulstiller sig selv' efter skole — oplader enheder, lufter ud og sorterer indholdet.",
      "constraints": [
        "Mindst 2 selvbetjeningshandlinger",
        "Bruger kun realistisk teknik fra hjemmet",
        "Ingen magi — forklar mekanismen"
      ],
      "steps": [
        "Skriv, hvad rygsækken gør UDEN hjælp fra mennesker",
        "Tegn kroge, ventilation eller ladestation",
        "Hvad skal barnet stadig gøre selv?"
      ],
      "success": "Forberedelsen mandag morgen tager halvt så lang tid.",
      "bonus": "Opfind en 'station', som tasken glider ind i om natten.",
      "learnToolIndex": 5,
      "task": "Design en rygsæk, der 'nulstiller sig selv' efter skole — oplader enheder, lufter ud og sorterer indholdet."
    },
    {
      "name": "Kopieringspakke",
      "tool": "Kopiering",
      "icon": "📱",
      "brief": "Erstat en tung fysisk ting, som børn bærer hver dag, med en smart digital kopi — men kun hvis kopien faktisk er bedre.",
      "constraints": [
        "Nævn den rigtige ting, der bliver erstattet",
        "Kopien skal nogle gange virke offline",
        "Forklar, hvad du MISTER og hvad du VINDER"
      ],
      "steps": [
        "Før/efter: fysisk mod digital",
        "Hvad viser kopien, som den rigtige ting ikke kan?",
        "Hvornår har du stadig brug for originalen?"
      ],
      "success": "Barnets taske er lettere, OG intet vigtigt er gået tabt.",
      "bonus": "Design en 'nødbackup på papir' til når batteriet løber tør.",
      "learnToolIndex": 6,
      "task": "Erstat en tung fysisk ting, som børn bærer hver dag, med en smart digital kopi — men kun hvis kopien faktisk er bedre."
    },
    {
      "name": "Farveskiftepakke",
      "tool": "Farveskift",
      "icon": "🚦",
      "brief": "Design et låg til madkassen (eller en drikkedunk), der skifter farve for at vise temperaturen eller 'spis mig først'.",
      "constraints": [
        "Farveskiftet skal være tydeligt for et barn",
        "Ingen giftige materialer",
        "Virker uden app"
      ],
      "steps": [
        "Tegn den lukkede OG 'advarsels'-farven",
        "Hvad udløser skiftet? (varme, tid, UV...)",
        "Hvad betyder hver farve?"
      ],
      "success": "Både forælder og barn forstår signalet med det samme.",
      "bonus": "Tilføj et farveforklaringsmærke, som børn selv kan tilpasse.",
      "learnToolIndex": 7,
      "task": "Design et låg til madkassen (eller en drikkedunk), der skifter farve for at vise temperaturen eller 'spis mig først'."
    }
  ],
  "promo": {
    "t": "Kan du lide spillet?",
    "st": "Få arbejdsbogen 'Think Like an Inventor' på Amazon!",
    "btn": "Køb bogen",
    "backHub": "← Hub"
  }
};

const inventor_missions_da = {
  "rookie": [
    {
      "scenario": "Du skal bære vand fra floden til lejren, men du har ingen spand.",
      "inventory": "En T-shirt, En plastikpose med huller, Gaffatape",
      "hint": "Kan du kombinere to ting til én vandtæt beholder?"
    },
    {
      "scenario": "Din hund sidder fast på en høj gren og tør ikke springe ned.",
      "inventory": "En heliumballon, Et langt reb, Et glas peanutbutter",
      "hint": "Hvad vil hunden allerhelst? Kan du lokke den sikkert ned?"
    },
    {
      "scenario": "Du er låst inde i et rum. Nøglen ligger på gulvet på den ANDEN side af døren.",
      "inventory": "En avis, En blyant, Et stykke tyggegummi",
      "hint": "Kan du skubbe noget fladt ind under døren og trække nøglen tilbage?"
    },
    {
      "scenario": "Du skal give et signal til en ven 500 meter væk, men din telefon er død.",
      "inventory": "Et spejl, En fløjte, Et knaldrødt halstørklæde",
      "hint": "Brug syn ELLER lyd — hvad virker bedst på den afstand?"
    },
    {
      "scenario": "Det regner kraftigt, og du skal holde et lille lejrbål i gang.",
      "inventory": "En stor affaldssæk, 4 træpinde, Snor",
      "hint": "Byg et minitag OVER bålet — uden at det rører flammerne."
    },
    {
      "scenario": "Du tabte din ring ned i en smal revne mellem to sten.",
      "inventory": "Tyggegummi, En lang pind, En lommelygte",
      "hint": "Gør én ting klistret, og nå eller løft så ringen op."
    },
    {
      "scenario": "Du skal krydse et bredt mudderområde uden at synke ned.",
      "inventory": "To store krydsfinerplader, Et reb, Din rygsæk",
      "hint": "Tænk på snesko — fordel din vægt på et større område."
    },
    {
      "scenario": "En fugl er fløjet ind i dit hus og vil ikke flyve ud ad vinduet.",
      "inventory": "Et lagen, En skrivebordslampe, En skål med frugt",
      "hint": "Fugle følger lyset og er bange for store figurer, der bevæger sig. Vis vejen, jag den ikke."
    }
  ],
  "agent": [
    {
      "scenario": "Du skal over en flod med krokodiller i nærheden. Ingen bro, ingen båd.",
      "inventory": "5 tomme plastiktønder, Et stærkt fiskenet, En lang stang"
    },
    {
      "scenario": "Det er iskoldt. Du har brug for ild, men alle tændstikker er helt våde.",
      "inventory": "Et batteri, Ståluld, Tørre blade"
    },
    {
      "scenario": "Du er faret vild i åbent land. Et redningsfly er mange kilometer væk — hvordan giver du signal?",
      "inventory": "Et knust spejl, Knaldrød læbestift, Et hvidt håndklæde"
    },
    {
      "scenario": "En tung kampesten spærrer indgangen til en hule. Du kan ikke løfte den alene.",
      "inventory": "Et langt metalrør, En donkraft, En flad sten"
    },
    {
      "scenario": "Din båd har et hul og synker langsomt. Der er 1 km til kysten.",
      "inventory": "Et stykke sæbe, En T-shirt, En tom vandflaske"
    },
    {
      "scenario": "Kom op på toppen af en glat mur på 3 meter uden stige.",
      "inventory": "To bælter, En tung rygsæk, En ven"
    },
    {
      "scenario": "En sværm bier spærrer den eneste vej til bilen.",
      "inventory": "Et røgblus, En regnjakke, Løbesko"
    },
    {
      "scenario": "Hold medicin kold i 8 timer uden strøm eller køleskab.",
      "inventory": "En lerkrukke, Sand, Vand"
    }
  ],
  "elite": [
    {
      "scenario": "Du er nødlandet på en klippekyst. Byg et ly inden natten med KUN det, der er skyllet i land.",
      "inventory": "En bildør, 5 meter reb, En laset faldskærm",
      "constraint": "Jorden er massiv klippe — du kan ikke grave eller slå pløkker i."
    },
    {
      "scenario": "Du sidder fast i en elevator mellem to etager. Dørene sidder fast med kun 10 cm åbning.",
      "inventory": "Et bælte, En smartphone (uden signal), En mønt",
      "constraint": "Klatr IKKE ud. Få i stedet hjælp udefra."
    },
    {
      "scenario": "Oversvømmelsen stiger hurtigt. Red vigtige papirer på et skrivebord i stueetagen.",
      "inventory": "Store affaldssække, Pakketape, En reol",
      "constraint": "Du har kun 5 minutter, før vandet når skrivebordet."
    },
    {
      "scenario": "Snestorm. Bilen er brudt sammen 2 km fra byen. Vinden blæser 60 km/t lige i ansigtet.",
      "inventory": "En bilmåtte, En flaske madolie, En avis",
      "constraint": "Du skal bevæge dig mod byen, ikke sidde og vente."
    },
    {
      "scenario": "Et barns legetøj er faldet ned i et smalt rør (2 m dybt, 8 cm bredt), der er støbt i cement.",
      "inventory": "En haveslange, Gaffatape, En bøjle af ståltråd",
      "constraint": "Legetøjet er glat og rundt — en simpel krog kan ikke få fat i det."
    },
    {
      "scenario": "Transportér en levende fisk 3 km fra floden til et akvarium. Ingen spand eller plastikpose.",
      "inventory": "En stor vandmelon, En kniv, Din støvle",
      "constraint": "Fisken har brug for vand OG ilt hele turen."
    },
    {
      "scenario": "En bro er brudt sammen. Hullet er 3 meter. Du skal over med en tung taske.",
      "inventory": "To træplanker (2½ m hver), Et reb, En sten",
      "constraint": "Hver planke er for kort alene — tænk i konstruktion, ikke i længde."
    },
    {
      "scenario": "Lav mad med KUN solen som varmekilde.",
      "inventory": "Alufolie, En papkasse, En gennemsigtig plastikpose",
      "constraint": "Skal nå mindst 70 °C — vis, hvordan du ville måle det."
    }
  ]
};
