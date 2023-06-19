import React ,{useContext}from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logo from "../images/imageslogo.png";
import {UserContext} from "../App";
const Navbar=()=>{
  const {state,dispatch}= useContext(UserContext);
const RenderMenu=()=>{
if(state){
return(
<>
<li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/about">AboutMe</NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink  className="nav-link" to="/logout">Logout</NavLink>
      </li>


</>

)


}
else{
return(
<>
<li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink  className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/signup">Register</NavLink>
      </li>
      


</>


)



}


}



return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">
    <img src={logo} alt="" width="65" height="60"/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
     <RenderMenu/>
      
     
      {/* <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/about">AboutMe</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/signup">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/logout">Logout</NavLink>
      </li> */}
    </ul>
    
  </div>
</nav>
</>
)

}
export default Navbar;