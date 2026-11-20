# Як додавати контент на Prybambas

Усе редагується прямо на GitHub: відкрий файл → олівець ✏️ → «Commit changes».
Після коміту в `main` сайт сам перебудується за 1–2 хвилини (вкладка **Actions**).

Весь контент лежить у папці `content/`:

```
content/
  series/     лінійки товарів (Мислення, Мовні ігри, Soft skills, Читацькі щоденники…)
  products/   товари — кожен в окремій папці
  ideas/      ідеї та дописи для соцмереж — кожен в окремій папці
```

Мови: `uk`, `en`, `pl`, `de`, `es`. Кожна мова — окремий файл `<мова>.md`.
Якщо файлу якоюсь мовою немає, ця сторінка просто не зʼявиться цією мовою.

---

## Додати товар

1. Відкрий `content/products/_template/` — це зразок.
2. Створи нову папку в `content/products/` з назвою латиницею через дефіс,
   напр. `verb-oracle-cards`. На GitHub: **Add file → Create new file** і впиши
   `content/products/verb-oracle-cards/product.yml`.
3. Скопіюй туди вміст `_template/product.yml` і заповни:
   - `series` — назва папки серії (`thinking`, `language-games`, `soft-skills`, `reading-diaries`, `explorers`);
   - `type` — `workbook`, `poster`, `game`, `cards`, `diary`, `journal`, `bundle`;
   - `status` — `available` або `coming-soon`;
   - `editions` — видання кожною мовою з посиланнями на Etsy / Gumroad / TpT / Amazon.
4. Додай тексти: `uk.md`, `en.md`, `pl.md`, `de.md`, `es.md` (як у `_template/uk.md`).
5. Обкладинку (`cover.jpg`) і превʼю сторінок завантаж у ту саму папку:
   **Add file → Upload files**.

Сторінка зʼявиться за адресою `/uk/shop/<серія>/<папка>/`.

## Додати ідею / допис

1. Створи папку в `content/ideas/`, напр. `2026-11-why-leaves-fall`.
2. Скопіюй `_template/post.yml` → заповни дату, серію, повʼязаний товар.
   Прибери `draft: true`, коли допис готовий.
3. Для кожної мови — файл `<мова>.md`:
   - `title` — заголовок;
   - `summary` — коротко для списку;
   - `social` — текст для соцмереж;
   - `hashtags` — хештеги.
   Під `---` пиши основний текст.

### Соцмережі
Для кожної мови є RSS-стрічка: `https://prybambas.com/uk/ideas/feed.xml` (і `/en/`, `/pl/`…).
У ній `social` + `hashtags` + посилання. Підключи стрічку в Buffer / Make / Zapier,
щоб нові дописи автоматично йшли в потрібний акаунт потрібною мовою.

## Додати серію

Папка в `content/series/` з `series.yml` (`order`, `color`: pink / blue / yellow / ink)
і файлами `<мова>.md` з `title` і `tagline`.

## Додати мову

1. `src/_data/site.yml` → допиши код мови в `languages`.
2. `src/_data/i18n.yml` → скопіюй блок `en:` і перекладіть тексти.
3. Додавай `<мова>.md` до серій, товарів і дописів.

## Каталог товарів і магазини

Каталог — це папки в `content/products/`. Кожен товар у `product.yml` перелічує свої
оголошення (`listings`) на Amazon, TpT, Etsy, Prom, Gumroad. Назву, ціну й статус
не треба переписувати вручну — вони беруться зі знімків магазинів у `content/shops/`.

- `npm run shops` — оновити знімки магазинів (Amazon, TpT, Prom читаються з публічних сторінок).
- `npm run shops -- --etsy-csv файл.csv` — імпорт Etsy з CSV
  (Etsy → Shop Manager → Settings → Options → Download Data → Currently for sale listings).
- `npm run catalog` — оновити звіт `CATALOG.md`: товар × платформа, ціни, що потребує уваги
  (оголошення зникло з магазину, товар не привʼязаний до каталогу, PDF «під замовлення» тощо).

**Автоматично:** щодня GitHub (`.github/workflows/catalog-sync.yml`) читає Amazon, TpT і Prom.
Якщо щось змінилося (нова ціна, нове або зняте оголошення), відкривається pull request
«Каталог: зміни в магазинах». Переглянь і злий — або привʼяжи нове оголошення в `product.yml`.
Запустити вручну: вкладка Actions → Catalog sync → Run workflow.
Etsy оновлюється вручну: завантаж CSV і запусти `npm run shops -- --etsy-csv файл.csv`.

Адреси магазинів — у `content/shops/shops.yml`. Кнопки «Купити» на сайті будуються з тих самих
оголошень: одна кнопка на платформу для файлів і окремо для паперу та Kindle. Prom показується
лише на українських сторінках (`markets` у `src/_data/site.yml`).

## Майданчики продажу

Список і порядок кнопок — у `src/_data/site.yml` → `stores`.
Ключі в `product.yml → editions → buy`: `site`, `gumroad`, `etsy`, `tpt`, `kdp`.
Посилання Gumroad відкриваються у вікні оплати прямо на сайті (без переходу на інший сайт).

## Перевірити локально (необовʼязково)

```
npm install
npm start        # http://localhost:8080
```
