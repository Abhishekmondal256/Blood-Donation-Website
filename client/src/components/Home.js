import React from "react";
import { NavLink } from "react-router-dom";
const Home=()=>{
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
    </div>


</>


)


}
export default Home;