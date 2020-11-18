const readline = require('readline')
const fs = require('fs');    

if(process.argv.length==2)  {
    const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
    });
    rl.on('line', (input) =>  {
        console.log(input)
    });
    /*readline.on('line', name => {
    console.log(`${name}`)
    readline.close()*/

} 

else if(process.argv.length==3){
const displayFile = (filename) => {

    const read = fs.createReadStream(filename);
    read.on('data', function(chunk) {
    
        console.log(chunk.toString())
    });
}
displayFile(process.argv[2])
}
