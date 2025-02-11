// console.count
function greet(user) {
    console.count(user)
    return `hi ${user}`
  }
    
  greet(`Andres`)
  greet(`Dinesh`)
  greet('Andres')
  console.count('Andres')