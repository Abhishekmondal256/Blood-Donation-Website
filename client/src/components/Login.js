import React,{useState,useContext} from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import {UserContext} from "../App";

const Login =()=>{
const {state,dispatch}= useContext(UserContext);

  const navigate=useNavigate();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const loginUser=async(e)=>{
e.preventDefault();
const res=await fetch("/signin",{
method:"POST",
credentials:"include",
headers:{
"Content-Type":"application/json"

},
body:JSON.stringify({
 email,password 
})


});

const data=res.json();
if(res.status===400 || !data ){
  window.alert("Invalid credentials");
}else{

  window.alert("Login successfull");
  
  navigate("/",{replace:true});
  dispatch({type:"USER",payload:true})
}

}

return (
<>
<section className="signup">

<div className="container containery">
<div className="signup-imagey" >
   <div className="imy" style={{ backgroundImage: `url(/signuppage.webp)`, 
    backgroundRepeat: 'no-repeat' ,opacity:'0.7'}} />
    


</div>
<div className="signin-content">
<h2 className="ftitley">Log In</h2>
<form method="POST" className="register-form" id="register-form">

 
 <div className="form-groupe">
 <div id="labl">Email</div>
 <div id="lab2l">  <label htmlFor="email">
   <i class="zmdi zmdi-email "></i>
   </label>
   <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="enter your email"/>
</div>
 </div>
 
 
 <div className="form-groupe">
 <div id="labl">Password</div>
 <div id="lab2l">  <label htmlFor="password">
   <i class="zmdi zmdi-gps-dot"></i>
   </label>
   <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password"/>
</div>
 </div>
 

 <div className="form-groupeu">
 <NavLink to="/signup" className="signup-link " >Create Account</NavLink>
    <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" onClick={loginUser}/>
    
 </div>

</form>

</div>


</div>



</section>



</>

)


}
export default Login;