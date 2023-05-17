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
// T xor T = F // xor is 'exclusive or'
// T xor F = T
// F xor F = F
//
// '!T' = F
// '!F' = T

function buying(work1, work2) {
    const buyIceCream = work1 || work2;
    const buyTV50 = work1 && work2;
    // const buy TV32 = !!(work1 ^ work2); // bitwise xor
    const buyTV32 = work1 != work2;
    const keepHealthy = !buyIceCream // unary operator

    return { buyIceCream, buyTV50, buyTV32, keepHealthy }
}

console.log(buying(true, true))
console.log(buying(true, false))
console.log(buying(false, true))
console.log(buying(false, false))