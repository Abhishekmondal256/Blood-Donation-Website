const dotenv=require("dotenv");
const express =require("express");
const mongoose=require("mongoose");
const app=express();
const cookieParser=require("cookie-parser");
app.use(cookieParser());
dotenv.config({path:"./config.env"});
require("./db/conn");
// const User=require("./model/userSchema");
app.use(express.json());
app.use(require("./router/auth"));
const PORT=process.env.PORT;

app.use('/public',express.static('public'));

// app.get('/about',(req,res)=>{
//     res.send("hello world about");
    
//     })

 app.get('/signin',(req,res)=>{
            res.send("hello world signin");
            
            })
    app.get('/signup',(req,res)=>{
                res.send("hello world signup");
                
                })
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})