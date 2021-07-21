const fetch = require('node-fetch');
const YTsearch = require('youtube-search');

const { Philosopher, Philosophies } = require('../models');

const randomPicks = (max, count) => {
    console.log(max, count);
    let outputArray = [];

    if (max < count) {
        throw new Error('Cannot pick without repeats: max smaller than count');
    }

    for (let i = 0; i < count; i++) {
        let thisNum = max;
        while (thisNum === max || outputArray.includes(thisNum)) {
            thisNum = Math.floor(max * Math.random());
        }
        outputArray.push(thisNum);
        // console.log(outputArray);
    }

    return outputArray;
};

const getDaysSinceJulySeventh = () => {
    const julySeventh = new Date(2021, 7 - 1, 7);
    console.log(julySeventh);
    const today = new Date();
    console.log(today);
    const diff = Math.round((today - julySeventh) / (1000 * 60 * 60 * 24));
    console.log(diff);
    return diff;
};

const getYoutubeUrl = async (philosopherData) => {
    const opts = {
        maxResults: 1,
        key: process.env.GOOGLEAPIKEY,
    };

    const query = philosopherData.name + ' philosophy';

    try {
        const results = await YTsearch(query, opts);
        // console.dir(results);
        // console.log(results.results);
        return { id: results.results[0].id };
    } catch (err) {
        console.error(err);
        return '';
    }
};

const getWikiData = async (philosopherData) => {
    let contentUrl =
        'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&origin=*&explaintext&exintro&redirects=&titles=';
    const data = await fetch(
        `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${philosopherData.name}&format=json`
    );
    // console.log(data)
    const object = await data.json();
    // console.log(object)

    const searchTitle = object[1][0];
    const searchURL = contentUrl + searchTitle;
    // console.log(searchURL);

    const contentData = await fetch(searchURL, { method: 'GET' });
    const wikiData = await contentData.json();

    const page = wikiData.query.pages;
    const pageID = Object.keys(page)[0];
    const content = page[pageID].extract;
    const readMoreURL = 'https://en.wikipedia.org/wiki/' + page[pageID].title;

    const returnable = { content, readMoreURL };

    // console.log(returnable);
    return returnable;
};

const fillPhilosopherData = async (id, philosopherData) => {
    let newPhilosopherData = philosopherData;
    const yt = await getYoutubeUrl(newPhilosopherData);
    // console.log(yt);
    const wiki = await getWikiData(newPhilosopherData);
    // console.log(wiki.readMoreURL.replace(/ /g, '%20'));

    newPhilosopherData.videoUrl = yt.id;
    newPhilosopherData.about = wiki.content;
    newPhilosopherData.wikiLink = wiki.readMoreURL;

    const { name, img, period, about, videoUrl, wikiLink, quotes } =
        newPhilosopherData;

    await Philosopher.update(
        { name, img, period, about, videoUrl, wikiLink, quotes },
        { where: { id: id } }
    )
        .then((result) => {
            console.log({ result, newPhilosopherData });
        })
        .catch((err) => {
            console.log({ err });
        });
    return newPhilosopherData;
};

const fillPhilosophyData = async (ID, philosophyData) => {
    let newPhilosophyData = philosophyData;
    const yt = await getYoutubeUrl(newPhilosophyData);
    // console.log(yt);
    const wiki = await getWikiData(newPhilosophyData);
    // console.log(wiki.readMoreURL.replace(/ /g, '%20'));

    newPhilosophyData.videoUrl = yt.id;
    newPhilosophyData.about = wiki.content;
    newPhilosophyData.wikiLink = wiki.readMoreURL;

    const { name, img, about, videoUrl, wikiLink, quotes } = newPhilosophyData;

    await Philosophies.update(
        { name, img, about, videoUrl, wikiLink, quotes },
        { where: { id: ID } }
    ).then((result) => {
        console.log({ result, newPhilosophyData });
    });
    return newPhilosophyData;
};

module.exports = {
    getDaysSinceJulySeventh,
    fillPhilosopherData,
    randomPicks,
    fillPhilosophyData,
};
