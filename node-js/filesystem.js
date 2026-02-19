const fs = require("fs");
fs.writeFile("data.txt","this is data",(err)=>{
    if(err) throw err;
    console.log("create file");
    console.error(err);

});
fs.appendFile("data.txt","\n ok ",(err)=>{
     if(err) throw err;
    console.log("add content");
    console.error(err);
});
//read
fs.readFile("data.txt","utf8",(err,data)=>{
     if(err) throw err;
    console.log(data);
    console.error(err);
});
//rename file
