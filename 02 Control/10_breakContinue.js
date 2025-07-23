// Control flow with break and continue in JavaScript
// This code demonstrates the use of break and continue statements in loops.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using break to EXIT a loop
for (let x in nums) { // the use o 'let' is not necessary here, but it's a good practice
    if (x == 5) {
        break; // this will break the code in the index '5' and not continue the loop
    }
    console.log(`index ${x} = ${nums[x]}`);
}
console.log('-----------');

// Using continue to SKIP an iteration
for (let y in nums) {
    if (y == 7) {
        continue; // we can see a missing index '7', and the code continues AFTER the index '7'
    }
    console.log(`index ${y} = ${nums[y]}`);
}
console.log('-----------');

// Using break with labeled loops
external: for (let a in nums) {
    for (let b in nums) {
        if(a ==2 && b == 3) {
            break external; // This will break the outer loop when a is 2 and b is 3. If the 'break' is not labeled, it will only break the inner loop.
        }
        console.log(`Pair ${a},${b}`);
    }
}

console.log('Done');
