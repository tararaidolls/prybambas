const whatif_single_en = [
    "What if gravity turned off for exactly 1 minute every day?",
    "What if animals could talk, but only complained about the weather?",
    "What if all the oceans were replaced with orange juice?",
    "What if you could only move by jumping like a kangaroo?",
    "What if every lie made your nose literally grow like Pinocchio?",
    "What if clouds were made of sweet cotton candy?",
    "What if people glowed in the dark when they were happy?",
    "What if money actually grew on backyard trees?",
    "What if humans didn't need to sleep at all?",
    "What if all insects grew to the size of medium dogs?",
    "What if laughing out loud made you float in the air?",
    "What if we could only eat colored crayons?",
    "What if our reflection in the mirror had its own personality?",
    "What if toys came to life only when everyone in the house was asleep?",
    "What if dinosaurs never went extinct and lived among us as pets?",
    "What if trees could walk to a new spot when they got bored?",
    "What if shadows could play tricks and move independently from us?",
    "What if chocolate was the healthiest food on Earth?",
    "What if we could record and play back our dreams like movies?",
    "What if pets became the bosses and humans had to obey them?",
  "What if every staircase became a slide after sunset?",
  "What if classroom windows could display tomorrow's weather?",
  "What if your backpack only accepted items that matched today's mood?",
  "What if traffic lights changed based on the loudest sound nearby?",
  "What if library books could forget their endings by morning?",
  "What if every tree dropped one helpful tool instead of leaves?",
  "What if shoes made a different rhythm for every emotion?",
  "What if doors remembered the last song they heard?",
  "What if the ocean followed the school timetable instead of the moon?",
  "What if postcards arrived before they were written?",
  "What if a spoonful of rain could run a small lamp for an hour?",
  "What if your shadow always pointed to the nearest hidden object?",
  "What if every song you hummed attracted a different insect?",
  "What if supermarket shelves rearranged themselves by puzzle difficulty?",
  "What if mirrors showed the person you helped most recently?",
  "What if pencils grew longer every time you solved a problem?",
  "What if clouds could be stored in jars and reopened later?",
  "What if buses could pick the shortest route by themselves?",
  "What if every recipe changed depending on who was cooking it?",
  "What if school bells only rang for students who finished their work?",
  "What if every city had a hidden underground river of music?",
  "What if the first snow erased every footprint instantly?",
  "What if keyboards typed the next word you were about to think?",
  "What if houseplants could explain their needs in one sentence?",
  "What if birthdays happened when your favorite color changed?",
  "What if maps updated whenever someone moved a chair?",
  "What if books on a shelf swapped places when nobody was looking?",
  "What if the wind carried tiny notes instead of leaves?",
  "What if every balloon told the truth about where it had been?",
  "What if a tap on the wall could reveal whether someone was behind it?"
];

