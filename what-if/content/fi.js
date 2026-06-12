const whatif_single_fi = [
    "Mitä jos painovoima sammuisi tasan minuutiksi joka päivä?",
    "Mitä jos eläimet osaisivat puhua, mutta valittaisivat vain säästä?",
    "Mitä jos kaikki valtameret korvattaisiin appelsiinimehulla?",
    "Mitä jos voisit liikkua vain kengurun lailla hyppien?",
    "Mitä jos jokainen valhe saisi nenäsi kasvamaan kuin Pinocchiolla?",
    "Mitä jos pilvet olisivat makeaa hattaraa?",
    "Mitä jos ihmiset loistaisivat pimeässä ollessaan onnellisia?",
    "Mitä jos rahaa todella kasvaisi takapihan puissa?",
    "Mitä jos ihmiset eivät tarvitsisi lainkaan unta?",
    "Mitä jos kaikki hyönteiset kasvaisivat keskikokoisten koirien kokoisiksi?",
    "Mitä jos nauraminen ääneen saisi sinut leijumaan ilmassa?",
    "Mitä jos voisimme syödä vain värikyniä?",
    "Mitä jos peilikuvallamme olisi oma persoonallisuus?",
    "Mitä jos lelut heräisivät eloon vain kun kaikki talossa nukkuvat?",
    "Mitä jos dinosarukset eivät koskaan kuolisi sukupuuttoon ja eläisivät meidän joukossa lemmikkeinä?",
    "Mitä jos puut voisivat kävellä uuteen paikkaan kun niitä kyllästyttää?",
    "Mitä jos varjot voisivat tehdä kepposia ja liikkua itsenäisesti meistä?",
    "Mitä jos suklaa olisi maapallon terveellisin ruoka?",
    "Mitä jos voisimme tallentaa ja toistaa uniamme kuin elokuvia?",
    "Mitä jos lemmikit tulisivat pomoksi ja ihmisten pitäisi totella niitä?",
    "Mitä jos jokaisesta portaista tulisi liukumäki auringonlaskun jälkeen?",
    "Mitä jos luokan ikkunat näyttäisivät huomisen sään?",
    "Mitä jos reppusi hyväksyisi vain asioita, jotka sopivat tämän päivän mieleen?",
    "Mitä jos liikennevalot vaihtuisivat lähellä kuuluvan äänekkäimmän äänen mukaan?",
    "Mitä jos kirjaston kirjat unohtaisivat loppunsa aamuun mennessä?",
    "Mitä jos jokainen puu pudottaisi lehtien sijaan yhden hyödyllisen työkalun?",
    "Mitä jos kengät tekisivät eri rytmin jokaiselle tunteelle?",
    "Mitä jos ovet muistaisivat viimeisen kuulemansa laulun?",
    "Mitä jos valtameri noudattaisi kouluaikataulua kuun sijaan?",
    "Mitä jos postikortit saapuisivat ennen kuin ne on kirjoitettu?",
    "Mitä jos lusikallinen sadetta voisi pyörittää pientä lamppua tunnin?",
    "Mitä jos varjosi osoittaisi aina lähimpään piilotettuun esineeseen?",
    "Mitä jos jokainen hyräilemäsi laulu houkuttelisi eri hyönteisen?",
    "Mitä jos supermarketin hyllyt järjestäytyisivät pulmien vaikeusasteen mukaan?",
    "Mitä jos peilit näyttäisivät henkilön, jota autit viimeksi?",
    "Mitä jos kynät kasvaisivat pidemmiksi joka kerta kun ratkaiset ongelman?",
    "Mitä jos pilvet voitaisiin säilöä purkkeihin ja avata myöhemmin?",
    "Mitä jos bussit valitsisivat itse lyhimmän reitin?",
    "Mitä jos jokainen resepti muuttuisi sen mukaan, kuka ruoanlaittoa tekee?",
    "Mitä jos koulun kello soisi vain oppilaille, jotka ovat saaneet työnsä valmiiksi?",
    "Mitä jos jokaisessa kaupungissa olisi piilotettu maanalainen musiikkijoki?",
    "Mitä jos ensimmäinen lumi pyyhkisi jokaisen jäljen heti pois?",
    "Mitä jos näppäimistöt kirjoittaisivat seuraavan sanan, jota olet aikeissa ajatella?",
    "Mitä jos huonekasvit voisivat selittää tarpeensa yhdellä lauseella?",
    "Mitä jos syntymäpäivät tulisivat kun suosikkivärisi vaihtuu?",
    "Mitä jos kartat päivittyisivät aina kun joku siirtää tuolia?",
    "Mitä jos hyllyjen kirjat vaihtaisivat paikkaa kun kukaan ei katso?",
    "Mitä jos tuuli kantaisi pieniä lappuja lehtien sijaan?",
    "Mitä jos jokainen ilmapallo kertoisi totuuden siitä, missä se on ollut?",
    "Mitä jos seinään kopauttaminen paljastaisi, onko sen takana joku?"
];

