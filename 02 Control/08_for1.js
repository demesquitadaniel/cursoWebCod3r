// Control Structures - For Loop
// 'For' is used to run through a numbered list of things, while a determined criteria is true.

let count = 1;
while(count <= 10) {
    console.log(`counter = ${count}`); // while the condition is true, the code inside the loop will be executed
    count++; // incrementing the counter to avoid an infinite loop
}
console.log('-------------');


for(let i = 1; i <= 10; i++) { // it is usual to use the counter as 'i' instead for 'count' or 'counter'
    console.log(`i = ${i}`)
}
console.log('-------------');


const grades = [6.7, 7.4, 9.8, 8.1, 7.7]; // an array of grades
// 'For' can be used to iterate through the elements of an array
for(let i = 0; i < grades.length; i++) { // 'i' is the index of the array, starting from 0. 'grades.length' gives the total number of elements in the array
    console.log(`grade = ${grades[i]}`); // accessing each element using the index
}
