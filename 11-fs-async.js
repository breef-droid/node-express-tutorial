const {readFile, writeFile} = require('fs'); // asyncronous method
console.log('start task')
readFile('./content/first.txt', 
    'utf8', //encoding
    (err, result)=>{ //callback method
        if(err){
            console.log(err)
            return
        }
        const first = result;
        readFile('./content/second.txt',
                'utf8', 
                (err, result)=>{ //callback method
                    if(err){
                        console.log(err)
                        return
                    }
                    const second = result;
                    writeFile('./content/result-async.txt', 
                            `Here is the result : ${first}, ${second}`,
                            (err, result)=>{
                                if(err){
                                    console.log(err)
                                    return
                                }
                                console.log('done with this task')
                            })
        })
})
console.log('starting next task')
//if you run this you'll see that the last console.log runs before the second one