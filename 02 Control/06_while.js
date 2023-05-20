//  'While' is used for an UNDEFINED number of repetitions.

function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = 0;
while(option != -1) {
    option = getRandomNumberBetween(-1, 10);
    console.log(`The chosen option was ${option}.`); //  same as:   console.log('The chosen option was ' + option + '.')
}

console.log('Until next time!');