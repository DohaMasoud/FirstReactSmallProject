import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useContext,useEffect,useState } from "react";
import { AddProductContext } from "../context/AddProductContext";
import {ProductContext} from'../context/ProductContext'
 export default function Cart (){
    const {id} = useContext(AddProductContext);
    const value = useContext(ProductContext);
    const [cRates] = value.crates;
    var total=0;
    var numberproduct=id.length;
    {id.map((item)=>{
      {cRates?.products?.map((product) =>{
        if(item == product.id){
        total+=product.price;
        }})}
      })}
 return(
  <>
     <div className='p-2 my-5 border border-warning  fs-4 ms-3' style={{width:"fit-content"}}>
       <h3>Catd Details</h3>
       total price : {total} $<br></br>
       number of product :{numberproduct} product
     </div>
  <Row className="row-cols-4 m-3 justify-content-evenly">
         {id.map((item)=>{
           return(
                <>
           {cRates?.products?.map((product) =>{
             if(item == product.id){
              return(
                <Card style={{ width: '18rem',marginTop:"5px" }}className='border border-warning'>
          <Card.Img variant="top" src={product.images[0]} className='pt-3' style={{width:'250px' , height:'200px'}}/>
          <Card.Body>
          <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <ul style={{listStyle:"none"}}>
                <li>{product.desc}</li>
                <li>price :{product.price}$</li>
                <li>discount :{product.discountPercentage}%</li>
                <li>rating :{product.rating}*</li>
                <li>stock :{product.stock}</li>
                <li>brand :{product.brand}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      );
             
             }
            })}
            </>
         )})}
        </Row>
 </>
     );
} 