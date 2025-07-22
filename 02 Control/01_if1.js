// Control structures in JavaScript
// if statement (1)

function onlyGoodNews(grade) {
    if(grade >= 7) { // condition
        console.log('Approved. Final grade: ' + grade); // if the condition is true, this block executes
    }
}

onlyGoodNews(8.1) // shows "Approved. Final grade: 8.1"
onlyGoodNews(6.5) // doesn't show anything BECAUSE the condition is false

function ifTrueISay(value) {
    if(value) { // this condition checks if the value is truthy
        console.log("It's true... " + value) // if the value is truthy, this block executes
    }
}

ifTrueISay() // false - so nothing is shown
ifTrueISay(null) // false - so nothing is shown
ifTrueISay(undefined) // false - so nothing is shown
ifTrueISay(NaN) // false - so nothing is shown
ifTrueISay('') // false - so nothing is shown
ifTrueISay(0) // false - so nothing is shown
ifTrueISay(-1) // true - shows "It's true... -1"
ifTrueISay(' ') // true - shows "It's true...  "
ifTrueISay('?') // true - shows "It's true... ?"
ifTrueISay([]) // true - shows "It's true... "
ifTrueISay([1, 2, 3]) // true - shows "It's true... 1,2,3"
ifTrueISay({}) // true - shows "It's true... [object Object]"
// {} is an empty object, which is truthy in JavaScript
