import React,{ useState,useEffect } from "react";
import  ReactDOM  from "react-dom";
const MyModal=({closeModal,pup})=>{
    const [userUpdate,setUserUpdate]=useState({
       name:"", email:"", phone:"", bloodgrp:"", gender:"", age:"",profpic:"", ldate:"", state:"", city:"", password:"", cpassword:""
    
      });
      const validateEmail = (email) => {
    
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
      let name,value;
      const handleInputsUpdate=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUserUpdate({...userUpdate,[name]:value});
          }
          const handleImageUpdate=(e)=>{
            console.log(e.target.files[0]);
          
          
          setUserUpdate({...userUpdate,profpic:e.target.files[0]});
          
          }
const handleUpdate=async(e)=>{
  if (!validateEmail(userUpdate.email)) {
    window.alert("Invalid email format");
    return;
  }
    const formData=new FormData();
    formData.append("_id",pup);
    formData.append("name",userUpdate.name);
    formData.append("email",userUpdate.email);
    formData.append("phone",userUpdate.phone);
    formData.append("bloodgrp",userUpdate.bloodgrp);
    formData.append("gender",userUpdate.gender);
    formData.append("age",userUpdate.age);
    formData.append("profpic",userUpdate.profpic,userUpdate.profpic.name);
    formData.append("ldate",userUpdate.ldate);
    formData.append("state",userUpdate.state);
    formData.append("city",userUpdate.city);
    formData.append("password",userUpdate.password);
    formData.append("cpassword",userUpdate.cpassword);
  const res=await fetch("/update",{
    method: 'PUT',
    body:formData
  }).then((res)=>res.json()).then((data)=>{
    console.log(data);}).catch((err)=>{
        console.log(err);
    });

}






useEffect(()=>{
document.body.style.overflowY="hidden";
return ()=>{
document.body.style.overflowY="scroll";

}
},[]);


return ReactDOM.createPortal (
<>
<div className="modal-wrapper" onClick={closeModal}></div>
<div className="modal-container">
<form method="PUT" className="register-form" id="register-form updateform">
     <div className="form-group newformgroup"><div id="lab newlab">Name</div>
      <div id="lab2"> <label htmlFor="name">
       <i class="zmdi zmdi-account "></i>
        </label>
       <input type="text" name="name" id="name" autoComplete="off" value={userUpdate.name} onChange={handleInputsUpdate} placeholder="enter your name"/>
    
       </div> </div>
     
     <div className="form-group newformgroup"><div id="lab">Email</div>
      <div id="lab2"> <label htmlFor="email">
       <i class="zmdi zmdi-email "></i>
        </label>
       <input type="email" name="email" id="email" autoComplete="off" value={userUpdate.email} onChange={handleInputsUpdate}  placeholder="enter your email"/>
    
      </div>  </div>
      
     <div className="form-group newformgroup"><div id="lab">Phone</div>
      <div id="lab2"> <label htmlFor="phone">
       <i class="zmdi zmdi-phone-in-talk "></i>
        </label>
       <input type="number" name="phone" id="phone" autoComplete="off" value={userUpdate.phone} onChange={handleInputsUpdate}  placeholder="enter your phone number"/>
    
      </div>  </div>
     <div className="form-group newformgroup"><div id="lab">BloodGroup</div>
      <div id="lab2"> <label htmlFor="bloodgrp">
       <i class="zmdi zmdi-lamp"></i> 
       </label>
       <input type="text" name="bloodgrp" id="bloodgrp" autoComplete="off" value={userUpdate.bloodgrp} onChange={handleInputsUpdate}  placeholder="enter your bloodgroup"/>
       </div>
     </div>
     {/* <div className="form-group newformgroup"><div id="lab">Gender</div>
      <div id="lab2"> <label htmlFor="gender">
       <i class="zmdi zmdi-male-female"></i>
        </label>
       <input type="text" name="gender" id="gender" autoComplete="off" value={userUpdate.gender} onChange={handleInputsUpdate}  placeholder="enter your gender"/>
    
     </div>  
    
     </div> */}
       <div className="form-group newformgroup">
        <div id="lab">Gender</div>
        <div id="lab2">
        <i class="zmdi zmdi-male-female"></i>
        <div className="prt">
        <div className="p1">
        <label htmlFor="gender">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={userUpdate.gender === "male"}
                  onChange={handleInputsUpdate}
                />
                Male
              </label>
              </div>
              <div className="p1">
              <label htmlFor="gender">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={userUpdate.gender === "female"}
                  onChange={handleInputsUpdate}
                />
                Female
              </label>
              </div>
              <div className="p1">
              <label htmlFor="gender">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={userUpdate.gender === "other"}
                  onChange={handleInputsUpdate}
                />
                Other
              </label>
              </div>
        </div></div>


       </div>

     <div className="form-group newformgroup"><div id="lab">Age</div>
      <div id="lab2"> <label htmlFor="age">
       <i class="zmdi zmdi-edit"></i>
        </label>
       <input type="number" name="age" id="age" min="1" autoComplete="off" value={userUpdate.age} onChange={handleInputsUpdate} placeholder="enter your age"/>
    
        </div></div>
        <div className="form-group newformgroup"><div id="lab">Profile Pic</div>
      <div id="lab2"> <label htmlFor="profpic">
       <i class="zmdi zmdi-image"></i>
        </label>
       <input type="file" name="profpic" id="profpic"  autoComplete="off" onChange={handleImageUpdate}  placeholder="profile pic"/>
    
        </div></div>
     <div className="form-group newformgroup"><div id="lab">Last Donated</div>
      <div id="lab2"> <label htmlFor="ldate">
       <i class="zmdi zmdi-calendar"></i>
        </label>
       <input type="date" name="ldate" id="ldate" className="ld" autoComplete="off" value={userUpdate.ldate} onChange={handleInputsUpdate}  placeholder="last donated (dd/mm/yy)" />
    
      </div>  </div>
     <div className="form-group newformgroup"><div id="lab">State</div>
      <div id="lab2"> <label htmlFor="state">
       <i class="zmdi zmdi-lock"></i>
        </label>
       <input type="text" name="state" id="state" autoComplete="off" value={userUpdate.state} onChange={handleInputsUpdate} placeholder="enter your state"/>
    
      </div>  </div>
     <div className="form-group newformgroup"><div id="lab">City</div>
      <div id="lab2"> <label htmlFor="city">
       <i class="zmdi zmdi-gps-dot"></i>
        </label>
       <input type="text" name="city" id="city" autoComplete="off" value={userUpdate.city} onChange={handleInputsUpdate}  placeholder="confirm your city"/>
    
       </div> </div>
     <div className="form-group newformgroup"><div id="lab">Password</div>
      <div id="lab2"> <label htmlFor="password">
       <i class="zmdi zmdi-gps-dot"></i> 
       </label>
       <input type="password" name="password" id="password" autoComplete="off" value={userUpdate.password} onChange={handleInputsUpdate}  placeholder="enter your password"/>
       </div>
     </div>
     <div className="form-group newformgroup"><div id="lab">Confirm Password</div>
      <div id="lab2"> <label htmlFor="cpassword">
       <i class="zmdi zmdi-lock"></i> 
       </label>
       <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={userUpdate.cpassword} onChange={handleInputsUpdate}  placeholder="confirm your password"/>
       </div>
     </div>
    <div className="newformgroupbtn">
     <button type="button" className="model-btn" onClick={()=>{handleUpdate();closeModal();}} >Update</button>
     </div>
    </form>



</div>
</>,document.querySelector(".myPortalModalDiv")

)



}
export default MyModal;