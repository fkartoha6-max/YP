'use strict';

if (window.top !== window.self) {
    document.documentElement.style.display = 'none';
}


document.documentElement.classList.add('js');

const STORAGE_LANG = 'site-lang';
const DEFAULT_LANG = 'ru';
const RING_RADIUS = 68;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

const I18N = {
    ru: {
        'meta.title': 'Здоровое поколение: среда возможностей',
        'meta.desc': 'Интерактивный портал о культуре здорового образа жизни и возможностях для молодёжи.',
        'aria.home': 'На главную',
        'aria.nav': 'Основная навигация',
        'aria.lang': 'Выбор языка',
        'logo.a': 'Среда',
        'logo.b': 'Возможностей',
        'nav.facts': 'Среда и факты',
        'nav.quiz': 'Тест',
        'nav.tracker': 'Трекер',
        'nav.calc': 'Калькулятор',
        'nav.ideas': 'Идеи',

        'hero.badge': 'Конкурс «Точка выбора»',
        'hero.title': 'Здоровое поколение: среда возможностей',
        'hero.subtitle': 'Твоё тело и разум — главный ресурс для достижения целей. Управляй энергией, формируй полезные привычки и создавай своё будущее осознанно.',
        'hero.cta1': 'Пройти чек-ап',
        'hero.cta2': 'Запустить трекер',
        'hero.alt': 'Иллюстрация баланса здоровья и энергии',

        'facts.title': 'Три опоры твоей продуктивности',
        'facts.desc': 'Здоровье молодёжи на 50% зависит от образа жизни и ежедневных привычек.',
        'fact1.alt': 'Иллюстрация здорового сна',
        'fact1.stat': '8 часов',
        'fact1.title': 'Качественный сон',
        'fact1.text': 'Повышает концентрацию внимания на 40% и снижает уровень стресса перед экзаменами.',
        'fact2.alt': 'Иллюстрация физической активности',
        'fact2.stat': '60 минут',
        'fact2.title': 'Движение в день',
        'fact2.text': 'Стимулирует выработку эндорфинов — естественной защиты от усталости и выгорания.',
        'fact3.alt': 'Иллюстрация цифрового детокса',
        'fact3.stat': '2 часа',
        'fact3.title': 'Цифровой детокс',
        'fact3.text': 'Отказ от экранов перед сном восстанавливает выработку мелатонина и улучшает память.',

        'quiz.title': 'Интерактив 1: Твой индекс энергии',
        'quiz.progress': 'Вопрос {n} из {total}',
        'quiz.resultLabel': 'Твой результат:',
        'quiz.points': 'баллов',
        'quiz.restart': 'Пройти заново',
        'quiz.rec.high': 'Отличный результат! Твои привычки формируют мощный фундамент энергии. Попробуй стать наставником или волонтёром ЗОЖ-инициатив.',
        'quiz.rec.mid': 'Хороший баланс, но есть точки роста. Начни с малого: добавь 30-минутную прогулку и цифровой детокс за час до сна.',
        'quiz.rec.low': 'Твой организм работает на резервах. Используй трекер привычек ниже, чтобы постепенно внедрить режим сна и воды.',
        'quiz.questions': [
            { q: 'Сколько времени перед сном ты проводишь в смартфоне?', o: ['Откладываю гаджеты за 1 час до сна', 'Листаю ленту 15–20 минут в кровати', 'Засыпаю со смартфоном в руках'] },
            { q: 'Как проходит твой типичный день в плане движения?', o: ['Тренировка или активная прогулка от 40 минут', 'Только дорога на учёбу/работу', 'Почти весь день провожу сидя'] },
            { q: 'Что ты выбираешь при сильном учебном или рабочем стрессе?', o: ['Спорт, дыхательную гимнастику или разговор с близкими', 'Долгий просмотр сериалов или видеоигры', 'Энергетики, фастфуд или бессонную ночь'] }
        ],

        'tracker.title': 'Интерактив 2: Трекер здорового дня',
        'tracker.h1': 'Выпил стакан чистой воды после пробуждения',
        'tracker.h2': 'Сделал разминку или прошёл 8 000 шагов',
        'tracker.h3': 'Провёл 1 час без смартфона и соцсетей',
        'tracker.h4': 'Добавил свежие овощи или фрукты в рацион',
        'tracker.caption': 'Выполнено: {n} из {total}',

        'calc.title': 'Интерактив 3: Калькулятор воды',
        'calc.desc': 'Узнай суточную норму воды — результат отобразится на круговой диаграмме.',
        'calc.weight': 'Ваш вес (кг)',
        'calc.activity': 'Уровень активности',
        'calc.low': 'Низкий (30 мл на кг)',
        'calc.mid': 'Средний (35 мл на кг)',
        'calc.high': 'Высокий (40 мл на кг)',
        'calc.submit': 'Рассчитать',
        'calc.error': 'Ошибка: введите корректный вес от 30 до 200 кг.',
        'calc.result': 'Рекомендуемая норма чистой воды: {v} л в сутки.',
        'calc.unit': 'л',
        'calc.glasses.one': '≈ {n} стакан по 250 мл',
        'calc.glasses.few': '≈ {n} стакана по 250 мл',
        'calc.glasses.many': '≈ {n} стаканов по 250 мл',
        'calc.scale': 'Шкала кольца: 0–{max} л',
        'calc.ringLabel': 'Круговая диаграмма: {v} л из {max} л',

        'ideas.title': 'Интерактив 4: Предложи инициативу',
        'ideas.desc': 'Поделись идеей, как сделать среду вокруг нас здоровее.',
        'ideas.name': 'Ваше имя',
        'ideas.idea': 'Ваша идея',
        'ideas.consent': 'Я согласен(на) с',
        'ideas.consentLink': 'политикой конфиденциальности',
        'ideas.submit': 'Отправить идею',
        'ideas.board': 'Идеи участников',
        'ideas.seedAuthor': 'Мария (Студсовет)',
        'ideas.seedText': 'Организовать еженедельный турнир по настольному теннису между группами.',
        'ideas.errName': 'Введите имя (минимум 2 символа).',
        'ideas.errIdea': 'Опишите идею подробнее (минимум 10 символов).',
        'ideas.errConsent': 'Необходимо согласие на обработку данных.',

        'footer.text': '© 2026 Здоровое поколение: среда возможностей. Учебный проект.',
        'footer.privacy': 'Политика конфиденциальности',
        'privacy.title': 'Политика конфиденциальности',
        'privacy.text': 'Сайт не отправляет данные на сервер. Имя и текст идеи показываются только на этой странице и пропадают после её закрытия. Cookies и аналитика не используются. В браузере сохраняется только выбранный язык интерфейса.',
        'privacy.close': 'Закрыть'
    },

    en: {
        'meta.title': 'Healthy Generation: A Space of Opportunity',
        'meta.desc': 'An interactive portal about a healthy lifestyle culture and opportunities for young people.',
        'aria.home': 'Back to top',
        'aria.nav': 'Main navigation',
        'aria.lang': 'Language selection',
        'logo.a': 'Space of',
        'logo.b': 'Opportunity',
        'nav.facts': 'Facts',
        'nav.quiz': 'Quiz',
        'nav.tracker': 'Tracker',
        'nav.calc': 'Calculator',
        'nav.ideas': 'Ideas',

        'hero.badge': '“Point of Choice” contest',
        'hero.title': 'Healthy Generation: A Space of Opportunity',
        'hero.subtitle': 'Your body and mind are your main resource for reaching goals. Manage your energy, build healthy habits and shape your future with intention.',
        'hero.cta1': 'Take the check-up',
        'hero.cta2': 'Start the tracker',
        'hero.alt': 'Illustration of balance between health and energy',

        'facts.title': 'Three pillars of your productivity',
        'facts.desc': 'Young people’s health depends 50% on lifestyle and daily habits.',
        'fact1.alt': 'Illustration of healthy sleep',
        'fact1.stat': '8 hours',
        'fact1.title': 'Quality sleep',
        'fact1.text': 'Improves attention span by 40% and lowers stress before exams.',
        'fact2.alt': 'Illustration of physical activity',
        'fact2.stat': '60 minutes',
        'fact2.title': 'Daily movement',
        'fact2.text': 'Boosts endorphins — the body’s natural defence against fatigue and burnout.',
        'fact3.alt': 'Illustration of a digital detox',
        'fact3.stat': '2 hours',
        'fact3.title': 'Digital detox',
        'fact3.text': 'Staying off screens before bed restores melatonin production and improves memory.',

        'quiz.title': 'Interactive 1: Your energy index',
        'quiz.progress': 'Question {n} of {total}',
        'quiz.resultLabel': 'Your result:',
        'quiz.points': 'points',
        'quiz.restart': 'Take it again',
        'quiz.rec.high': 'Excellent result! Your habits build a strong foundation of energy. Consider becoming a mentor or a volunteer in healthy-lifestyle initiatives.',
        'quiz.rec.mid': 'A good balance, but there is room to grow. Start small: add a 30-minute walk and a digital detox an hour before bed.',
        'quiz.rec.low': 'Your body is running on reserves. Use the habit tracker below to gradually build a sleep and hydration routine.',
        'quiz.questions': [
            { q: 'How much time do you spend on your smartphone before bed?', o: ['I put gadgets away 1 hour before sleep', 'I scroll my feed for 15–20 minutes in bed', 'I fall asleep with my phone in my hand'] },
            { q: 'What does your typical day look like in terms of movement?', o: ['A workout or an active walk of 40+ minutes', 'Only the commute to school or work', 'I spend almost the whole day sitting'] },
            { q: 'What do you choose when you are under heavy study or work stress?', o: ['Sport, breathing exercises or talking to loved ones', 'Binge-watching series or playing video games', 'Energy drinks, fast food or an all-nighter'] }
        ],

        'tracker.title': 'Interactive 2: Healthy day tracker',
        'tracker.h1': 'Drank a glass of clean water after waking up',
        'tracker.h2': 'Did a warm-up or walked 8,000 steps',
        'tracker.h3': 'Spent 1 hour without a smartphone and social media',
        'tracker.h4': 'Added fresh vegetables or fruit to my diet',
        'tracker.caption': 'Completed: {n} of {total}',

        'calc.title': 'Interactive 3: Water calculator',
        'calc.desc': 'Find your daily water intake — the result is shown on a circular chart.',
        'calc.weight': 'Your weight (kg)',
        'calc.activity': 'Activity level',
        'calc.low': 'Low (30 ml per kg)',
        'calc.mid': 'Medium (35 ml per kg)',
        'calc.high': 'High (40 ml per kg)',
        'calc.submit': 'Calculate',
        'calc.error': 'Error: enter a valid weight between 30 and 200 kg.',
        'calc.result': 'Recommended daily intake of clean water: {v} L.',
        'calc.unit': 'L',
        'calc.glasses.one': '≈ {n} glass of 250 ml',
        'calc.glasses.other': '≈ {n} glasses of 250 ml',
        'calc.scale': 'Ring scale: 0–{max} L',
        'calc.ringLabel': 'Circular chart: {v} L out of {max} L',

        'ideas.title': 'Interactive 4: Suggest an initiative',
        'ideas.desc': 'Share an idea for making the environment around us healthier.',
        'ideas.name': 'Your name',
        'ideas.idea': 'Your idea',
        'ideas.consent': 'I agree to the',
        'ideas.consentLink': 'privacy policy',
        'ideas.submit': 'Submit idea',
        'ideas.board': 'Ideas from participants',
        'ideas.seedAuthor': 'Maria (Student Council)',
        'ideas.seedText': 'Organise a weekly table tennis tournament between groups.',
        'ideas.errName': 'Enter your name (at least 2 characters).',
        'ideas.errIdea': 'Describe your idea in more detail (at least 10 characters).',
        'ideas.errConsent': 'Consent to data processing is required.',

        'footer.text': '© 2026 Healthy Generation: A Space of Opportunity. Educational project.',
        'footer.privacy': 'Privacy policy',
        'privacy.title': 'Privacy policy',
        'privacy.text': 'This site does not send any data to a server. Your name and idea are shown only on this page and disappear when it is closed. No cookies or analytics are used. Only your chosen interface language is stored in the browser.',
        'privacy.close': 'Close'
    }
};

