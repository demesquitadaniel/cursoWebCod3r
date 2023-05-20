//  The 'switch' control structure is used when you have a numbered case of options to fit into:

const printResult = function (grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Honored')
            break
        case 8: case 7:
            console.log('Approved')
            break
        case 6: case 5: case 4:
            console.log('Need Extra Credit')
            break
        case 3: case 2: case 1: case 0:
            console.log('Unapproved')
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