// Relational Operators are boolean operators that compare two values and return a boolean result (true or false)!
// The '==' operator is used to test whether two objects are equal in results,
// and '===' operator is used to test whether two objects are equal not only in results, but also if they are of the same type and have the
// same memory access slot.

console.log('01)', '1' == 1); // same result, number: 1 (Prints: true)
console.log('02)', '1' === 1); // different type: string and number (Prints: false)
console.log('03)', '3' != 3); // same result, number: 3 (Prints: false)
console.log('04)', '3' !== 3); // same number, but different type: string and number (Prints: true)
console.log('--------------------');

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);
console.log('--------------------');

const d1 = new Date(0); // '0' marks the standard starting date for JavaScript (and other languages) meaning Jan 1st 1970, and time 00:00:00.
const d2 = new Date(0);
console.log('09)', d1 == d2); // different memory slot
console.log('10)', d1 === d2);
console.log('11)', d1.getTime() == d2.getTime()); // same result, type and memory slot
console.log('12)', d1.getTime() === d2.getTime()); // same result, type and memory slot
console.log('--------------------');

console.log('13)', undefined == null); // same result
console.log('14)', undefined === null); // same result, but different type.
console.log('15)', null === null); // same result, same type, same memory slot
