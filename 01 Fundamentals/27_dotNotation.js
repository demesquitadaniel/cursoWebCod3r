// Dot notation in JavaScript
// Dot notation is used to access properties and methods of objects in JavaScript.
// It is a way to access the properties of an object using the dot (.) operator.
// You can see it in action with the Math object, which is a built-in object in JavaScript that provides mathematical constants and functions.
// You can also see it with custom objects that you create using constructor functions or classes. For instance, you can create an object with properties and methods, and then access those properties and methods using dot notation.

console.log(Math.ceil(6.2)) // 7 // 'ceil' is a method of the Math object to round up
console.log(Math.floor(6.8)) // 6 // 'floor' is a method of the Math object to round down

// var console: Console
const obj1 = {}
obj1.name = 'Ball'
// obj1['name'] = 'BallTwo' // Alternative way to set property
console.log(obj1.name)

console.log('--------------')
function Obj(name) {
    this.name = name
    this.exec = function() {
        console.log('Executing...')
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('Table')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()