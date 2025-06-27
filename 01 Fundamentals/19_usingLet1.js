let number = 1
{
    let number = 2
    console.log('inside =', number)
}
console.log('outside =', number)

// Contrary to var, let does not allow redeclaration in the same scope
// 'var' has global scope or function scope, while 'let' has global, function AND block scope
// This means that 'let' is more restrictive and helps prevent accidental variable shadowing