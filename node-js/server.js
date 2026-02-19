//hwt create server use node js core module multiple routing

const http = require("http");



//create
const server = http.createServer((req,res)=>{
    if(req.url ==="/" && req.method ==="GET") {
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.end("Home page");
    }

   else if(req.url ==="/about") {
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end(`<h1>E-job</h1>`);
    }
    else if(req.url ==="/contact") {
      res.writeHead(200,{"Content-Type":"application/json"});
      res.end(JSON.stringify([
        {id:1,name:"raj"},
        {id:2,name:"virat"},

      ]));
    }
    else {
         res.writeHead(404,{"Content-Type":"text/plain"});
         res.end("404 not found");
    }
   
   
});
const port = 5700;
server.listen(port,()=>{
    console.log("server is running port 5700");
});