// Function without return:
function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3)
printSum(2)
printSum(2, 10, 5, 4, 4)
printSum()


// Function with return:
function sum(a, b = 1) {
    return a + b
}

console.log(sum(2, 3))
console.log(sum(7))
console.log(sum())