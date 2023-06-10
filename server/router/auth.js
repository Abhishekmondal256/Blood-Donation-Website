const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const multer=require("multer");

const cookieParser=require("cookie-parser");
router.use(cookieParser());
const authenticate=require("../middleware/authenticate");

require("../db/conn");


const User = require("../model/userSchema");
router.get('/', (req, res) => {
  res.send("hello world");

})
const storage=multer.diskStorage({destination:function(req,file,cb){
cb(null,"public/images");

},
filename:function(req,file,cb){
cb(null,Date.now()+'_'+ file.originalname);

}
})

var upload=multer({storage:storage});
router.post("/register",upload.single("profpic"), async (req, res) => {
  console.log(req.file);
let profpic=req.file.filename;

  const { name, email, phone, bloodgrp, gender, age,ldate, state, city, password, cpassword } = req.body;
  
  if (!name || !email || !phone || !bloodgrp || !gender || !ldate || !age  ||!state || !city || !password || !cpassword) {
   
    return res.status(422).json({ error: "plz fill all the deatils" });
  }
  
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: "Email already registered" });
    }

    const user = new User({ name, email, phone, bloodgrp, gender, age,profpic,ldate, state, city, password, cpassword });
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
router.post("/searchpage",async(req,res)=>{
  try {
   
    const { state,city,bloodgrp } = req.body;
    const users=await User.find({state:state,city:city,bloodgrp:bloodgrp});
   
    res.json(users);

  }catch(err){
   console.log(err);
   res.status(500).json({message:"internal server"});
  }


})
router.put("/update", upload.single('profpic'),async(req,res)=>{
  console.log(req.body);
  console.log("backend successfull");
console.log(req.params);
  const recordId = req.body._id;
  const newData = req.body;
  
  // If an image was uploaded, update the image field in the newData object
  if (req.file) {
    var path = require('path');
    newData.profpic = path.basename(req.file.path); // Assuming the file path is stored as the image field
  }

  
  if (!newData.name || !newData.email || !newData.phone || !newData.bloodgrp || !newData.gender || !newData.ldate || !newData.age  ||!newData.state || !newData.city || !newData.password || !newData.cpassword) {
   
    return res.status(422).json({ error: "plz fill all the deatils" });
  }
  try{
    User.findByIdAndUpdate(recordId, { $set: newData }, { new: true })
    .then((updatedRecord) => {
      if (updatedRecord) {
        res.json(updatedRecord);
      } else {
        res.status(404).json({ error: 'Record not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });

  }


catch(err){
  console.log(err);
  res.status(500).json({message:"internal server error occurred"});
}



})
router.get("/logout",(req,res)=>{
  console.log("hello my slogout");
  res.clearCookie("jwtoken",{path:"/"});
  res.status(200).send("User Logout");
  
  })



module.exports = router;