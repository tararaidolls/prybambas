// Inventor Lab — en (v2: visual tools + search-around CTA)
const inventor_db_en = {
  ui: {
    title: "Think Like an Inventor",
    howItWorks: "How it works",
    start: "START",
    menuNote: "Tap an icon above to preview a section, then press Start.",
    calPrompt: "Tap any day to reveal your observation challenge!",
    dayLabel: "Day",
    example: "See it in real life",
    realInvention: "Real invention",
    searchAround: "🔍 Search around you",
    searchHint: "Tap to reveal your mini-mission",
    watchVideo: "▶ Watch 30-sec example",
    comingSoon: "Coming soon",
    toolOf: "Tool {n} of 8",
    prev: "←",
    next: "→",
    submitCoach: "Submit to AI Coach",
    writePlaceholder: "Write your idea here...",
    useAllItems: "Use all 3 items.",
    inventory: "Your items",
    hint: "Hint",
    writeFirst: "Please write your invention solution first!",
    rookie: "ROOKIE",
    agent: "AGENT",
    elite: "ELITE",
    rookieSub: "Easy, with hints",
    agentSub: "Medium",
    eliteSub: "Hard, with constraints",
    constraint: "Constraint",
    openChallenge: "Open Challenge",
    unlockAfter: "Unlocked after today",
    todaysLabel: "Today's hunt",
    completed: "✓ Completed",
    noPenalty: "No penalty — progress still counts.",
    futureHint: "Full checklist unlocks when you reach this day.",
    startDayHunt: "Start Day {n} hunt",
    notAvailable: "Not available yet",
    previewTheme: "Theme",
    completeLabel: "complete",
    of30: "of 30",
    weekLabel: "Week",
    streakLabel: "day streak",
    doAgain: "↺ Do again",
    unlocksOn: "🔒 Unlocks later",
    catchUp: "↺ Catch up anytime",
    dayComplete: "✓ Day complete — nice hunt!",
    markFound: "✓ Mark as found",
    backToToday: "← Back to today's hunt",
    viewFullCalendar: "📅 View full calendar (all 30 days)",
    questMap: "30-Day Quest Map",
    todaysObservation: "Today's Observation",
    challengePlaceholder: "Describe your invention: parts, materials, how it works...",
    writeDesignFirst: "Describe or sketch your invention first!",
    submitDesign: "Submit design to AI Coach",
    learnTool: "↗ Learn this TRIZ tool",
    bonusChallenge: "Bonus",
    successLooks: "Success looks like",
    paperNote: "📓 Sketch on paper — then describe below",
    designSteps: "Your design steps",
    constraints: "Constraints",
    designBrief: "Design brief",
    packOf: "Pack {n} of {total}",
    yourInvention: "Your invention",
    missionGoal: "Escape goal",
    anotherMission: "\ud83c\udfb2 Another mission",
    hideHint: "\uff0d Hide hint",
    showHint: "\uff0b Show hint",
    escapePlan: "Your escape plan",
    missionOf: "Mission {n} of {total}",
    hideSteps: "\uff0d Hide design steps",
    showSteps: "\uff0b Show design steps"
  },
  menu: {
    m1: "Tools & Examples",
    m2: "Observation Calendar",
    m3: "Challenges by Tool",
    m4: "Mission Possible",
    back: "Back",
    backMenu: "Back to Menu",
    genBtn: "Generate Mission",
    tcTitle: "Challenge Description"
  },
  modes: [
    {
      title: "Tools & Examples",
      rules: "<div><span>🛠️</span> Learn 8 TRIZ tools real inventors use every day.</div><div><span>👀</span> See visual examples, then hunt for them in your home!</div>"
    },
    {
      title: "Observation Calendar",
      rules: "<div><span>📅</span> A 30-day interactive engineering quest.</div><div><span>🔍</span> One new TRIZ hunt each day — look around your room, kitchen, or yard.</div>"
    },
    {
      title: "Challenges by Tool",
      rules: "<div><span>🎯</span> Design challenges that force you to use one TRIZ tool.</div><div><span>🧠</span> Sketch your idea, then submit it to AI Coach for feedback!</div>"
    },
    {
      title: "Mission Possible",
      rules: "<div><span>🚀</span> 24 escape-room missions: Rookie, Agent, Elite.</div><div><span>💡</span> Combine 3 random items — invent your way out!</div>"
    }
  ],
  tools: [
    {
      name: "1. Segmentation",
      desc: "Split one thing into independent parts — or make it easy to take apart and rebuild.",
      realWorld: "Lego · Swiss Army knife",
      examples: [
        { icon: "🧱", label: "Modular shelves", note: "Add or remove sections" },
        { icon: "✏️", label: "Multi-part pen", note: "Cap, body, and refill separate" }
      ],
      searchTasks: [
        "Something that comes apart into pieces",
        "Something you can rearrange or resize",
        "Something easier to carry because it splits up"
      ],
      ex: "Modular shelving, or a multi-part pen."
    },
    {
      name: "2. Nesting",
      desc: "Put one object inside another — like Russian dolls, but for real engineering.",
      realWorld: "Measuring cups · Telescope",
      examples: [
        { icon: "🥄", label: "Measuring cups", note: "Small cup fits inside big cup" },
        { icon: "🪆", label: "Stacked bowls", note: "Same shape, smaller inside larger" }
      ],
      searchTasks: [
        "Two things that fit inside each other",
        "Something that saves space by stacking",
        "A set where each piece has a 'home' inside another"
      ],
      ex: "Measuring cups, nesting dolls, or a telescopic lens."
    },
    {
      name: "3. Merging",
      desc: "Combine two jobs into one object — or do two steps at the same time.",
      realWorld: "Swiss Army knife · Shampoo + conditioner",
      examples: [
        { icon: "🖍️", label: "Double-ended marker", note: "Two colors, one tool" },
        { icon: "🪥", label: "Toothbrush + tongue cleaner", note: "Two jobs, one handle" }
      ],
      searchTasks: [
        "A tool that does two different jobs",
        "Something that merged two old separate items",
        "A gadget that saves you an extra step"
      ],
      ex: "Double-ended marker, toothbrush with tongue cleaner."
    },
    {
      name: "4. Asymmetry",
      desc: "Change a symmetrical shape into an uneven one — often for grip, balance, or safety.",
      realWorld: "Ergonomic mouse · Wavy scissors",
      examples: [
        { icon: "🖱️", label: "Ergonomic mouse", note: "Curved to fit your hand" },
        { icon: "✂️", label: "Kitchen scissors", note: "One handle bigger for force" }
      ],
      searchTasks: [
        "An object that is NOT mirror-symmetric",
        "Something shaped for a specific hand or side",
        "Something harder to knock over because of its shape"
      ],
      ex: "Ergonomic computer mouse, or asymmetric kitchen scissors."
    },
    {
      name: "5. Feedback",
      desc: "Add a loop: the object senses something and adjusts itself (or tells you to adjust).",
      realWorld: "Thermostat · Car fuel gauge",
      examples: [
        { icon: "🌡️", label: "Room thermostat", note: "Measures temp → turns heat on/off" },
        { icon: "🔋", label: "Phone battery icon", note: "Shows status → you plug in" }
      ],
      searchTasks: [
        "A device with a screen or light that shows status",
        "Something that beeps when a job is done",
        "Something that turns on/off by itself based on conditions"
      ],
      ex: "Thermostat regulating room heat based on current temp."
    },
    {
      name: "6. Self-Service",
      desc: "Make the object maintain or recharge itself — less work for humans.",
      realWorld: "Robot vacuum · Self-watering plant pot",
      examples: [
        { icon: "🤖", label: "Robot vacuum", note: "Cleans, then returns to dock" },
        { icon: "🌱", label: "Self-watering planter", note: "Stores water, feeds roots slowly" }
      ],
      searchTasks: [
        "Something that cleans or charges itself",
        "A device that refills or resets automatically",
        "Something that does its 'extra job' without being asked"
      ],
      ex: "Robot vacuum cleaner returning to dock automatically."
    },
    {
      name: "7. Copying",
      desc: "Replace a heavy, fragile, or expensive thing with a cheap copy — photo, scan, or simulation.",
      realWorld: "Google Maps · 3D print from scan",
      examples: [
        { icon: "📱", label: "Map on your phone", note: "Replaces paper map + compass" },
        { icon: "📸", label: "Photo of a document", note: "Replaces carrying the original" }
      ],
      searchTasks: [
        "A digital version of a physical thing you own",
        "A photo or scan used instead of the real object",
        "A 'try before you buy' sample or demo"
      ],
      ex: "Using a simulated map on a phone instead of a 3D clay model."
    },
    {
      name: "8. Color Change",
      desc: "Change color or transparency to signal state — hot, ready, safe, or dangerous.",
      realWorld: "Mood ring · Traffic light",
      examples: [
        { icon: "🕶️", label: "Transition glasses", note: "Darken in bright sun" },
        { icon: "🚦", label: "Traffic light", note: "Color = action rule" }
      ],
      searchTasks: [
        "Something that changes color with heat or cold",
        "A label or sticker that signals 'done' or 'warning'",
        "Something transparent that becomes opaque (or the reverse)"
      ],
      ex: "Transition glasses that darken in the sunlight."
    }
  ],
  calendarDays: [
    { day: 1, week: 1, weekTheme: "Nesting", title: "Nesting Hunt", tool: "Nesting", hunt: "Find 2 things where one fits inside another.", hint: "Look in the kitchen, toy box, or toolbox.", checklist: ["One object fits inside another", "Draw or name both items", "Bonus: what space did nesting save?"], unlock: "Nesting Pack" },
    { day: 2, week: 1, weekTheme: "Nesting", title: "Segmentation Hunt", tool: "Segmentation", hunt: "Find something that comes apart into pieces.", hint: "Why did the inventor split it?", checklist: ["Something with separate parts", "Explain why splitting helps", "Bonus: can you reassemble it differently?"], unlock: "Segmentation Pack" },
    { day: 3, week: 1, weekTheme: "Nesting", title: "Asymmetry Hunt", tool: "Asymmetry", hunt: "Find one object that is NOT symmetrical.", hint: "Scissors, mugs, and mice are good places to look.", checklist: ["One asymmetrical object", "Guess why the shape is uneven", "Bonus: would symmetry make it worse?"], unlock: "Asymmetry Pack" },
    { day: 4, week: 1, weekTheme: "Nesting", title: "Merging Hunt", tool: "Merging", hunt: "Find a tool that does two jobs in one.", hint: "Kitchen gadgets are full of merged inventions.", checklist: ["A 2-in-1 tool", "Name both jobs it does", "Bonus: what would you merge next?"], unlock: "Merging Pack" },
    { day: 5, week: 1, weekTheme: "Nesting", title: "Color Change Hunt", tool: "Color Change", hunt: "Find something that changes color with heat, cold, or light.", hint: "What is it trying to tell you?", checklist: ["One color-changing object", "What triggers the change?", "Bonus: sketch before and after"], unlock: "Challenges by Tool" },
    { day: 6, week: 1, weekTheme: "Nesting", title: "Feedback Hunt", tool: "Feedback", hunt: "Find a device that shows status on a screen, light, or beep.", hint: "What is it measuring or telling you?", checklist: ["One feedback device", "What happens when status changes?", "Bonus: what if it had no signal?"], unlock: "Challenges by Tool" },
    { day: 7, week: 1, weekTheme: "Nesting", title: "Self-Service Hunt", tool: "Self-Service", hunt: "Find something that cleans, charges, or refills itself.", hint: "Robot vacuums and planters count!", checklist: ["One self-serving object", "What extra job does it do alone?", "Bonus: what boring task did it remove?"], unlock: "Challenges by Tool" },
    { day: 8, week: 1, weekTheme: "Nesting", title: "Copying Hunt", tool: "Copying", hunt: "Find a digital copy of something physical.", hint: "Photos, scans, and apps all count.", checklist: ["One copy replacing a physical thing", "What did the copy replace?", "Bonus: when is the copy better than the real thing?"], unlock: "Challenges by Tool" },
    { day: 9, week: 2, weekTheme: "Segmentation", title: "Nesting Hunt", tool: "Nesting", hunt: "Find 2 things where one fits inside another.", hint: "Look in the kitchen, toy box, or toolbox.", checklist: ["One object fits inside another", "Draw or name both items", "Bonus: what space did nesting save?"], unlock: "Nesting Pack" },
    { day: 10, week: 2, weekTheme: "Segmentation", title: "Segmentation Hunt", tool: "Segmentation", hunt: "Find something that comes apart into pieces.", hint: "Why did the inventor split it?", checklist: ["Something with separate parts", "Explain why splitting helps", "Bonus: can you reassemble it differently?"], unlock: "Segmentation Pack" },
    { day: 11, week: 2, weekTheme: "Segmentation", title: "Asymmetry Hunt", tool: "Asymmetry", hunt: "Find one object that is NOT symmetrical.", hint: "Scissors, mugs, and mice are good places to look.", checklist: ["One asymmetrical object", "Guess why the shape is uneven", "Bonus: would symmetry make it worse?"], unlock: "Asymmetry Pack" },
    { day: 12, week: 2, weekTheme: "Segmentation", title: "Merging Hunt", tool: "Merging", hunt: "Find a tool that does two jobs in one.", hint: "Kitchen gadgets are full of merged inventions.", checklist: ["A 2-in-1 tool", "Name both jobs it does", "Bonus: what would you merge next?"], unlock: "Merging Pack" },
    { day: 13, week: 2, weekTheme: "Segmentation", title: "Color Change Hunt", tool: "Color Change", hunt: "Find something that changes color with heat, cold, or light.", hint: "What is it trying to tell you?", checklist: ["One color-changing object", "What triggers the change?", "Bonus: sketch before and after"], unlock: "Challenges by Tool" },
    { day: 14, week: 2, weekTheme: "Segmentation", title: "Feedback Hunt", tool: "Feedback", hunt: "Find a device that shows status on a screen, light, or beep.", hint: "What is it measuring or telling you?", checklist: ["One feedback device", "What happens when status changes?", "Bonus: what if it had no signal?"], unlock: "Challenges by Tool" },
    { day: 15, week: 2, weekTheme: "Segmentation", title: "Self-Service Hunt", tool: "Self-Service", hunt: "Find something that cleans, charges, or refills itself.", hint: "Robot vacuums and planters count!", checklist: ["One self-serving object", "What extra job does it do alone?", "Bonus: what boring task did it remove?"], unlock: "Challenges by Tool" },
    { day: 16, week: 2, weekTheme: "Segmentation", title: "Copying Hunt", tool: "Copying", hunt: "Find a digital copy of something physical.", hint: "Photos, scans, and apps all count.", checklist: ["One copy replacing a physical thing", "What did the copy replace?", "Bonus: when is the copy better than the real thing?"], unlock: "Challenges by Tool" },
    { day: 17, week: 3, weekTheme: "Merging & Asymmetry", title: "Nesting Hunt", tool: "Nesting", hunt: "Find 2 things where one fits inside another.", hint: "Look in the kitchen, toy box, or toolbox.", checklist: ["One object fits inside another", "Draw or name both items", "Bonus: what space did nesting save?"], unlock: "Nesting Pack" },
    { day: 18, week: 3, weekTheme: "Merging & Asymmetry", title: "Segmentation Hunt", tool: "Segmentation", hunt: "Find something that comes apart into pieces.", hint: "Why did the inventor split it?", checklist: ["Something with separate parts", "Explain why splitting helps", "Bonus: can you reassemble it differently?"], unlock: "Segmentation Pack" },
    { day: 19, week: 3, weekTheme: "Merging & Asymmetry", title: "Asymmetry Hunt", tool: "Asymmetry", hunt: "Find one object that is NOT symmetrical.", hint: "Scissors, mugs, and mice are good places to look.", checklist: ["One asymmetrical object", "Guess why the shape is uneven", "Bonus: would symmetry make it worse?"], unlock: "Asymmetry Pack" },
    { day: 20, week: 3, weekTheme: "Merging & Asymmetry", title: "Merging Hunt", tool: "Merging", hunt: "Find a tool that does two jobs in one.", hint: "Kitchen gadgets are full of merged inventions.", checklist: ["A 2-in-1 tool", "Name both jobs it does", "Bonus: what would you merge next?"], unlock: "Merging Pack" },
    { day: 21, week: 3, weekTheme: "Merging & Asymmetry", title: "Color Change Hunt", tool: "Color Change", hunt: "Find something that changes color with heat, cold, or light.", hint: "What is it trying to tell you?", checklist: ["One color-changing object", "What triggers the change?", "Bonus: sketch before and after"], unlock: "Challenges by Tool" },
    { day: 22, week: 3, weekTheme: "Merging & Asymmetry", title: "Feedback Hunt", tool: "Feedback", hunt: "Find a device that shows status on a screen, light, or beep.", hint: "What is it measuring or telling you?", checklist: ["One feedback device", "What happens when status changes?", "Bonus: what if it had no signal?"], unlock: "Challenges by Tool" },
    { day: 23, week: 3, weekTheme: "Merging & Asymmetry", title: "Self-Service Hunt", tool: "Self-Service", hunt: "Find something that cleans, charges, or refills itself.", hint: "Robot vacuums and planters count!", checklist: ["One self-serving object", "What extra job does it do alone?", "Bonus: what boring task did it remove?"], unlock: "Challenges by Tool" },
    { day: 24, week: 3, weekTheme: "Merging & Asymmetry", title: "Copying Hunt", tool: "Copying", hunt: "Find a digital copy of something physical.", hint: "Photos, scans, and apps all count.", checklist: ["One copy replacing a physical thing", "What did the copy replace?", "Bonus: when is the copy better than the real thing?"], unlock: "Challenges by Tool" },
    { day: 25, week: 4, weekTheme: "Feedback & Inventions", title: "Nesting Hunt", tool: "Nesting", hunt: "Find 2 things where one fits inside another.", hint: "Look in the kitchen, toy box, or toolbox.", checklist: ["One object fits inside another", "Draw or name both items", "Bonus: what space did nesting save?"], unlock: "Nesting Pack" },
    { day: 26, week: 4, weekTheme: "Feedback & Inventions", title: "Segmentation Hunt", tool: "Segmentation", hunt: "Find something that comes apart into pieces.", hint: "Why did the inventor split it?", checklist: ["Something with separate parts", "Explain why splitting helps", "Bonus: can you reassemble it differently?"], unlock: "Segmentation Pack" },
    { day: 27, week: 4, weekTheme: "Feedback & Inventions", title: "Asymmetry Hunt", tool: "Asymmetry", hunt: "Find one object that is NOT symmetrical.", hint: "Scissors, mugs, and mice are good places to look.", checklist: ["One asymmetrical object", "Guess why the shape is uneven", "Bonus: would symmetry make it worse?"], unlock: "Asymmetry Pack" },
    { day: 28, week: 4, weekTheme: "Feedback & Inventions", title: "Merging Hunt", tool: "Merging", hunt: "Find a tool that does two jobs in one.", hint: "Kitchen gadgets are full of merged inventions.", checklist: ["A 2-in-1 tool", "Name both jobs it does", "Bonus: what would you merge next?"], unlock: "Merging Pack" },
    { day: 29, week: 4, weekTheme: "Feedback & Inventions", title: "Color Change Hunt", tool: "Color Change", hunt: "Find something that changes color with heat, cold, or light.", hint: "What is it trying to tell you?", checklist: ["One color-changing object", "What triggers the change?", "Bonus: sketch before and after"], unlock: "Challenges by Tool" },
    { day: 30, week: 4, weekTheme: "Feedback & Inventions", title: "Feedback Hunt", tool: "Feedback", hunt: "Find a device that shows status on a screen, light, or beep.", hint: "What is it measuring or telling you?", checklist: ["One feedback device", "What happens when status changes?", "Bonus: what if it had no signal?"], unlock: "Challenges by Tool" },
  ],
  calendar: [
    "🔍 Nesting hunt: Find 3 things at home where one object fits inside another. Draw or photograph them!",
    "🔍 Segmentation hunt: Spot something that comes apart to save space. Why did the inventor split it?",
    "🔍 Asymmetry hunt: Find one object in your room that is NOT symmetrical. What problem does the shape solve?",
    "🔍 Merging hunt: Find a kitchen tool that does two jobs in one. Would you merge anything else?",
    "🔍 Color Change hunt: Find something that changes color with temperature or light. What is it signaling?",
    "🔍 Feedback hunt: Find a device that shows status on a screen, light, or beep. What is it measuring?",
    "🔍 Segmentation hunt: Find modular furniture or toys you can rearrange. How many configurations can you make?",
    "🔍 Copying hunt: Find a digital copy of something physical (photo, scan, app). What did the copy replace?"
  ],
  toolChallenges: [
    {
      name: "Nesting Pack",
      tool: "Nesting",
      icon: "🍱",
      brief: "Design a school-trip lunchbox where every plate, cup, and utensil nests inside the next — and the whole stack fits in one hand.",
      constraints: ["Must nest in 3+ layers", "Fits a child's backpack pocket", "No loose pieces"],
      steps: ["Draw 3 nested layers from top view", "Label each layer (plate, cup, fork...)", "Name the material — why is it light?"],
      success: "A parent can pack lunch in under 10 seconds with zero loose parts.",
      bonus: "Add a hidden dessert compartment that only opens from the side.",
      learnToolIndex: 1,
      task: "Design a school-trip lunchbox where every plate, cup, and utensil nests inside the next — and the whole stack fits in one hand."
    },
    {
      name: "Segmentation Pack",
      tool: "Segmentation",
      icon: "🛴",
      brief: "Re-invent a kids' scooter so it splits into 3 parts in under 60 seconds and fits a standard backpack.",
      constraints: ["Exactly 3 separable parts", "Reassembly without tools", "Safe for ages 7+"],
      steps: ["Sketch scooter assembled AND taken apart", "Invent a connector (clip, twist, magnet?)", "Show where each part goes in the bag"],
      success: "A 9-year-old can fold it alone before the school bell rings.",
      bonus: "One part doubles as a ruler or straightedge.",
      learnToolIndex: 0,
      task: "Re-invent a kids' scooter so it splits into 3 parts in under 60 seconds and fits a standard backpack."
    },
    {
      name: "Merging Pack",
      tool: "Merging",
      icon: "🖊️",
      brief: "Design ONE desk gadget that merges a pencil cup, phone charger stand, and reading light — without becoming bulky.",
      constraints: ["3 functions, 1 footprint", "Fits a 30 cm desk corner", "Cord management included"],
      steps: ["List what you merged — and what you removed", "Top-view sketch with labels", "Explain the ONE thing that makes it compact"],
      success: "A student clears desk clutter by replacing 3 items with your 1 gadget.",
      bonus: "Add a 4th micro-function (tape holder, timer, etc.) without adding size.",
      learnToolIndex: 2,
      task: "Design ONE desk gadget that merges a pencil cup, phone charger stand, and reading light — without becoming bulky."
    },
    {
      name: "Asymmetry Pack",
      tool: "Asymmetry",
      icon: "☕",
      brief: "Design a kids' mug that is very hard to knock over — using an asymmetrical base or handle.",
      constraints: ["Must hold 200 ml liquid", "Asymmetry is the main trick", "Safe edge (no sharp corners)"],
      steps: ["Side-view sketch showing uneven base or handle", "Mark the center of gravity — where is the weight?", "Explain in 1 sentence why it stays upright"],
      success: "The mug survives a gentle table bump without spilling.",
      bonus: "Make it fun — animal shape or face, but still stable.",
      learnToolIndex: 3,
      task: "Design a kids' mug that is very hard to knock over — using an asymmetrical base or handle."
    },
    {
      name: "Feedback Pack",
      tool: "Feedback",
      icon: "🌡️",
      brief: "Design a room gadget that shows kids when it's time to take a break from screen time — using light, sound, or a simple display.",
      constraints: ["Visible from 3 meters away", "No phone required", "Kid can reset it themselves"],
      steps: ["Draw the signal (color, icon, sound pattern)", "What does it measure? (time, posture, light...)", "What happens when you ignore it?"],
      success: "A child knows 'break time' without a parent nagging.",
      bonus: "Add a positive reward signal when they return on time.",
      learnToolIndex: 4,
      task: "Design a room gadget that shows kids when it's time to take a break from screen time — using light, sound, or a simple display."
    },
    {
      name: "Self-Service Pack",
      tool: "Self-Service",
      icon: "🤖",
      brief: "Design a backpack that 'resets itself' after school — charging devices, airing out, and organizing contents.",
      constraints: ["At least 2 self-service actions", "Uses only realistic home tech", "No magic — explain the mechanism"],
      steps: ["List what the backpack does WITHOUT human help", "Sketch hooks, vents, or charging dock", "What does the kid still do manually?"],
      success: "Monday morning prep takes half the usual time.",
      bonus: "Invent a 'dock' the bag slides onto at night.",
      learnToolIndex: 5,
      task: "Design a backpack that 'resets itself' after school — charging devices, airing out, and organizing contents."
    },
    {
      name: "Copying Pack",
      tool: "Copying",
      icon: "📱",
      brief: "Replace a heavy physical object kids carry daily with a smart digital copy — but only if the copy is actually better.",
      constraints: ["Name the real object being replaced", "Copy must work offline sometimes", "Explain what you LOSE vs GAIN"],
      steps: ["Before/after: physical vs digital", "What does the copy show that the real thing cannot?", "When do you still need the original?"],
      success: "A kid's bag is lighter AND nothing important is lost.",
      bonus: "Design the 'emergency paper backup' for when battery dies.",
      learnToolIndex: 6,
      task: "Replace a heavy physical object kids carry daily with a smart digital copy — but only if the copy is actually better."
    },
    {
      name: "Color Change Pack",
      tool: "Color Change",
      icon: "🚦",
      brief: "Design a lunchbox lid (or water bottle) that changes color to signal temperature or 'eat me first' freshness.",
      constraints: ["Color change must be obvious to a child", "No toxic materials", "Works without an app"],
      steps: ["Draw closed AND 'warning' color states", "What triggers the change? (heat, time, UV...)", "What does each color mean?"],
      success: "A parent and child both understand the signal instantly.",
      bonus: "Add a color legend sticker kids can customize.",
      learnToolIndex: 7,
      task: "Design a lunchbox lid (or water bottle) that changes color to signal temperature or 'eat me first' freshness."
    }
  ],
  promo: {
    t: "Love the game?",
    st: "Get the physical 'Think Like an Inventor' workbook on Amazon!",
    btn: "Get Book",
    backHub: "← Hub"
  }
};

