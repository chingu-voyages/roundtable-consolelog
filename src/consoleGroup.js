// console.group
const aFunction = () => {
  console.group()
  console.log('Level')
}

console.log("This is the outer level")
console.group()
console.log("Inner Level 2")
console.group()
console.log("Inner Level 3")
console.warn("Continuation of level 3")
console.groupEnd()

console.group()
for (let incr = 0; incr < 5; incr++) {
  aFunction()
}
console.groupEnd()