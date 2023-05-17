// name/value pairs
const salute = 'Hey'; // lexical context 1

function exec() {
    const salute = 'WhatsUp'; // lexical context 2
    return salute;
}

// Objects are groups of information paired as name/value:
const client = {
    clientName: 'Peter',
    clientAge: 32,
    clientWeight: 90,
    clientAddress: {
        address: 'Very Nice Street',
        number: 123
    }
}

console.log(salute)
console.log(exec())
console.log(client)
