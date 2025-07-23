// Control Structures - For/In Loop
// 'For' is used to run through a numbered list of things, while a determined criteria is true.
// 'in' is used to iterate through the properties of an object or the indices of an array.

const grades = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in grades) { // 'i' will take the value of each index in the array. 'grades[i]' accesses the value at that index
    console.log(i, grades[i]); // prints the index and the corresponding value
}
console.log('-------------');

const person = { // now we have an object with properties
    name: 'John', // properties can be accessed using the key
    surname: 'Smith', // 'in' can also be used to iterate through the properties of an object
    age: 29,
    weight: 74
}

for (let atribute in person) { // 'in' will iterate through the keys of the object. 'attribute' will take the value of each key.
//  'person[atribute]' accesses the value at that key
    console.log(`${atribute} = ${person[atribute]}`) // 'person[atribute]' accesses the value at that key
}
