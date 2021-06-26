const fs = require('fs');

const data = fs.readFileSync('../quotes_edited_seedv2.csv', 'utf-8');

const quotes = data.split('\r\n');
// console.log(quotes);

const quoteArray = quotes.map((e) => {
    return e.split(',');
});
// console.log(quoteArray);

let output = [];
const regex = /\*\*\*()/g;

quoteArray.forEach((e) => {
    // console.log(e);
    output.push({
        quote: ('' + e[0]).replace(regex, ',').trim(),
        author: ('' + e[1]).replace(regex, ',').replace('- ', ' ').trim(),
    });
});

console.log(output);
fs.writeFileSync(
    './seedQuotesv2.json',
    JSON.stringify(output),
    { encoding: 'utf-8' },
    (e) => {
        console.error(e);
    }
);
