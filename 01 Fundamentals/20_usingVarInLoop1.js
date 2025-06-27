for (var i = 0; i < 10; i++) { // This means while i is less than 10, increment i by 1
    // 'var' has function scope or global scope, so it can be accessed outside the loop
    console.log(i)
}
console.log('i =', i)