console.log('a =', a)
var a = 2; // Using 'var' the hoisting works.
console.log('a =', a)

console.log('b =', b) // Error!
let b = 3; // Using 'let' the hoisting doesn't work.
console.log('b =', b)