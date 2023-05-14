str = "Hello world, find way to escape from matrix"
str2 = ", The way is..."

const length = str.length
const slice = str.slice(37,43)
const substring = str.substring(37,43)
const replace = str.replace("matrix","world")
const upperCase = str.toUpperCase()
const lowerCase = str.toLowerCase()
const concat = str.concat(str2)
const split = str2.split(' ')

console.log(length);    // 43
console.log(slice);     // matrix
console.log(substring); // matrix
console.log(replace);   // Hello world, find way to escape from world
console.log(upperCase); // HELLO WORLD, FIND WAY TO ESCAPE FROM MATRIX
console.log(lowerCase); // hello world, find way to escape from matrix
console.log(concat);    // Hello world, find way to escape from matrix, The way is...
console.log(split);     // [ ',', 'The', 'way', 'is...' ]