let currentLang = DEFAULT_LANG;
const langListeners = [];

function t(key, vars) {
    let value = (I18N[currentLang] && I18N[currentLang][key]);
    if (value === undefined) value = I18N[DEFAULT_LANG][key];
    if (typeof value !== 'string') return value;
    if (vars) {
        Object.keys(vars).forEach(name => {
            value = value.replace(`{${name}}`, vars[name]);
        });
    }
    return value;
}

function formatNumber(num, digits) {
    return num.toLocaleString(currentLang === 'ru' ? 'ru-RU' : 'en-US', {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    });
}

function onLangChange(fn) {
    langListeners.push(fn);
}

function translateDocument() {
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    ['alt', 'aria-label', 'title', 'placeholder'].forEach(attr => {
        document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
            el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)));
        });
    });

    document.querySelectorAll('.lang-opt').forEach(btn => {
        const active = btn.dataset.setLang === currentLang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
}

function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (e) { /* хранилище недоступно */ }
    translateDocument();
    langListeners.forEach(fn => fn());
}

function detectInitialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_LANG);
        if (saved && I18N[saved]) return saved;
    } catch (e) { /* хранилище недоступно */ }
    return DEFAULT_LANG;
}

function initLangSwitcher() {
    currentLang = detectInitialLang();
    translateDocument();
    document.querySelectorAll('.lang-opt').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.setLang));
    });
}

