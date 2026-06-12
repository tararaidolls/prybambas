const whatif_single_fr = [
    "Et si la gravité s'arrêtait exactement 1 minute chaque jour ?",
    "Et si les animaux pouvaient parler, mais se plaignaient seulement du temps ?",
    "Et si tous les océans étaient remplacés par du jus d'orange ?",
    "Et si on ne pouvait se déplacer qu'en sautant comme un kangourou ?",
    "Et si chaque mensonge faisait littéralement pousser ton nez comme celui de Pinocchio ?",
    "Et si les nuages étaient faits de barbe à papa sucrée ?",
    "Et si les gens brillaient dans le noir quand ils étaient heureux ?",
    "Et si l'argent poussait vraiment sur les arbres du jardin ?",
    "Et si les humains n'avaient plus du tout besoin de dormir ?",
    "Et si tous les insectes devenaient gros comme des chiens de taille moyenne ?",
    "Et si rire à gorge déployée te faisait flotter dans les airs ?",
    "Et si nous ne pouvions manger que des crayons de couleur ?",
    "Et si notre reflet dans le miroir avait sa propre personnalité ?",
    "Et si les jouets prenaient vie seulement quand tout le monde dans la maison dormait ?",
    "Et si les dinosaures n'avaient jamais disparu et vivaient parmi nous comme des animaux de compagnie ?",
    "Et si les arbres pouvaient aller s'installer ailleurs quand ils s'ennuient ?",
    "Et si les ombres pouvaient faire des blagues et se déplacer indépendamment de nous ?",
    "Et si le chocolat était l'aliment le plus sain de la Terre ?",
    "Et si nous pouvions enregistrer et revoir nos rêves comme des films ?",
    "Et si les animaux de compagnie devenaient les chefs et que les humains devaient leur obéir ?",
    "Et si chaque escalier devenait un toboggan après le coucher du soleil ?",
    "Et si les fenêtres de la classe pouvaient afficher la météo de demain ?",
    "Et si ton sac à dos n'acceptait que les objets qui correspondent à ton humeur du jour ?",
    "Et si les feux de circulation changeaient selon le son le plus fort à proximité ?",
    "Et si les livres de bibliothèque oubliaient leur fin jusqu'au matin ?",
    "Et si chaque arbre laissait tomber un outil utile au lieu de feuilles ?",
    "Et si les chaussures faisaient un rythme différent pour chaque émotion ?",
    "Et si les portes se souvenaient de la dernière chanson qu'elles avaient entendue ?",
    "Et si l'océan suivait l'emploi du temps de l'école au lieu de la Lune ?",
    "Et si les cartes postales arrivaient avant d'être écrites ?",
    "Et si une cuillère de pluie pouvait alimenter une petite lampe pendant une heure ?",
    "Et si ton ombre pointait toujours vers l'objet caché le plus proche ?",
    "Et si chaque chanson que tu fredonnes attirait un insecte différent ?",
    "Et si les rayons du supermarché se réorganisaient selon la difficulté des puzzles ?",
    "Et si les miroirs montraient la personne que tu as aidée le plus récemment ?",
    "Et si les crayons s'allongeaient chaque fois que tu résous un problème ?",
    "Et si les nuages pouvaient être conservés dans des bocaux et rouverts plus tard ?",
    "Et si les bus pouvaient choisir eux-mêmes l'itinéraire le plus court ?",
    "Et si chaque recette changeait selon la personne qui cuisine ?",
    "Et si la cloche de l'école ne sonnait que pour les élèves qui ont fini leur travail ?",
    "Et si chaque ville avait une rivière souterraine cachée de musique ?",
    "Et si la première neige effaçait instantanément chaque empreinte ?",
    "Et si les claviers tapaient le prochain mot que tu allais penser ?",
    "Et si les plantes d'intérieur pouvaient expliquer leurs besoins en une seule phrase ?",
    "Et si les anniversaires arrivaient quand ta couleur préférée changeait ?",
    "Et si les cartes se mettaient à jour chaque fois que quelqu'un déplaçait une chaise ?",
    "Et si les livres sur une étagère échangeaient leur place quand personne ne regardait ?",
    "Et si le vent transportait de petits billets au lieu de feuilles ?",
    "Et si chaque ballon disait la vérité sur l'endroit où il a été ?",
    "Et si un coup sur le mur pouvait révéler si quelqu'un était derrière ?"
];

