/** ------ DOM REFERENCES ----- */
const nav_quiz = $('.quiz');
const nav_profiles = $('.profiles');
const nav_home = $('.home');
const nav_qotd = $('.qotd');

const carousel = $('.quote-carousel');
const carouselQuote = $('.quote');
/** --------------------------- */
/** ----- PAGE REFERENCES ----- */
const URL_QUIZ = './quiz-HTML.html';
const URL_PROFILES = './philosophers.html';
const URL_QOTD = './qotd.html';
const URL_HOME = './index.html';

/** -------- LISTENERS -------- */
//nav bar links
nav_quiz.on('click', function (e) {
    e.preventDefault();
    window.location.assign(URL_QUIZ);
});
nav_profiles.on('click', function (e) {
    e.preventDefault();
    window.location.assign(URL_PROFILES);
});
nav_qotd.on('click', function (e) {
    e.preventDefault();
    window.location.assign(URL_QOTD);
});
nav_home.on('click', function (e) {
    e.preventDefault();
    window.location.assign(URL_HOME);
});
/** --------------------------- */
