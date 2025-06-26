var a = 3
let b = 4
//  'var' and 'let' are synonyms and are used to call a variable, although 'let' is more often used nowadays.
//  Yes, there are technical differences between 'var' and 'let', but, for the time being, they should be treated as synonyms.

console.log(a, b)

var a = 30
// 'let b = 40' Generates an error ('var' can be re-declared, but 'let' cannot be re-declared in the same scope)
b = 40

console.log (a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// Entering 'c = 50' also generates an error,  because 'const' cannot be re-assigned.
// 'const' is used to declare a constant, which cannot be changed after its initial assignment

console.log(c)