// GLOBALS - No window !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about current module
// process - info about env where the program is being executed

console.log(__dirname) // access to current directory
setInterval(()=>{ // interval function that executes after timer
    console.log('hello world');
}, 1000)