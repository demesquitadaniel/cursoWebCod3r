// Control Structures - 'Do...While' Example
// 'Do...While' (rarely used) is similar to the 'while' control structure. The difference being that the expression comes AFTER the code block,
// which means that at least ONE repetition is guaranteed.

function getRandomNumberBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option; // There's no need to input an initial value for the variable 'option'.
do {
    option = getRandomNumberBetween(-1, 10);
    console.log(`The random number is ${option}.`);
} while(option != -1)
// The loop will continue until the option is DIFFERENT from -1, but it will always execute at least once.
// It's the only control structure that guarantees at least one repetition because the condition is checked after the code block.

console.log('Until next time!');