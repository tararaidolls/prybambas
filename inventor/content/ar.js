// Inventor Lab — ar
const inventor_db_ar = {
  ui: {
    title: "فكّر كمخترع",
    howItWorks: "كيف يعمل",
    start: "ابدأ",
    menuNote: "اضغط أيقونة أعلاه للمعاينة، ثم ابدأ.",
    calPrompt: "اضغط أي يوم لكشف تحدي الملاحظة!",
    dayLabel: "يوم",
    example: "مثال:",
    submitCoach: "أرسل إلى مدرب الذكاء الاصطناعي",
    writePlaceholder: "اكتب فكرتك هنا...",
    useAllItems: "استخدم العناصر الثلاثة.",
    writeFirst: "من فضلك اكتب حلّك أولاً!",
    rookie: "مبتدئ",
    agent: "وكيل",
    elite: "نخبة",
    rookieSub: "سهل مع تلميحات",
    agentSub: "متوسط",
    eliteSub: "صعب مع قيود"
  },
  menu: {
    m1: "أدوات وأمثلة",
    m2: "تقويم الملاحظة",
    m3: "تحديات حسب الأداة",
    m4: "مهمة ممكنة",
    back: "رجوع",
    backMenu: "العودة للقائمة",
    genBtn: "إنشاء مهمة",
    tcTitle: "وصف التحدي"
  },
  modes: [{title: "Tools & Examples", rules: "<div><span>🛠️</span> Learn the 8 fundamental TRIZ tools.</div><div><span>💡</span> Read real-world examples!</div>"}, {title: "Observation Calendar", rules: "<div><span>📅</span> A 30-day interactive engineering quest.</div><div><span>🔍</span> Spot TRIZ principles at home!</div>"}, {title: "Challenges by Tool", rules: "<div><span>🎯</span> Hands-on creative design challenges.</div><div><span>🧠</span> Apply tools to real problems!</div>"}, {title: "Mission Possible", rules: "<div><span>🚀</span> 24 missions: Rookie, Agent, and Elite.</div><div><span>💡</span> Solve escape tasks and submit to AI Coach!</div>"}],
  tools: [{name: "1. Segmentation", desc: "Divide an object into independent parts.", ex: "Modular shelving or multi-part pen."}, {name: "2. Nesting", desc: "Place one object inside another.", ex: "Measuring cups or nesting dolls."}, {name: "3. Merging", desc: "Bring similar objects together.", ex: "Double-ended marker."}, {name: "4. Asymmetry", desc: "Change shape from symmetrical to asymmetrical.", ex: "Ergonomic mouse."}, {name: "5. Feedback", desc: "Introduce feedback to regulate a process.", ex: "Room thermostat."}, {name: "6. Self-Service", desc: "Object serves itself.", ex: "Robot vacuum returning to dock."}, {name: "7. Copying", desc: "Use a cheap copy instead of expensive object.", ex: "Phone map instead of clay model."}, {name: "8. Color Change", desc: "Change color or transparency.", ex: "Glasses that darken in sunlight."}],
  calendar: ["Find 3 things at home using 'Nesting'.", "Spot an object that uses 'Segmentation' to save space.", "Identify an asymmetrical object in your room.", "Find a kitchen tool that merged two functions.", "Find an object that changes color when hot or cold.", "Find a device with a feedback loop.", "Look for modular furniture.", "Identify a cheap item that replaced a permanent one."],
  toolChallenges: [{name: "Nesting Pack", task: "Design a lunchbox where everything nests inside — 80% less space."}, {name: "Segmentation Pack", task: "Bicycle disassembled in 60 seconds into a backpack."}, {name: "Merging Pack", task: "Desk accessory: pencil holder, charger, and lamp in one."}, {name: "Asymmetry Pack", task: "Kids mug hard to knock over with asymmetrical base."}],
  promo: {
    t: "أعجبك اللعب؟",
    st: "احصل على كتاب «Think Like an Inventor» من أمازون!",
    btn: "اشترِ",
    backHub: "← Hub"
  }
};

const inventor_missions_ar = inventor_missions_en;
