import React from "react";
import {Route,Routes} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import SearchPage from "./components/SearchPage";
const App =()=> {
  return(
    <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>   
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/searchpage" element={<SearchPage/>}/>
    <Route  path="*" element={<Errorpage/>}/>
    </Routes>
    </>
   
  )


}

export default App;
