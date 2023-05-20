Number.prototype.between = function (begin, end) {
    return this >= begin && this <= end
}

const printResult = function (grade) {
    if (grade.between(9, 10)) {
        console.log('Honored')
    } else if (grade.between(7, 8.99)) {
        console.log('Approved')
    } else if (grade.between(5, 6.99)){
        console.log('Need Extra Credit')
    } else if (grade.between(0, 4.99)){
        console.log('Unapproved')
    } else {
        console.log('Invalid grade')
    }

    //  console.log('the end')
}

printResult(10)
printResult(8.6)
printResult(7)
printResult(6.2)
printResult(5.8)
printResult(2.8)
printResult(0)
printResult(NaN)