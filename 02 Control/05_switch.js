// Control structures in JavaScript
//  The 'switch' control structure is used when you have a numbered case of options to fit into:

// the syntax is similar to the 'if-else-if' structure, but it is more concise for multiple conditions
// it is often used when you want to compare a single value against multiple possible values

const printResult = function (grade) {
    switch (Math.floor(grade)) { // Math.floor is used to round down the grade to the nearest whole number
        case 10:
        case 9: // for multiple cases that share the same action, you can group them together in different lines or the same line
            console.log('Honored')
            break // 'break' is used to exit the switch block after a case is matched
        case 8: case 7: // for multiple cases that share the same action, you can group them together in different lines or the same line
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Need Extra Credit')
            break
        case 3: case 2: case 1: case 0:
            console.log('Not Approved')
            break
        default:
            console.log('Invalid grade!')
    }
}

printResult(10)
printResult(9.2)
printResult(8.8)
printResult(6.2)
printResult(5)
printResult(2.9)
printResult(NaN)
printResult(-1)
printResult(11.1)