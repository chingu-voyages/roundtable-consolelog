// console.dir
const person = {name: 'Jim', role: 'Developer'}
console.dir(person)
console.dir(`person:`, person) // dir only accepts a single parameter

console.log(`\n\nperson: `, person)
console.log(`person: ${ JSON.parse(JSON.stringify(person)) }`) // What???
console.log(`person: `, JSON.parse(JSON.stringify(person)))