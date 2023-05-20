const grades = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in grades) {
    console.log(i, grades[i]);
}
console.log('-=-')

const person = {
    name: 'John',
    surname: 'Smith',
    age: 29,
    weight: 74
}

for (atribute in person) {
    console.log(`${atribute} = ${person[atribute]}`)
}
