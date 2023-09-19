import React from "react";
import { useEffect, useState} from "react";
import ProductCard from "./ProdutCart";
export default function ProductInfo(){
  const [data,setdata]=useState('');
  
  const fetchUserData = () => {
    fetch(`https://dummyjson.com/product`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setdata(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
 return(
   <>
        {data?.products?.map((product) =>{ 
        if(product.category=='laptops'||product.category=='smartphones'){
          return (
            <ProductCard
             key={product.id}
             key2={product.id}
             desc={product.description}
             title={product.title}
             price={product.price}
             discount={product.discountPercentage}
             rating={product.rating}
             stock={product.stock}
             brand={product.brand}
             category={product.category}
             img={product.images[0]}
            />
          )}})
      }
    </>
);
}