function prepareRing(circle) {
    circle.style.strokeDasharray = String(RING_LENGTH);
    circle.style.strokeDashoffset = String(RING_LENGTH);
}

function setRing(circle, fraction) {
    const f = Math.max(0, Math.min(1, fraction));
    circle.style.strokeDashoffset = String(RING_LENGTH * (1 - f));
}

document.addEventListener('DOMContentLoaded', () => {
    initLangSwitcher();
    initReveal();
    initQuiz();
    initHabitTracker();
    initWaterCalculator();
    initFeedbackForm();
    initPrivacyModal();
});

function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(el => observer.observe(el));
}

function initQuiz() {
    const POINTS = [10, 5, 0]; 

    let currentStep = 0;
    let totalScore = 0;
    let finished = false;

    const progressEl = document.getElementById('quiz-progress');
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');
    const screenEl = document.getElementById('quiz-screen');
    const resultEl = document.getElementById('quiz-result');
    const scoreEl = document.getElementById('quiz-score');
    const recEl = document.getElementById('quiz-recommendation');
    const restartBtn = document.getElementById('quiz-restart');

    if (!progressEl || !optionsEl) return;

    function renderQuestion() {
        const questions = t('quiz.questions');
        const item = questions[currentStep];
        progressEl.textContent = t('quiz.progress', { n: currentStep + 1, total: questions.length });
        questionEl.textContent = item.q;
        optionsEl.innerHTML = ''; 

        item.o.forEach((text, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'quiz-option-btn';
            btn.textContent = text;
            btn.addEventListener('click', () => handleAnswer(POINTS[index]));
            optionsEl.appendChild(btn);
        });
    }

    function handleAnswer(points) {
        totalScore += points;
        currentStep++;
        if (currentStep < t('quiz.questions').length) {
            renderQuestion();
        } else {
            finished = true;
            showResult();
        }
    }

    function showResult() {
        screenEl.classList.add('hidden');
        resultEl.classList.remove('hidden');
        scoreEl.textContent = totalScore;

        let key = 'quiz.rec.low';
        if (totalScore >= 25) key = 'quiz.rec.high';
        else if (totalScore >= 15) key = 'quiz.rec.mid';
        recEl.textContent = t(key);
    }

    restartBtn.addEventListener('click', () => {
        currentStep = 0;
        totalScore = 0;
        finished = false;
        resultEl.classList.add('hidden');
        screenEl.classList.remove('hidden');
        renderQuestion();
    });

    onLangChange(() => (finished ? showResult() : renderQuestion()));
    renderQuestion();
}

