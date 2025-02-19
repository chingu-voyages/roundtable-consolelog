import chalk from 'chalk'

// console.error
console.error('Error detected!')
let user = 'Jim'
console.error(chalk.red(`ERROR detected (0001): Duplicate user! Current user: ${ chalk.white(user)}`))