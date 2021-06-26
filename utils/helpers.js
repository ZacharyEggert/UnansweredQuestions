const { randomPicks } = require('./handlers');

const isCorrectPeriod = (philosopher, period) => {
    if (philosopher.period.toLowerCase() === period.toLowerCase()) {
        return true;
    }
    return false;
};

const isAncient = (philosopher) => {
    return isCorrectPeriod(philosopher, 'ancient');
};

const isMedieval = (philosopher) => {
    return isCorrectPeriod(philosopher, 'medieval');
};

const isModern = (philosopher) => {
    return isCorrectPeriod(philosopher, 'modern');
};

const isContemporary = (philosopher) => {
    return isCorrectPeriod(philosopher, 'contemporary');
};

const percent = (num1, num2) => {
    const res = Math.round((1000 * num1) / (num1 + num2)) / 10;
    return res ? res : 0;
};

const randomBgimg = () => {
    const bgArray = [
        'carousel-image1_b.jpg',
        'carousel-image2_b.jpg',
        'carousel-image3_b.jpg',
        'background-branches.jpg',
        'background-whiteflower2.jpg',
        'background-daisy.jpg'
        // 'carousel-image5_b.jpg',
        // 'carousel-image6_b.jpg',
        // 'carousel-image7_b.jpg',
        // 'carousel-image8_b.jpg',
        // 'carousel-image9_b.jpg',
    ];
    const random = randomPicks(bgArray.length, 1);

    return bgArray[random];
};

module.exports = {
    isAncient,
    isMedieval,
    isModern,
    isContemporary,
    percent,
    randomBgimg,
};
