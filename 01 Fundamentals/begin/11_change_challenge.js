// a = 7
// b = 94
// Should interchange the values of the variables.

let a = 7;
let b = 94;
console.log(a);
console.log(b);
// After the change, 'b' should have the value of '7' and 'a' should have the value of '94'.

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// [a, b] = [b, a]; // This should be the correct way to swap values, but it's for later in the course.
let x = 43;
let y = 12;
console.log(x + ' and ' + y);
[x, y] = [y, x]; // This is the correct way to swap values in JavaScript.
console.log(x + ' and ' + y);