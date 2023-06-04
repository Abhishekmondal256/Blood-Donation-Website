const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const cookieParser=require("cookie-parser");
router.use(cookieParser());
const authenticate=require("../middleware/authenticate");

require("../db/conn");


const User = require("../model/userSchema");
router.get('/', (req, res) => {
  res.send("hello world");

})
router.post("/register", async (req, res) => {
  const { name, email, phone, bloodgrp, gender, age,ldate, state, city, password, cpassword } = req.body;
  if (!name || !email || !phone || !bloodgrp || !gender || !ldate || !age || !state || !city || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all the deatils" });
  }
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: "Email already registered" });
    }

    const user = new User({ name, email, phone, bloodgrp, gender, age,ldate, state, city, password, cpassword });
    await user.save();


    res.status(201).json({ message: "user registered successfully" });




  }
  catch (err) {
    console.log(err);
  }


});

//login route
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });

    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true

      })
       
      if (!isMatch) {
        res.json({ error: "Invalid credentials" });
      }
      else {
        res.json({ message: "user login successfully" });
      }
    }
    else {
      res.json({ error: "Invalid credentials" });

    }





  }
  catch (err) {
    console.log(err);

  }

});
router.get("/about",authenticate,(req,res)=>{
console.log("hello auth");
res.send(req.rootUser);

})
router.get("/searchpage",async (req,res)=>{
try{
const allUser=await User.find({});
res.send(allUser);
}catch(err){
  console.log(err);
}
  
  
  })


module.exports = router;