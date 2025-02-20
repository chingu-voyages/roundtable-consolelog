// console.group
console.log("This is the outer level")
console.group()
console.log("Inner Level 2")
console.group()
console.log("Inner Level 3")
console.warn("Continuation of level 3")
console.groupEnd()
console.group()
console.groupEnd()
console.groupEnd()
console.groupEnd()

console.info(`\n\nSecond group test`)
let levelNo = 0
const aFunction = () => {
  console.group()
  levelNo = levelNo + 1
  console.log(`Level - ${ levelNo }`)
}

for (let incr = 0; incr < 5; incr++) {
  aFunction()
}
console.groupEnd()