//reastapi server+routing+queryfilter

const http = require('http');
const { URL } = require('url');

const products = [
    { id: 1, name: "laptop", price: 78000 },
    { id: 2, name: "mobile", price: 7800 },
    { id: 3, name: "tab", price: 780000 },

];
http.createServer((req,res)=>{
    const fullurl = new URL(req.url,`http://${req.headers.host}`);
    const path = fullurl.pathname;

    if(path ==="/api/products" && req.method ==="GET") {
        const search = (fullurl.searchParams.get("search")|| "").toLowerCase();
        const filtered = products.filter(x=>x.name.toLowerCase().includes(search));
        res.writeHead(200,{"Content-Type":"application/json"});
        return  res.end(JSON.stringify(filtered));
    } else {
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("not found");
    }
}).listen(5800,()=>{
    console.log("server is running port 5800");
})