// Every file is a module
// Module = encapsulated code
const names = require('./4-names') // args = where module is sitting
const sayHi = require('./5-utils') // args = where module is sitting
const data = require('./6-alternative-export')
require('./7-mind-grenade') // functions in modules will run even not explicitly called if the function is called in the export.module file

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

console.log(names)
console.log(data) // logs all the export modules in 6