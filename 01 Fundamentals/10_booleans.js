// Booleans only accept values of true or false. They are used to control the flow of the program, such as in conditional statements.

let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);
console.log(!isActive); //  '!' denies, negate, the expression evaluated. False becomes true, and true becomes false.
console.log(typeof isActive); // boolean

console.log('---------------------------');
isActive = 1;
console.log(isActive); // '1' behaves like true, so it is considered a truthy value.
console.log(!isActive); // '0' behaves like false, so it is considered a falsy value.
console.log(!!isActive); // '!!' gets the expression back to its original state. It's a negation of a negation.

console.log('---------------------------');
console.log('the truthy:');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('---------------------------');
console.log('the falsy:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('---------------------------');
console.log('to finish:');
console.log(!!('' || null || 0 || 'wow' || 123)); // '||' is the logical OR operator. It evaluates to true if at least one of the operands is truthy.
// In this case, the expression evaluates to true because 'wow' is a truthy value.
// '' is false, null is false, '0' is false, but any string is true, which makes this expression a true testament.

let naming = ''; // false
console.log(naming || 'Unknown'); // since 'naming' is falsy, it will return the truthy string 'Unknown'

naming = 'Daniel'; // true
console.log(naming || 'Unknown'); // since 'naming' is truthy, it will return the value of 'naming', which is 'Daniel'.