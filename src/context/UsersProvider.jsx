import React from "react";
import { useEffect, useState } from "react";
import { UsersContext } from "./UsesrsContext";
 function UsersProvider(props){
  const[crossRates, setCrossRates]=useState([]);
  useEffect(() =>{
    async function fetchaud()
{ 
     await fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => {
    setCrossRates(data);
    console.log(data)
})
}
fetchaud();
 },[])
const value = {
    crates: [crossRates, setCrossRates]
}
 return(
    <UsersContext.Provider value={value}>
        {props.children}
    </UsersContext.Provider>
);
}
export default UsersProvider;