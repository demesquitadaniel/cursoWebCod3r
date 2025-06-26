const weight1 = 1.0 // Number with decimal point (Number without decimal point is also a number)
const weight2 = Number('2.0') // 'Number' is a function to convert string '2.0' to number

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * weight1 + evaluation2 * weight2
const median = total / (weight1 + weight2)

console.log(median)
console.log(median.toFixed(2)) // shows the number with 2 decimal places
console.log(median.toFixed(2).replace('.', ',')) // replace '.' with ',' for Brazilian/European format
console.log(typeof median.toFixed(2)) // string, because toFixed returns a string
console.log(median.toString())
console.log(median.toString(2)) // show in binary
console.log(typeof median) // number
console.log(typeof Number) // function