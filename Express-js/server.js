const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const ratelimit = require("express-rate-limit");
const SECRET = "abcd123456";

app.use(express.json());
app.use(cookieParser());
app.get('/',(req,res)=>{
   res.send("server create done");
});
app.get('/about',(req,res)=>{
   res.json({
    name:"virat",
    role:"cricketer",
    location:"delhi"
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
//crud operation

let users = [
   {id:1,name:"rahul"},
   {id:2,name:"vivek"}
];
//get all users
app.get("/users",(req,res)=>{
   res.json(users);
});
//get singel user
app.get("/users/:id",(req,res)=>{
   const user = users.find(x=>x.id ==req.params.id);
   res.json(user);
});
//post
app.post("/users",(req,res)=>{
   const newuser = {
      id:users.length+1,
      name:req.body.name
   };
   users.push(newuser);
   res.status(201).json(newuser);
});
//update
app.put("/users/:id",(req,res)=>{
   const user = users.find(x=>x.id==req.params.id);
   user.name = req.body.name;
   res.json(user);
});
//delete
app.delete("/users/:id",(req,res)=>{
   users = users.filter(x=>x.id!=req.params.id);
   res.json({message:"user deleted"});
});

//middleware
const logger = (req,res,next)=> {
   console.log(`${req.method} ${req.url}`);
   next();
};
app.use(logger);
app.get("/md",(req,res)=>{
   res.send("middleware working");
});
//jwt authtentication
//login
app.post("/login",(req,res)=>{
   const token = jwt.sign({username:req.body.username},SECRET,{expiresIn:"30d"});
   res.json({token});
});
//protected route
app.get("/dashboard",(req,res)=>{
   const token = req.headers.authorization;
   if(!token) return res.status(401).send("no token");

   try {
      const verified = jwt.verify(token,SECRET);
      res.json({message:"welcome",user:verified});
   }catch(err) {
      console.error(err);
   }
});
//pagination
const products = Array.from({length:40},(_,i)=>({
   id:i+1,
   name: `Product ${i+1}`
}));
app.get("/products",(req,res)=>{
   const page = parseInt(req.query.page) || 1;
   const limit = 5;
   const start = (page-1) * limit;
   const end = start + limit;
   res.json(products.slice(start,end));
});
//cookie-parser
app.get("/set-cookie",(req,res)=>{
   res.cookie("user","subhojit");
   res.send("set cookie");
});
app.get("/get-cookie",(req,res)=>{
   
   res.json(req.cookies);
});
//rate-limit
const limiter = ratelimit({
   windowMs: 60*1000,
   max:3
});
app.use("/api",limiter);
app.get("/api/data",(req,res)=>{
   res.send("limited data");
});

app.listen(5500,()=>{
    console.log("server is running port 5500");
})