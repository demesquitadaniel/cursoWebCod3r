const school = 'Cod3r'

console.log(school.charAt(4))
console.log(school.charAt(5))
console.log(school.charCodeAt(3))
console.log(school.indexOf('3'))

console.log(school.substring(1))
console.log(school.substring(0, 3))

console.log(school.concat(' School').concat("!"))
console.log(school + ' School!')
console.log(school.replace(3, 'e'))
console.log(school.replace(/\d/, 'e')) // Regex pattern: It replaces all numeric algarismes with 'e' (not important here).

console.log('Maria,Pedro,Angela'.split(','));