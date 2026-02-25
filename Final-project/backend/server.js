
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require('./config/db');
const jobrouter = require("./routes/jobRoutes");
const userrouter = require("./routes/userRoutes");
const paymentrouter = require("./routes/paymentRoutes");


const app = express();
connectdb();

app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("upload"));
app.use("/api/jobs",jobrouter);
app.use("/api/auth",userrouter);
app.use("/api/payments",paymentrouter);
app.get('/',(req,res)=>{
    res.send("api is working");
});


const port = process.env.PORT||5800;
app.listen(port,()=>{
    console.log("server is running port 5800");
});