const whatif_chain_fi = [
    {
        start: "Mitä jos painovoima sammuisi tasan minuutiksi joka päivä?",
        steps: ["Ihmiset ja esineet leijuvat ilmaan.", "Kaikki lyövät päänsä kattoon.", "Kypärät muuttuvat pakolliseksi sisämuodiksi."],
        end: "Kypärät muuttuvat pakolliseksi sisämuodiksi."
    },
    {
        start: "Mitä jos eläimet osaisivat puhua, mutta valittaisivat vain säästä?",
        steps: ["Koirat kieltäytyvät kävelemästä sateessa ja riitelevät äänekkäästi.", "Erityisten koiransateenvarjojen myynti räjähtää.", "Sääennuste tehdään kyselemällä kyyhkysiä."],
        end: "Sääennuste tehdään kyselemällä kyyhkysiä."
    },
    {
        start: "Mitä jos kaikki valtameret korvattaisiin appelsiinimehulla?",
        steps: ["Valtameri muuttuu erittäin happameksi ja makeaksi.", "Kalat kehittävät mutaatioita selviytyäkseen sitruunahaposta.", "Hait tulevat sokeririippuvaisiksi ja uivat nopeammin."],
        end: "Hait tulevat sokeririippuvaisiksi ja uivat nopeammin."
    },
    {
        start: "Mitä jos voisit liikkua vain kengurun lailla hyppien?",
        steps: ["Kävely ja juoksu muuttuvat täysin mahdottomiksi.", "Kaikkien talojen katot rakennetaan kolme kertaa korkeammiksi.", "Käytävät korvataan valtavilla trampoliineilla."],
        end: "Trampoliinit korvaavat kaikki kaupungin käytävät."
    },
    {
        start: "Mitä jos jokainen valhe saisi nenäsi kasvamaan kuin Pinocchiolla?",
        steps: ["Poliitikoilla on kolmen metrin pituiset nenät.", "Toimistojen ja talojen ovia pitää leventää.", "Nenän leikkaamisesta tulee päivittäinen aamurutiini."],
        end: "Nenän leikkaamisesta tulee päivittäinen aamurutiini."
    },
    {
        start: "Mitä jos pilvet olisivat makeaa hattaraa?",
        steps: ["Sataa tahmeaa sokerivettä.", "Kaikki autot ja kadut muuttuvat erittäin tahmeiksi.", "Autopesulat korvataan nuolemisella toimivilla koneilla."],
        end: "Autopesulat korvataan nuolemisella toimivilla koneilla."
    },
    {
        start: "Mitä jos puut voisivat kävellä uuteen paikkaan kun niitä kyllästyttää?",
        steps: ["Metsät muuttavat asetteluaan jatkuvasti yön aikana.", "GPS-kartat muuttuvat hyödyttömiksi ja vanhentuvat tunneissa.", "Ihmiset rakentavat taloja pyörille seuratakseen suosikkipuitaan."],
        end: "Ihmiset rakentavat taloja pyörille seuratakseen suosikkipuitaan."
    },
    {
        start: "Mitä jos voisimme tallentaa ja toistaa uniamme kuin elokuvia?",
        steps: ["Unielokuvateatterit muuttuvat suositummiksi kuin tavalliset elokuvateatterit.", "Ihmiset myyvät parhaat painajaisensa kauhuhitteinä.", "Unien estokypäriä myydään suojelemaan unen yksityisyyttä."],
        end: "Unien estokypäriä myydään suojelemaan unen yksityisyyttä."
    },
    {
        start: "Mitä jos dinosarukset eivät koskaan kuolisi sukupuuttoon ja eläisivät meidän joukossa lemmikkeinä?",
        steps: ["T-Rex-dinosarukset korvaavat vartijakoirat suurilla pihoilla.", "Kaupunkien pitää rakentaa jättimäisiä dinojätelautoja.", "Minisarviset muuttuvat suosituksi rotuna asuntoihin."],
        end: "Minisarviset muuttuvat suosituksi rotuna asuntoihin."
    },
    {
        start: "Mitä jos varjot voisivat liikkua itsenäisesti meistä?",
        steps: ["Varjot hiiviskelevät yöllä juhlimaan ilman omistajiaan.", "Ihmiset heräävät jonkun toisen varjon kanssa.", "Keksitään uusi ammatti varjojenpyytäjänä palauttamaan karanneet varjot."],
        end: "Keksitään uusi ammatti varjojenpyytäjänä."
    },
    {
        start: "Mitä jos polkupyörät voisivat liikkua vain maalatuilla viivoilla?",
        steps: [
            "Tiet alkaisivat näyttää jättimäisiltä värityskirjoilta.",
            "Liikenneinsinöörit työskentelisivät yhdessä taiteilijoiden kanssa.",
            "Kaupungit maalaisivat reitit uudelleen joka yö pitääkseen ne selkeinä."
        ],
        end: "Katujen maalarit tulisivat yhtä tärkeiksi kuin tie rakentajat."
    },
    {
        start: "Mitä jos jokaisella luokan tuolilla voisi istua vain kerran päivässä?",
        steps: [
            "Koulut kierrättäisivät tuoleja eri luokkien välillä.",
            "Oppilaat alkaisivat kantaa omia istuinpatjojaan.",
            "Huonekaluyritykset suunnittelisivat nopeampia vaihtojärjestelmiä."
        ],
        end: "Tuolien jakamisesta tulisi normaali koulurutiini."
    },
    {
        start: "Mitä jos kahvilat tarjoaisivat juomia vain läpinäkyvissä laseissa?",
        steps: [
            "Asiakkaat alkaisivat huomata kerrokset, värit ja virheet.",
            "Baristat kilpailisivat juomien suunnittelulla.",
            "Ruokalistat muuttuisivat visuaalisemmiksi ja väripohjaisiksi."
        ],
        end: "Juoman esittelystä tulisi osa tilausta."
    },
    {
        start: "Mitä jos jokainen ovi avautuisi vasta lyhyen riimin jälkeen?",
        steps: [
            "Ihmiset keksisivät sisääntulorimme jokaiselle rakennukselle.",
            "Koulut opettaisivat riimietikettiä.",
            "Kukaan ei unohtaisi avaimiaan, mutta monet unohtaisivat säkeen."
        ],
        end: "Runoudesta tulisi hyödyllistä arjessa."
    },
    {
        start: "Mitä jos jokainen metroasema haisisi yhdeltä hedelmältä?",
        steps: [
            "Matkustajat muistaisivat asemia hajun, ei kylttien mukaan.",
            "Liikennejärjestelmät käyttäisivät hajua navigointityökaluna.",
            "Mainostajat yrittäisivät brändätä kokonaisia kaupunginosia tuoksulla."
        ],
        end: "Kaupungit alkaisivat käyttää hajuja osana navigointia."
    },
    {
        start: "Mitä jos pudonnut sukka teleporttaisi aina lähimpään pyykkikoriin?",
        steps: [
            "Ihmiset lopettaisivat sängyn alta etsimisen.",
            "Pyykkikorin sijoittelusta tulisi vakava strategia.",
            "Siistit huoneet suunniteltaisiin kori alueiden ympärille."
        ],
        end: "Pyykkikorit tulisivat tärkeimmiksi huonekaluiksi talossa."
    },
    {
        start: "Mitä jos puhelimen akku latautuisi vain kun pidät puhelinta molemmin käsin?",
        steps: [
            "Ihmiset aikatauluttaisivat lataustauot kuin tapaamisia.",
            "Puhelintelineet tulisivat suosituiksi kaikkialla.",
            "Kahvilat loisivat erityisiä latausloungeja."
        ],
        end: "Lataamisesta tulisi sosiaalinen tapa, ei yksin tehty."
    },
    {
        start: "Mitä jos jokainen kirjaston kirja kuiskaisi yhden faktan avatessaan?",
        steps: [
            "Lukijat alkaisivat metsästää yllättäviä kirjoja.",
            "Kirjastonhoitajat järjestäisivät hyllyjä uteliaisuustason mukaan.",
            "Opiskelusta tulisi enemmän sokkelon tutkimista."
        ],
        end: "Kirjastot muuttuisivat eläviksi faktojen sokkeloiksi."
    },
    {
        start: "Mitä jos reseptin lukeminen ääneen muuttaisi sitä hieman?",
        steps: [
            "Kokit alkaisivat opetella reseptit ulkoa sen sijaan, että lukisivat ne ääneen.",
            "Äänireseptit tarvitsisivat huolellista testausta.",
            "Keittiörutiinit riippuisivat sävystä, ajoituksesta ja hiljaisuudesta."
        ],
        end: "Ruoanlaitosta tulisi yhdistelmä lukemista ja esitystä."
    },
    {
        start: "Mitä jos jokaisen puun varjo osoittaisi lähimpään vesilähteeseen?",
        steps: [
            "Vaeltajat alkaisivat seurata puiden varjoja tarkoituksella.",
            "Puistot istuttaisivat puita reittiopasteiksi.",
            "Karttasovellukset vertaisivat varjoja GPS-tietoihin."
        ],
        end: "Puista tulisi luonnollisia navigointiapuja."
    },
    {
        start: "Mitä jos joka kerta kun valehtelet, kenkäsi narisisivat?",
        steps: [
            "Rehellisyydestä tulisi jotain, mitä voit kuulla.",
            "Julkiset puheet muuttuisivat äkkiä paljon hiljaisemmiksi.",
            "Kenkäyritykset alkaisivat tehdä narina-estimiä."
        ],
        end: "Totuuden tarkistamisesta tulisi jalkineala."
    },
    {
        start: "Mitä jos hissin nappeja voisi painaa vain pareittain?",
        steps: [
            "Ihmisten pitäisi koordinoida kerrosvalintojaan.",
            "Rakennusten liikenne hidastuisi mutta muuttuisi suunnitellummaksi.",
            "Ystävät alkaisivat ottaa hissiä tarkoituksella yhdessä."
        ],
        end: "Ylös tai alas menemisestä tulisi sosiaalinen aktiviteetti."
    },
    {
        start: "Mitä jos jokainen postilaatikko toimittaisi yhden ylimääräisen yllätysesineen?",
        steps: [
            "Ihmiset tarkistaisivat postin innokkaammin.",
            "Odottamattomat esineet loisivat uusia lajittelutapoja.",
            "Postivakuutus tulisi paljon suositummaksi."
        ],
        end: "Posti tuntuisi päivittäiseltä arpajaisilta."
    },
    {
        start: "Mitä jos kaatunut vesilasi muuttuisi pieneksi kartaksi?",
        steps: [
            "Onnettomuudet alkaisivat muuttua vihjeiksi.",
            "Lapset ja etsivät tutkisivat lätäköitä tarkemmin.",
            "Karttalukupelit käyttäisivät vesiläiskiä pulmina."
        ],
        end: "Sotkusta alkaisi kantaa tietoa."
    },
    {
        start: "Mitä jos jokainen puhjennut ilmapallo vapauttaisi yhden lausutun lauseen?",
        steps: [
            "Lapset säästäisivät ilmapalloja viesteihin.",
            "Juhlat täyttyisivät vahingossa syntyneistä ilmoituksista.",
            "Ilmapallovalmistajat painaisivat varoituksia ja viestitarroja."
        ],
        end: "Ilmapallot muuttuisivat salaisiksi viestien kantajiksi."
    }
];

