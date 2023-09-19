import React from "react";
import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
 function ProductProvider(props){
  const[dataproduct, setdataproduct]=useState([]);
  useEffect(() =>{
    async function fetchaud()
{ 
     await fetch('https://dummyjson.com/product')
.then(res => res.json())
.then(data => {
    setdataproduct(data);
    console.log(data)
})
}
fetchaud();
 },[])
const value = {
    crates: [dataproduct, setdataproduct]
}
 return(
    < ProductContext.Provider value={value}>
        {props.children}
    </ ProductContext.Provider>
);
}
export default ProductProvider;