// new resource from ES6

const person = {
    personName: 'Anna',
    age: 18,
    address: {
        street: 'ABC Avenue',
        number: 1000
    }
}

const { personName, age } = person
console.log(personName, age)

const { personName: n, age: a } = person
console.log(n, a)

const { surName, wellHumored = true } = person
console.log(surName, wellHumored)

const { address: { street, number, zipCode } } = person
console.log(street, number, zipCode)

const { account: { agency, num } } = person
console.log(agency, num)