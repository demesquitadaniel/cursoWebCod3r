console.log(typeof Object);
console.log(typeof new Object);

const client = function() {};
console.log(typeof client);
console.log(typeof new client);

class Product {}; // ES 2015 (ES6)
console.log(typeof Product);
console.log(typeof new Product()); // with or without the parentheses, it's the same.