const whatif_chain_fr = [
    {
        start: "Et si la gravité s'arrêtait exactement 1 minute chaque jour ?",
        steps: ["Les personnes et les objets flottent dans les airs.", "Tout le monde se cogne la tête contre le plafond.", "Les casques deviennent la mode obligatoire à l'intérieur."],
        end: "Les casques deviennent la mode obligatoire à l'intérieur."
    },
    {
        start: "Et si les animaux pouvaient parler, mais se plaignaient seulement du temps ?",
        steps: ["Les chiens refusent de se promener sous la pluie et râlent bruyamment.", "Les ventes de parapluies spéciaux pour chiens explosent.", "La météo se prévoit en posant la question aux pigeons."],
        end: "La météo se prévoit en posant la question aux pigeons."
    },
    {
        start: "Et si tous les océans étaient remplacés par du jus d'orange ?",
        steps: ["L'océan devient très acide et très sucré.", "Les poissons mutent pour survivre à l'acide citrique.", "Les requins deviennent accros au sucre et nagent plus vite."],
        end: "Les requins deviennent accros au sucre et nagent plus vite."
    },
    {
        start: "Et si on ne pouvait se déplacer qu'en sautant comme un kangourou ?",
        steps: ["Marcher et courir deviennent strictement impossibles.", "Les plafonds de toutes les maisons sont construits 3 fois plus haut.", "Les trottoirs sont remplacés par d'immenses trampolines."],
        end: "Les trampolines remplacent tous les trottoirs de la ville."
    },
    {
        start: "Et si chaque mensonge faisait pousser ton nez comme celui de Pinocchio ?",
        steps: ["Les politiciens ont des nez de 3 mètres de long.", "Les portes des bureaux et des maisons doivent être élargies.", "Couper son nez devient une routine quotidienne du matin."],
        end: "Couper son nez devient une routine quotidienne du matin."
    },
    {
        start: "Et si les nuages étaient faits de barbe à papa sucrée ?",
        steps: ["Il pleut une eau sucrée et collante.", "Toutes les voitures et les rues deviennent extrêmement collantes.", "Les stations de lavage sont remplacées par des machines à lécher."],
        end: "Les stations de lavage sont remplacées par des machines à lécher."
    },
    {
        start: "Et si les arbres pouvaient aller s'installer ailleurs quand ils s'ennuient ?",
        steps: ["Les forêts changent constamment de disposition pendant la nuit.", "Les cartes GPS deviennent inutiles et dépassées en quelques heures.", "Les gens construisent des maisons sur roues pour suivre leurs arbres préférés."],
        end: "Les gens construisent des maisons sur roues pour suivre leurs arbres préférés."
    },
    {
        start: "Et si nous pouvions enregistrer et revoir nos rêves comme des films ?",
        steps: ["Les cinémas de rêves deviennent plus populaires que les salles de cinéma classiques.", "Les gens vendent leurs meilleurs cauchemars comme des blockbusters d'horreur.", "Des casques anti-rêves sont vendus pour protéger la vie privée du sommeil."],
        end: "Des casques anti-rêves sont vendus pour protéger la vie privée du sommeil."
    },
    {
        start: "Et si les dinosaures n'avaient jamais disparu et vivaient parmi nous comme des animaux de compagnie ?",
        steps: ["Les T-Rex remplacent les chiens de garde dans les grands jardins.", "Les villes doivent construire d'énormes camions pour nettoyer les crottes de dinosaures.", "Les mini-tricératops deviennent des animaux de compagnie populaires pour les appartements."],
        end: "Les mini-tricératops deviennent des animaux de compagnie populaires pour les appartements."
    },
    {
        start: "Et si les ombres pouvaient se déplacer indépendamment de nous ?",
        steps: ["Les ombres s'échappent la nuit pour faire la fête sans leurs propriétaires.", "Les gens se réveillent avec l'ombre de quelqu'un d'autre attachée à eux.", "Une nouvelle profession de chasseurs d'ombres est inventée pour ramener les ombres fugueuses."],
        end: "Une nouvelle profession de chasseurs d'ombres est inventée."
    },
    {
        start: "Et si les vélos ne pouvaient rouler que sur des lignes peintes ?",
        steps: [
            "Les routes ressembleraient à d'immenses livres de coloriage.",
            "Les ingénieurs routiers travailleraient avec des artistes.",
            "Les villes repeindraient les itinéraires chaque nuit pour les garder clairs."
        ],
        end: "Les peintres de rue deviendraient aussi importants que les constructeurs de routes."
    },
    {
        start: "Et si chaque chaise de classe ne pouvait être utilisée qu'une fois par jour ?",
        steps: [
            "Les écoles feraient tourner les chaises entre différentes salles.",
            "Les élèves commenceraient à apporter leurs propres tapis de siège.",
            "Les entreprises de mobilier concevraient des systèmes d'échange plus rapides."
        ],
        end: "Le partage des sièges deviendrait une routine scolaire normale."
    },
    {
        start: "Et si les cafés ne servaient les boissons que dans des verres transparents ?",
        steps: [
            "Les clients commenceraient à remarquer les couches, les couleurs et les erreurs.",
            "Les baristas rivaliseraient par le design des boissons.",
            "Les menus deviendraient plus visuels et basés sur les couleurs."
        ],
        end: "La présentation des boissons ferait partie de la commande."
    },
    {
        start: "Et si chaque porte ne s'ouvrait qu'après une courte rime ?",
        steps: [
            "Les gens inventeraient des rimes d'entrée pour chaque bâtiment.",
            "Les écoles enseigneraient l'étiquette des rimes.",
            "Personne n'oublierait ses clés, mais beaucoup oublieraient le vers."
        ],
        end: "La poésie deviendrait utile dans la vie quotidienne."
    },
    {
        start: "Et si chaque station de métro sentait un fruit différent ?",
        steps: [
            "Les voyageurs se souviendraient des stations par l'odeur plutôt que par les panneaux.",
            "Les systèmes de transport utiliseraient l'odeur comme outil de navigation.",
            "Les publicitaires essaieraient de marquer des quartiers entiers par le parfum."
        ],
        end: "Les villes commenceraient à utiliser les odeurs comme partie de la navigation."
    },
    {
        start: "Et si une chaussette perdue se téléportait toujours vers le panier à linge le plus proche ?",
        steps: [
            "Les gens arrêteraient de chercher sous les lits.",
            "Le placement du panier à linge deviendrait une stratégie sérieuse.",
            "Les chambres propres seraient planifiées autour des zones de paniers."
        ],
        end: "Les paniers à linge deviendraient le meuble le plus important de la maison."
    },
    {
        start: "Et si les batteries de téléphone ne se chargeaient que quand tu tiens le téléphone à deux mains ?",
        steps: [
            "Les gens planifieraient des pauses de charge comme des réunions.",
            "Les supports de téléphone deviendraient populaires partout.",
            "Les cafés créeraient des salons de recharge spéciaux."
        ],
        end: "La recharge deviendrait une habitude sociale plutôt qu'une activité solitaire."
    },
    {
        start: "Et si chaque livre de bibliothèque murmurait un fait quand on l'ouvre ?",
        steps: [
            "Les lecteurs chasseraient les livres surprenants.",
            "Les bibliothécaires organiseraient les étagères par niveau de curiosité.",
            "Étudier ressemblerait davantage à explorer un labyrinthe."
        ],
        end: "Les bibliothèques se transformeraient en labyrinthes de faits vivants."
    },
    {
        start: "Et si lire une recette à voix haute la modifiait légèrement ?",
        steps: [
            "Les chefs mémoriseraient les recettes au lieu de les lire à voix haute.",
            "Les recettes audio nécessiteraient des tests minutieux.",
            "Les routines de cuisine dépendraient du ton, du timing et du silence."
        ],
        end: "La cuisine deviendrait un mélange de lecture et de performance."
    },
    {
        start: "Et si l'ombre de chaque arbre pointait vers la source d'eau la plus proche ?",
        steps: [
            "Les randonneurs suivraient les ombres des arbres exprès.",
            "Les parcs planteraient des arbres comme guides de sentier.",
            "Les applications de cartes compareraient les ombres avec les données GPS."
        ],
        end: "Les arbres deviendraient des aides naturelles à la navigation."
    },
    {
        start: "Et si les chaussures grincaient chaque fois que quelqu'un mentait ?",
        steps: [
            "L'honnêteté deviendrait quelque chose qu'on peut entendre.",
            "Les discours publics deviendraient soudain beaucoup plus silencieux.",
            "Les entreprises de chaussures développeraient des filtres anti-grincement."
        ],
        end: "La vérification de la vérité deviendrait une industrie de la chaussure."
    },
    {
        start: "Et si les boutons d'ascenseur ne pouvaient être pressés qu'en paires ?",
        steps: [
            "Les gens devraient coordonner leurs choix d'étage.",
            "La circulation dans les bâtiments deviendrait plus lente mais plus planifiée.",
            "Les amis prendraient l'ascenseur ensemble exprès."
        ],
        end: "Monter ou descendre deviendrait une activité sociale."
    },
    {
        start: "Et si chaque boîte aux lettres livrait un objet surprise en plus ?",
        steps: [
            "Les gens vérifieraient le courrier avec plus d'excitation.",
            "Les objets inattendus créeraient de nouvelles habitudes de tri.",
            "L'assurance postale deviendrait beaucoup plus populaire."
        ],
        end: "Le courrier ressemblerait à une loterie quotidienne."
    },
    {
        start: "Et si un verre d'eau renversé se transformait en une petite carte ?",
        steps: [
            "Les accidents commenceraient à devenir des indices.",
            "Les enfants et les détectives examineraient les flaques plus attentivement.",
            "Les jeux de lecture de cartes utiliseraient les flaques d'eau comme puzzles."
        ],
        end: "Le désordre commencerait à porter des informations."
    },
    {
        start: "Et si chaque ballon éclaté libérait une phrase parlée ?",
        steps: [
            "Les enfants garderaient les ballons pour les messages.",
            "Les fêtes seraient pleines d'annonces accidentelles.",
            "Les fabricants de ballons imprimeraient des avertissements et des étiquettes de message."
        ],
        end: "Les ballons deviendraient des porteurs de notes secrètes."
    }
];

