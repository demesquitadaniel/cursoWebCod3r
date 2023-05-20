const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break; //    this will break the code in the index '5' and not continue
    }
    console.log(`index ${x} = ${nums[x]}`);
}
console.log('-=-');

for (y in nums) {
    if (y == 5) {
        continue; // we can see a missing index '5', and the code continues
    }
    console.log(`index ${y} = ${nums[y]}`);
}
console.log('-=-');

external: for (a in nums) {
    for (b in nums) {
        if(a ==2 && b == 3) {
            break external;
        }
        console.log(`Pair ${a},${b}`);
    }
}

console.log('done');
