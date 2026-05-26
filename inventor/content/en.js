// База даних місій "Mission Possible" для Inventor Lab із поділом на рівні складності
const inventor_missions_en = {
    rookie: [
        {
            scenario: "You need to carry water from the river to camp, but you don't have a bucket.",
            inventory: "A T-shirt, A plastic bag with holes, Duct tape",
            hint: "Can you combine two items to make one waterproof?"
        },
        {
            scenario: "Your dog is stuck on a high tree branch and is too scared to jump.",
            inventory: "A helium balloon, A long rope, A jar of peanut butter",
            hint: "What does the dog love most? Can you lure it down?"
        },
        {
            scenario: "You are locked inside a room. The key is on the floor on the OTHER side of the door.",
            inventory: "A newspaper, A pencil, A piece of chewing gum",
            hint: "Can you slide something flat under the door?"
        },
        {
            scenario: "You need to communicate with a friend 500 meters away, but your phone is dead.",
            inventory: "A mirror, A whistle, A bright red scarf",
            hint: "Think about senses: sight or hearing?"
        },
        {
            scenario: "It's raining hard and you need to keep a campfire going.",
            inventory: "A large garbage bag, 4 wooden sticks, String",
            hint: "Can you build a shelter OVER the fire?"
        },
        {
            scenario: "You dropped your ring into a narrow crack between two rocks.",
            inventory: "Chewing gum, A long stick, A flashlight",
            hint: "What if you made one item sticky?"
        },
        {
            scenario: "You need to cross a wide mud flat without sinking.",
            inventory: "Two large pieces of plywood, A rope, Your backpack",
            hint: "Think about snowshoes - spread your weight."
        },
        {
            scenario: "A bird flew into your house and won't leave.",
            inventory: "A bedsheet, A desk lamp, A bowl of fruit",
            hint: "Birds are attracted to light and scared of large moving objects."
        }
    ],
    agent: [
        {
            scenario: "You need to cross a river full of crocodiles. No bridge.",
            inventory: "5 empty plastic barrels, A strong fishing net, A long stick"
        },
        {
            scenario: "It's freezing. You need fire, but matches are completely wet.",
            inventory: "A battery, Steel wool, Dry leaves"
        },
        {
            scenario: "Lost in the desert. Signal a rescue plane flying miles away.",
            inventory: "A broken mirror, Bright red lipstick, A white towel"
        },
        {
            scenario: "A heavy boulder blocks a cave entrance. You can't lift it.",
            inventory: "A long metal pipe, A car jack, A flat rock"
        },
        {
            scenario: "Your boat has a hole and is slowly sinking. 1 km from shore.",
            inventory: "A bar of soap, A T-shirt, An empty water bottle"
        },
        {
            scenario: "Get to the top of a 3-meter smooth wall with no ladder.",
            inventory: "Two belts, A heavy backpack, A friend"
        },
        {
            scenario: "A swarm of bees is blocking the only path to your car.",
            inventory: "A smoke flare, A rain jacket, Running shoes"
        },
        {
            scenario: "Keep medicine cold for 8 hours with no electricity.",
            inventory: "A clay pot, Sand, Water"
        }
    ],
    elite: [
        {
            scenario: "Crash-landed on a deserted island. Build shelter before nightfall using ONLY what washed ashore.",
            inventory: "A car door, 5 meters of rope, A tattered parachute",
            constraint: "Ground is solid rock - you cannot dig."
        },
        {
            scenario: "Trapped in an elevator between floors. Doors slightly open (10cm gap).",
            inventory: "A belt, A smartphone (no signal), A coin",
            constraint: "Do NOT climb out. Get help instead."
        },
        {
            scenario: "Flood water rising fast. Protect important documents in a ground-floor room.",
            inventory: "Large trash bags, Packing tape, A bookshelf",
            constraint: "You have only 5 minutes."
        },
        {
            scenario: "Snowstorm. Car broke down 2km from the nearest town.",
            inventory: "A car floor mat, A bottle of cooking oil, A newspaper",
            constraint: "Wind is blowing 60 km/h in your face."
        },
        {
            scenario: "A child's toy fell into a narrow pipe (2m deep, 8cm wide) cemented into the ground.",
            inventory: "A garden hose, Duct tape, A wire coat hanger",
            constraint: "The toy is round and smooth - can't hook it."
        },
        {
            scenario: "Transport a live fish from river to a tank 3km away. No bucket or bag.",
            inventory: "A large watermelon, A knife, Your boot",
            constraint: "Fish must stay alive (needs water AND oxygen)."
        },
        {
            scenario: "Bridge ahead is broken. 3-meter gap. Must cross with a heavy bag.",
            inventory: "Two wooden planks (2.5m each), A rope, A rock",
            constraint: "Each plank is too short alone."
        },
        {
            scenario: "Cook a meal but your only heat source is the sun.",
            inventory: "Aluminum foil, A cardboard box, A clear plastic bag",
            constraint: "Must reach at least 70°C."
        }
    ]
};
