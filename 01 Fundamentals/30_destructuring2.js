// Destructuring arrays in JavaScript
// Destructuring allows unpacking values from arrays or properties from objects into distinct variables.
const [a] = [10]; // 'a' receives the first element of the array wich is 10
const [, b] = [10, 20]; // 'b' receives the second element
console.log(a); // 10
console.log(b); // 20
console.log('--------------------------------');
// n1 receives 10, n2 is ignored, n3 receives 9, n4 is ignored, n5 receives nothing (undefined), and n6 receives 0.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // default value for n6 is 0. n1 and n3 are assigned values from the array, while n5 is undefined because
// there is no fifth element in the array.
console.log(n1, n3, n5, n6); // Prints: 10 9 undefined 0
console.log('--------------------------------');
// Array inside array. The only element displayed is the second (index=1) from the second array.
const [ ,[ , nota]] = [[ , 8, 8], [9, 6, 8]]; // The first array is ignored, and from the second array, the second element (index=1) is assigned to 'nota'. Then
// 'nota' is printed. And the element that is asigned to 'nota' is 6.
console.log(nota); // Prints: 6
