// Arithmetic operations in JavaScript
// + = addition, - = subtraction, * = multiplication, / = division, % = modulus
const [a, b, c, d] = [3, 5, 1, 15]; // Destructuring an array into variables a = 3, b = 5, c = 1, and d = 15
const sum = a + b  + c + d; // Prints: 24
const subtract = d - b; // Prints: 10
const multiply = a * b; // Prints: 15
const division = d / a; // Prints: 5
const modulus = a % 2; // Prints: 1 (3 % 2 = 1)

console.log(sum, subtract, multiply, division, modulus); // Prints: 24 10 15 5 1
console.log(sum + subtract); // 24 + 10 = 34
console.log(sum % modulus); // 24 % 1 (24) and 0 is left, so the result is 0.
console.log((multiply - subtract) - 2); // (15 - 10) - 2 = 3.
console.log((multiply - subtract) * 2); // (15 - 10) * 2 = 10.
