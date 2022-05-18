const {readFileSync, writeFileSync} = require('fs'); // importing two 'modules' from 'fs'
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', //file path
    `Here is the result: ${first}, ${second}`, //content to be written
    {flag: 'a'} // appends instead of overwrite
    )

console.log('done with this task')
console.log('starting the next one')
// the problem with syncronous code is that if there are alot of users running this app they will all join a queue, any delays means the app is essentially down
