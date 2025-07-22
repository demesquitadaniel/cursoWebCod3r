// Control structures in JavaScript
// if-else-if statement

Number.prototype.between = function (begin, end) { // this sintax is used to extend the Number prototype
    return this >= begin && this <= end // this refers to the number itself
}

const printResult = function (grade) { // function to print the result based on the grade
    if (grade.between(9, 10)) {
        console.log('Honored') // if the grade is between 9 and 10, print 'Honored'
    } else if (grade.between(7, 8.99)) {
        console.log('Approved') // if the grade is between 7 and 8.99, print 'Approved'
    } else if (grade.between(5, 6.99)){
        console.log('Need Extra Credit') // if the grade is between 5 and 6.99, print 'Need Extra Credit'
    } else if (grade.between(0, 4.99)){
        console.log('Not Approved') // if the grade is between 0 and 4.99, print 'Not Approved'
    } else {
        console.log('Invalid grade') // if the grade is not a valid number, print 'Invalid grade'
    }
    // console.log('the end') // this line would print 'the end' after EACH result
}

printResult(10);
printResult(8.6);
printResult(7);
printResult(5.8);
printResult(2.8);
printResult(-1);
printResult(NaN);