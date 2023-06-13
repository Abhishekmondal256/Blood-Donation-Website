import React,{createContext,useReducer} from "react";
import {Route,Routes} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import SearchPage from "./components/SearchPage";
import Logout from "./components/Logout";
import { initialState,reducer } from "../src/reducer/UseReducer";

const UserContext=createContext();
const Routing=()=>{
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>   
     <Route path="/about" element={<About/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/searchpage" element={<SearchPage/>}/>
     <Route path="/logout" element={<Logout/>}/>
     <Route  path="*" element={<Errorpage/>}/>
     </Routes>
  )
  
  }
const App =()=> {
  const [state,dispatch]=useReducer(reducer,initialState);

  return(
    
    <>
    <UserContext.Provider value={{state,dispatch}}>
   <Navbar/>
  <Routing/>
    </UserContext.Provider>
    </>
   
  )


}

export default App;
export {UserContext};