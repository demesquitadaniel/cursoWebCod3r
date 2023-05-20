let value // not initialized, not attributed
console.log(value) //   undefined

// which is different from:
// console.log(value2) // that should show 'value2 is not defined'

value = null // absence of value
console.log(value) //   null
// console.log(value.toString()) // Error! 'Cannot read properties of null'

const product = {}
console.log(product.price) // undefined
console.log(product) // empty

product.price = 3.50
console.log(product) // { price: 3.5 }

product.price = undefined // avoid attributing 'undefined'
console.log(!!product.price) // false
// delete product.price //  empty
console.log(product.price) // undefined

product.price = null // no price
console.log(!!product.price) // false
console.log(product) // { price: null }