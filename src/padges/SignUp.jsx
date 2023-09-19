import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function SignUp() {

    const initalFormData = {
        firstname: "",
        lastname:"",
        email: "",
        password:"",
        phone:"",
        
    };
    
    const [formData, setFormData] = useState({ ...initalFormData });
    const [err, setErr] = useState({
      firstname: null,
      lastname:null,
      email: null,
      password:null,
      phone:null,
     
   });
   
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const changeHandler = (e) => {
        if(e.target.name === "firstname" && e.target.value.length <=2) {
            setErr({
              ...err,
              [e.target.name]: `${e.target.name} must be more than two letter`,
            });
        }else if(e.target.name === "lastname" && e.target.value.length <=2) {
          setErr({
            ...err,
            [e.target.name]: `${e.target.name} must be more than two letter`,
          });
        }else if(e.target.name === "email" && !emailRegex.test(e.target.value)) {
            setErr({
              ...err,
              [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
            });
        }else if (e.target.name === "password" && e.target.value.length <= 6) {
            setErr({
              ...err,
              [e.target.name]: `${e.target.name} must be more than 6 characters.`,
           });
        }else if(e.target.name === "phone" && e.target.value.length !=11) {
          setErr({
            ...err,
            [e.target.name]: `${e.target.name} must be 11 numbers`,
          });
        }else {
            setErr({...err,[e.target.name]: null,});
        }
        setFormData({...formData,[e.target.name]: e.target.value,});
        };
   const submitHandler = (e) => {
        e.preventDefault();
        if (!err.firstname &&!err.lastname &&!err.email &&!err.password &&!err.phone &&!err.birthdate && formData.firstname.length > 2 && formData.lastname.length > 2 && emailRegex.test(formData.email) && formData.password.length > 6 && formData.phone.length == 11)
           {
              setFormData({...initalFormData, });
              alert("welcom my Dear ❤🌏")
            }else {
              alert("sorry enter valid data! Try Again 😃")
            }
}
  return (
    <>
    <Form className='border border-warning p-5  w-75 h-50 d.block mx-auto my-5' onSubmit={submitHandler}>
    <h1 className='text-center mb-5'>Sign Up....</h1>
    <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto'>
     <Form.Label htmlFor="input_firstname" style={{width:'fit-content'}}> First Name : </Form.Label>
      <Form.Control
        type="text"
        id="input_firstname"
        name='firstname'
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        placeholder="Enter firstname"
        onChange={changeHandler}
        value={formData.firstname}
      />
      <Form.Text className={err.firstname ? "bg-dark text-light mx-2" : "text-muted"}>
          {err.firstname? err.firstname:"enter valid username"}
      </Form.Text>
      </div>
      </Form.Group>
      <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto'>
     <Form.Label htmlFor="input_lastname" style={{width:'fit-content'}}> Last Name : </Form.Label>
      <Form.Control
        type="text"
        id="input_lastname"
        name='lastname'
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        placeholder="Enter lastname"
        onChange={changeHandler}
        value={formData.lastname}
      />
      <Form.Text className={err.lastname ? "bg-dark text-light mx-2" : "text-muted"}>
          {err.lastname? err.lastname:"enter valid username"}
      </Form.Text>
      </div>
      </Form.Group>
      <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto'>
      <Form.Label htmlFor="input_email"  style={{width:'fit-content'}} className='pe-5'>Email : </Form.Label>
      <Form.Control
        type="text"
        id="input_email"
        name='email'
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        placeholder="Enter email"
        onChange={changeHandler}
        value={formData.email}
      />
      <Form.Text className={err.email ? "bg-dark text-light mx-2" : "text-muted"}>
          {err.email? err.email: "Your email should contain'@'"}
      </Form.Text>
      </div>
      </Form.Group>
      <Form.Group >
      <div className='row container row-cols-3 mx-auto'>
      <Form.Label htmlFor="inputPassword5"  style={{width:'fit-content'}}>Password : </Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        name="password"
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        placeholder="Enter password"
        onChange={changeHandler}
        value={formData.password}
      />
      <Form.Text className={err.password ? "bg-dark text-light mx-2" : "text-muted"}>
       {err.password? err.password:"Password has to be more than 6 characters "}
      </Form.Text>
      </div>
      </Form.Group>
      <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto mt-3'>
      <Form.Label htmlFor="input_phone" style={{width:'fit-content'}}> phone  : </Form.Label>
      <Form.Control
        type="text"
        id="input_phone"
        name='phone'
        className='w-50 border border-warning'
        style={{display:'inline !important',marginLeft:"20px" }}
        placeholder=" +0112 571 2403"
        onChange={changeHandler}
        value={formData.phone}
      />
      <Form.Text className={err.phone ? "bg-dark text-light mx-2" : "text-muted"}>
          {err.phone? err.phone:"Enter Valid UserName"}
      </Form.Text>
      </div>
      </Form.Group>
      <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto'>
     <Form.Label htmlFor="input_birthdate" style={{width:'fit-content'}}> BirthDate : </Form.Label>
      <Form.Control
        type="date"
        id="input_birthdate"
        name='birthdate'
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        
      />
      <Form.Text className= "text-muted">
        Enter Your BirthDate
      </Form.Text>
      </div>
      </Form.Group>
      <Button
        variant="warning"
        className='mt-5 mx-auto'
        style={{display:'block'}}
        type="submit" 
      >
        Submit
      </Button>
      </Form>
    </>
  );
  }
export default SignUp;