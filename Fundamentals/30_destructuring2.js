const [a] = [10]
console.log(a)

// n1 receives 10, n2 is ignored, n3 receives 9, n4 is ignored, n5 receives nothing (undefined), and n6 receives 0.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10 9 undefined 0

// Array inside array. The only element displayed is the second (index=1) from the second array.
const [ ,[ , nota]] = [[ , 8, 8], [9, 6, 8]]
console.log(nota) // 6