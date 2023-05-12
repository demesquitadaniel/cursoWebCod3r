const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * weight1 + evaluation2 * weight2
const median = total / (weight1 + weight2)

console.log(median.toFixed(2))
console.log(median.toString())
console.log(median.toString(2)) // in binary
console.log(typeof median)
console.log(typeof Number)