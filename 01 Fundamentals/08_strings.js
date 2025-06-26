const school = 'Cod3r' // String literal (C position 0, o position 1, d position 2, 3 position 3, and r position 4)

console.log(school.charAt(4)) // 'r'
console.log(school.charAt(5)) // nothing/empty, because there is no character at position 5
console.log(school.charCodeAt(3)) // 51, because the using 'charCodeAt' shows that the character at position 3 is '3' and its UNICODE VALUE is 51
console.log(school.indexOf('3')) // 3, because the character '3' is at position 3

console.log(school.substring(1)) // od3r, because it starts from position 1
console.log(school.substring(0, 3)) // Cod, because it starts from position 0 and goes up to (but not including) position 3

console.log(school.concat(' School').concat("!")) // Cod3r School! (Using single quotes or double quotes is the same)
console.log(school + ' School!') // Cod3r School!
console.log(school.replace(3, 'e')) // Cod3r School! (replaces the first occurrence of '3' with 'e')
console.log(school.replace(/\d/, 'e')) // Regex pattern: It replaces all numeric algarismes with 'e' (not important here).

console.log('Maria,Pedro,Angela'.split(',')); // Returns an array with the names ['Maria', 'Pedro', 'Angela'] by splitting the string at each comma
