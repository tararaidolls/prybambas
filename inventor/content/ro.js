// RO_JS: Pentru dezvoltatorii viitori - Baza de date de misiuni tradusă în limba Română.
const inventor_missions_ro = {
    rookie: [
        {
            scenario: "Trebuie să aduci apă de la râu în tabără, dar nu ai o găleată.",
            inventory: "Un tricou, O pungă de plastic găurită, Bandă adezivă (Duct tape)",
            hint: "Poți combina două obiecte pentru a face unul impermeabil?"
        },
        {
            scenario: "Câinele tău a rămas blocat pe o ramură înaltă a unui copac și îi este prea frică să sară.",
            inventory: "Un balon cu heliu, O frânghie lungă, Un borcan de unt de arahide",
            hint: "Ce îi place cel mai mult câinelui tău? Îl poți ademeni?"
        },
        {
            scenario: "Ești încuiat într-o cameră. Cheia este pe podea, pe cealaltă parte a ușii.",
            inventory: "Un ziar, Un creion, O bucată de gumă de mestecat",
            hint: "Poți împinge ceva plat pe sub ușa?"
        },
        {
            scenario: "Trebuie să comunici cu un prieten aflat la 500 de metri distanță, dar telefonul tău este descărcat.",
            inventory: "O oglindă, Un fluier, O eșarfă roșie aprinsă",
            hint: "Gândește-te la simțuri: văz sau auz?"
        },
        {
            scenario: "Plouă torențial și trebuie să menții focul de tabără aprins.",
            inventory: "Un sac mare de gunoi, 4 bețe de lemn, Sfoară",
            hint: "Poți construi un adăpost chiar deasupra focului?"
        },
        {
            scenario: "Ai scăpat inelul într-o fisură foarte îngustă între două stânci grele.",
            inventory: "Gumă de mestecat, Un băț lung, O lanternă",
            hint: "Ce-ar fi dacă ai face unul dintre obiecte lipicios?"
        },
        {
            scenario: "Trebuie să traversezi o zonă mare cu noroi adânc fără să te scufunzi.",
            inventory: "Două bucăți mari de placaj, O frânghie, Rucsacul tău",
            hint: "Gândește-te la rachetele de zăpadă - cum îți distribui greutatea pe o suprafață mare?"
        },
        {
            scenario: "O pasăre a intrat în casă și nu vrea să mai iasă prin fereastra deschisă.",
            inventory: "Un cearșaf, O lampă de birou, Un bol cu fructe",
            hint: "Păsările sunt atrase de lumină și se tem de siluetele mari în mișcare."
        }
    ],
    agent: [
        {
            scenario: "Trebuie să traversezi un râu plin de crocodili. Nu există pod.",
            inventory: "5 butoaie goale din plastic, O plasă de pescuit puternică, Un băț lung"
        },
        {
            scenario: "Este ger afară. Ai mare nevoie de foc, dar chibriturile sunt complet ude.",
            inventory: "O baterie, Lană/buret de sârmă (steel wool), Frunze uscate"
        },
        {
            scenario: "Te-ai rătăcit în deșert. Trebuie să semnalizezi unui avion de salvare care zboară departe.",
            inventory: "O oglindă spartă, Ruj roșu aprins, Un prosop alb"
        },
        {
            scenario: "Un bolovan greu a blocat intrarea într-o peșteră. Nu îl poți ridica.",
            inventory: "O țeavă metalică lungă, Un cric auto, O piatră plată"
        },
        {
            scenario: "Barca ta are o gaură și se scufundă lent la 1 km de mal.",
            inventory: "Un săpun de casă, Un tricou, O sticlă goală de apă"
        },
        {
            scenario: "Trebuie să te urci pe un perete neted de beton de 3 metri, fără scară.",
            inventory: "Două curele, Un rucsac greu, Un prieten alături"
        },
        {
            scenario: "Un roi de albine sălbatice a blocat singura potecă către mașina ta.",
            inventory: "O fumigenă (flare), O pelerină de ploaie, Pantofi de alergat"
        },
        {
            scenario: "Trebuie să păstrezi medicamentele reci timp de 8 ore fără electricitate.",
            inventory: "Un vas de lut, Nisip, Apă"
        }
    ],
    elite: [
        {
            scenario: "Ai naufragiat pe o insulă pustie. Construiește un adăpost înainte de lăsarea nopții, folosind doar ce a adus marea la mal.",
            inventory: "O portieră de mașină, 5 metri de frânghie, O parașută ruptă",
            constraint: "Pământul este doar stâncă dură - nu poți săpa sau înfige țăruși."
        },
        {
            scenario: "Ești blocat într-un lift între etaje. Ușile s-au deschis doar 10 cm.",
            inventory: "O curea, Un smartphone (fără semnal), O monedă",
            constraint: "NU încerca să ieși singur. Trimite un semnal de ajutor."
        },
        {
            scenario: "Apele inundațiilor cresc rapid. Protejează documentele importante dintr-o cameră de la parter.",
            inventory: "Saci mari de gunoi, Bandă de ambalat, O bibliotecă",
            constraint: "Ai la dispoziție doar 5 minute înainte de inundarea completă."
        },
        {
            scenario: "Viscol puternic. Mașina s-a stricat la 2 km de cel mai apropiat oraș.",
            inventory: "Un covoraș auto, O sticlă de ulei vegetal, Un ziar",
            constraint: "Vântul suflă cu o viteză de 60 km/h direct în față."
        },
        {
            scenario: "O jucărie a căzut într-o țeavă îngustă (2m adâncime, 8cm lățime), cimentată în pământ.",
            inventory: "Un furtun de grădină, Bandă adezivă rezistentă, Un umeraș metalic",
            constraint: "Jucăria este rotundă și netedă - este imposibil să o agăți cu un cârlig."
        },
        {
            scenario: "Transportă un pește viu de la râu la un acvariu aflat la 3 km distanță. Nu ai găleată sau pungă.",
            inventory: "Un pepene verde mare, Un cuțit, Cizma ta",
            constraint: "Peștele trebuie să rămână viu (are nevoie de apă și oxigen)."
        },
        {
            scenario: "Podul din față este distrus. O prăpastie de 3 metri lățime. Trebuie să treci cu o geantă grea.",
            inventory: "Două scânduri de lemn (de 2.5 m fiecare), O frânghie, O piatră mare",
            constraint: "Fiecare scândură în parte este prea scurtă pentru a trece prăpastia."
        },
        {
            scenario: "Gătește o masă caldă pe teren, dar singura sursă de căldură este soarele.",
            inventory: "Folie de aluminiu, O cutie de carton, O pungă de plastic transparentă",
            constraint: "Temperatura trebuie să atingă cel puțin 70°C."
        }
    ]
};
