const whatif_single_de = [
    "Was wäre, wenn die Schwerkraft jeden Tag für genau 1 Minute aussetzen würde?",
    "Was wäre, wenn Tiere sprechen könnten, sich aber nur über das Wetter beschweren würden?",
    "Was wäre, wenn alle Ozeane durch Orangensaft ersetzt würden?",
    "Was wäre, wenn man sich nur hüpfend wie ein Känguru fortbewegen könnte?",
    "Was wäre, wenn jede Lüge deine Nase buchstäblich wie bei Pinocchio wachsen ließe?",
    "Was wäre, wenn Wolken aus süßer Zuckerwatte bestünden?",
    "Was wäre, wenn Menschen im Dunkeln leuchten würden, wenn sie glücklich sind?",
    "Was wäre, wenn Geld tatsächlich auf Bäumen im Hinterhof wachsen würde?",
    "Was wäre, wenn Menschen überhaupt keinen Schlaf bräuchten?",
    "Was wäre, wenn alle Insekten so groß wie mittelgroße Hunde werden würden?",
    "Was wäre, wenn lautes Lachen dich in der Luft schweben ließe?",
    "Was wäre, wenn wir nur Buntstifte essen könnten?",
    "Was wäre, wenn unser Spiegelbild eine eigene Persönlichkeit hätte?",
    "Was wäre, wenn Spielzeuge nur zum Leben erwachen würden, wenn alle im Haus schlafen?",
    "Was wäre, wenn Dinosaurier nie ausgestorben wären und als Haustiere unter uns leben würden?",
    "Was wäre, wenn Bäume an einen neuen Ort wandern könnten, wenn sie sich langweilen?",
    "Was wäre, wenn Schatten uns Streiche spielen und sich unabhängig von uns bewegen könnten?",
    "Was wäre, wenn Schokolade das gesündeste Lebensmittel der Erde wäre?",
    "Was wäre, wenn wir unsere Träume wie Filme aufnehmen und abspielen könnten?",
    "Was wäre, wenn Haustiere die Chefs würden und Menschen ihnen gehorchen müssten?",
    "Was wäre, wenn jede Treppe nach Sonnenuntergang zur Rutsche würde?",
    "Was wäre, wenn Klassenfenster das Wetter von morgen anzeigen könnten?",
    "Was wäre, wenn dein Rucksack nur Dinge annähme, die zur heutigen Stimmung passen?",
    "Was wäre, wenn Ampeln sich nach dem lautesten Geräusch in der Nähe ändern würden?",
    "Was wäre, wenn Bibliotheksbücher ihr Ende bis zum Morgen vergessen könnten?",
    "Was wäre, wenn jeder Baum statt Blättern ein nützliches Werkzeug fallen ließe?",
    "Was wäre, wenn Schuhe für jede Emotion einen anderen Rhythmus machten?",
    "Was wäre, wenn Türen sich das letzte Lied merken würden, das sie gehört haben?",
    "Was wäre, wenn der Ozean dem Schulplan statt dem Mond folgen würde?",
    "Was wäre, wenn Postkarten ankommen würden, bevor sie geschrieben wurden?",
    "Was wäre, wenn ein Löffel Regen eine kleine Lampe eine Stunde lang betreiben könnte?",
    "Was wäre, wenn dein Schatten immer auf den nächsten versteckten Gegenstand zeigen würde?",
    "Was wäre, wenn jedes gesummte Lied ein anderes Insekt anlocken würde?",
    "Was wäre, wenn Supermarktregale sich nach Puzzle-Schwierigkeit neu anordneten?",
    "Was wäre, wenn Spiegel die Person zeigen würden, der du zuletzt geholfen hast?",
    "Was wäre, wenn Bleistifte jedes Mal länger würden, wenn du ein Problem löst?",
    "Was wäre, wenn Wolken in Gläsern aufbewahrt und später wieder geöffnet werden könnten?",
    "Was wäre, wenn Busse selbst die kürzeste Route wählen könnten?",
    "Was wäre, wenn jedes Rezept sich änderte, je nachdem wer kocht?",
    "Was wäre, wenn die Schulglocke nur für Schüler läutet, die ihre Arbeit beendet haben?",
    "Was wäre, wenn jede Stadt einen versteckten unterirdischen Musikfluss hätte?",
    "Was wäre, wenn der erste Schnee jeden Fußabdruck sofort auslöschte?",
    "Was wäre, wenn Tastaturen das nächste Wort tippen würden, das du gleich denkst?",
    "Was wäre, wenn Zimmerpflanzen ihre Bedürfnisse in einem Satz erklären könnten?",
    "Was wäre, wenn Geburtstage kommen würden, wenn sich deine Lieblingsfarbe ändert?",
    "Was wäre, wenn sich Karten aktualisieren würden, sobald jemand einen Stuhl bewegt?",
    "Was wäre, wenn Bücher im Regal die Plätze tauschen würden, wenn niemand hinschaut?",
    "Was wäre, wenn der Wind kleine Zettel statt Blätter tragen würde?",
    "Was wäre, wenn jeder Ballon die Wahrheit darüber sagt, wo er gewesen ist?",
    "Was wäre, wenn ein Klopfen an die Wand zeigen würde, ob jemand dahinter ist?"
];

