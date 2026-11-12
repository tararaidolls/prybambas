// Inventor Lab — 30-секундні анімації для 8 інструментів ТРВЗ.
// Кожна анімація = 5 сцен по 6 секунд. Малюнки без слів (тільки цифри й символи),
// тому їх не треба перекладати. Підписи до сцен — у ANIM_TEXT нижче (en, uk);
// для інших мов показується англійська, поки не додано переклад.
//
// Як працює малюнок:
//   data-s="0-2,4"  — у яких сценах елемент видно (нумерація з 0)
//   data-t="a|b||c" — CSS transform для сцен 0,1,2,3…; порожнє місце = як у попередній сцені
(function () {
  const SCENE_MS = 6000;

  // ---------- Малюнки ----------
  function rulerSeg(i) {
    let ticks = '';
    for (let t = -24; t < 30; t += 6) ticks += `<line class="a-thin" x1="${t}" y1="-7" x2="${t}" y2="${t % 30 === 0 ? 0 : -3}"/>`;
    const t = [
      `translate(${40 + i * 60}px,150px)`,
      `translate(${40 + i * 60}px,60px)`,
      `translate(${34 + i * 63}px,60px)`,
      `translate(${226 + i * 12}px,112px) rotate(${i % 2 ? 90 : -90}deg)`,
      `translate(${40 + i * 60}px,100px)`
    ].join('|');
    return `<g data-t="${t}" style="transition-delay:${(4 - i) * 90}ms"><rect class="a-fy a-s" x="-30" y="-7" width="60" height="14" rx="2"/>${ticks}<text class="a-mono" x="-26" y="5">${(i + 1) * 30}</text></g>`;
  }

  const DRAW = [
    // 1. Segmentation — 150 см лінійка не влазить у рюкзак → 5 частин на шарнірах
    () => `
      <g data-s="0-3"><path class="a-fb a-s" d="M212 78 q0-12 12-12 h52 q12 0 12 12 v76 q0 8-8 8 h-60 q-8 0-8-8z"/><path class="a-s" d="M238 66 q12-18 24 0" fill="none"/><path class="a-white" d="M216 92 h68"/></g>
      ${[0, 1, 2, 3, 4].map(rulerSeg).join('')}
      <g data-s="3,4">${[0, 1, 2, 3].map(i => `<circle class="a-fk" data-t="translate(${232 + i * 12}px,${i % 2 ? 82 : 142}px)||||translate(${70 + i * 60}px,100px)" r="3"/>`).join('')}</g>
      <g data-s="0"><text class="a-h" x="120" y="132">150 cm</text><text class="a-h" x="226" y="186">40 cm</text><text class="a-bad a-big" x="20" y="60">✗</text></g>
      <g data-s="1"><text class="a-ok a-big" x="140" y="40">✓</text><text class="a-bad a-big" x="240" y="140">✗</text><path class="a-s" d="M10 82 h300" stroke-dasharray="3 5"/><text class="a-h" x="130" y="102">↔ 150 cm</text></g>
      <g data-s="2">${[65.5, 128.5, 191.5, 254.5].map(x => `<line class="a-cut" x1="${x}" y1="36" x2="${x}" y2="86"/>`).join('')}<text class="a-h" x="120" y="116">5 × 30 cm</text></g>
      <g data-s="3"><text class="a-ok a-big" x="30" y="70">✓</text><text class="a-h" x="30" y="100">30 cm</text></g>
      <g data-s="4"><text class="a-h a-hbig" x="118" y="60">1 → 5</text><text class="a-ok a-big" x="140" y="160">✓</text></g>`,

    // 2. Nesting — 3 однакові кружки не влазять → різні розміри → одна в одній
    () => `
      <g data-s="0-3"><rect class="a-fbb a-s" x="110" y="122" width="100" height="62" rx="6"/></g>
      ${[0, 1, 2].map(i => {
        const sc = [1, 0.78, 0.58][i];
        const t = [`translate(${60 + i * 100}px,80px)`, '', `translate(${60 + i * 100}px,80px) scale(${sc})`, `translate(160px,${153 - i * 2}px) scale(${sc})`].join('|');
        const fill = ['a-fy', 'a-fp', 'a-fb'][i];
        return `<g data-s="0-3" data-t="${t}" style="transition-delay:${i * 150}ms"><path class="${fill} a-s" d="M-25 -22 L25 -22 L18 22 L-18 22 Z"/><path class="a-s" d="M25 -12 q12 0 10 12 q-2 8-14 8" fill="none"/></g>`;
      }).join('')}
      <g data-s="0"><text class="a-bad a-big" x="148" y="40">✗</text><text class="a-h" x="226" y="170">3 ≠ 1</text></g>
      <g data-s="1"><text class="a-ok a-big" x="148" y="40">✓</text><text class="a-bad a-big" x="222" y="170">✗</text></g>
      <g data-s="2"><text class="a-h" x="40" y="140">L</text><text class="a-h" x="152" y="140">M</text><text class="a-h" x="254" y="140">S</text></g>
      <g data-s="3"><text class="a-ok a-big" x="232" y="160">✓</text><text class="a-h" x="40" y="80">3 → 1</text></g>
      <g data-s="4">
        <g data-t="translate(120px,90px)||||translate(120px,90px)"><rect class="a-fy a-s" x="-40" y="-20" width="80" height="40" rx="4"/></g>
        <g data-t="translate(120px,90px)||||translate(186px,90px)"><rect class="a-fp a-s" x="-30" y="-14" width="60" height="28" rx="3"/></g>
        <g data-t="translate(120px,90px)||||translate(236px,90px)"><rect class="a-fb a-s" x="-22" y="-9" width="44" height="18" rx="2"/></g>
        <text class="a-ok a-big" x="148" y="160">✓</text>
      </g>`,

    // 3. Merging — олівець і гумка окремо → гумку губиш → разом
    () => `
      <g data-t="translate(110px,80px)"><polygon class="a-fk" points="56,0 42,-6 42,6"/><rect class="a-fy a-s" x="-50" y="-7" width="92" height="14"/><line class="a-thin" x1="-50" y1="0" x2="42" y2="0"/></g>
      <g data-s="0,2-4" data-t="translate(230px,150px) rotate(20deg)||translate(36px,52px) rotate(-30deg)|translate(50px,80px)"><rect class="a-fp a-s" x="-10" y="-8" width="20" height="16" rx="3"/></g>
      <g data-s="0"><path class="a-arrow" d="M130 100 q40 40 80 46"/><path class="a-arrow" d="M210 132 q-40 -10 -60 -26"/><text class="a-h" x="240" y="60">⏱ × 20</text></g>
      <g data-s="1"><text class="a-h a-hbig" x="222" y="160">?</text><text class="a-bad a-big" x="260" y="70">✗</text></g>
      <g data-s="2"><path class="a-arrow" d="M30 70 q4 10 16 12"/></g>
      <g data-s="3"><text class="a-ok a-big" x="250" y="90">✓</text><text class="a-h a-hbig" x="110" y="150">2 → 1</text></g>
      <g data-s="4"><g transform="translate(120 160)"><rect class="a-fb a-s" x="-40" y="-8" width="20" height="16" rx="3"/><rect class="a-fw a-s" x="-20" y="-8" width="40" height="16"/><rect class="a-fp a-s" x="20" y="-8" width="20" height="16" rx="3"/></g><text class="a-h a-hbig" x="190" y="168">2 → 1</text><text class="a-ok a-big" x="250" y="90">✓</text></g>`,

    // 4. Asymmetry — ножиці з однаковими кільцями → одне кільце більше → пальці влазять
    () => `
      <line class="a-s a-blade" x1="150" y1="72" x2="296" y2="96"/><line class="a-s a-blade" x1="150" y1="104" x2="296" y2="80"/>
      <circle class="a-fk" cx="170" cy="88" r="4"/>
      <line class="a-s" x1="150" y1="72" x2="126" y2="66"/><line class="a-s" x1="150" y1="104" x2="126" y2="112"/>
      <g data-t="translate(112px,62px)"><circle class="a-fw a-s" r="14"/></g>
      <g data-t="translate(112px,116px)||translate(112px,124px) scale(1.7)"><circle class="a-fw a-s" r="14"/></g>
      ${[0, 1, 2].map(i => `<g data-t="translate(${40 + i * 4}px,${140 + i * 16}px)||translate(${40 + i * 4}px,${140 + i * 16}px)|translate(${104 + i * 9}px,${114 + i * 10}px)"><ellipse class="a-fp a-s" rx="9" ry="7"/></g>`).join('')}
      <g data-t="translate(36px,50px)|||translate(110px,60px)"><ellipse class="a-fp a-s" rx="9" ry="7"/></g>
      <g data-s="0"><text class="a-bad a-big" x="20" y="120">✗</text><text class="a-h" x="70" y="30">1 : 1</text></g>
      <g data-s="1"><text class="a-h a-hbig" x="70" y="30">= =</text><text class="a-bad a-big" x="20" y="120">✗</text></g>
      <g data-s="2"><text class="a-h" x="70" y="30">1 : 2</text></g>
      <g data-s="3"><text class="a-ok a-big" x="240" y="150">✓</text><path class="a-arrow" d="M200 150 q30 -6 40 -40"/></g>
      <g data-s="4"><text class="a-h a-hbig" x="210" y="160">≠ ✓</text></g>`,

    // 5. Feedback — обігрівач завжди ввімкнений (спека) / вимкнений (холод) → датчик керує ним
    () => `
      <g transform="translate(90 140)"><rect class="a-fw a-s" x="-40" y="-30" width="80" height="54" rx="6"/>${[-24, -8, 8, 24].map(x => `<line class="a-s" x1="${x}" y1="-22" x2="${x}" y2="16"/>`).join('')}</g>
      <g data-s="0,2-4"><g class="a-blink-wrap"><path class="a-heat" d="M64 98 q6-10 0-20 q-6-10 0-20"/><path class="a-heat" d="M90 98 q6-10 0-20 q-6-10 0-20"/><path class="a-heat" d="M116 98 q6-10 0-20 q-6-10 0-20"/></g></g>
      <rect class="a-fw a-s" x="230" y="40" width="20" height="124" rx="10"/>
      <g data-s="0,2-4" data-t="translate(240px,160px) scale(1,.95)|translate(240px,160px) scale(1,.95)|translate(240px,160px) scale(1,.95)|translate(240px,160px) scale(1,.55)"><rect class="a-fp" x="-6" y="-112" width="12" height="112"/></g>
      <g data-s="1" data-t="translate(240px,160px) scale(1,.2)"><rect class="a-fb" x="-6" y="-112" width="12" height="112"/></g>
      <circle class="a-fp a-s" data-s="0,2-4" cx="240" cy="168" r="12"/><circle class="a-fb a-s" data-s="1" cx="240" cy="168" r="12"/>
      <g data-s="0"><text class="a-h a-hbig" x="262" y="60">30°</text><text class="a-bad a-big" x="160" y="60">✗</text></g>
      <g data-s="1"><text class="a-h a-hbig" x="262" y="150">14°</text><text class="a-bad a-big" x="160" y="60">✗</text></g>
      <g data-s="2-4"><path class="a-loop" d="M230 60 C 170 10, 110 20, 96 60"/><circle class="a-fy a-s" cx="230" cy="60" r="6"/></g>
      <g data-s="3,4"><text class="a-h a-hbig" x="262" y="104">21°</text><text class="a-ok a-big" x="160" y="140">✓</text></g>
      <g data-s="4"><text class="a-h a-hbig" x="150" y="40">↻</text></g>`,

    // 6. Self-Service — рослина сохне, поки тебе нема → резервуар з ґнотом поливає сам
    () => `
      <g data-s="0,1,4"><g transform="translate(40 30)"><rect class="a-fw a-s" width="60" height="54" rx="4"/><rect class="a-fp" width="60" height="14" rx="4"/><text class="a-h a-hbig" x="20" y="46">7</text></g></g>
      <g data-t="translate(0px,20px)|translate(0px,20px)|translate(0px,0px)">
        <g data-s="0,2-4"><path class="a-stem" d="M170 110 v-50"/><ellipse class="a-leaf" cx="154" cy="78" rx="16" ry="7" transform="rotate(-30 154 78)"/><ellipse class="a-leaf" cx="186" cy="68" rx="16" ry="7" transform="rotate(30 186 68)"/><ellipse class="a-leaf" cx="170" cy="54" rx="8" ry="12"/></g>
        <g data-s="1"><path class="a-stem a-dry" d="M170 110 q0-30 20-40"/><ellipse class="a-leaf a-dryl" cx="196" cy="80" rx="14" ry="6" transform="rotate(70 196 80)"/><ellipse class="a-leaf a-dryl" cx="150" cy="96" rx="14" ry="6" transform="rotate(-70 150 96)"/></g>
        <path class="a-fp a-s" d="M140 108 h60 l-8 40 h-44 z"/>
      </g>
      <g data-s="2-4"><rect class="a-fbb a-s" x="134" y="150" width="72" height="36" rx="4"/><rect class="a-fb" x="136" y="164" width="68" height="20" rx="3"/><line class="a-wick" x1="170" y1="178" x2="170" y2="126"/></g>
      <g data-s="3,4"><g class="a-rise-wrap"><circle class="a-fb a-rise" cx="170" cy="170" r="3"/><circle class="a-fb a-rise a-d2" cx="170" cy="170" r="3"/><circle class="a-fb a-rise a-d3" cx="170" cy="170" r="3"/></g></g>
      <g data-s="1"><text class="a-bad a-big" x="240" y="80">✗</text></g>
      <g data-s="2"><path class="a-arrow" d="M240 170 q-20 -10 -30 -4"/><text class="a-h" x="244" y="176">H₂O</text></g>
      <g data-s="3,4"><text class="a-ok a-big" x="240" y="80">✓</text></g>
      <g data-s="4"><text class="a-ok a-big" x="58" y="120">✓</text></g>`,

    // 7. Copying — важкий атлас → фото/скан → карта в телефоні
    () => `
      <g data-s="0-2">${[['a-fb', 160], ['a-fp', 142], ['a-fy', 124]].map(([c, y]) => `<rect class="${c} a-s" x="40" y="${y}" width="96" height="18" rx="2"/>`).join('')}<path class="a-arrow" d="M88 186 v8"/></g>
      <g data-s="0,1"><text class="a-h a-hbig" x="56" y="110">3 kg</text></g>
      <g data-s="1"><text class="a-bad a-big" x="160" y="120">✗</text><text class="a-ok a-big" x="160" y="170">✓</text><text class="a-h" x="190" y="168">🗺 × 50</text></g>
      <g data-s="2-4"><rect class="a-fk" x="216" y="68" width="56" height="100" rx="10"/><rect class="a-fw" x="221" y="78" width="46" height="78" rx="3"/></g>
      <g data-s="2"><circle class="a-flash" cx="180" cy="100" r="22"/><path class="a-arrow" d="M140 132 q30 -20 70 -24"/></g>
      <g data-s="3,4"><path class="a-map" d="M224 96 q12 -6 22 4 t20 -2"/><path class="a-map a-map2" d="M230 82 v70"/><path class="a-map a-map2" d="M224 128 h42"/><circle class="a-fp" cx="248" cy="112" r="4"/></g>
      <g data-s="3"><text class="a-h a-hbig" x="70" y="110">200 g</text><text class="a-ok a-big" x="90" y="160">✓</text></g>
      <g data-s="4"><text class="a-h a-hbig" x="24" y="110">3 kg → 200 g</text><text class="a-ok a-big" x="90" y="160">✓</text></g>`,

    // 8. Color Change — гаряча каша: ложка змінює колір від температури
    () => `
      <g data-s="0-3"><path class="a-fw a-s" d="M50 124 h120 a60 52 0 0 1 -120 0z"/><ellipse class="a-fy a-s" cx="110" cy="124" rx="60" ry="8"/></g>
      <g data-s="0-2"><path class="a-heat" d="M84 112 q6-10 0-20 q-6-10 0-20"/><path class="a-heat" d="M110 112 q6-10 0-20 q-6-10 0-20"/><path class="a-heat" d="M136 112 q6-10 0-20 q-6-10 0-20"/></g>
      <g data-t="translate(250px,96px) rotate(-30deg)||translate(150px,112px) rotate(-55deg)|translate(250px,96px) rotate(-30deg)">
        <rect class="a-fw a-s" x="-4" y="0" width="8" height="70" rx="4"/>
        <ellipse class="a-fw a-s" data-s="0,1" cx="0" cy="-12" rx="14" ry="18"/>
        <ellipse class="a-fp a-s" data-s="2" cx="0" cy="-12" rx="14" ry="18"/>
        <ellipse class="a-fb a-s" data-s="3,4" cx="0" cy="-12" rx="14" ry="18"/>
      </g>
      <g data-s="0"><text class="a-h a-hbig" x="190" y="170">?°</text></g>
      <g data-s="1"><text class="a-h a-hbig" x="190" y="170">✋ ?</text><text class="a-bad a-big" x="30" y="60">✗</text></g>
      <g data-s="2"><text class="a-h a-hbig" x="200" y="170">60°</text></g>
      <g data-s="3"><text class="a-h a-hbig" x="200" y="170">36°</text><text class="a-ok a-big" x="30" y="60">✓</text></g>
      <g data-s="4"><circle class="a-fp a-s" cx="70" cy="80" r="22"/><circle class="a-fb a-s" cx="70" cy="140" r="22"/><text class="a-h a-hbig" x="104" y="88">60° ✗</text><text class="a-h a-hbig" x="104" y="148">36° ✓</text></g>`
  ];

  // ---------- Підписи ----------
  const ANIM_TEXT = {
    en: [
      [
        ['The problem', 'You need a 150 cm ruler to measure a wall, but your bag is only 40 cm long.'],
        ['Two wishes', 'Long is great for measuring and terrible for carrying. One solid stick can\'t do both.'],
        ['Cut it', 'Split the ruler into 5 pieces of 30 cm. The total length is still 150 cm.'],
        ['Hinge and fold', 'Join the pieces with hinges. Fold it to carry, unfold it to measure.'],
        ['Segmentation', 'One big thing becomes many parts that work together. Now find it around you!']
      ],
      [
        ['The problem', 'You want 3 cups for a picnic, but they take three times the space in your bag.'],
        ['Two wishes', 'You need many cups, but you want them to take the space of one.'],
        ['Change the sizes', 'Make each cup a little smaller than the one before: large, medium, small.'],
        ['Put one inside another', 'Now all 3 cups sit inside the biggest one. Three cups, one space.'],
        ['Nesting', 'A telescope works the same way: its tubes slide out of each other to make it long.']
      ],
      [
        ['The problem', 'You write with a pencil and fix mistakes with an eraser. You keep switching tools.'],
        ['The eraser is gone', 'Two separate tools means one of them gets lost. Where is the eraser now?'],
        ['Bring them together', 'What if the eraser lived on the pencil itself?'],
        ['One tool, two jobs', 'Pencil plus eraser in one object. Nothing to switch, nothing to lose.'],
        ['Merging', 'Double-ended markers work the same way: two colors, one tool.']
      ],
      [
        ['The problem', 'These scissors have two equal holes. Your fingers don\'t fit in the small hole.'],
        ['Same is not always best', 'Equal shapes are easy to make, but your thumb and your fingers are not the same size.'],
        ['Make it uneven', 'Make one hole bigger than the other. Now the shape is asymmetric.'],
        ['Better grip', 'The thumb goes in the small hole, the fingers in the big one. More grip, more cutting force.'],
        ['Asymmetry', 'Left and right shoes, a curved computer mouse: uneven shapes that fit you better.']
      ],
      [
        ['Too hot', 'The heater is always on. The room gets hotter and hotter: 30°!'],
        ['Too cold', 'Switch it off, and soon the room drops to 14°. On and off by hand never feels right.'],
        ['Add a sensor', 'A thermometer measures the room and sends a signal back to the heater. That is a loop.'],
        ['It adjusts itself', 'Too warm? Heat goes off. Too cool? Heat comes on. The room stays at 21°.'],
        ['Feedback', 'Sense → compare → adjust → repeat. A thermostat and your phone\'s battery icon both do this.']
      ],
      [
        ['The problem', 'You go away for 7 days. Who will water your plant?'],
        ['Nobody', 'No water for a week, and the plant droops. It needs a person to look after it.'],
        ['Add a water tank', 'Put a tank of water under the pot and a cord (a wick) from the water up into the soil.'],
        ['It waters itself', 'Water slowly climbs up the wick whenever the soil gets dry. The plant stays healthy.'],
        ['Self-Service', 'The object takes care of itself, like a robot vacuum that goes back to charge.']
      ],
      [
        ['The problem', 'A big paper atlas has every map you need, but it weighs 3 kg.'],
        ['Two wishes', 'You want all 50 maps with you, but you don\'t want to carry the heavy book.'],
        ['Make a copy', 'Take a photo or scan. The copy holds the same information as the original.'],
        ['Carry the copy', 'The maps now live in a phone: 200 g instead of 3 kg.'],
        ['Copying', 'Replace a heavy, fragile or expensive thing with a cheap copy: a photo, a scan, a model.']
      ],
      [
        ['The problem', 'Baby porridge is fresh from the stove. Is it too hot to eat?'],
        ['Can\'t tell', 'You can\'t see temperature, and touching hot food to check is not a great idea.'],
        ['Hot = pink', 'Special paint on the spoon turns pink when the food is too hot: 60°.'],
        ['Safe = blue', 'When the porridge cools down, the spoon turns blue: 36°. Ready to eat!'],
        ['Color Change', 'Color tells you the state without measuring: hot or safe, stop or go.']
      ]
    ],
    uk: [
      [
        ['Проблема', 'Щоб виміряти стіну, потрібна лінійка 150 см. А рюкзак завдовжки лише 40 см.'],
        ['Два бажання', 'Довга — добре для вимірювання і погано для перенесення. Одна цільна палиця не може і те, і те.'],
        ['Розріж', 'Поділи лінійку на 5 частин по 30 см. Разом це все одно 150 см.'],
        ['Шарніри і складання', 'З\'єднай частини шарнірами. Склав — несеш, розклав — міряєш.'],
        ['Дроблення', 'Одна велика річ стає багатьма частинами, що працюють разом. Пошукай таке навколо!']
      ],
      [
        ['Проблема', 'На пікнік треба 3 чашки, але вони займають утричі більше місця в рюкзаку.'],
        ['Два бажання', 'Чашок треба багато, а місця вони мають займати як одна.'],
        ['Зміни розміри', 'Зроби кожну чашку трохи меншою за попередню: велика, середня, мала.'],
        ['Одна в одній', 'Тепер усі 3 чашки стоять у найбільшій. Три чашки — одне місце.'],
        ['Вкладення', 'Так само працює підзорна труба: її трубки висуваються одна з одної.']
      ],
      [
        ['Проблема', 'Пишеш олівцем, а помилки витираєш гумкою. Весь час міняєш інструменти.'],
        ['Гумка зникла', 'Два окремі предмети — і один обов\'язково губиться. Де тепер гумка?'],
        ['З\'єднай їх', 'А що як гумка житиме прямо на олівці?'],
        ['Один предмет, дві роботи', 'Олівець і гумка разом. Нічого міняти, нічого губити.'],
        ['Об\'єднання', 'Так само двосторонній маркер: два кольори в одному предметі.']
      ],
      [
        ['Проблема', 'У цих ножиць два однакові кільця. Пальці не влазять у маленьке.'],
        ['Однакове — не завжди найкраще', 'Однакові форми легко робити, але великий палець і решта пальців — різні.'],
        ['Зроби нерівно', 'Зроби одне кільце більшим за інше. Тепер форма асиметрична.'],
        ['Краще тримати', 'Великий палець — у мале кільце, решта — у велике. Тримати зручніше, різати сильніше.'],
        ['Асиметрія', 'Лівий і правий черевик, вигнута комп\'ютерна мишка: нерівні форми, які краще пасують тобі.']
      ],
      [
        ['Занадто жарко', 'Обігрівач увімкнений весь час. У кімнаті все спекотніше: 30°!'],
        ['Занадто холодно', 'Вимкнеш — і скоро в кімнаті 14°. Вмикати й вимикати руками — ніколи не вгадаєш.'],
        ['Додай датчик', 'Термометр міряє кімнату і передає сигнал назад обігрівачу. Це петля.'],
        ['Він сам підлаштовується', 'Тепло? Обігрів вимикається. Прохолодно? Вмикається. У кімнаті весь час 21°.'],
        ['Зворотний зв\'язок', 'Відчув → порівняв → підлаштувався → знову. Так працює термостат і значок батареї в телефоні.']
      ],
      [
        ['Проблема', 'Ти їдеш на 7 днів. Хто поллє твою рослину?'],
        ['Ніхто', 'Тиждень без води — і рослина в\'яне. Їй потрібна людина, щоб доглядати.'],
        ['Додай бак з водою', 'Постав під горщик бачок з водою і протягни шнурок (ґніт) з води в землю.'],
        ['Поливає сама', 'Вода повільно піднімається ґнотом, щойно земля підсихає. Рослина здорова.'],
        ['Самообслуговування', 'Предмет сам про себе дбає, як робот-пилосос, що їде заряджатися.']
      ],
      [
        ['Проблема', 'У великому паперовому атласі є всі потрібні карти, але він важить 3 кг.'],
        ['Два бажання', 'Хочеш мати з собою всі 50 карт, але не хочеш носити важку книгу.'],
        ['Зроби копію', 'Сфотографуй або відскануй. Копія має ту саму інформацію, що й оригінал.'],
        ['Носи копію', 'Тепер карти живуть у телефоні: 200 г замість 3 кг.'],
        ['Копіювання', 'Заміни важке, крихке чи дороге дешевою копією: фото, сканом, моделлю.']
      ],
      [
        ['Проблема', 'Дитяча каша щойно з плити. Чи не занадто гаряча?'],
        ['Не видно', 'Температуру не побачиш, а пробувати гарячу їжу пальцем — погана ідея.'],
        ['Гаряче = рожеве', 'Спеціальна фарба на ложці стає рожевою, коли їжа занадто гаряча: 60°.'],
        ['Безпечно = синє', 'Коли каша холоне, ложка стає синьою: 36°. Можна їсти!'],
        ['Зміна забарвлення', 'Колір показує стан без вимірювань: гаряче чи безпечно, стоп чи вперед.']
      ]
    ]
  };

  // ---------- Плеєр ----------
  let active = null;

  function parseScenes(s) {
    const set = new Set();
    s.split(',').forEach(part => {
      const [a, b] = part.split('-').map(Number);
      for (let i = a; i <= (isNaN(b) ? a : b); i++) set.add(i);
    });
    return set;
  }

  function applyScene(svg, scene) {
    svg.setAttribute('class', 'scene-' + scene);
    svg.querySelectorAll('[data-s]').forEach(el => {
      el.style.opacity = parseScenes(el.dataset.s).has(scene) ? '1' : '0';
    });
    svg.querySelectorAll('[data-t]').forEach(el => {
      const parts = el.dataset.t.split('|');
      let v = '';
      for (let i = 0; i <= scene && i < parts.length; i++) if (parts[i].trim()) v = parts[i];
      if (!v) v = parts.find(p => p.trim()) || '';
      el.style.transform = v;
    });
  }

  function stop() {
    if (active) { clearInterval(active.timer); active = null; }
  }

  function open(btn, toolIndex, lang) {
    stop();
    const card = btn.parentElement;
    const old = card.querySelector('.anim-player');
    if (old) { old.remove(); btn.hidden = false; return; }
    const texts = (ANIM_TEXT[lang] || ANIM_TEXT.en)[toolIndex];
    const draw = DRAW[toolIndex];
    if (!texts || !draw) return;

    const wrap = document.createElement('div');
    wrap.className = 'anim-player';
    wrap.innerHTML = `
      <div class="anim-stage"><svg viewBox="0 0 320 200" role="img" aria-label="${texts[texts.length - 1][0]}">${draw()}</svg></div>
      <div class="anim-cap" aria-live="polite"><div class="anim-step"></div><b></b><p></p></div>
      <div class="anim-ctrl">
        <button type="button" class="anim-btn" data-act="prev" aria-label="Back">←</button>
        <button type="button" class="anim-btn anim-play" data-act="play" aria-label="Play or pause">❚❚</button>
        <button type="button" class="anim-btn" data-act="next" aria-label="Next">→</button>
        <div class="anim-dots">${texts.map((_, i) => `<button type="button" data-go="${i}" aria-label="${i + 1}"></button>`).join('')}</div>
        <button type="button" class="anim-btn anim-close" data-act="close" aria-label="Close">✕</button>
      </div>`;
    btn.hidden = true;
    btn.after(wrap);

    const svg = wrap.querySelector('svg');
    const stepEl = wrap.querySelector('.anim-step'), hEl = wrap.querySelector('.anim-cap b'), pEl = wrap.querySelector('.anim-cap p');
    const playBtn = wrap.querySelector('.anim-play');
    const st = { cur: 0, timer: null, playing: false };

    function go(i) {
      st.cur = Math.max(0, Math.min(texts.length - 1, i));
      applyScene(svg, st.cur);
      stepEl.textContent = `${st.cur + 1} / ${texts.length}`;
      hEl.textContent = texts[st.cur][0];
      pEl.textContent = texts[st.cur][1];
      wrap.querySelectorAll('.anim-dots button').forEach((b, k) => b.setAttribute('aria-current', k === st.cur));
      if (st.cur === texts.length - 1) pause(true);
    }
    function play() {
      if (st.cur === texts.length - 1) go(0);
      st.playing = true; playBtn.textContent = '❚❚';
      clearInterval(st.timer);
      st.timer = setInterval(() => go(st.cur + 1), SCENE_MS);
      active = st;
    }
    function pause(ended) {
      st.playing = false; clearInterval(st.timer);
      playBtn.textContent = ended ? '↺' : '▶';
    }
    wrap.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.go) { pause(); go(+b.dataset.go); return; }
      const a = b.dataset.act;
      if (a === 'prev') { pause(); go(st.cur - 1); }
      else if (a === 'next') { pause(); go(st.cur + 1); }
      else if (a === 'play') { st.playing ? pause() : play(); }
      else if (a === 'close') { pause(); stop(); wrap.remove(); btn.hidden = false; }
    });

    go(0);
    requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add('ready')));
    play();
  }

  window.InventorAnim = { open, stop, count: DRAW.length };
})();
