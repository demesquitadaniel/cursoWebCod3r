// Storing a function inside a variable:
const printSum = function (a, b) {
    console.log(a + b)
}

printSum(2, 3)

// Storing a function arrow ("=>") inside a variable. '=>' equals 'function'
const sum = (a, b) => {
    return a + b
}

console.log(sum(4, 9))

// Implicit return:
const subtraction = (a, b) => a - b
console.log(subtraction(4, 3))

const print2 = a => console.log(a)
print2('Nice')