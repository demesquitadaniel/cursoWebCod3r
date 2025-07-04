function random([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]; // Swapping values min & max if min is greater than max
    const value = Math.random() * (max - min ) + min;
    return Math.floor(value);
}

console.log(random([50, 40])); // 'min' and 'max' are omitted, because they're not necessary for the function to work
console.log(random([992])); // 'max' is omitted, so it defaults to 1000
console.log(random([, 10])); // 'min' is omitted, so it defaults to 0
console.log(random([])); // Both 'min' and 'max' are omitted, so they default to 0 and 1000
// console.log(random(())); // Error! Undefined or null value.
