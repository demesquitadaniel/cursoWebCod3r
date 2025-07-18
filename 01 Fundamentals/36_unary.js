let num1 = 1
let num2 = 2

num1++; // postfix increment
console.log(num1) // 2
--num1; // prefix decrement
console.log(num1) // 1

console.log(++num1 === num2--) // the comparison happens before num2 is decremented // 2 & 2 (true)
console.log(++num1 === --num2) // the comparison happens after num2 is decremented // 2 & 1 (false)
console.log(num1 === num2) // num1 is 2 and num2 is 1 (false)