const whatif_chain_de = [
    {
        start: "Was wäre, wenn die Schwerkraft jeden Tag für genau 1 Minute aussetzen würde?",
        steps: ["Menschen und Gegenstände schweben in der Luft nach oben.", "Jeder stößt sich den Kopf an der Decke.", "Helme werden zur obligatorischen Mode für drinnen."],
        end: "Helme werden zur obligatorischen Mode für drinnen."
    },
    {
        start: "Was wäre, wenn Tiere sprechen könnten, sich aber nur über das Wetter beschweren würden?",
        steps: ["Hunde weigern sich, im Regen spazieren zu gehen, und protestieren lautstark.", "Die Verkäufe von speziellen Hunderegenschirmen schießen in die Höhe.", "Die Wettervorhersage wird gemacht, indem man Tauben befragt."],
        end: "Die Wettervorhersage wird gemacht, indem man Tauben befragt."
    },
    {
        start: "Was wäre, wenn alle Ozeane durch Orangensaft ersetzt würden?",
        steps: ["Der Ozean wird sehr süß und säurehaltig.", "Fische mutieren, um die Zitronensäure zu überleben.", "Haie werden zuckersüchtig und schwimmen schneller."],
        end: "Haie werden zuckersüchtig und schwimmen schneller."
    },
    {
        start: "Was wäre, wenn man sich nur hüpfend wie ein Känguru fortbewegen könnte?",
        steps: ["Gehen und Laufen werden absolut unmöglich.", "Die Decken in allen Häusern werden dreimal höher gebaut.", "Gehwege werden durch riesige Trampoline ersetzt."],
        end: "Trampoline ersetzen alle Gehwege der Stadt."
    },
    {
        start: "Was wäre, wenn jede Lüge deine Nase wie bei Pinocchio wachsen ließe?",
        steps: ["Politiker haben 3 Meter lange Nasen.", "Büro- und Haustüren müssen verbreitert werden.", "Das Kürzen der Nase wird zu einer täglichen Morgenroutine."],
        end: "Das Kürzen der Nase wird zu einer täglichen Morgenroutine."
    },
    {
        start: "Was wäre, wenn Wolken aus süßer Zuckerwatte bestünden?",
        steps: ["Es regnet klebriges Zuckerwasser.", "Alle Autos und Straßen werden unglaublich klebrig.", "Autowaschanlagen werden durch Leckmaschinen ersetzt."],
        end: "Autowaschanlagen werden durch Leckmaschinen ersetzt."
    },
    {
        start: "Was wäre, wenn Bäume an einen neuen Ort wandern könnten, wenn sie sich langweilen?",
        steps: ["Wälder verändern über Nacht ständig ihre Anordnung.", "GPS-Karten werden in Stunden nutzlos und veraltet.", "Menschen bauen Häuser auf Rädern, um ihren Lieblingsbäumen zu folgen."],
        end: "Menschen bauen Häuser auf Rädern, um ihren Lieblingsbäumen zu folgen."
    },
    {
        start: "Was wäre, wenn wir unsere Träume wie Filme aufnehmen und abspielen könnten?",
        steps: ["Traumkinos werden beliebter als normale Kinos.", "Menschen verkaufen ihre besten Albträume als Horror-Blockbuster.", "Traumblockierende Helme werden zum Schutz der Privatsphäre des Schlafs verkauft."],
        end: "Traumblockierende Helme werden zum Schutz der Privatsphäre verkauft."
    },
    {
        start: "Was wäre, wenn Dinosaurier nie ausgestorben wären und als Haustiere unter uns leben würden?",
        steps: ["T-Rex-Dinosaurier ersetzen Wachhunde auf großen Grundstücken.", "Städte müssen riesige Lastwagen bauen, um Dinosaurier-Kot zu beseitigen.", "Mini-Triceratops werden zu beliebten Haustieren in Wohnungen."],
        end: "Mini-Triceratops werden zu beliebten Haustieren in Wohnungen."
    },
    {
        start: "Was wäre, wenn Schatten sich unabhängig von uns bewegen könnten?",
        steps: ["Schatten schleichen sich nachts davon, um ohne ihre Besitzer zu feiern.", "Menschen wachen mit dem Schatten eines anderen auf.", "Ein neuer Beruf der Schattenfänger wird erfunden, um entflohene Schatten zurückzubringen."],
        end: "Ein neuer Beruf der Schattenfänger wird erfunden."
    },
    {
        start: "Was wäre, wenn Fahrräder sich nur auf gemalten Linien bewegen könnten?",
        steps: [
            "Straßen würden wie riesige Malbücher aussehen.",
            "Verkehrsingenieure würden mit Künstlern zusammenarbeiten.",
            "Städte würden jede Nacht Routen neu streichen, damit sie klar bleiben."
        ],
        end: "Straßenmaler würden genauso wichtig wie Straßenbauer."
    },
    {
        start: "Was wäre, wenn jeder Klassenstuhl nur einmal am Tag benutzt werden könnte?",
        steps: [
            "Schulen würden Stühle zwischen verschiedenen Räumen rotieren.",
            "Schüler würden eigene Sitzmatten mitbringen.",
            "Möbelfirmen würden schnellere Tauschsysteme entwickeln."
        ],
        end: "Sitzplatzteilen würde zur normalen Schulroutine."
    },
    {
        start: "Was wäre, wenn Cafés Getränke nur in durchsichtigen Bechern servieren würden?",
        steps: [
            "Kunden würden Schichten, Farben und Fehler bemerken.",
            "Baristas würden durch Getränkedesign konkurrieren.",
            "Speisekarten würden visueller und farbbasierter werden."
        ],
        end: "Getränkepräsentation würde Teil der Bestellung."
    },
    {
        start: "Was wäre, wenn sich jede Tür nur nach einem kurzen Reim öffnen würde?",
        steps: [
            "Menschen würden Eingangsreime für jedes Gebäude erfinden.",
            "Schulen würden Reim-Etikette unterrichten.",
            "Niemand würde Schlüssel vergessen, aber viele den Vers."
        ],
        end: "Poesie würde im Alltag nützlich werden."
    },
    {
        start: "Was wäre, wenn jede U-Bahn-Station nach einer Frucht riechen würde?",
        steps: [
            "Fahrgäste würden sich Stationen nach Geruch statt Schildern merken.",
            "Verkehrssysteme würden Geruch als Navigationstool nutzen.",
            "Werber würden ganze Viertel nach Duft branden."
        ],
        end: "Städte würden Gerüche als Teil der Navigation nutzen."
    },
    {
        start: "Was wäre, wenn eine verlorene Socke immer zum nächsten Wäschekorb teleportiert würde?",
        steps: [
            "Menschen würden aufhören, unter Betten zu suchen.",
            "Die Platzierung des Wäschekorbs würde zur ernsthaften Strategie.",
            "Saubere Zimmer würden um Korbzonen geplant."
        ],
        end: "Wäschekörbe würden zum wichtigsten Möbelstück im Haus."
    },
    {
        start: "Was wäre, wenn sich Handyakkus nur laden würden, während man das Handy mit beiden Händen hält?",
        steps: [
            "Menschen würden Lade-Pausen wie Meetings einplanen.",
            "Handy-Ständer würden überall beliebt werden.",
            "Cafés würden spezielle Lade-Lounges einrichten."
        ],
        end: "Laden würde zur sozialen Gewohnheit statt zur Einzelaktivität."
    },
    {
        start: "Was wäre, wenn jedes Bibliotheksbuch beim Öffnen eine Tatsache flüstern würde?",
        steps: [
            "Leser würden nach überraschenden Büchern jagen.",
            "Bibliothekare würden Regale nach Neugier-Level sortieren.",
            "Lernen würde mehr wie ein Labyrinth erkunden."
        ],
        end: "Bibliotheken würden zu lebenden Fakten-Labyrinthen."
    },
    {
        start: "Was wäre, wenn das laute Vorlesen eines Rezepts es leicht verändern würde?",
        steps: [
            "Köche würden Rezepte auswendig lernen statt sie laut vorzulesen.",
            "Audio-Rezepte bräuchten sorgfältige Tests.",
            "Küchenroutinen würden von Ton, Timing und Stille abhängen."
        ],
        end: "Kochen würde eine Mischung aus Lesen und Aufführung."
    },
    {
        start: "Was wäre, wenn der Schatten jedes Baumes zur nächsten Wasserquelle zeigen würde?",
        steps: [
            "Wanderer würden absichtlich Baumschatten folgen.",
            "Parks würden Bäume als Wegweiser pflanzen.",
            "Karten-Apps würden Schatten mit GPS-Daten vergleichen."
        ],
        end: "Bäume würden zu natürlichen Navigationshelfern."
    },
    {
        start: "Was wäre, wenn die Schuhe jedes Mal quietschen würden, wenn jemand lügt?",
        steps: [
            "Ehrlichkeit würde etwas werden, das man hören kann.",
            "Öffentliche Reden würden plötzlich viel leiser werden.",
            "Schuhfirmen würden Anti-Quietsch-Filter entwickeln."
        ],
        end: "Wahrheitsprüfung würde zur Schuhindustrie."
    },
    {
        start: "Was wäre, wenn Aufzugsknöpfe nur paarweise gedrückt werden könnten?",
        steps: [
            "Menschen müssten ihre Etagenwahl abstimmen.",
            "Gebäudeverkehr würde langsamer, aber geplanter werden.",
            "Freunde würden absichtlich zusammen den Aufzug nehmen."
        ],
        end: "Hoch- oder Runterfahren würde zur sozialen Aktivität."
    },
    {
        start: "Was wäre, wenn jeder Briefkasten einen extra Überraschungsgegenstand lieferte?",
        steps: [
            "Menschen würden die Post mit mehr Spannung abholen.",
            "Unerwartete Gegenstände würden neue Sortiergewohnheiten schaffen.",
            "Postversicherung würde viel beliebter werden."
        ],
        end: "Post würde sich wie eine tägliche Lotterie anfühlen."
    },
    {
        start: "Was wäre, wenn ein verschüttetes Glas Wasser zu einer kleinen Karte würde?",
        steps: [
            "Unfälle würden zu Hinweisen werden.",
            "Kinder und Detektive würden Pfützen genauer untersuchen.",
            "Kartenlese-Spiele würden Wasserflecken als Rätsel nutzen."
        ],
        end: "Chaos würde anfangen, Informationen zu tragen."
    },
    {
        start: "Was wäre, wenn jeder geplatzte Ballon einen gesprochenen Satz freisetzen würde?",
        steps: [
            "Kinder würden Ballons für Nachrichten aufheben.",
            "Partys würden voller zufälliger Ankündigungen werden.",
            "Ballonhersteller würden Warnungen und Nachrichtenetiketten drucken."
        ],
        end: "Ballons würden zu geheimen Notizträgern."
    }
];

