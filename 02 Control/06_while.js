// While Loop Example
// 'While' is used for an UNDEFINED number of repetitions.

function getRandomNumberBetween(min, max) { // Generates a random number between min and max (inclusive of min, exclusive of max)
    const value = Math.random() * (max - min) + min; // Generates a random number in the range. The '(max - min) + min' ensures the range is correct.
    return Math.floor(value); // Rounds down to the nearest integer
}

let option = 0;
while(option != -1) { // Continue looping until option is DIFFERENT from -1
    option = getRandomNumberBetween(-1, 10); // Get a random number between -1 and 9 (inclusive of -1, exclusive of 10)
    console.log(`The random number is ${option}.`); //  same as: "console.log('The chosen option was ' + option + '.')"
}

console.log('Until next time!');