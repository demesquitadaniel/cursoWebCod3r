var funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

// Contrary to the previous example, this time the variable 'i' is accessible inside the functions because it was declared with 'let'.
// Each function captures its own 'i' value, which is the value of 'i' at the time the function was created.
// Therefore, when we call funcs[2](), funcs[6](), and funcs[8](), they print the values 2, 6, and 8 respectively.
// This demonstrates the block scope of 'let' and how it behaves differently from 'var'