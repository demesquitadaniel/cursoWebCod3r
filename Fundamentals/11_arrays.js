const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0], values[3]);
console.log(values[4]);

values [4] = 10;
console.log(values);
console.log(values.length);

values.push({id: 3}, false, null, 'test');
console.log(values);

console.log(values.pop()); // deletes the last element of the array, in this case the string 'test'
delete values[0]; // deletes the value inside that index '0' from the array. Is its place, there's now an empty space in the array
console.log(values);

console.log(typeof values);