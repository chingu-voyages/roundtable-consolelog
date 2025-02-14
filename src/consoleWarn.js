// console.warn
const MAX_RETRIES = 3
let retryCount = 4
let user = 'jim'

if (retryCount > MAX_RETRIES) {
  console.warn(`The maximum number of retries (${ retryCount } of ${ MAX_RETRIES }) was exceeded by user: ${ user }`)
}