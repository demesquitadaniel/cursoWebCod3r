function onlyGoodNews(grade) {
    if(grade >= 7) {
        console.log('Approved. Final grade: ' + grade);
    }
}

onlyGoodNews(8.1)
onlyGoodNews(6.5)

function ifTrueISay(value) {
    if(value) {
        console.log("It's true... " + value)
    }
}

ifTrueISay() // false
ifTrueISay(null) // false
ifTrueISay(undefined) // false
ifTrueISay(NaN) // false
ifTrueISay('') // false
ifTrueISay(0)// false
ifTrueISay(-1) // true
ifTrueISay(' ') // true
ifTrueISay('?') // true
ifTrueISay([]) // true
ifTrueISay([1, 2, 3]) // true
ifTrueISay({}) // true