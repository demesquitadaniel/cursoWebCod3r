// Function without return:
function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3)
printSum(2) // Inserting a single argument will result in NaN.
printSum(2, 3, 4, 7, 21) // Extra arguments are ignored.
printSum() // No arguments will result in NaN too.

console.log('-------------------------------')
// Function with return:
function sum(a, b = 1) { // Default value for b is 1
    return a + b
}

console.log(sum(2, 3)) // Outputs: 5
console.log(sum(7)) // Outputs: 8 since b defaults to 1
console.log(sum()) // Outputs: NaN since no arguments are provided, even with a default value for b, because a is undefined.
// If we want to avoid NaN, we can set a default value for a as well:
function newSum(a = 0, b = 1) {
    return a + b
}
console.log(newSum())
