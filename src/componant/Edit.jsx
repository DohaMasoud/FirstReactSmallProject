import React, { useState,useEffect,useContext } from "react";
import { Button,Form } from "react-bootstrap";
import { UsersContext } from "../context/UsesrsContext";
import{v4 as uuid} from "uuid";
import {Link,useNavigate} from'react-router-dom';
export default function Edit(){
    const value = useContext(UsersContext);
    const [cRates] = value.crates;
    const[firstName,setfirstname]=useState("");
    const[lastName,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[birthDate,setbirthdate]=useState("");
    const[id,setid]=useState("");
    let history=useNavigate();
    let index=[cRates?.users?.map(function(e){
        let id1 =(e.id).toString();
        console.log(typeof(id1));
        return id1;
      }).indexOf(id)];
      console.log(cRates[index.toString()]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let a = cRates?.users?.[index];
        a.firstName=firstName
        a.lastName=lastName
        a.email=email
        a.phone=phone
        a.birthDate=birthDate
        history("/AllUsers");
    }
    const handleback=(e)=>{
        e.preventDefault();
        history("/AllUsers");
    }
    useEffect(()=>{
        setfirstname(localStorage.getItem('firstName'));
        setlastname(localStorage.getItem('lastName'));
        setemail(localStorage.getItem('email'));
        setphone(localStorage.getItem('phone'));
        setbirthdate(localStorage.getItem('birthDate'));
        setid(localStorage.getItem('id'));
    },[])
    console.log(typeof(id));
    return(
        <div>
    <Form className="d-grid gap-2 border border-warning" style={{margin:"15rem"}}>
    <h1 className='text-center mb-5'>Edit....</h1>
        <Form.Group controlId="formname">
        <div className='row container row-cols-3 pb-3 mx-auto'>
          <Form.Label htmlFor="input_firstname" style={{width:'fit-content'}} className="">First Name : </Form.Label>
          <Form.Control id="input_firstname"
          className='w-50 border border-warning '
          style={{display:'inline !important' }}
           type="text"
            placeholder="enter your first name" 
            required value={firstName} 
            onChange={(e)=>setfirstname(e.target.value)}>
          </Form.Control>
        </div>
        </Form.Group>
        <Form.Group controlId="formusername">
        <div className='row container row-cols-3 pb-3 mx-auto'>
          <Form.Label htmlFor="input_lastname" style={{width:'fit-content'}}>Last Name : </Form.Label>
          <Form.Control id="input_lastname"
          className='w-50 border border-warning'
          style={{display:'inline !important' }} 
          type="text" placeholder="enter your last name" 
          required value={lastName} 
          onChange={(e)=>setlastname(e.target.value)}>
          </Form.Control>
        </div>
        </Form.Group>
        <Form.Group controlId="formemail">
        <div className='row container row-cols-3 pb-3 mx-auto'>
          <Form.Label htmlFor="input_email" style={{width:'fit-content'}}>Email: </Form.Label>
          <Form.Control id='input_email'
           className='w-50 border border-warning'
            style={{display:'inline !important' }}
            type="email" placeholder="enter your email"
            required value={email} 
            onChange={(e)=>setemail(e.target.value)}>
          </Form.Control>
          </div>
        </Form.Group>
        <Form.Group controlId="formusername">
        <div className='row container row-cols-3 pb-3 mx-auto'>
           <Form.Label htmlFor="input_phone" style={{width:'fit-content'}}>Phone : </Form.Label>
           <Form.Control id='input_phone'
            className='w-50 border border-warning'
            style={{display:'inline !important' }} 
            type="phone" placeholder="enter your phone" 
            required value={phone} 
            onChange={(e)=>setphone(e.target.value)}>
        </Form.Control>
        </div>
        </Form.Group>
        <Form.Group controlId="formusername">
        <div className='row container row-cols-2 pb-3 mx-auto'>
          <Form.Label htmlFor="input_birthdate" style={{width:'fit-content'}}>BirthDate : </Form.Label>
          <Form.Control id="input_irthdate" 
           className='w-50 border border-warning'
            style={{display:'inline !important' }}
            type="date" placeholder="enter your birthdate" 
            required value={birthDate} 
            onChange={(e)=>setbirthdate(e.target.value)}>
          </Form.Control>
          </div>
        </Form.Group>
        <div className='row container row-cols-4 pb-3 mx-auto'>
        <Button  variant="warning"
        className='mt-5 mx-auto'
        style={{display:'block'}}
        type="submit" onClick={(e)=>handleSubmit(e)}>Edit</Button>
        <Button  variant="dark"
        className='mt-5 mx-auto text-warning'
        style={{display:'block'}}
        type="submit" onClick={(e)=> handleback(e)}>back</Button>
        </div>
      </Form>
        </div>
    )
}