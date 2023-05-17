function random([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const value = Math.random() * (max - min ) + min;
    return Math.floor(value);
}

console.log(random([50, 40]));
console.log(random([992]));
console.log(random([ , 10]));
console.log(random([]));
// console.log(random(())); // Error! Undefined or null value.