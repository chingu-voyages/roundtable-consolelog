// console.assert 
const errorMsg = "the # is not even"
let number = 3
console.assert(number % 2 === 0, "%o", { number, errorMsg })