//  'For' is used to run through a numbered list of things, while a determined criteria is true.

let count = 1;
while(count <= 10) {
    console.log(`counter = ${count}`);
    count++;
}
console.log('-=-')


for(let count = 1; count <= 10; count++) { //   it is usual to use the counter as 'i' instead for 'count' or 'counter'
    console.log(`counter = ${count}`)
}
console.log('-=-')


const grades = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let i = 0; i < grades.length; i++) {
    console.log(`grade = ${grades[i]}`);
}