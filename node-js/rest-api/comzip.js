const fs = require("fs");
const zlib = require("zlib");

const source = "data.txt";
const copy = "data_copy.txt";
const compressed = "data.txt.gz";

//copy file
fs.createReadStream(source)
.pipe(fs.createWriteStream(copy))
.on("finish",()=>console.log("file copy:",copy));
//compress file
fs.createReadStream(source)
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(compressed))
.on("finish",()=>console.log("file compressed:",compressed));