function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function roundToNearestMultipleOf(nbToRound, nbToRoundTo) {
    return Math.round(nbToRound / nbToRoundTo) * nbToRoundTo;
}

// Thanks https://stackoverflow.com/a/2450976
function shuffleArray(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function JSONToString(json) {
    return JSON.stringify(json);
}