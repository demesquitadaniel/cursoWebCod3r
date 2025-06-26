// Careful with numbers in JavaScript!
console.log(7 / 0) // Infinity
console.log("10" / 2) // 5, because the string "10" is converted to number
console.log("3" + 2) // '32', because the plus sign is a concatenation symbol
console.log("3" - 2) // 1, because the minus sign is a subtraction symbol
console.log("show!" * 2) // NaN, because "show!" cannot be converted to a number
console.log(0.1 + 0.7) // 0.7999999999999999, due to floating point precision issues
// console.log(10.toString()) -> SyntaxError: Unexpected number, because 10.toString() is not valid syntax
console.log((10.345).toFixed(2)) // '10.35', rounds to 2 decimal places
console.log((10.345).toFixed(2).replace('.', ',')) // '10,35', replaces '.' with ',' for Brazilian/European format
console.log(typeof (10.345).toFixed(2)) // 'string', because toFixed returns a string
console.log(typeof (10.345).toFixed(2).replace('.', ',')) // 'string', still a string after replacement
console.log(Number("10.345").toFixed(2)) // '10.35', converts string to number and formats it
console.log(Number("10.345").toFixed(2).replace('.', ',')) // '10,35', converts string to number, formats it, and replaces '.' with ','
