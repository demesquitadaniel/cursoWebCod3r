//  'Do...While' (rarely used) is similar to the 'while' control structure. The difference
//  being that the expression comes AFTER the code block, which means that at least ONE repetition
//  is guaranteed.

function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option; //  no need to input an initial value for the variable 'option'
do {
    option = getRandomNumberBetween(-1, 10);
    console.log(`The chosen option was ${option}.`);
} while(option != -1)

console.log('Until next time!');