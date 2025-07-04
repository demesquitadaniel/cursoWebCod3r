function random({min = 1, max = 1000}) {
    const value = Math.random() * (max - min) + min; // The use of '+ min' ensures that the random number is at least 'min' and at most 'max'.
    return Math.floor(value); // Math.floor() rounds down the value to the nearest integer.
}

const obj = {max: 50, min: 20};
console.log(random(obj)); 
console.log(random({min: 949})); // Min is settled and max is defaulted to 1000
console.log(random({max: 10})); // Max is settled and min is defaulted to 1
console.log(random({})); // Both min and max are defaulted to 1 and 1000
// console.log(random()); // This will throw an error because the function expects an object with min and max properties
// console.log(random(null)); // This will also throw an error because null is not an object