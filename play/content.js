/* Prybambas Play — тексти сторінок для QR з постерів.
   Мови: en, uk, ro, pl. Щоб додати мову — скопіюй блок "en" у PLAY_UI і в кожен постер,
   а потім додай код мови в LANGS у play.js і в <select> на сторінках. */

window.PLAY_UI = {
  en: {
    back: '← Hub', chooseAge: 'Pick your age', show: 'Show answer', hide: 'Hide',
    ages: [{ icon: '🧸', label: '3–5' }, { icon: '🔍', label: '6–8' }, { icon: '💡', label: '9–12' }],
    answersTitle: '✅ Poster answers', grownups: 'For grown-ups:',
    promoTitle: 'More thinking games', promoText: 'What If? — a free logic game for the whole family.', promoBtn: 'Play',
    indexTitle: 'Play while you wait', indexIntro: 'Games for our posters in clinics and kids’ rooms. Choose your poster.',
  },
  uk: {
    back: '← Хаб', chooseAge: 'Обери свій вік', show: 'Показати відповідь', hide: 'Сховати',
    ages: [{ icon: '🧸', label: '3–5' }, { icon: '🔍', label: '6–8' }, { icon: '💡', label: '9–12' }],
    answersTitle: '✅ Відповіді до постера', grownups: 'Для дорослих:',
    promoTitle: 'Ще ігри для мислення', promoText: '«Що, якщо?» — безкоштовна логічна гра для всієї родини.', promoBtn: 'Грати',
    indexTitle: 'Граємо, поки чекаємо', indexIntro: 'Ігри до наших постерів у клініках і дитячих кімнатах. Обери свій постер.',
  },
  ro: {
    back: '← Acasă', chooseAge: 'Alege vârsta', show: 'Arată răspunsul', hide: 'Ascunde',
    ages: [{ icon: '🧸', label: '3–5' }, { icon: '🔍', label: '6–8' }, { icon: '💡', label: '9–12' }],
    answersTitle: '✅ Răspunsuri la poster', grownups: 'Pentru adulți:',
    promoTitle: 'Mai multe jocuri de gândire', promoText: 'Ce-ar fi dacă? — un joc de logică gratuit pentru toată familia.', promoBtn: 'Joacă',
    indexTitle: 'Ne jucăm cât așteptăm', indexIntro: 'Jocuri pentru posterele noastre din clinici și camerele copiilor. Alege posterul.',
  },
  pl: {
    back: '← Start', chooseAge: 'Wybierz wiek', show: 'Pokaż odpowiedź', hide: 'Ukryj',
    ages: [{ icon: '🧸', label: '3–5' }, { icon: '🔍', label: '6–8' }, { icon: '💡', label: '9–12' }],
    answersTitle: '✅ Odpowiedzi do plakatu', grownups: 'Dla dorosłych:',
    promoTitle: 'Więcej gier na myślenie', promoText: 'Co by było, gdyby? — darmowa gra logiczna dla całej rodziny.', promoBtn: 'Graj',
    indexTitle: 'Bawimy się, czekając', indexIntro: 'Gry do naszych plakatów w przychodniach i pokojach dzieci. Wybierz plakat.',
  },
};