const whatif_deduction_fi = [
    {
        start: "Mitä jos suklaa olisi maapallon terveellisin ruoka?",
        end: "Hammaslääkärit lopettavat kokonaan."
    },
    {
        start: "Mitä jos ihmiset eivät tarvitsisi lainkaan unta?",
        end: "Käsite \"yö\" kielletään kaupunginvaltuustoissa."
    },
    {
        start: "Mitä jos kaikki hyönteiset kasvaisivat keskikokoisten koirien kokoisiksi?",
        end: "Hyttysverkot korvataan teräksisillä autotallin ovilla."
    },
    {
        start: "Mitä jos nauraminen ääneen saisi sinut leijumaan ilmassa?",
        end: "Komediaklubit rakennetaan pehmustetuilla katoilla."
    },
    {
        start: "Mitä jos lemmikit tulisivat talon pomoksi?",
        end: "Ihmiset pakotetaan käyttämään kaulapantoja ja nukkumaan matoilla."
    },
    {
        start: "Mitä jos lelut heräisivät eloon vain kun kaikki talossa nukkuvat?",
        end: "Lapset pysyvät hereillä päiviä yrittäessään napata nallejaan."
    },
    {
        start: "Mitä jos peilikuvallamme olisi oma persoonallisuus?",
        end: "Ihmiset ostavat toisen peilin riidelläkseen oman heijastuksensa kanssa."
    },
    {
        start: "Mitä jos sade tulisi satunnaisissa väreissä veden sijaan?",
        end: "Valkoiset vaatteet kielletään lailla sateenkaaren tahrojen estämiseksi."
    },
    {
        start: "Mitä jos kasvit huutaisivat kun niitä leikataan?",
        end: "Ruohonleikkurit korvataan herkillä kasvien leikkaussaksilla."
    },
    {
        start: "Mitä jos kirjat lukisivat itsensä ääneen avatessaan?",
        end: "Kirjastoista tulee maapallon äänekkäimmät ja kaoottisemmat paikat."
    }
];
