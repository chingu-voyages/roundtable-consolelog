// console.count
function greet(user) {
  console.count(user)
  return `hi ${user}`
}
  
greet(`Andres`)
greet(`Dinesh`)
greet('Andres')

console.countReset('Andres')
console.count('Andres')
console.countReset('Dinesh')
console.count('Dinesh')
