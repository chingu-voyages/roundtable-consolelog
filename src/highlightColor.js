import chalk from 'chalk'

let mode = 'initiation'

// Using color codes
const green = "\x1b[32m"
const white = "\x1b[37m"
console.log(`${ white }Starting with mode:${ green }${ mode }`)

// Using the Chalk library
console.log(chalk.white(`\n\nStarting with mode:${ chalk.green(mode) }`))

const style = 'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;'
console.log("%cHooray", style)
