/* Prybambas — доповнення неповних перекладів англійською.
   withEnglish(dict, lang) повертає переклад мови lang, де все, чого бракує,
   взято з dict.en. Так у мові, яка перекладена частково, не буде порожніх місць.
   - відсутній або порожній текст → англійський;
   - списки обʼєктів (інструменти, місії) доповнюються поелементно;
   - списки рядків (питання) беруться цілком: перекладені, а якщо їх немає — англійські. */
(function () {
    function isObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }

    function merge(base, over) {
        if (over === undefined || over === null || over === '') return base;
        if (base === undefined || base === null) return over;
        if (Array.isArray(base) || Array.isArray(over)) {
            if (!Array.isArray(over) || !over.length) return base;
            if (!Array.isArray(base)) return over;
            if (!over.some(isObj) && !base.some(isObj)) return over;
            var out = [], n = Math.max(base.length, over.length);
            for (var i = 0; i < n; i++) out.push(merge(base[i], over[i]));
            return out;
        }
        if (isObj(base) && isObj(over)) {
            var res = {};
            for (var k in base) res[k] = base[k];
            for (var j in over) res[j] = merge(base[j], over[j]);
            return res;
        }
        return over;
    }

    var cache = new WeakMap();
    window.withEnglish = function (dict, lang) {
        if (!dict) return dict;
        var en = dict.en;
        if (!lang || lang === 'en' || !dict[lang]) return en;
        var byLang = cache.get(dict);
        if (!byLang) { byLang = {}; cache.set(dict, byLang); }
        if (!byLang[lang]) byLang[lang] = merge(en, dict[lang]);
        return byLang[lang];
    };
    window.mergeWithEnglish = merge;
})();
