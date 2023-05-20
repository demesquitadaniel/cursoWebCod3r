const [a, b, c, d] = [3, 5, 1, 15];
const sum = a + b  + c + d;
const subtract = d - b;
const multiply = a * b;
const division = d / a;
const modulation = a % 2;

console.log(sum, subtract, multiply, division, modulation);
console.log(sum % modulation); // 24 % 1 (24) and 0 is left, therefore the result is 0.
console.log((multiply - subtract) - 2); // (15 - 10) - 2 = 3.