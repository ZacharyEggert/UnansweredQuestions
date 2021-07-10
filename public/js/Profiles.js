const philoIMG = $('#philosopher-img');
const philoName = $('#philosopher-name');
const philoBlurb = $('#philosopher-about');
const philoBirth = $('#philosopher-birth');
const philoDeath = $('#philosopher-death');
const readMoreButts = $('#wiki-link');

async function loadProfile(name) {
    console.log(name);
    let response = await fetchWiki('' + name);

    let page = response.query.pages;
    //console.log(page);
    let pageId = Object.keys(page)[0];
    //console.log(pageId)
    let content = page[pageId].extract;

    console.log(page[pageId]);

    let readMoreURL = 'https://en.wikipedia.org/wiki/' + page[pageId].title;
    console.log(readMoreURL);

    //console.log(response)
    parseName = name.replace(/\%20/g, ' ').replace(/\%C3\%A9/g, 'é');
    philoName.text(parseName);
    //philoIMG.attr("src", function-to-get-img);
    philoBlurb.text(trimString(content));
    readMoreButts.attr('href', readMoreURL);
}

readMoreButts.on('click', function (e) {
    window.open(this.getAttribute('href'));
});

window.onload = async function () {
    let query = window.location.search.replace('?', '').split('&');
    await loadProfile(query[0] ? query[0] : 'Adam Yauch');
    philoIMG.attr('src', query[1]);
    getRequest(
        query[0].replace(/\%20/g, ' ').replace(/\%C3\%A9/g, 'é') + ' philosophy'
    );
};
