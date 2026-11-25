# Prybambas Offline — плакати для зон очікування

B2B-сервіс: клініка, кафе чи салон збирає плакат зі свого логотипа, QR-кодів на ігри Prybambas
і друкованих завдань. Ти виставляєш рахунок і замовляєш друк у Gelato з доставкою на адресу закладу.

- Сторінка: **prybambas.com/uk/offline/** і **/en/offline/** (`prybambas.com/offline/` перекидає на потрібну мову).
- Пізніше її можна перенести на `offline.prybambas.com` (див. нижче).

## Що де лежить

```
content/offline/
  offline.yml          формати (A3, A2, 50×70), ціни, Gelato productUid, ліміти, обріз, форма заявки
  i18n.yml             тексти сторінки й підписи на плакаті (uk, en)
  posters/<назва>/     базові плакати: poster.yml (palette: yellow|blue|pink) + uk.md / en.md
  tasks/<назва>/       друковані завдання: task.yml (kind: question|riddle|challenge|maze) + uk.md / en.md
offline/poster.mjs     малює плакат (той самий код і для превʼю на сайті, і для файлу друку)
assets/offline.js      конструктор у браузері
scripts/offline/print.mjs   файл для друку з заявки
```

Ігри на плакат беруться з `content/games/` — список у `offline.yml → games`.

### Додати друковане завдання
Скопіюй будь-яку папку з `content/offline/tasks/`, зміни назву й тексти:
- `question` / `challenge`: поле `text`;
- `riddle`: `text` + `answer` (відповіді друкуються внизу плаката догори дриґом);
- `maze`: `text` (підказка) + `seed` у task.yml. Кожне число дає інший лабіринт.

### Додати базовий плакат
Скопіюй папку з `content/offline/posters/`: `palette`, `order`, а в `uk.md`/`en.md` впиши
`name` і `desc` (для конструктора), `title` і `subtitle` (на плакаті).

## Як приходить заявка

**Зараз** (`request.action` порожній): заклад натискає «Завантажити файл заявки», отримує
`prybambas-offline-<заклад>-<дата>.json` (уся конфігурація + логотип усередині) і надсилає його
на `request.email` (кнопка «Написати листа» готує текст листа).

**Із сервісом форм:** впиши адресу форми в `offline.yml → request.action` (Formspree, Basin, Getform…).
Тоді в листі приходять контакти, поле `summary` (зведення для людини), поле `config` (JSON)
і файл `logo`, якщо сервіс приймає вкладення. Якщо надіслати не вдалося, сайт сам пропонує файл заявки.

## Від заявки до Gelato

1. Перевір заявку, виставив рахунок, дочекайся оплати.
2. Збери файл друку:
   ```
   npm run offline:print -- заявка.json
   # якщо config прийшов текстом, а логотип окремим файлом:
   npm run offline:print -- config.json --logo logo.png
   # інший формат, ніж обрав заклад:
   npm run offline:print -- заявка.json --size a3
   ```
   У папці `print/` (її немає в git) зʼявляться:
   - `<заклад>-<формат>.png` — 300 dpi з запасом під обріз (`bleed` в offline.yml);
   - `<заклад>-preview.png` — щоб показати закладу перед друком;
   - `<заклад>-order.txt` — усе для замовлення: формат, кількість, адреса, контакти.
3. Gelato → Create order → постер потрібного розміру → завантаж PNG → адреса з order.txt.

QR-коди ведуть на `https://prybambas.com/<мова>/<гра>/?utm_source=poster&utm_campaign=<заклад>`,
тож в Umami видно, скільки переходів дав кожен заклад.

## Що зробити, перш ніж показувати клієнтам

- [ ] Ціни в `offline.yml → sizes[].price` (поки на сайті «ціна в рахунку»).
- [ ] `productUid` постерів з кабінету Gelato в `sizes[].gelato`; звір `bleed` зі специфікацією продукту.
- [ ] Email для заявок: `request.email` (зараз `hello@prybambas.com`).
- [ ] За бажанням: сервіс форм → `request.action`.
- [ ] Надрукувати один тестовий плакат і перевірити QR-коди та кольори на папері.

## Далі

- **offline.prybambas.com.** GitHub Pages віддає з одного репозиторію лише один домен. Варіанти:
  окремий репозиторій з CNAME `offline.prybambas.com`, який показує цю сторінку, або Cloudflare Pages.
  Найпростіше: DNS-перенаправлення `offline.prybambas.com → prybambas.com/offline/`.
- **Автоматичне замовлення.** Оплата карткою (Stripe) + невеликий сервер (Cloudflare Worker),
  що після оплати рендерить файл тим самим `offline/poster.mjs` і створює замовлення через Gelato API.
  Формат заявки вже готовий для цього.
- **Сторінка закладу.** QR може вести на сторінку `/offline/<заклад>/` з логотипом і добіркою ігор.
