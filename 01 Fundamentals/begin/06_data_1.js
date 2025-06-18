/*
console.log('Pen');
console.log(10);  // "Literal value" is the name given when the number, or sentence, is written as to be shown on the console.
console.log(6.4);
console.log(1.5);
console.log(7.9);
*/

let productName = 'Pen'; // We may use "var" or "let", it makes no difference at this point (beginning of the course).
var quantity = 10;
let price = 6.4;
var tax = 1.5;
let finalPrice = price + tax;
console.log(productName);

console.log(quantity);
console.log(price);
console.log(tax);
console.log(finalPrice);

productName = "Pen 'BIC'"; // You can use single quotes inside double quotes.
console.log(productName);