let value; // not initialized, not attributed
console.log(value); //   undefined
// Which is different from:
// console.log(value2); (That should show 'value2 is not defined').

console.log('--------------------------');
value = null; // Absence of value.
console.log(value); //   null
// console.log(value.toString()) // Will return an error: 'Cannot read properties of null'

console.log('--------------------------');
const product = {}; // Initializing an empty object
console.log(product.price); // undefined
console.log(product); // empty '{}'
product.price = 3.50 // Adding a property to the object.
console.log(product); // { price: 3.5 }

console.log('--------------------------');
product.price = undefined; // Attention: Avoid attributing 'undefined'. Let the variable be undefined by the language.
console.log(!!product.price); // false (!! converts to boolean, maintaining the type).
// delete product.price; //  empty
console.log(product.price); // undefined

console.log('--------------------------');
product.price = null; // no price
console.log(!!product.price); // false
console.log(product); // { price: null }