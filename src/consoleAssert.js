// console.assert 
const errorMsg = "the # is not even"
let number = 2
console.assert(number % 2 === 0, "%o", { number, errorMsg })

let debug = true
debug && console.log("%o", { number, errorMsg })
