// new resource from ES6
// Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.

const person = {
    name: 'Anna',
    age: 18,
    address: {
        street: 'ABC Avenue',
        number: 1000
    }
}

const { name, age } = person // This will extract the 'name' and 'age' properties from the 'person' object
console.log(name, age) // Prints: Anna 18

const { name: n, age: a } = person // This will extract the 'name' and 'age' properties from the 'person' object and assign them to variables 'n' and 'a'
// This is useful when you want to rename the variables while destructuring.
console.log(n, a) // Prints: Anna 18

const { surName, wellHumored = true } = person // This will attempt to extract 'surName' and 'wellHumored' from the 'person' object. If 'surName' does not
// exist in the object, it will be undefined. 'wellHumored' will default to true if it is not found in the object.
console.log(surName, wellHumored) // Prints: undefined true

const { address: { street, number, zipCode } } = person // This will extract 'street', 'number', and 'zipCode' from the nested 'address' object within
// 'person'. If 'zipCode' does not exist, it will be undefined.
console.log(street, number, zipCode) // Prints: ABC Avenue 1000 undefined

const { account: { agency, num } } = person // This will attempt to extract 'agency' and 'num' from a nested 'account' object within 'person'. If 'account'
// does not exist, it will throw an error.
console.log(agency, num) // This will throw an error because 'account' is not defined in 'person'.