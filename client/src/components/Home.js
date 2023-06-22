import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import {UserContext} from "../App";
const Home=()=>{
  const {state,dispatch}= useContext(UserContext);

const Ho=()=>{
  if(!state){
return(
<p style={{marginTop:"1rem" ,fontSize:"1.3rem"}}>To Become a Donor Kindly Register</p>

)
  }
  
}

return (
<>
<div className="home-page">
      <div className="hsection">
        <div className="hcontent">
          <h1>The gift of blood is the gift of life.</h1>
          <p>Donate blood and save lives</p>
          <button className="donate-button"  >
          <NavLink  to="/searchpage" style={{ textDecoration: 'none' ,color:"white", fontSize:"20px"}}>Find Donors</NavLink>
          
          </button>
          
        </div>
        
      </div>
      <Ho/>
      
    </div>


</>


)


}
export default Home;