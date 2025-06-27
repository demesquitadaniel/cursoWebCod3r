// name/value pair
const salute = 'Hey'; // lexical context 1

function exec() {
    const salute = 'WhatsUp'; // lexical context 2
    return salute;
}

// Objects are groups of information paired as name/value:
const client = {
    Name: 'Peter',
    Age: 32,
    Weight: 90,
    Address: {
        street: 'Rua dos Bobos',
        number: 0
    }
}

console.log(salute)
console.log(exec())
console.log(client)