window.PLAY = {
  /* ================= 🦷 DENTIST — BEAVER ================= */
  beaver: {
    en: {
      emoji: '🦫', title: 'Beaver’s Trip to the Dentist', where: 'Dentist poster',
      intro: 'You found the QR code! Here are more games for the waiting room. Pick your age.',
      posterAlt: 'Poster: Beaver rides to the dentist past a maze, a germ forest and a meadow',
      games: {
        small: [
          { icon: '🎨', title: 'I spy a colour', text: 'A grown-up says: “I spy something pink…” Find it on the poster! Then swap roles.' },
          { icon: '👍', title: 'Thumbs up for teeth?', text: 'Thumbs up if it’s good for teeth, thumbs down if it’s not:\napple · candy · cheese · lollipop · carrot · fizzy drink · water',
            answer: '👍 apple, cheese, carrot, water\n👎 candy, lollipop, fizzy drink — they’re fine sometimes, then rinse with water!' },
          { icon: '🪥', title: 'Brush like Beaver', text: 'Pretend to brush your teeth: up and down, round and round, while a grown-up counts slowly to 20.' },
        ],
        mid: [
          { icon: '⏱️', title: '30-second memory', text: 'Look at the meadow ③ for 30 seconds. Turn around. Can you remember: how many cups? What colour is the toothbrush? Where is the duck?',
            answer: '3 cups · the toothbrush is purple · the duck swims in the pond.' },
          { icon: '➕', title: 'Germ maths', text: 'In the forest ② there are 3 green, 5 yellow and 7 orange germs. How many germs in total? Which colour is hiding most?',
            answer: '3 + 5 + 7 = 15 germs. Orange ones are the most — 7.' },
          { icon: '📖', title: 'Story of three', text: 'Pick three things on the poster (for example: the duck, a magnifying glass and the bike). Make up a story about Beaver that uses all three.' },
        ],
        big: [
          { icon: '🧪', title: 'Fact check', text: 'Beaver teeth are orange — not because Beaver never brushes! Why do you think they are orange?',
            answer: 'Beaver front teeth have iron in the enamel. Iron makes them orange and extra strong — perfect for chewing wood. Beaver teeth also never stop growing!' },
          { icon: '💡', title: 'Inventor challenge', text: 'Combine two things from the poster into a new gadget. Toothbrush + magnifying glass = ? Toothbrush + bike = ?\nWhat problem does your invention solve?',
            answer: 'Ideas: a toothbrush with a tiny camera that shows where germs are left; a bike whose pedals power a toothbrush for exactly 2 minutes. Your idea is just as good — explain how it works!' },
          { icon: '❓', title: 'What if…?', text: 'What if our teeth kept growing all our lives, like a beaver’s? Build a chain: what would happen next, and after that?',
            answer: 'Example chain: teeth keep growing → we’d need to chew hard food every day → shops would sell “chewing sticks” → dentists would file teeth instead of filling them → … Keep going!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Maze', text: 'Start at the tooth and follow the white path to the toothbrush. Stuck? Try it backwards, from the toothbrush.' },
        { icon: '②', title: 'Germ forest', text: '3 green · 5 yellow · 7 orange = 15 germs.' },
        { icon: '③', title: 'Meadow', text: '2 toothbrushes · 3 cups · 4 toothpaste tubes · 5 magnifying glasses.' },
        { icon: '⭐', title: 'Bonus', text: 'Did you spot the duck in the pond and the bird on the tree stump?' },
      ],
      tip: 'Kids brush twice a day for about 2 minutes. Playing “find the germ” before a check-up turns the visit into an adventure — praise the effort, not just the right answer.',
    },
    uk: {
      emoji: '🦫', title: 'Бобер їде до стоматолога', where: 'Постер для стоматолога',
      intro: 'Ти знайшов QR-код! Тут ще ігри, поки чекаєш. Обери свій вік.',
      posterAlt: 'Постер: бобер їде до стоматолога повз лабіринт, ліс мікробів і галявину',
      games: {
        small: [
          { icon: '🎨', title: 'Я бачу колір', text: 'Дорослий каже: «Я бачу щось рожеве…» Знайди це на постері! Потім помінялися ролями.' },
          { icon: '👍', title: 'Добре для зубів?', text: 'Великий палець угору — якщо корисно для зубів, униз — якщо ні:\nяблуко · цукерка · сир · льодяник · морква · газована вода · вода',
            answer: '👍 яблуко, сир, морква, вода\n👎 цукерка, льодяник, газована вода — іноді можна, але потім прополощи рот водою!' },
          { icon: '🪥', title: 'Чистимо, як бобер', text: 'Удавай, що чистиш зуби: вгору-вниз, по колу — поки дорослий повільно рахує до 20.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Памʼять за 30 секунд', text: 'Дивись на галявину ③ 30 секунд. Відвернись. Чи памʼятаєш: скільки склянок? Якого кольору щітка? Де качка?',
            answer: '3 склянки · щітка фіолетова · качка плаває в ставку.' },
          { icon: '➕', title: 'Мікробна математика', text: 'У лісі ② 3 зелені, 5 жовтих і 7 помаранчевих мікробів. Скільки всього? Яких найбільше?',
            answer: '3 + 5 + 7 = 15 мікробів. Найбільше помаранчевих — 7.' },
          { icon: '📖', title: 'Історія з трьох', text: 'Обери три речі на постері (наприклад: качку, лупу й велосипед). Вигадай історію про бобра, у якій будуть усі три.' },
        ],
        big: [
          { icon: '🧪', title: 'Перевір факт', text: 'У бобра помаранчеві зуби — і не тому, що він їх не чистить! Як думаєш, чому?',
            answer: 'У емалі передніх зубів бобра є залізо. Воно робить зуби помаранчевими й дуже міцними — якраз, щоб гризти дерево. А ще зуби бобра ростуть усе життя!' },
          { icon: '💡', title: 'Завдання винахідника', text: 'Поєднай дві речі з постера в новий пристрій. Щітка + лупа = ? Щітка + велосипед = ?\nЯку проблему розвʼязує твій винахід?',
            answer: 'Ідеї: щітка з крихітною камерою, яка показує, де лишилися мікроби; велосипед, педалі якого крутять щітку рівно 2 хвилини. Твоя ідея не гірша — поясни, як вона працює!' },
          { icon: '❓', title: 'Що, якщо…?', text: 'Що, якби наші зуби росли все життя, як у бобра? Побудуй ланцюжок: що станеться далі, а потім?',
            answer: 'Приклад: зуби ростуть → треба щодня гризти тверде → у магазинах продають «гризальні палички» → стоматологи підпилюють зуби замість пломб → … Продовжуй!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Лабіринт', text: 'Почни від зубика й веди білою доріжкою до щітки. Заплутався? Спробуй навпаки — від щітки.' },
        { icon: '②', title: 'Ліс мікробів', text: '3 зелені · 5 жовтих · 7 помаранчевих = 15 мікробів.' },
        { icon: '③', title: 'Галявина', text: '2 щітки · 3 склянки · 4 тюбики пасти · 5 луп.' },
        { icon: '⭐', title: 'Бонус', text: 'А ти помітив качку в ставку і пташку на пеньку?' },
      ],
      tip: 'Діти чистять зуби двічі на день приблизно по 2 хвилини. Гра «знайди мікроба» перед оглядом перетворює візит на пригоду — хваліть за старання, а не лише за правильну відповідь.',
    },
    ro: {
      emoji: '🦫', title: 'Castorul merge la dentist', where: 'Poster pentru dentist',
      intro: 'Ai găsit codul QR! Iată mai multe jocuri cât aștepți. Alege vârsta.',
      posterAlt: 'Poster: castorul merge la dentist pe lângă un labirint, o pădure cu microbi și o pajiște',
      games: {
        small: [
          { icon: '🎨', title: 'Văd o culoare', text: 'Un adult spune: „Văd ceva roz…” Găsește-l pe poster! Apoi schimbați rolurile.' },
          { icon: '👍', title: 'E bun pentru dinți?', text: 'Degetul mare în sus dacă e bun pentru dinți, în jos dacă nu:\nmăr · bomboană · brânză · acadea · morcov · suc acidulat · apă',
            answer: '👍 măr, brânză, morcov, apă\n👎 bomboană, acadea, suc acidulat — uneori se poate, dar apoi clătește gura cu apă!' },
          { icon: '🪥', title: 'Ne spălăm ca castorul', text: 'Prefă-te că te speli pe dinți: sus-jos, în cerc — cât timp un adult numără rar până la 20.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Memorie în 30 de secunde', text: 'Privește pajiștea ③ timp de 30 de secunde. Întoarce-te. Îți amintești: câte pahare sunt? Ce culoare are periuța? Unde e rățușca?',
            answer: '3 pahare · periuța e mov · rățușca înoată în iaz.' },
          { icon: '➕', title: 'Matematica microbilor', text: 'În pădurea ② sunt 3 microbi verzi, 5 galbeni și 7 portocalii. Câți sunt în total? Care sunt cei mai mulți?',
            answer: '3 + 5 + 7 = 15 microbi. Cei mai mulți sunt portocalii — 7.' },
          { icon: '📖', title: 'Poveste din trei', text: 'Alege trei lucruri de pe poster (de exemplu: rățușca, lupa și bicicleta). Inventează o poveste despre castor cu toate trei.' },
        ],
        big: [
          { icon: '🧪', title: 'Verifică faptul', text: 'Castorul are dinții portocalii — și nu pentru că nu se spală pe dinți! De ce crezi?',
            answer: 'Smalțul dinților din față ai castorului conține fier. Fierul îi face portocalii și foarte rezistenți — perfecți pentru ros lemn. Și dinții castorului cresc toată viața!' },
          { icon: '💡', title: 'Provocarea inventatorului', text: 'Combină două lucruri de pe poster într-un aparat nou. Periuță + lupă = ? Periuță + bicicletă = ?\nCe problemă rezolvă invenția ta?',
            answer: 'Idei: o periuță cu o cameră mică ce arată unde au rămas microbi; o bicicletă ale cărei pedale învârt periuța exact 2 minute. Ideea ta e la fel de bună — explică cum funcționează!' },
          { icon: '❓', title: 'Ce-ar fi dacă…?', text: 'Ce-ar fi dacă dinții noștri ar crește toată viața, ca la castor? Construiește un lanț: ce s-ar întâmpla apoi, și după aceea?',
            answer: 'Exemplu: dinții cresc → trebuie să rodem ceva tare zilnic → magazinele vând „bețe de ros” → dentiștii pilesc dinții în loc de plombe → … Continuă!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Labirint', text: 'Pornește de la dinte și urmează cărarea albă până la periuță. Te-ai încurcat? Încearcă invers, de la periuță.' },
        { icon: '②', title: 'Pădurea microbilor', text: '3 verzi · 5 galbeni · 7 portocalii = 15 microbi.' },
        { icon: '③', title: 'Pajiștea', text: '2 periuțe · 3 pahare · 4 tuburi de pastă · 5 lupe.' },
        { icon: '⭐', title: 'Bonus', text: 'Ai observat rățușca din iaz și păsărica de pe buturugă?' },
      ],
      tip: 'Copiii se spală pe dinți de două ori pe zi, cam 2 minute. Jocul „găsește microbul” înainte de control transformă vizita într-o aventură — lăudați efortul, nu doar răspunsul corect.',
    },
    pl: {
      emoji: '🦫', title: 'Bóbr jedzie do dentysty', where: 'Plakat dla dentysty',
      intro: 'Znalazłeś kod QR! Oto więcej gier na czas czekania. Wybierz wiek.',
      posterAlt: 'Plakat: bóbr jedzie do dentysty obok labiryntu, lasu zarazków i łąki',
      games: {
        small: [
          { icon: '🎨', title: 'Widzę kolor', text: 'Dorosły mówi: „Widzę coś różowego…” Znajdź to na plakacie! Potem zamieńcie się rolami.' },
          { icon: '👍', title: 'Dobre dla zębów?', text: 'Kciuk w górę, jeśli dobre dla zębów, w dół — jeśli nie:\njabłko · cukierek · ser · lizak · marchewka · napój gazowany · woda',
            answer: '👍 jabłko, ser, marchewka, woda\n👎 cukierek, lizak, napój gazowany — czasem można, ale potem przepłucz buzię wodą!' },
          { icon: '🪥', title: 'Myjemy jak bóbr', text: 'Udawaj, że myjesz zęby: góra-dół, w kółko — a dorosły powoli liczy do 20.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Pamięć w 30 sekund', text: 'Patrz na łąkę ③ przez 30 sekund. Odwróć się. Pamiętasz: ile jest kubków? Jakiego koloru jest szczoteczka? Gdzie jest kaczka?',
            answer: '3 kubki · szczoteczka jest fioletowa · kaczka pływa w stawie.' },
          { icon: '➕', title: 'Matematyka zarazków', text: 'W lesie ② są 3 zielone, 5 żółtych i 7 pomarańczowych zarazków. Ile razem? Których jest najwięcej?',
            answer: '3 + 5 + 7 = 15 zarazków. Najwięcej jest pomarańczowych — 7.' },
          { icon: '📖', title: 'Historia z trzech', text: 'Wybierz trzy rzeczy z plakatu (na przykład: kaczkę, lupę i rower). Wymyśl historię o bobrze, w której są wszystkie trzy.' },
        ],
        big: [
          { icon: '🧪', title: 'Sprawdź fakt', text: 'Bóbr ma pomarańczowe zęby — i to nie dlatego, że ich nie myje! Jak myślisz, dlaczego?',
            answer: 'W szkliwie przednich zębów bobra jest żelazo. Dzięki niemu zęby są pomarańczowe i bardzo mocne — idealne do gryzienia drewna. A zęby bobra rosną przez całe życie!' },
          { icon: '💡', title: 'Wyzwanie wynalazcy', text: 'Połącz dwie rzeczy z plakatu w nowe urządzenie. Szczoteczka + lupa = ? Szczoteczka + rower = ?\nJaki problem rozwiązuje twój wynalazek?',
            answer: 'Pomysły: szczoteczka z malutką kamerą, która pokazuje, gdzie zostały zarazki; rower, którego pedały kręcą szczoteczką dokładnie 2 minuty. Twój pomysł jest równie dobry — wyjaśnij, jak działa!' },
          { icon: '❓', title: 'Co by było, gdyby…?', text: 'Co by było, gdyby nasze zęby rosły przez całe życie, jak u bobra? Zbuduj łańcuch: co stałoby się potem, a co dalej?',
            answer: 'Przykład: zęby rosną → trzeba codziennie gryźć coś twardego → sklepy sprzedają „patyczki do gryzienia” → dentyści piłują zęby zamiast plombować → … Kontynuuj!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Labirynt', text: 'Zacznij od ząbka i idź białą ścieżką do szczoteczki. Utknąłeś? Spróbuj od końca — od szczoteczki.' },
        { icon: '②', title: 'Las zarazków', text: '3 zielone · 5 żółtych · 7 pomarańczowych = 15 zarazków.' },
        { icon: '③', title: 'Łąka', text: '2 szczoteczki · 3 kubki · 4 tubki pasty · 5 lup.' },
        { icon: '⭐', title: 'Bonus', text: 'Zauważyłeś kaczkę w stawie i ptaszka na pniu?' },
      ],
      tip: 'Dzieci myją zęby dwa razy dziennie, około 2 minut. Zabawa „znajdź zarazka” przed wizytą zamienia ją w przygodę — chwalcie wysiłek, a nie tylko dobrą odpowiedź.',
    },
  },

  /* ================= 👁 EYE DOCTOR — OWL ================= */
  owl: {
    en: {
      emoji: '🦉', title: 'Owl’s Ride to the Eye Doctor', where: 'Eye doctor poster',
      intro: 'You found the QR code! Here are more games for the waiting room. Pick your age.',
      posterAlt: 'Poster: Owl rides to the eye clinic past a maze, a purple forest and a meadow',
      games: {
        small: [
          { icon: '😉', title: 'Blink and wink', text: 'Blink 5 times. Now wink with one eye… and with the other! Which one is easier?' },
          { icon: '🔵', title: 'Find something round', text: 'Find 3 round things on the poster. Then find 3 blue things.' },
          { icon: '🦉', title: 'Owl glasses', text: 'Make “glasses” with your fingers, like Owl. Look around the room and name 3 things you can see.' },
        ],
        mid: [
          { icon: '⏱️', title: '30-second memory', text: 'Look at the meadow ③ for 30 seconds. Turn around. How many pairs of glasses were there? And bottles of eye drops?',
            answer: '2 pairs of glasses · 4 bottles of eye drops.' },
          { icon: '🙈', title: 'Eye detective', text: 'Hold up one finger in front of your nose. Close one eye, then the other. Does the finger “jump”?',
            answer: 'Yes! Each eye sees from a slightly different place. Your brain joins the two pictures together — that’s how we judge distance.' },
          { icon: '🦋', title: 'Butterfly count', text: 'How many butterflies can you find on the whole poster? Ask a grown-up to count too — did you get the same number?' },
        ],
        big: [
          { icon: '🧪', title: 'Fact check', text: 'Owls can’t roll their eyes like we do. So how do they look around?',
            answer: 'Owl eyes are tube-shaped and fixed in place. Instead, owls turn their heads — up to about 270 degrees!' },
          { icon: '💡', title: 'Inventor challenge', text: 'Invent glasses for an animal: a giraffe on a windy day, a fish, or a mole that lives underground. What special features do they need?',
            answer: 'Ideas: giraffe glasses with tiny wipers; fish goggles that keep water in, not out; mole glasses with a headlamp. Draw yours!' },
          { icon: '❓', title: 'What if…?', text: 'What if people could see like bees — in ultraviolet colours we can’t see now? Build a chain of what would change.',
            answer: 'Example chain: we see hidden patterns on flowers → gardens look totally different → artists invent new paints → sunscreen becomes visible on skin → … Keep going!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Maze', text: 'Start at the eye and follow the path to the eye drops. Stuck? Try it backwards.' },
        { icon: '②', title: 'Eye gym', text: 'Look up and down 8 times, left and right 8 times, roll your eyes in a circle 10 times. Go slowly and blink after each set.' },
        { icon: '③', title: 'Meadow', text: '2 pairs of glasses · 3 eye-check torches · 4 bottles of eye drops · 5 contact lenses.' },
      ],
      tip: 'The eye movements are a playful warm-up, not a treatment. If eyes feel tired or sore, stop and rest — and follow your eye doctor’s advice.',
    },
    uk: {
      emoji: '🦉', title: 'Сова їде до окуліста', where: 'Постер для окуліста',
      intro: 'Ти знайшов QR-код! Тут ще ігри, поки чекаєш. Обери свій вік.',
      posterAlt: 'Постер: сова їде до окуліста повз лабіринт, фіолетовий ліс і галявину',
      games: {
        small: [
          { icon: '😉', title: 'Кліп і підморгни', text: 'Кліпни 5 разів. А тепер підморгни одним оком… і другим! Яким легше?' },
          { icon: '🔵', title: 'Знайди кругле', text: 'Знайди на постері 3 круглі речі. А тепер 3 сині.' },
          { icon: '🦉', title: 'Окуляри сови', text: 'Склади з пальців «окуляри», як у сови. Роздивись кімнату й назви 3 речі, які бачиш.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Памʼять за 30 секунд', text: 'Дивись на галявину ③ 30 секунд. Відвернись. Скільки було окулярів? А крапель для очей?',
            answer: '2 окуляри · 4 флакони крапель.' },
          { icon: '🙈', title: 'Детектив очей', text: 'Підніми палець перед носом. Закрий одне око, потім друге. Палець «стрибає»?',
            answer: 'Так! Кожне око бачить з трохи іншого місця. Мозок складає дві картинки в одну — так ми відчуваємо відстань.' },
          { icon: '🦋', title: 'Порахуй метеликів', text: 'Скільки метеликів ти знайдеш на всьому постері? Попроси дорослого порахувати теж — у вас однаково?' },
        ],
        big: [
          { icon: '🧪', title: 'Перевір факт', text: 'Сови не можуть водити очима, як ми. То як вони роздивляються навколо?',
            answer: 'Очі сови схожі на трубочки й нерухомі. Тому сова повертає голову — аж приблизно на 270 градусів!' },
          { icon: '💡', title: 'Завдання винахідника', text: 'Вигадай окуляри для тварини: для жирафа у вітряний день, для риби або для крота, що живе під землею. Що в них особливого?',
            answer: 'Ідеї: окуляри жирафа з крихітними двірниками; окуляри риби, що тримають воду всередині; окуляри крота з ліхтариком. Намалюй свої!' },
          { icon: '❓', title: 'Що, якщо…?', text: 'Що, якби люди бачили, як бджоли, — ультрафіолетові кольори, яких ми зараз не бачимо? Побудуй ланцюжок змін.',
            answer: 'Приклад: бачимо приховані візерунки на квітах → сади виглядають зовсім інакше → художники вигадують нові фарби → сонцезахисний крем видно на шкірі → … Продовжуй!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Лабіринт', text: 'Почни від ока й веди доріжкою до крапель. Заплутався? Спробуй навпаки.' },
        { icon: '②', title: 'Гімнастика для очей', text: 'Подивись вгору-вниз 8 разів, вліво-вправо 8 разів, покрути очима по колу 10 разів. Повільно, і кліпни після кожної вправи.' },
        { icon: '③', title: 'Галявина', text: '2 окуляри · 3 ліхтарики для огляду очей · 4 флакони крапель · 5 контактних лінз.' },
      ],
      tip: 'Рухи очима — це ігрова розминка, а не лікування. Якщо очі втомилися чи болять, зупиніться й відпочиньте — і дотримуйтеся порад лікаря.',
    },
    ro: {
      emoji: '🦉', title: 'Bufnița merge la oftalmolog', where: 'Poster pentru oftalmolog',
      intro: 'Ai găsit codul QR! Iată mai multe jocuri cât aștepți. Alege vârsta.',
      posterAlt: 'Poster: bufnița merge la clinica de ochi pe lângă un labirint, o pădure mov și o pajiște',
      games: {
        small: [
          { icon: '😉', title: 'Clipește și fă cu ochiul', text: 'Clipește de 5 ori. Acum fă cu ochiul cu un ochi… și cu celălalt! Care e mai ușor?' },
          { icon: '🔵', title: 'Găsește ceva rotund', text: 'Găsește 3 lucruri rotunde pe poster. Apoi 3 lucruri albastre.' },
          { icon: '🦉', title: 'Ochelarii bufniței', text: 'Fă „ochelari” din degete, ca bufnița. Privește prin cameră și numește 3 lucruri pe care le vezi.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Memorie în 30 de secunde', text: 'Privește pajiștea ③ timp de 30 de secunde. Întoarce-te. Câte perechi de ochelari erau? Și câte sticluțe de picături?',
            answer: '2 perechi de ochelari · 4 sticluțe de picături.' },
          { icon: '🙈', title: 'Detectivul ochilor', text: 'Ține un deget în fața nasului. Închide un ochi, apoi pe celălalt. Degetul „sare”?',
            answer: 'Da! Fiecare ochi vede dintr-un loc puțin diferit. Creierul unește cele două imagini — așa apreciem distanța.' },
          { icon: '🦋', title: 'Numără fluturii', text: 'Câți fluturi găsești pe tot posterul? Roagă un adult să numere și el — ați obținut același număr?' },
        ],
        big: [
          { icon: '🧪', title: 'Verifică faptul', text: 'Bufnițele nu își pot roti ochii ca noi. Atunci cum se uită în jur?',
            answer: 'Ochii bufniței au formă de tub și sunt ficși. De aceea bufnița își întoarce capul — până la aproximativ 270 de grade!' },
          { icon: '💡', title: 'Provocarea inventatorului', text: 'Inventează ochelari pentru un animal: o girafă într-o zi cu vânt, un pește sau o cârtiță care trăiește sub pământ. Ce au special?',
            answer: 'Idei: ochelari de girafă cu ștergătoare mici; ochelari de pește care țin apa înăuntru; ochelari de cârtiță cu lanternă. Desenează-i pe ai tăi!' },
          { icon: '❓', title: 'Ce-ar fi dacă…?', text: 'Ce-ar fi dacă oamenii ar vedea ca albinele — culori ultraviolete pe care acum nu le vedem? Construiește un lanț de schimbări.',
            answer: 'Exemplu: vedem modele ascunse pe flori → grădinile arată cu totul altfel → artiștii inventează vopsele noi → crema de soare se vede pe piele → … Continuă!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Labirint', text: 'Pornește de la ochi și urmează cărarea până la picături. Te-ai încurcat? Încearcă invers.' },
        { icon: '②', title: 'Gimnastica ochilor', text: 'Privește sus-jos de 8 ori, stânga-dreapta de 8 ori, rotește ochii în cerc de 10 ori. Încet, și clipește după fiecare exercițiu.' },
        { icon: '③', title: 'Pajiștea', text: '2 perechi de ochelari · 3 lanterne pentru examinarea ochilor · 4 sticluțe de picături · 5 lentile de contact.' },
      ],
      tip: 'Mișcările ochilor sunt o încălzire prin joc, nu un tratament. Dacă ochii sunt obosiți sau dor, opriți-vă și odihniți-vă — și urmați sfaturile medicului.',
    },
    pl: {
      emoji: '🦉', title: 'Sowa jedzie do okulisty', where: 'Plakat dla okulisty',
      intro: 'Znalazłeś kod QR! Oto więcej gier na czas czekania. Wybierz wiek.',
      posterAlt: 'Plakat: sowa jedzie do okulisty obok labiryntu, fioletowego lasu i łąki',
      games: {
        small: [
          { icon: '😉', title: 'Mrugnij i puść oczko', text: 'Mrugnij 5 razy. Teraz puść oczko jednym okiem… i drugim! Którym łatwiej?' },
          { icon: '🔵', title: 'Znajdź coś okrągłego', text: 'Znajdź na plakacie 3 okrągłe rzeczy. A teraz 3 niebieskie.' },
          { icon: '🦉', title: 'Okulary sowy', text: 'Zrób z palców „okulary” jak sowa. Rozejrzyj się po pokoju i nazwij 3 rzeczy, które widzisz.' },
        ],
        mid: [
          { icon: '⏱️', title: 'Pamięć w 30 sekund', text: 'Patrz na łąkę ③ przez 30 sekund. Odwróć się. Ile było par okularów? A buteleczek kropli do oczu?',
            answer: '2 pary okularów · 4 buteleczki kropli.' },
          { icon: '🙈', title: 'Detektyw oczu', text: 'Podnieś palec przed nosem. Zamknij jedno oko, potem drugie. Palec „skacze”?',
            answer: 'Tak! Każde oko widzi z trochę innego miejsca. Mózg łączy dwa obrazy w jeden — dzięki temu oceniamy odległość.' },
          { icon: '🦋', title: 'Policz motyle', text: 'Ile motyli znajdziesz na całym plakacie? Poproś dorosłego, żeby też policzył — wyszło wam tyle samo?' },
        ],
        big: [
          { icon: '🧪', title: 'Sprawdź fakt', text: 'Sowy nie mogą ruszać oczami tak jak my. Jak więc się rozglądają?',
            answer: 'Oczy sowy mają kształt rurek i są nieruchome. Dlatego sowa obraca głowę — nawet o około 270 stopni!' },
          { icon: '💡', title: 'Wyzwanie wynalazcy', text: 'Wymyśl okulary dla zwierzęcia: żyrafy w wietrzny dzień, ryby albo kreta, który mieszka pod ziemią. Co mają wyjątkowego?',
            answer: 'Pomysły: okulary żyrafy z malutkimi wycieraczkami; okulary ryby, które trzymają wodę w środku; okulary kreta z latarką. Narysuj swoje!' },
          { icon: '❓', title: 'Co by było, gdyby…?', text: 'Co by było, gdyby ludzie widzieli jak pszczoły — kolory ultrafioletowe, których teraz nie widzimy? Zbuduj łańcuch zmian.',
            answer: 'Przykład: widzimy ukryte wzory na kwiatach → ogrody wyglądają zupełnie inaczej → artyści wymyślają nowe farby → krem z filtrem widać na skórze → … Kontynuuj!' },
        ],
      },
      answers: [
        { icon: '①', title: 'Labirynt', text: 'Zacznij od oka i idź ścieżką do kropli. Utknąłeś? Spróbuj od końca.' },
        { icon: '②', title: 'Gimnastyka oczu', text: 'Spójrz w górę i w dół 8 razy, w lewo i w prawo 8 razy, zakręć oczami w kółko 10 razy. Powoli, i mrugnij po każdym ćwiczeniu.' },
        { icon: '③', title: 'Łąka', text: '2 pary okularów · 3 latarki do badania oczu · 4 buteleczki kropli · 5 soczewek kontaktowych.' },
      ],
      tip: 'Ruchy oczu to zabawowa rozgrzewka, a nie leczenie. Jeśli oczy są zmęczone lub bolą, przerwijcie i odpocznijcie — i stosujcie się do zaleceń lekarza.',
    },
  },

  /* ================= 🩺 PEDIATRICIAN — NURSE OWL ================= */
  health: {
    en: {
      emoji: '🩺', title: 'Nurse Owl’s Greenhouse', where: 'Pediatrician poster',
      intro: 'You found the QR code! Here are more games for the waiting room. Pick your age.',
      posterAlt: 'Poster: Nurse Owl in a greenhouse with a pattern puzzle, movement cards and an odd-one-out game',
      games: {
        small: [
          { icon: '🧰', title: 'Count the doctor’s bags', text: 'How many red first-aid kits can you find on the top board?', answer: '3 first-aid kits.' },
          { icon: '👋', title: 'Copy Nurse Owl', text: 'Nurse Owl is waving — wave back! Now flap your “wings” 5 times, slowly and quietly.' },
          { icon: '🌸', title: 'Sniff garden', text: 'Look at the bottom board. Which plant do you think smells nicest? Which one is not a plant at all?' },
        ],
        mid: [
          { icon: '👏', title: 'Make your own pattern', text: 'Make a sound pattern: clap, clap, tap your knees… clap, clap, tap… Can a grown-up guess what comes next? Now swap.' },
          { icon: '🗣️', title: 'Doctor says', text: 'Like “Simon says”: do the move only if the grown-up starts with “Doctor says…”. Doctor says: touch your nose! Jump! (Oops — no “Doctor says”!)' },
          { icon: '⏱️', title: '30-second memory', text: 'Look at the top board for 30 seconds. Turn around. How many stethoscopes were there?', answer: '4 stethoscopes.' },
        ],
        big: [
          { icon: '❤️', title: 'Find your heartbeat', text: 'Put two fingers on your wrist or neck. Count the beats for 15 seconds, then multiply by 4. Now do 10 quiet arm circles and count again. What changed?',
            answer: 'For kids your age it’s usually around 70–110 beats per minute at rest. After moving, the heart beats faster to send more oxygen to your muscles.' },
          { icon: '💡', title: 'Inventor challenge', text: 'Invent something that makes waiting at the doctor more fun — or a medical tool that doesn’t scare little kids. How does it work?',
            answer: 'Ideas: a thermometer that plays a song when it’s done; a plaster that changes colour when the cut is healed; a chair that tells stories. Your turn!' },
          { icon: '❓', title: 'What if…?', text: 'What if people didn’t need to sleep at all? Build a chain: what would happen next, and after that?',
            answer: 'Example chain: no sleep → nights become a second day → shops and schools open all night → the body never gets time to repair → … Hmm, maybe sleep is a superpower after all!' },
        ],
      },
      answers: [
        { icon: '🧩', title: 'What comes next?', text: 'Top row: thermometer, stethoscope, first-aid kit, bandage — and again. Next comes the first-aid kit.\nBottom row: there’s more than one possible rule! Invent yours and explain it.' },
        { icon: '🤸', title: 'Move and wiggle', text: 'Hug yourself for 5 seconds, do 5 star jumps, stand on one leg for 5 seconds (then the other one). In a small waiting room, do “arm stars” instead of jumping.' },
        { icon: '🌿', title: 'Odd one out', text: 'Surprise — there are two! The box and the paper boat are not plants. Did you spot both? Super-detective!' },
      ],
      tip: 'Short movement breaks help kids wait more calmly. Please keep the jumps gentle and quiet out of respect for other patients — arm movements work just as well.',
    },
    uk: {
      emoji: '🩺', title: 'Оранжерея лікарки Сови', where: 'Постер для педіатра',
      intro: 'Ти знайшов QR-код! Тут ще ігри, поки чекаєш. Обери свій вік.',
      posterAlt: 'Постер: сова-медсестра в оранжереї з послідовністю, рухливими завданнями і грою «знайди зайве»',
      games: {
        small: [
          { icon: '🧰', title: 'Порахуй аптечки', text: 'Скільки червоних аптечок ти знайдеш на верхній табличці?', answer: '3 аптечки.' },
          { icon: '👋', title: 'Повтори за Совою', text: 'Сова махає — помахай у відповідь! А тепер помахай «крилами» 5 разів, повільно й тихенько.' },
          { icon: '🌸', title: 'Ароматний сад', text: 'Подивись на нижню табличку. Яка рослина, на твою думку, пахне найкраще? А що зовсім не рослина?' },
        ],
        mid: [
          { icon: '👏', title: 'Склади свій ритм', text: 'Склади ритм: плесь, плесь, тук по колінах… плесь, плесь, тук… Чи вгадає дорослий, що далі? Тепер мінятися.' },
          { icon: '🗣️', title: 'Лікар каже', text: 'Як «Саймон каже»: роби рух, тільки якщо дорослий почав зі слів «Лікар каже…». Лікар каже: торкнися носа! Стрибни! (Ой — «лікар каже» не було!)' },
          { icon: '⏱️', title: 'Памʼять за 30 секунд', text: 'Дивись на верхню табличку 30 секунд. Відвернись. Скільки там було стетоскопів?', answer: '4 стетоскопи.' },
        ],
        big: [
          { icon: '❤️', title: 'Знайди свій пульс', text: 'Поклади два пальці на запʼясток або шию. Порахуй удари за 15 секунд і помнож на 4. Тепер зроби 10 тихих кругів руками й порахуй знову. Що змінилося?',
            answer: 'У дітей твого віку в спокої зазвичай приблизно 70–110 ударів на хвилину. Після руху серце бʼється швидше, щоб принести мʼязам більше кисню.' },
          { icon: '💡', title: 'Завдання винахідника', text: 'Вигадай щось, що зробить очікування в лікаря веселішим, — або медичний інструмент, якого не бояться малюки. Як він працює?',
            answer: 'Ідеї: градусник, що грає пісеньку, коли готово; пластир, який змінює колір, коли ранка загоїлась; крісло, що розповідає казки. Тепер твоя черга!' },
          { icon: '❓', title: 'Що, якщо…?', text: 'Що, якби людям зовсім не треба було спати? Побудуй ланцюжок: що станеться далі, а потім?',
            answer: 'Приклад: не спимо → ніч стає другим днем → магазини й школи працюють уночі → тіло не має часу відновитися → … Хм, може, сон — це суперсила!' },
        ],
      },
      answers: [
        { icon: '🧩', title: 'Що далі?', text: 'Верхній ряд: градусник, стетоскоп, аптечка, бинт — і знову. Далі буде аптечка.\nНижній ряд: тут можливе не одне правило! Вигадай своє й поясни.' },
        { icon: '🤸', title: 'Рухаємось', text: 'Обійми себе на 5 секунд, зроби 5 стрибків «зірочкою», постій на одній нозі 5 секунд (потім на іншій). У тісній залі замість стрибків — «зірочка» руками.' },
        { icon: '🌿', title: 'Знайди зайве', text: 'Сюрприз — тут їх два! Коробка й паперовий кораблик — не рослини. Знайшов обидва? Ти супердетектив!' },
      ],
      tip: 'Короткі рухливі перерви допомагають дітям спокійніше чекати. Будь ласка, стрибайте тихенько з повагою до інших пацієнтів — рухи руками працюють не гірше.',
    },
    ro: {
      emoji: '🩺', title: 'Sera asistentei Bufniță', where: 'Poster pentru pediatru',
      intro: 'Ai găsit codul QR! Iată mai multe jocuri cât aștepți. Alege vârsta.',
      posterAlt: 'Poster: asistenta Bufniță într-o seră, cu un joc de șiruri, cartonașe de mișcare și „găsește intrusul”',
      games: {
        small: [
          { icon: '🧰', title: 'Numără trusele', text: 'Câte truse roșii de prim ajutor găsești pe panoul de sus?', answer: '3 truse.' },
          { icon: '👋', title: 'Imită Bufnița', text: 'Bufnița îți face cu mâna — fă-i și tu! Acum bate din „aripi” de 5 ori, încet și în liniște.' },
          { icon: '🌸', title: 'Grădina parfumată', text: 'Privește panoul de jos. Care plantă crezi că miroase cel mai frumos? Și ce nu e plantă deloc?' },
        ],
        mid: [
          { icon: '👏', title: 'Ritmul tău', text: 'Fă un ritm: bat din palme, bat din palme, bat pe genunchi… Ghicește adultul ce urmează? Apoi schimbați.' },
          { icon: '🗣️', title: 'Doctorul spune', text: 'Ca „Simon spune”: fă mișcarea doar dacă adultul începe cu „Doctorul spune…”. Doctorul spune: atinge-ți nasul! Sari! (Ups — n-a zis „doctorul spune”!)' },
          { icon: '⏱️', title: 'Memorie în 30 de secunde', text: 'Privește panoul de sus 30 de secunde. Întoarce-te. Câte stetoscoape erau?', answer: '4 stetoscoape.' },
        ],
        big: [
          { icon: '❤️', title: 'Găsește-ți pulsul', text: 'Pune două degete pe încheietură sau pe gât. Numără bătăile timp de 15 secunde și înmulțește cu 4. Fă 10 cercuri liniștite cu brațele și numără din nou. Ce s-a schimbat?',
            answer: 'La copiii de vârsta ta, în repaus, sunt de obicei cam 70–110 bătăi pe minut. După mișcare, inima bate mai repede ca să ducă mai mult oxigen mușchilor.' },
          { icon: '💡', title: 'Provocarea inventatorului', text: 'Inventează ceva care face așteptarea la doctor mai distractivă — sau un instrument medical de care cei mici nu se tem. Cum funcționează?',
            answer: 'Idei: un termometru care cântă când e gata; un plasture care își schimbă culoarea când rana s-a vindecat; un scaun care spune povești. E rândul tău!' },
          { icon: '❓', title: 'Ce-ar fi dacă…?', text: 'Ce-ar fi dacă oamenii n-ar avea deloc nevoie de somn? Construiește un lanț: ce s-ar întâmpla apoi, și după aceea?',
            answer: 'Exemplu: nu dormim → noaptea devine a doua zi → magazinele și școlile sunt deschise noaptea → corpul nu are timp să se refacă → … Hm, poate somnul e o superputere!' },
        ],
      },
      answers: [
        { icon: '🧩', title: 'Ce urmează?', text: 'Rândul de sus: termometru, stetoscop, trusă, bandaj — și din nou. Urmează trusa.\nRândul de jos: aici sunt posibile mai multe reguli! Inventează-ți regula și explic-o.' },
        { icon: '🤸', title: 'Ne mișcăm', text: 'Îmbrățișează-te 5 secunde, fă 5 sărituri „steluță”, stai pe un picior 5 secunde (apoi pe celălalt). Într-o sală mică, fă „steluța” doar cu brațele.' },
        { icon: '🌿', title: 'Găsește intrusul', text: 'Surpriză — sunt doi! Cutia și bărcuța de hârtie nu sunt plante. I-ai găsit pe amândoi? Super-detectiv!' },
      ],
      tip: 'Pauzele scurte de mișcare îi ajută pe copii să aștepte mai liniștiți. Vă rugăm să săriți ușor și în liniște, din respect pentru ceilalți pacienți — mișcările brațelor funcționează la fel de bine.',
    },
    pl: {
      emoji: '🩺', title: 'Szklarnia pielęgniarki Sowy', where: 'Plakat dla pediatry',
      intro: 'Znalazłeś kod QR! Oto więcej gier na czas czekania. Wybierz wiek.',
      posterAlt: 'Plakat: pielęgniarka Sowa w szklarni z zagadką z sekwencją, kartami ruchu i grą „co nie pasuje”',
      games: {
        small: [
          { icon: '🧰', title: 'Policz apteczki', text: 'Ile czerwonych apteczek znajdziesz na górnej tablicy?', answer: '3 apteczki.' },
          { icon: '👋', title: 'Naśladuj Sowę', text: 'Sowa macha — pomachaj jej! A teraz zamachaj „skrzydłami” 5 razy, powoli i cichutko.' },
          { icon: '🌸', title: 'Pachnący ogród', text: 'Spójrz na dolną tablicę. Która roślina pachnie według ciebie najładniej? A co w ogóle nie jest rośliną?' },
        ],
        mid: [
          { icon: '👏', title: 'Twój rytm', text: 'Ułóż rytm: klask, klask, stuk w kolana… klask, klask, stuk… Czy dorosły zgadnie, co dalej? Teraz zamiana.' },
          { icon: '🗣️', title: 'Doktor mówi', text: 'Jak „Szymon mówi”: rób ruch tylko wtedy, gdy dorosły zacznie od „Doktor mówi…”. Doktor mówi: dotknij nosa! Skacz! (Ups — nie było „doktor mówi”!)' },
          { icon: '⏱️', title: 'Pamięć w 30 sekund', text: 'Patrz na górną tablicę przez 30 sekund. Odwróć się. Ile było stetoskopów?', answer: '4 stetoskopy.' },
        ],
        big: [
          { icon: '❤️', title: 'Znajdź swój puls', text: 'Połóż dwa palce na nadgarstku lub szyi. Policz uderzenia przez 15 sekund i pomnóż przez 4. Zrób 10 spokojnych kółek ramionami i policz znowu. Co się zmieniło?',
            answer: 'U dzieci w twoim wieku w spoczynku to zwykle około 70–110 uderzeń na minutę. Po ruchu serce bije szybciej, żeby dostarczyć mięśniom więcej tlenu.' },
          { icon: '💡', title: 'Wyzwanie wynalazcy', text: 'Wymyśl coś, co sprawi, że czekanie u lekarza będzie fajniejsze — albo narzędzie medyczne, którego maluchy się nie boją. Jak działa?',
            answer: 'Pomysły: termometr, który gra piosenkę, gdy skończy; plaster, który zmienia kolor, gdy ranka się zagoi; krzesło, które opowiada bajki. Twoja kolej!' },
          { icon: '❓', title: 'Co by było, gdyby…?', text: 'Co by było, gdyby ludzie w ogóle nie musieli spać? Zbuduj łańcuch: co stałoby się potem, a co dalej?',
            answer: 'Przykład: nie śpimy → noc staje się drugim dniem → sklepy i szkoły działają w nocy → ciało nie ma czasu się zregenerować → … Hm, może sen to supermoc!' },
        ],
      },
      answers: [
        { icon: '🧩', title: 'Co dalej?', text: 'Górny rząd: termometr, stetoskop, apteczka, bandaż — i od nowa. Dalej będzie apteczka.\nDolny rząd: tu możliwa jest więcej niż jedna reguła! Wymyśl swoją i wyjaśnij.' },
        { icon: '🤸', title: 'Ruszamy się', text: 'Przytul się na 5 sekund, zrób 5 pajacyków, stań na jednej nodze na 5 sekund (potem na drugiej). W małej poczekalni zamiast skakania — „pajacyk” samymi rękami.' },
        { icon: '🌿', title: 'Co nie pasuje', text: 'Niespodzianka — są dwie rzeczy! Pudełko i papierowa łódka nie są roślinami. Znalazłeś obie? Superdetektyw!' },
      ],
      tip: 'Krótkie przerwy na ruch pomagają dzieciom spokojniej czekać. Prosimy skakać delikatnie i cicho, z szacunku dla innych pacjentów — ruchy rąk działają równie dobrze.',
    },
  },
};
