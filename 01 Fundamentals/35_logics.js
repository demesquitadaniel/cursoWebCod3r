// 'Truth Table':
//
// T & T = T
// T & F = F
// F & F = F
//
// T or T = T
// T or F = T
// F or F = F
//
// T xor T = F // xor is 'exclusive or' and for it to be true, both need to be different. if equal, it is false.
// T xor F = T
// F xor T = T
// F xor F = F
//
// '!T' = F
// '!F' = T

function shopping(work1, work2) {
    const buyIceCream = work1 || work2; // || logical 'or' operator
    const buyTV50 = work1 && work2; // && logical 'and' operator
    const buyTV32 = work1 != work2; // != is a comparison operator that checks if the values are not equal, similar to xor
    const keepHealthy = !buyIceCream; // unary operator

    return { buyIceCream, buyTV50, buyTV32, keepHealthy };
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));