function initHabitTracker() {
    const checkboxes = document.querySelectorAll('.habit-checkbox');
    const ring = document.getElementById('tracker-ring');
    const circle = document.getElementById('progress-circle');
    const text = document.getElementById('progress-text');
    const caption = document.getElementById('tracker-caption');
    if (!circle || !text) return;

    prepareRing(circle);

    function updateProgress() {
        let percent = 0;
        let done = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                percent += Number(cb.value);
                done++;
            }
        });

        setRing(circle, percent / 100);
        text.textContent = `${percent}%`;
        ring.setAttribute('aria-label', `${percent}%`);
        caption.textContent = t('tracker.caption', { n: done, total: checkboxes.length });
    }

    checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));
    onLangChange(updateProgress);
    updateProgress();
}

function initWaterCalculator() {
    const MAX_LITERS = 6;    
    const GLASS_ML = 250;

    const form = document.getElementById('water-form');
    const weightInput = document.getElementById('weight-input');
    const activitySelect = document.getElementById('activity-select');
    const errorEl = document.getElementById('calc-error');
    const resultEl = document.getElementById('calc-result');
    const ring = document.getElementById('water-ring');
    const circle = document.getElementById('water-circle');
    const litersEl = document.getElementById('water-liters');
    const unitEl = document.getElementById('water-unit');
    const textEl = document.getElementById('calc-result-text');
    const glassesEl = document.getElementById('calc-glasses');
    const scaleEl = document.getElementById('calc-scale');
    if (!form) return;

    prepareRing(circle);

    let lastLiters = null;  
    let hasError = false;

    function glassesText(n) {
        if (currentLang === 'ru') {
            const mod10 = n % 10;
            const mod100 = n % 100;
            if (mod10 === 1 && mod100 !== 11) return t('calc.glasses.one', { n });
            if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return t('calc.glasses.few', { n });
            return t('calc.glasses.many', { n });
        }
        return n === 1 ? t('calc.glasses.one', { n }) : t('calc.glasses.other', { n });
    }

    function renderTexts() {
        errorEl.textContent = hasError ? t('calc.error') : '';
        if (lastLiters === null) return;

        const value = formatNumber(lastLiters, 2);
        litersEl.textContent = value;
        unitEl.textContent = t('calc.unit');
        textEl.textContent = t('calc.result', { v: value });
        glassesEl.textContent = glassesText(Math.round((lastLiters * 1000) / GLASS_ML));
        scaleEl.textContent = t('calc.scale', { max: MAX_LITERS });
        ring.setAttribute('aria-label', t('calc.ringLabel', { v: value, max: MAX_LITERS }));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        hasError = false;
        lastLiters = null;
        resultEl.classList.add('hidden');

        const weight = parseFloat(weightInput.value);
        const normPerKg = parseFloat(activitySelect.value);

        if (isNaN(weight) || weight < 30 || weight > 200 || isNaN(normPerKg)) {
            hasError = true;
            renderTexts();
            return;
        }

        lastLiters = (weight * normPerKg) / 1000;
        renderTexts();

        resultEl.classList.remove('hidden');
        circle.style.transition = 'none';
        setRing(circle, 0);
        void circle.getBoundingClientRect();
        circle.style.transition = '';
        requestAnimationFrame(() => setRing(circle, lastLiters / MAX_LITERS));
    });

    onLangChange(renderTexts);
}

