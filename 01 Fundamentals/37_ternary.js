const result = grade => grade >= 7 ? 'Approved' : 'Not Approved';
//  Which is the same as:
// const result = grade;
// grade => {
//    return grade >= 7 ? 'Approved' : 'Not Approved';
//  }
//  Or even:
//  const result = grade => {
//      return grade >= 7 ? 'Approved' : 'Not Approved';
//  }

console.log(result(7.1))
console.log(result(6.3))
