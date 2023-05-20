const result = grade => grade >= 7 ? 'Approved' : 'Unapproved';

//  Which is the same as:
//  const result = grade => {
//      return grade >= 7 ? 'Approved' : 'Unapproved';
//  }

console.log(result(7.1))
console.log(result(6.3))