const whatif_deduction_de = [
    {
        start: "Was wäre, wenn Schokolade das gesündeste Lebensmittel der Erde wäre?",
        end: "Zahnärzte gehen komplett pleite."
    },
    {
        start: "Was wäre, wenn Menschen überhaupt keinen Schlaf bräuchten?",
        end: "Das Konzept der 'Nachtzeit' wird von den Stadträten verboten."
    },
    {
        start: "Was wäre, wenn alle Insekten so groß wie mittelgroße Hunde werden würden?",
        end: "Fliegengitter werden durch Garagentore aus Stahl ersetzt."
    },
    {
        start: "Was wäre, wenn lautes Lachen dich in der Luft schweben ließe?",
        end: "Comedy-Clubs werden mit gepolsterten Decken gebaut."
    },
    {
        start: "Was wäre, wenn Haustiere die Chefs des Hauses würden?",
        end: "Menschen werden gezwungen, Halsbänder zu tragen und auf Teppichen zu schlafen."
    },
    {
        start: "Was wäre, wenn Spielzeuge nur zum Leben erwachen würden, wenn alle im Haus schlafen?",
        end: "Kinder bleiben tagelang wach, um ihre Teddybären zu fangen."
    },
    {
        start: "Was wäre, wenn unser Spiegelbild eine eigene Persönlichkeit hätte?",
        end: "Menschen kaufen einen zweiten Spiegel, um mit ihrem eigenen Spiegelbild zu streiten."
    },
    {
        start: "Was wäre, wenn Regen in zufälligen Farben statt als Wasser fiele?",
        end: "Weiße Kleidung ist gesetzlich verboten, um Regenbogenflecken zu verhindern."
    },
    {
        start: "Was wäre, wenn Pflanzen schreien würden, wenn man sie schneidet?",
        end: "Rasenmäher werden durch zarte Pflanzenschere ersetzt."
    },
    {
        start: "Was wäre, wenn Bücher sich beim Öffnen selbst laut vorlesen würden?",
        end: "Bibliotheken werden zu den lautesten und chaotischsten Orten der Erde."
    }
];