const whatif_chain_en = [
    {
        start: "What if gravity turned off for exactly 1 minute every day?",
        steps: ["People and objects float up in the air.", "Everyone hits their head on the ceiling.", "Helmets become mandatory indoor fashion."],
        end: "Helmets become mandatory indoor fashion."
    },
    {
        start: "What if animals could talk, but only complained about the weather?",
        steps: ["Dogs refuse to walk in the rain & argue loudly.", "Special dog-umbrella sales skyrocket.", "Weather forecasting is done by asking pigeons."],
        end: "Weather forecasting is done by asking pigeons."
    },
    {
        start: "What if all the oceans were replaced with orange juice?",
        steps: ["The ocean becomes highly acidic and sweet.", "Fish develop mutations to survive the citric acid.", "Sharks become addicted to sugar and swim faster."],
        end: "Sharks become addicted to sugar and swim faster."
    },
    {
        start: "What if you could only move by jumping like a kangaroo?",
        steps: ["Walking and running become strictly impossible.", "Ceilings in all houses are built 3x higher.", "Sidewalks are replaced by massive trampolines."],
        end: "Trampolines replace all city sidewalks."
    },
    {
        start: "What if every lie made your nose literally grow like Pinocchio?",
        steps: ["Politicians have 10-foot long noses.", "Office and house doors must be widened.", "Nose-trimming becomes a daily morning routine."],
        end: "Nose-trimming becomes a daily morning routine."
    },
    {
        start: "What if clouds were made of sweet cotton candy?",
        steps: ["It rains sticky sugar water.", "All cars and streets get incredibly sticky.", "Car washes are replaced by licking-machines."],
        end: "Car washes are replaced by licking-machines."
    },
    {
        start: "What if trees could walk to a new spot when they got bored?",
        steps: ["Forests constantly change their layout overnight.", "GPS maps become useless and outdated in hours.", "People build houses on wheels to follow their favorite trees."],
        end: "People build houses on wheels to follow their favorite trees."
    },
    {
        start: "What if we could record and play back our dreams like movies?",
        steps: ["Dream cinemas become more popular than regular movie theaters.", "People sell their best nightmares as horror blockbusters.", "Dream-blocking helmets are sold to protect sleep privacy."],
        end: "Dream-blocking helmets are sold to protect sleep privacy."
    },
    {
        start: "What if dinosaurs never went extinct and lived among us as pets?",
        steps: ["T-Rex dinosaurs replace guard dogs for large yards.", "Cities must build giant dinosaur-poop cleaning trucks.", "Mini-triceratops become a popular breed for apartments."],
        end: "Mini-triceratops become a popular breed for apartments."
    },
    {
        start: "What if shadows could move independently from us?",
        steps: ["Shadows sneak out at night to party without their owners.", "People wake up with someone else's shadow attached to them.", "A new profession of shadow-catchers is invented to return runaway shadows."],
        end: "A new profession of shadow-catchers is invented."
    },
  {
    start: "What if bicycles could only move on painted lines?",
    steps: [
      "Roads would start looking like giant coloring books.",
      "Traffic engineers would work together with artists.",
      "Cities would repaint routes every night to keep them clear."
    ],
    end: "Street painters would become as important as road builders."
  },
  {
    start: "What if every classroom chair could only be sat on once a day?",
    steps: [
      "Schools would rotate chairs between different rooms.",
      "Students would start carrying personal seat mats.",
      "Furniture companies would design faster swap systems."
    ],
    end: "Seat-sharing would become a normal school routine."
  },
  {
    start: "What if cafes served drinks only in transparent cups?",
    steps: [
      "Customers would start noticing layers, colors, and mistakes.",
      "Baristas would compete through drink design.",
      "Menus would become more visual and color-based."
    ],
    end: "Drink presentation would become part of the order."
  },
  {
    start: "What if every door opened only after a short rhyme?",
    steps: [
      "People would invent entrance rhymes for every building.",
      "Schools would teach rhyme etiquette.",
      "Nobody would forget their keys, but many would forget the line."
    ],
    end: "Poetry would become useful in daily life."
  },
  {
    start: "What if every subway station smelled like one fruit?",
    steps: [
      "Riders would remember stations by scent instead of signs.",
      "Transit systems would start using smell as a navigation tool.",
      "Advertisers would try to brand entire neighborhoods by scent."
    ],
    end: "Cities would begin using smells as part of navigation."
  },
  {
    start: "What if a dropped sock always teleported to the nearest laundry basket?",
    steps: [
      "People would stop searching under beds.",
      "Laundry basket placement would become a serious strategy.",
      "Clean rooms would be planned around basket zones."
    ],
    end: "Laundry baskets would become the most important furniture in the house."
  },
  {
    start: "What if phone batteries charged only while you held the phone with both hands?",
    steps: [
      "People would schedule charging breaks like meetings.",
      "Phone stands would become popular everywhere.",
      "Cafes would create special charging lounges."
    ],
    end: "Charging would become a social habit instead of a solo one."
  },
  {
    start: "What if every library book whispered one fact when opened?",
    steps: [
      "Readers would start hunting for surprising books.",
      "Librarians would organize shelves by curiosity level.",
      "Studying would become more like exploring a maze."
    ],
    end: "Libraries would turn into living fact mazes."
  },
  {
    start: "What if reading a recipe aloud changed it slightly?",
    steps: [
      "Chefs would start memorizing recipes instead of reading them out loud.",
      "Audio recipes would need careful testing.",
      "Kitchen routines would depend on tone, timing, and silence."
    ],
    end: "Cooking would become a mix of reading and performance."
  },
  {
    start: "What if the shadow of every tree pointed to the nearest water source?",
    steps: [
      "Hikers would begin following tree shadows on purpose.",
      "Parks would plant trees as trail guides.",
      "Map apps would compare shadows with GPS data."
    ],
    end: "Trees would become natural navigation helpers."
  },
  {
    start: "What if every time someone lied, their shoes squeaked?",
    steps: [
      "Honesty would become something you could hear.",
      "Public speeches would suddenly get much quieter.",
      "Shoe companies would start making anti-squeak filters."
    ],
    end: "Truth-checking would become a footwear industry."
  },
  {    start: "What if elevator buttons could only be pressed in pairs?",
   steps: [
      "People would have to coordinate their floor choices.",
      "Building traffic would become slower but more planned.",
      "Friends would start taking elevators together on purpose."
    ],
    end: "Going up or down would become a social activity."
  },
  {
    start: "What if every mailbox delivered one extra surprise item?",
    steps: [
      "People would check the mail with more excitement.",
      "Unexpected items would create new sorting habits.",
      "Postal insurance would become much more popular."
    ],
    end: "Mail would feel like a daily lottery."
  },
  {
    start: "What if a spilled glass of water turned into a tiny map?",
    steps: [
      "Accidents would start turning into clues.",
      "Kids and detectives would study puddles more carefully.",
      "Map-reading games would use water spills as puzzles."
    ],
    end: "Messes would start carrying information."
  },
  {
    start: "What if every popped balloon released one spoken sentence?",
    steps: [
      "Kids would save balloons for messages.",
      "Parties would become full of accidental announcements.",
      "Balloon makers would print warnings and message labels."
    ],
    end: "Balloons would become secret note carriers."
  }
];


const whatif_deduction_en = [
    {
        start: "What if chocolate was the healthiest food on Earth?",
        end: "Dentists go completely out of business."
    },
    {
        start: "What if humans didn't need to sleep at all?",
        end: "The concept of 'nighttime' is banned by city councils."
    },
    {
        start: "What if all insects grew to the size of medium dogs?",
        end: "Mosquito nets are replaced by steel garage doors."
    },
    {
        start: "What if laughing out loud made you float in the air?",
        end: "Comedy clubs are built with padded ceilings."
    },
    {
        start: "What if pets became the bosses of the house?",
        end: "Humans are forced to wear collars and sleep on rugs."
    },
    {
        start: "What if toys came to life only when everyone in the house was asleep?",
        end: "Kids stay awake for days trying to catch their teddy bears."
    },
    {
        start: "What if our reflection in the mirror had its own personality?",
        end: "People buy second mirrors to argue with their own reflections."
    },
    {
        start: "What if rain fell in random colors instead of water?",
        end: "White clothing is banned by law to prevent rainbow stains."
    },
    {
        start: "What if plants screamed when you cut them?",
        end: "Lawn mowers are replaced by delicate plant-trimming scissors."
    },
    {
        start: "What if books read themselves out loud when opened?",
        end: "Libraries become the loudest and most chaotic places on Earth."
    }
];
