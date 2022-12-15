// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow ("=>") em uma variável - a setinha é igual 'function'
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 9))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 1))

const imprimir2 = a => console.log(a)
imprimir2('Legal')