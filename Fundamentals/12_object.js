const prod1 = {} // object creation
prod1.prodName = 'Samsung S22 SE'
prod1.prodPrice = 4998.90
prod1['Great Discount'] = 40 + ' percent' // this WILL work, but we should avoid inserting spaces on atributes (atributes are different than strings)

console.log(prod1)

console.log('-=-=-=-=-=-')

const prod2 = { // another object creation
    prodName: 'Polo Shirt',
    prodPrice: 79.90
}

console.log(prod2)