function initFeedbackForm() {
    const form = document.getElementById('idea-form');
    const nameInput = document.getElementById('user-name');
    const ideaInput = document.getElementById('user-idea');
    const consentCheckbox = document.getElementById('privacy-consent');
    const errorEl = document.getElementById('idea-error');
    const listEl = document.getElementById('ideas-list');
    if (!form) return;

    let errorKey = null;

    function showError(key) {
        errorKey = key;
        errorEl.textContent = key ? t(key) : '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showError(null);

        const cleanName = sanitizeInput(nameInput.value);
        const cleanIdea = sanitizeInput(ideaInput.value);

        if (cleanName.length < 2) return showError('ideas.errName');
        if (cleanIdea.length < 10) return showError('ideas.errIdea');
        if (!consentCheckbox.checked) return showError('ideas.errConsent');

        addSafeIdeaItem(cleanName, cleanIdea);
        form.reset();
    });

    onLangChange(() => showError(errorKey));

    function sanitizeInput(str) {
        return str.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();
    }

    function addSafeIdeaItem(author, text) {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = author;

        const span = document.createElement('span');
        span.textContent = text;

        li.appendChild(strong);
        li.appendChild(document.createTextNode(': '));
        li.appendChild(span);
        listEl.prepend(li);
    }
}

function initPrivacyModal() {
    const dialog = document.getElementById('privacy-dialog');
    const openLinks = [
        document.getElementById('open-privacy'),
        document.getElementById('footer-privacy-btn')
    ];
    const closeBtn = document.getElementById('close-privacy');
    if (!dialog || !closeBtn || typeof dialog.showModal !== 'function') return;

    openLinks.forEach(el => {
        if (el) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                dialog.showModal();
            });
        }
    });

    closeBtn.addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
    });
}
