var i = 0;
var curQuoteEl = document.getElementById('current-quote');
var curAuthEl = document.getElementById('current-author');
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
let qArray;

async function disQuote() {
    qArray = await fetchQuotes();
    var currentQuote = '"' + qArray[i].quote + '"';
    var currentAuthor = '-' + ' ' + qArray[i].source;

    curAuthEl.textContent = currentAuthor;
    curQuoteEl.textContent = currentQuote;
}

nextBtn.addEventListener('click', function () {
    if (i === qArray.length - 1) {
        i = 0;
        disQuote();
    } else {
        i++;
        disQuote();
    }
});

prevBtn.addEventListener('click', function () {
    if (i === 0) {
        console.log(qArray.length);
        i = qArray.length - 1;
        disQuote();
    } else {
        i--;
        disQuote();
    }
});

disQuote();
