import React, { useEffect ,useState}  from "react";
// import abhipic from "../images/registration.jpeg";
import { NavLink,useNavigate } from "react-router-dom";
import MyModal  from "./ShowModal";
const About = ()=>{
   const navigate=useNavigate();
   const [userData,setUserData]=useState({});
   const [showModal,setShowModal]=useState(false);

   const closeModal=()=>{setShowModal(false);
   
   }
const callAboutPage=async()=>{
try{
const res=await fetch("/about",{
method:"GET",
headers:{

   Accept:"application/json",
   "Content-Type":"application/json"
},
credentials:"include"


});
const data=await res.json();
console.log(data);
setUserData(data);
if(!(await res).status===200){
   const error=new Error(res.error);
   throw error;
}


}
catch(err){
console.log(err);
navigate("/login",{replace:true});
}
}

   useEffect(()=>{
callAboutPage();
   },[])



    return(
<>
<div className="eprof">
<form method="GET">
<div className="row" id="row">
<div className="col">
<img src={"http://localhost:5000/public/images/"+userData.profpic} alt="abhi" width="150px"/> 


</div>
<div className="col2">

<div className="phead">

    <h5>{userData.name}</h5>
    <h6>{userData.email}</h6>
    
</div>

</div>
<div className="col3">
<button onClick={(e)=>{e.preventDefault();setShowModal(true)}} id="peditbtn" className="peditbtn" >Edit Info</button>
{showModal && <MyModal  closeModal={closeModal} pup={userData._id}/>}

</div>


</div>
<div className="row2" id="row2">
<div className="cole1" id="cole1">
<div className="rowp" id="rowp">
<div className="colp">
<label >User ID :</label>
</div>
   <div className="colp">
    <p>{userData._id}</p>
   </div> 

</div>

<div className="rowp" id="rowp">
<div className="colp">
<label >Blood Grp :</label>
</div>
   <div className="colp">
    <p>{userData.bloodgrp}</p>
   </div> 

</div>
<div className="rowp" id="rowp">
<div className="colp">
<label >Gender :</label>
</div>
   <div className="colp">
    <p>{userData.gender}</p>
   </div> 

</div>
<div className="rowp" id="rowp">
<div className="colp">
<label >Age :</label>
</div>
   <div className="colp">
    <p>{userData.age}</p>
   </div> 

</div>


</div>
<div className="cole2" id="cole2">
<div className="rowp" id="rowp">
<div className="colp">
<label >Phone No :</label>
</div>
   <div className="colp">
    <p>{userData.phone}</p>
   </div> 

</div>
<div className="rowp" id="rowp">
<div className="colp">
<label >Last Donated :</label>
</div>
   <div className="colp">
    <p>{userData.ldate}</p>
   </div> 

</div>

<div className="rowp" id="rowp">
<div className="colp">
<label >State :</label>
</div>
   <div className="colp">
    <p>{userData.state}</p>
   </div> 

</div>
<div className="rowp" id="rowp">
<div className="colp">
<label >City :</label>
</div>
   <div className="colp">
    <p>{userData.city}</p>
   </div> 

</div>
</div>


</div>








</form>
</div>


</>
    )

}
export default About;