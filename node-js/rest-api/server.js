const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
   res.send("server create done");
});
app.get('/about',(req,res)=>{
   res.json({
    name:"virat",
    role:"cricketer"
   });
});
//hwt handel route parameter

app.get('/contact/:id',(req,res)=>{
   res.send("contact id:"+ req.params.id);
});
//hwt handel query parameters
app.get('/search',(req,res)=>{
   res.send("search:"+ req.query.q);
});
//data add
app.post('/register',(req,res)=>{
   console.log(req.body);
   res.send("user register");
});

app.listen(5500,()=>{
    console.log("server is running port 5500");
})