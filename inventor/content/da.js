// Inventor Lab — da
const inventor_db_da = {
  ui: {
    title: "Tænk som en opfinder",
    howItWorks: "Sådan virker det",
    start: "START",
    menuNote: "Tryk på et ikon ovenfor for forhåndsvisning, derefter Start.",
    calPrompt: "Tryk på en dag for din observation!",
    dayLabel: "Dag",
    example: "Eksempel:",
    submitCoach: "Send til AI Coach",
    writePlaceholder: "Skriv din idé her...",
    useAllItems: "Brug alle 3 genstande.",
    writeFirst: "Skriv din løsning først!",
    rookie: "BEGYNDER",
    agent: "AGENT",
    elite: "ELITE",
    rookieSub: "Let, med hints",
    agentSub: "Mellem",
    eliteSub: "Svært, med begrænsninger"
  },
  menu: {
    m1: "Værktøjer & eksempler",
    m2: "Observationskalender",
    m3: "Udfordringer pr. værktøj",
    m4: "Mission Possible",
    back: "Tilbage",
    backMenu: "Tilbage til menu",
    genBtn: "Generer mission",
    tcTitle: "Udfordringsbeskrivelse"
  },
  modes: [{title: "Tools & Examples", rules: "<div><span>🛠️</span> Learn the 8 fundamental TRIZ tools.</div><div><span>💡</span> Read real-world examples!</div>"}, {title: "Observation Calendar", rules: "<div><span>📅</span> A 30-day interactive engineering quest.</div><div><span>🔍</span> Spot TRIZ principles at home!</div>"}, {title: "Challenges by Tool", rules: "<div><span>🎯</span> Hands-on creative design challenges.</div><div><span>🧠</span> Apply tools to real problems!</div>"}, {title: "Mission Possible", rules: "<div><span>🚀</span> 24 missions: Rookie, Agent, and Elite.</div><div><span>💡</span> Solve escape tasks and submit to AI Coach!</div>"}],
  tools: [{name: "1. Segmentation", desc: "Divide an object into independent parts.", ex: "Modular shelving or multi-part pen."}, {name: "2. Nesting", desc: "Place one object inside another.", ex: "Measuring cups or nesting dolls."}, {name: "3. Merging", desc: "Bring similar objects together.", ex: "Double-ended marker."}, {name: "4. Asymmetry", desc: "Change shape from symmetrical to asymmetrical.", ex: "Ergonomic mouse."}, {name: "5. Feedback", desc: "Introduce feedback to regulate a process.", ex: "Room thermostat."}, {name: "6. Self-Service", desc: "Object serves itself.", ex: "Robot vacuum returning to dock."}, {name: "7. Copying", desc: "Use a cheap copy instead of expensive object.", ex: "Phone map instead of clay model."}, {name: "8. Color Change", desc: "Change color or transparency.", ex: "Glasses that darken in sunlight."}],
  calendar: ["Find 3 things at home using 'Nesting'.", "Spot an object that uses 'Segmentation' to save space.", "Identify an asymmetrical object in your room.", "Find a kitchen tool that merged two functions.", "Find an object that changes color when hot or cold.", "Find a device with a feedback loop.", "Look for modular furniture.", "Identify a cheap item that replaced a permanent one."],
  toolChallenges: [{name: "Nesting Pack", task: "Design a lunchbox where everything nests inside — 80% less space."}, {name: "Segmentation Pack", task: "Bicycle disassembled in 60 seconds into a backpack."}, {name: "Merging Pack", task: "Desk accessory: pencil holder, charger, and lamp in one."}, {name: "Asymmetry Pack", task: "Kids mug hard to knock over with asymmetrical base."}],
  promo: {
    t: "Kan du lide spillet?",
    st: "Få workbooken «Think Like an Inventor» på Amazon!",
    btn: "Køb",
    backHub: "← Hub"
  }
};

const inventor_missions_da = inventor_missions_en;