const inventor_missions_en = {
  rookie: [
    {
      scenario: "You need to carry water from the river to camp, but you don't have a bucket.",
      inventory: "A T-shirt, A plastic bag with holes, Duct tape",
      hint: "Can you combine two items to make one waterproof container?"
    },
    {
      scenario: "Your dog is stuck on a high tree branch and is too scared to jump down.",
      inventory: "A helium balloon, A long rope, A jar of peanut butter",
      hint: "What does the dog want most? Can you lure it down safely?"
    },
    {
      scenario: "You are locked inside a room. The key is on the floor on the OTHER side of the door.",
      inventory: "A newspaper, A pencil, A piece of chewing gum",
      hint: "Can you slide something flat under the door and push the key back?"
    },
    {
      scenario: "You need to signal a friend 500 meters away, but your phone is dead.",
      inventory: "A mirror, A whistle, A bright red scarf",
      hint: "Use sight OR sound — which works best at that distance?"
    },
    {
      scenario: "It's raining hard and you need to keep a small campfire going.",
      inventory: "A large garbage bag, 4 wooden sticks, String",
      hint: "Build a mini roof OVER the fire — not touching the flames."
    },
    {
      scenario: "You dropped your ring into a narrow crack between two rocks.",
      inventory: "Chewing gum, A long stick, A flashlight",
      hint: "Make one item sticky, then reach or lift the ring out."
    },
    {
      scenario: "You need to cross a wide mud flat without sinking.",
      inventory: "Two large pieces of plywood, A rope, Your backpack",
      hint: "Think snowshoes — spread your weight over more surface."
    },
    {
      scenario: "A bird flew into your house and won't leave through the window.",
      inventory: "A bedsheet, A desk lamp, A bowl of fruit",
      hint: "Birds follow light and fear large moving shapes. Guide, don't chase."
    }
  ],
  agent: [
    {
      scenario: "You must cross a river with crocodiles nearby. No bridge, no boat.",
      inventory: "5 empty plastic barrels, A strong fishing net, A long stick"
    },
    {
      scenario: "It's freezing. You need fire, but every match is completely wet.",
      inventory: "A battery, Steel wool, Dry leaves"
    },
    {
      scenario: "Lost in open land. A rescue plane is miles away — how do you signal it?",
      inventory: "A broken mirror, Bright red lipstick, A white towel"
    },
    {
      scenario: "A heavy boulder blocks a cave entrance. You cannot lift it alone.",
      inventory: "A long metal pipe, A car jack, A flat rock"
    },
    {
      scenario: "Your boat has a hole and is slowly sinking. Shore is 1 km away.",
      inventory: "A bar of soap, A T-shirt, An empty water bottle"
    },
    {
      scenario: "Get to the top of a 3-meter smooth wall with no ladder.",
      inventory: "Two belts, A heavy backpack, A friend"
    },
    {
      scenario: "A swarm of bees blocks the only path to your car.",
      inventory: "A smoke flare, A rain jacket, Running shoes"
    },
    {
      scenario: "Keep medicine cold for 8 hours with no electricity or fridge.",
      inventory: "A clay pot, Sand, Water"
    }
  ],
  elite: [
    {
      scenario: "Crash-landed on a rocky shore. Build shelter before night using ONLY what washed up.",
      inventory: "A car door, 5 meters of rope, A tattered parachute",
      constraint: "Ground is solid rock — you cannot dig or stake into soil."
    },
    {
      scenario: "Trapped in an elevator between floors. Doors are stuck with only a 10 cm gap.",
      inventory: "A belt, A smartphone (no signal), A coin",
      constraint: "Do NOT climb out. Get help from outside instead."
    },
    {
      scenario: "Flood water is rising fast. Save important papers on a ground-floor desk.",
      inventory: "Large trash bags, Packing tape, A bookshelf",
      constraint: "You have only 5 minutes before water reaches the desk."
    },
    {
      scenario: "Snowstorm. Car broke down 2 km from town. Wind is 60 km/h in your face.",
      inventory: "A car floor mat, A bottle of cooking oil, A newspaper",
      constraint: "You must move toward town, not sit and wait."
    },
    {
      scenario: "A child's toy fell into a narrow pipe (2 m deep, 8 cm wide) set in cement.",
      inventory: "A garden hose, Duct tape, A wire coat hanger",
      constraint: "The toy is smooth and round — a simple hook won't grab it."
    },
    {
      scenario: "Transport a live fish 3 km from river to tank. No bucket or plastic bag.",
      inventory: "A large watermelon, A knife, Your boot",
      constraint: "Fish needs water AND oxygen the whole trip."
    },
    {
      scenario: "A bridge is broken. 3-meter gap. You must cross with a heavy bag.",
      inventory: "Two wooden planks (2.5 m each), A rope, A rock",
      constraint: "Each plank is too short alone — think structure, not span."
    },
    {
      scenario: "Cook food using ONLY the sun as your heat source.",
      inventory: "Aluminum foil, A cardboard box, A clear plastic bag",
      constraint: "Must reach at least 70°C — prove how you'd measure it."
    }
  ]
};
