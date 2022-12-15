let valor // não inicializada, não atribuída
console.log(valor)

// que é diferente de:
// console.log(valor2) :: que vai mostrar "is not defined"

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro! 'Cannot read properties of null'

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto.preco)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)