const whatif_deduction_fr = [
    {
        start: "Et si le chocolat était l'aliment le plus sain de la Terre ?",
        end: "Les dentistes font faillite."
    },
    {
        start: "Et si les humains n'avaient plus du tout besoin de dormir ?",
        end: "La notion de 'nuit' est interdite par les conseils municipaux."
    },
    {
        start: "Et si tous les insectes devenaient gros comme des chiens de taille moyenne ?",
        end: "Les moustiquaires sont remplacées par des portes de garage en acier."
    },
    {
        start: "Et si rire à gorge déployée te faisait flotter dans les airs ?",
        end: "Les clubs de comédie sont construits avec des plafonds rembourrés."
    },
    {
        start: "Et si les animaux de compagnie devenaient les chefs de la maison ?",
        end: "Les humains sont forcés de porter des colliers et de dormir sur des tapis."
    },
    {
        start: "Et si les jouets prenaient vie seulement quand tout le monde dans la maison dormait ?",
        end: "Les enfants restent éveillés pendant des jours pour essayer d'attraper leurs ours en peluche."
    },
    {
        start: "Et si notre reflet dans le miroir avait sa propre personnalité ?",
        end: "Les gens achètent un deuxième miroir pour se disputer avec leur reflet."
    },
    {
        start: "Et si la pluie tombait en couleurs aléatoires au lieu d'eau ?",
        end: "Les vêtements blancs sont interdits par la loi pour éviter les taches arc-en-ciel."
    },
    {
        start: "Et si les plantes criaient quand on les coupe ?",
        end: "Les tondeuses à gazon sont remplacées par de délicats ciseaux à plantes."
    },
    {
        start: "Et si les livres se lisaient tout seuls à voix haute quand on les ouvre ?",
        end: "Les bibliothèques deviennent les endroits les plus bruyants et les plus chaotiques de la Terre."
    }
];
