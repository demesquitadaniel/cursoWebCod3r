var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();

// ALthough the loop runs 10 times, the variable 'i' is declared with 'var', which has function scope.
// Therefore, when we call funcs[2]() and funcs[8](), they both print the value 10.
// This is because the variable 'i' is shared across all iterations of the loop, and by the time we call the functions, 'i' has already reached its final value of 10.
// This demonstrates how 'var' behaves differently from 'let' in terms of scope and closure.
