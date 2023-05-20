function random({ min = 1, max = 1000}) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value)
}

const obj = { max: 50, min: 25}
console.log(random(obj))
console.log(random({min: 950}))
console.log(random({}))
// console.log(random()) // Error! Undefined or null value