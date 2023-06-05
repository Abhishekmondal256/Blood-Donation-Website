import React,{useState} from "react";
import {  NavLink,useNavigate} from "react-router-dom";
import "../App.css";
const Signup=()=>{
const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"", email:"", phone:"", bloodgrp:"", gender:"", age:"",profpic:"", ldate:"", state:"", city:"", password:"", cpassword:""

  });
  let name,value;
  const handleInputs=(e)=>{
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
  }
const handleImage=(e)=>{
  console.log(e.target.files[0]);


setUser({...user,profpic:e.target.files[0]});

}
  const PostData=async(e)=>{
  e.preventDefault();
//   const {name, email, phone, bloodgrp, gender, age,ldate, state, city, password, cpassword}=user;
//   const res=await fetch("/register",{
//   method:"POST",
//   headers:{
// "Content-Type":"application/json"

//   },
//   body:JSON.stringify({
//     name, email, phone, bloodgrp, gender, age,ldate, state, city, password, cpassword
//   })

//   });

   const formData=new FormData();
   formData.append("name",user.name);
   formData.append("email",user.email);
   formData.append("phone",user.phone);
   formData.append("bloodgrp",user.bloodgrp);
   formData.append("gender",user.gender);
   formData.append("age",user.age);
   formData.append("profpic",user.profpic,user.profpic.name);
   formData.append("ldate",user.ldate);
   formData.append("state",user.state);
   formData.append("city",user.city);
   formData.append("password",user.password);
   formData.append("cpassword",user.cpassword);
   const res=await fetch("/register",{
method:"POST",
body:formData

   }).then((res)=>res.json()).then((data)=>{
    window.alert("registration successfull");
    console.log(data);
    navigate("/login",{replace:true});}).
    catch((err)=>{
      window.alert("registration failed");
      console.log(err);
   });

  // const data=await res.json();
  // console.log(data);
  // if(res.status===422|| !data){
  //   window.alert("registration failed");
  //   console.log("invalid registration");
  // }
  // else{
  //   window.alert("registration successfull");
  //   console.log("registration successfull");
  //  navigate("/login",{replace:true});
  // }





  }

return (
      <>
    <section className="signup">
    
    <div className="container">
    <div className="signup-image" >
       <div className="im" style={{ backgroundImage: `url(/signuppage.webp)`, 
        backgroundRepeat: 'no-repeat' ,opacity:'0.7'}} />
        
    
    
    </div>
    <div className="signup-content">
    <h2 className="ftitle">Sign up</h2>
    <form method="POST" className="register-form" id="register-form">
     <div className="form-group"><div id="lab">Name</div>
      <div id="lab2"> <label htmlFor="name">
       <i class="zmdi zmdi-account "></i>
        </label>
       <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="enter your name"/>
    
       </div> </div>
     
     <div className="form-group"><div id="lab">Email</div>
      <div id="lab2"> <label htmlFor="email">
       <i class="zmdi zmdi-email "></i>
        </label>
       <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInputs}  placeholder="enter your email"/>
    
      </div>  </div>
     <div className="form-group"><div id="lab">Phone</div>
      <div id="lab2"> <label htmlFor="phone">
       <i class="zmdi zmdi-phone-in-talk "></i>
        </label>
       <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInputs}  placeholder="enter your phone number"/>
    
      </div>  </div>
     <div className="form-group"><div id="lab">BloodGroup</div>
      <div id="lab2"> <label htmlFor="bloodgrp">
       <i class="zmdi zmdi-lamp"></i> 
       </label>
       <input type="text" name="bloodgrp" id="bloodgrp" autoComplete="off" value={user.bloodgrp} onChange={handleInputs}  placeholder="enter your bloodgroup"/>
       </div>
     </div>
     <div className="form-group"><div id="lab">Gender</div>
      <div id="lab2"> <label htmlFor="gender">
       <i class="zmdi zmdi-male-female"></i>
        </label>
       <input type="text" name="gender" id="gender" autoComplete="off" value={user.gender} onChange={handleInputs}  placeholder="enter your gender"/>
    
     </div>  
    
     </div>
     <div className="form-group"><div id="lab">Age</div>
      <div id="lab2"> <label htmlFor="age">
       <i class="zmdi zmdi-edit"></i>
        </label>
       <input type="number" name="age" id="age" min="1" autoComplete="off" value={user.age} onChange={handleInputs} placeholder="enter your age"/>
    
        </div></div>
        <div className="form-group"><div id="lab">Profile Pic</div>
      <div id="lab2"> <label htmlFor="profpic">
       <i class="zmdi zmdi-image"></i>
        </label>
       <input type="file" name="profpic" id="profpic"  autoComplete="off"  onChange={handleImage} placeholder="profile pic"/>
    
        </div></div>
     <div className="form-group"><div id="lab">Last Donated</div>
      <div id="lab2"> <label htmlFor="ldate">
       <i class="zmdi zmdi-calendar"></i>
        </label>
       <input type="date" name="ldate" id="ldate" autoComplete="off" value={user.ldate} onChange={handleInputs}  placeholder="last donated (dd/mm/yy)" />
    
      </div>  </div>
     <div className="form-group"><div id="lab">State</div>
      <div id="lab2"> <label htmlFor="state">
       <i class="zmdi zmdi-lock"></i>
        </label>
       <input type="text" name="state" id="state" autoComplete="off" value={user.state} onChange={handleInputs} placeholder="enter your state"/>
    
      </div>  </div>
     <div className="form-group"><div id="lab">City</div>
      <div id="lab2"> <label htmlFor="city">
       <i class="zmdi zmdi-gps-dot"></i>
        </label>
       <input type="text" name="city" id="city" autoComplete="off" value={user.city} onChange={handleInputs}  placeholder="confirm your city"/>
    
       </div> </div>
     <div className="form-group"><div id="lab">Password</div>
      <div id="lab2"> <label htmlFor="password">
       <i class="zmdi zmdi-gps-dot"></i> 
       </label>
       <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInputs}  placeholder="enter your password"/>
       </div>
     </div>
     <div className="form-group"><div id="lab">Confirm Password</div>
      <div id="lab2"> <label htmlFor="cpassword">
       <i class="zmdi zmdi-lock"></i> 
       </label>
       <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInputs}  placeholder="confirm your password"/>
       </div>
     </div>
    
     <div className="form-groupy ">
     <NavLink to="/login" className="signup-link">already registered</NavLink>
        <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData} />
        
     </div>
    
    </form>
    
    </div>
    
    
    </div>
    
    
    
    </section>
    
</>


)


}
export default Signup;