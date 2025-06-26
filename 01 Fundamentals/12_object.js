// Objects are used to store keyed collections and more complex entities.
// They can hold different data types, including numbers, strings, arrays, and even other objects.

const prod1 = {}; // object creation
prod1.name = 'Samsung S22 SE';
prod1.price = 4998.90;
// prod1['Great Discount'] = 40 + ' percent' // (This WILL work, but we should avoid inserting spaces on atributes (atributes are different than strings)).
prod1.discount = '40 percent'; // this is the same as the previous line, but without spaces.
prod1.finalPrice = prod1.price * (1 - 0.4); // calculating the final price after discount.
console.log(prod1);

console.log('-----------------------')
const prod2 = { // another object creation
    name: 'Polo Shirt',
    price: 79.90
};
console.log(prod2);
// Objects can also be created using JSON (JavaScript Object Notation), which is a lightweight data interchange format.
// JSON is often used to transmit data between a server and a web application as text.
// JSON example:
'{"name": "Polo Shirt", "price": 79.90}' // this is a JSON (JavaScript Object Notation) string, which is a common format for data interchange.
// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers.