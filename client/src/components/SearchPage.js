import React ,{useEffect,useState} from "react";
import "../App.css";
import homeimg from "../images/bbankimg.avif";

import { useNavigate } from "react-router-dom";



const SearchPage = () => {
    const [ispos,setPos]=useState(false);
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    const [search,setSearch]=useState({
    state:"",city:"",bloodgrp:""

   });
   
   const [lis,setLis]=useState([]);
   
    const getUsers=async()=>{
        
        try{
           
                const res=await fetch("/searchpage",{
                method:"GET",
                headers:{
                
                   Accept:"application/json",
                   "Content-Type":"application/json"
                }
                
                
                });
                const data=await res.json();
console.log(data);
setUsers(data);

console.log(data.profpic);
                     
                    }
            
        
   
        
            
                catch(err){
                    console.log(err);
                    navigate("/",{replace:true});
                    }
        
        
        
        
        }
        
          let name,value;
               const handleSearch=(e)=>{
             console.log(e);
             name=e.target.name;
             value=e.target.value;
             setSearch({...search,[name]:value});
               }

               const postSearch=async(e)=>{
                e.preventDefault();
                const { state, city,bloodgrp}=search;
                const res=await fetch("/searchpage",{
                method:"POST",
                headers:{
              "Content-Type":"application/json"
              
                },
                body:JSON.stringify({
                   state,city,bloodgrp
                })
              
                });
                const data=await res.json();
                console.log(data);
                
               
                if(res.status===422|| !data){
                 
                  console.log("search failed");
                }
                else{
                  
                  console.log("search successfull");
                  setLis(data);
                  setPos(true);
                  
                  
                }
            }
        useEffect(()=>{
            
            getUsers();
               },[]);


               
              
              
              
              


              

    return (
        <>
            <section className="hm">
            
                <img src={homeimg} alt="hom"></img>

                <div class="homecontent homecontainer">
                    <div class="textDiv">
                        <span className="smallText">
                            Our Donors
                        </span>
                        <h1 className="homeTitle">
                            Search for Donors

                        </h1>

                    </div>
                    <form method="POST" id="search-form">
                    <div className="cardDiv grid">
                    
                        <div className="dinp">
                            <label htmlFor="state">Search Your State:</label>
                            <div className="input flex">
                                <input type="text" name="state" id="state" value={search.state}  autoComplete="off" onChange={handleSearch} placeholder="Enter state here" />
                            </div>

                        </div>
                        <div className="dinp">
                            <label htmlFor="city">Search Your City:</label>
                            <div className="input flex">
                                <input type="text" name="city" id="city" value={search.city}  autoComplete="off" onChange={handleSearch} placeholder="Enter City here" />
                            </div>

                        </div>
                        <div className="dinp">
                            <label htmlFor="bloodgrp">Select Your Blood Group:</label>
                            <div className="input flex">
                                <input type="text" name="bloodgrp" id="bloodgrp" value={search.bloodgrp}  autoComplete="off"  onChange={handleSearch} placeholder="Enter Blood group here" />
                            </div>

                        </div>


                    </div>
                    <div className="searchOptions flex">
                        <input type="submit" className="sub" id="sub" onClick={postSearch} value="Search" />
                    </div>
                    </form>
                </div>
            </section>
{
          (ispos===false)?   <section className="mainy  section">
            <form method="GET">
                <div className="secTitle">
                    <h3 className="title">
                        Active Donors
                    </h3>

                </div>
                <div className="secContent grid">
                   {
                     users.map((curElem,id)=>{
                         return(
                            <div key={id}
                   className="singleDestination">
                    <div className="imageDiv">
                    <img src={"http://localhost:5000/public/images/"+ curElem.profpic} alt="h" />
                         </div>
                      <div className="cardInfo">
                         
                            <div class="single">
                            <div className="don"> <label>Name :</label></div>
                                <div className="abt">
                                <p>{curElem.name}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Email:</label></div>
                                <div className="abt">
                                <p>{curElem.email}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Phone:</label></div>
                                <div className="abt">
                                <p>{curElem.phone}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>BloodGroup:</label></div>
                                <div className="abt">
                                <p>{curElem.bloodgrp}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Gender:</label></div>
                                <div className="abt">
                                <p>{curElem.gender}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Age:</label></div>
                                <div className="abt">
                                <p>{curElem.age}</p></div>
                            </div>
                            <div class="single">
                            <div className="don">  <label>Last Donated:</label></div>
                                <div className="abt">
                                <p>{curElem.ldate}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>City:</label></div>
                                <div className="abt">
                                <p>{curElem.city}</p></div>
                            </div>
                            <div class="single">
                            <div className="don">  <label>State:</label></div>
                                <div className="abt">
                                <p>{curElem.state}</p></div>
                            </div>
                                
                                                 
                   </div>
                   
                   </div>  
                   )
                         



                        })
  
  
  
                     }
                     
                </div>
                </form>
            </section> : <section className="mainy  section">
            
                <div className="secTitle">
                    <h3 className="title">
                         Active Donors
                    </h3>

                </div>
                <div className="secContent grid">
                   {
                     lis.map((curElem,id)=>{
                         return(
                            <div key={id}
                   className="singleDestination">
                    <div className="imageDiv">
                    <img src={"http://localhost:5000/public/images/"+ curElem.profpic} alt="h" />
                         </div>
                      <div className="cardInfo">
                         
                            <div class="single">
                            <div className="don"> <label>Name :</label></div>
                                <div className="abt">
                                <p>{curElem.name}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Email:</label></div>
                                <div className="abt">
                                <p>{curElem.email}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Phone:</label></div>
                                <div className="abt">
                                <p>{curElem.phone}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>BloodGroup:</label></div>
                                <div className="abt">
                                <p>{curElem.bloodgrp}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Gender:</label></div>
                                <div className="abt">
                                <p>{curElem.gender}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>Age:</label></div>
                                <div className="abt">
                                <p>{curElem.age}</p></div>
                            </div>
                            <div class="single">
                            <div className="don">  <label>Last Donated:</label></div>
                                <div className="abt">
                                <p>{curElem.ldate}</p></div>
                            </div>
                            <div class="single">
                            <div className="don"> <label>City:</label></div>
                                <div className="abt">
                                <p>{curElem.city}</p></div>
                            </div>
                            <div class="single">
                            <div className="don">  <label>State:</label></div>
                                <div className="abt">
                                <p>{curElem.state}</p></div>
                            </div>
                                
                                                 
                   </div>
                   
                   </div>  
                   )
                         



                        })
  
  
  
                     }
                     
                </div>
                </section>
               
        }
                        
                  
                   
                   


                  



                


        </>


    )


}
export default SearchPage;