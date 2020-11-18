const fs = require ("fs");
const path = require ("path");

const copyFile = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
    }
}
copyFile()


const copyDirectory = () => {


    if (process.argv[2] === "-r") {

        //Folder and files
        const src = path.join(__dirname, `${process.argv[3]}`);
        const sourceFiles = fs.readdir(src, (err, files) => {
            if (err)
                console.log(err);
            else {
                files.forEach(file => {
                    return path.join(__dirname, file);
                })
            }
        })

        //Destination
        const destination = path.join(__dirname, `${process.argv[4]}/`)

        //link
        const read = fs.createReadStream(sourceFiles);
        const write = fs.createWriteStream(destination);
        read.pipe(write);

    }


}


copyDirectory()