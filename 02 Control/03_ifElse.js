const printResult = function(grade) {
    if(grade >= 7) {
        console.log('Approved!')
    } else {
        console.log('Disapproved!')
    }
}

printResult(10)
printResult(4.8)
printResult('Oops')
//  beware!! Due to being weakly-typed, Js treats a string as a 'false' statement, in this case,
//  therefore it falls on the 'else' property.