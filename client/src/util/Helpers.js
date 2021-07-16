const randomPicks = (max, count) => {
    // console.log(max, count);
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

const Helpers = { randomPicks };

export default Helpers;