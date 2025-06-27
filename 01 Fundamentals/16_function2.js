// Storing a function inside a variable:
const printSum = function (a, b) {
    console.log(a + b);
}

printSum(2, 3);

// Storing an arrow function ("=>") inside a variable. '=>' equals 'function'
const sum = (a, b) => {
    return a + b;
}

console.log(sum(4, 9));

// Implicit return:
const subtraction = (a, b) => a - b; // No curly braces needed for single expression
// This is equivalent to: const subtraction = (a, b) => { return a - b; }
console.log(subtraction(4, 3)); 

const print2 = a => console.log(a); // Single parameter, no parentheses needed
print2('Nice'); // Output: Nice