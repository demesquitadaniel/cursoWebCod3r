// Arrays are used to store multiple values in a single variable.
// They can hold different data types, including numbers, strings, objects, and even other arrays

const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0], values[3]); // Accessing elements in an array is done using their index, which starts at 0. In this case, it prints the first and fourth elements of the array '7.7' and '9.2'.
console.log(values[4]); // undefined, because there is no value at index 4.

values [4] = 10; // Adding a new element at index 4.
console.log(values); // Now the array has five elements, with the last one being 10.
console.log(values[4]); // Accessing the newly added element at index 4, which is 10.
console.log(values.length); // The length property returns the number of elements in the array, which is 5 in this case.

console.log('---------------------------');
values.push({id: 3}, false, null, 'test'); // 'push' method adds new elements to the end of the array. Here, it adds an object, a boolean, a null value, and a string.
console.log(values);

console.log('---------------------------');
console.log(values.pop()); // deletes the last element of the array, in this case the string 'test'
delete values[0]; // deletes the value inside that index '0' from the array. Is its place, there's now an empty space in the array: '<1 empty item>' replaces the deleted value.
console.log(values); // <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null
console.log(typeof values); // The type of 'values' is 'object' because arrays in JavaScript are a type of object.
