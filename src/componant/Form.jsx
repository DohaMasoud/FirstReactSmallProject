import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from "react-bootstrap";
function SignInForm() {
  const [modal, setModal] = useState(false);
  var [alert, setalert] = useState('');

    const initalFormData = {
        username: "",
        email:"",
        password: "",
    };
    
    const alert1="welcom my Dear ❤🌏";
    const alert2="sorry enter valid data! Try Again 😃";
    const [formData, setFormData] = useState({ ...initalFormData });
    const [err, setErr] = useState({
        username: null,
        email:null,
        password:null,
   });
   const FormModel = (props) => {
    return (
      <Modal 
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="text-center fs-6">
          {props.alert}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.Hide} className='btn btn-warning'>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  } 
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const changeHandler = (e) => {
        if(e.target.name === "username" && e.target.value.length <=2) {
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
        }else {
            setErr({...err,[e.target.name]: null,});
        }
        setFormData({...formData,[e.target.name]: e.target.value,});
        };
   const submitHandler = (e) => {
        e.preventDefault();
        if (!err.username &&!err.email &&!err.password && formData.username.length > 2 && emailRegex.test(formData.email) && formData.password.length > 6)
           {
              setFormData({...initalFormData, });
              setalert(alert=alert1) ;
            }else {
              setalert(alert=alert2) ;
            }
}
  return (
    <>
    <Form className='border border-warning p-5  w-75 h-50 d.block mx-auto my-5' onSubmit={submitHandler}>
    <h1 className='text-center mb-5'>Login....</h1>
    <Form.Group >
      <div className='row container row-cols-3 pb-3 mx-auto'>
     <Form.Label htmlFor="input_username" style={{width:'fit-content'}}>username : </Form.Label>
      <Form.Control
        type="text"
        id="input_username"
        name='username'
        className='w-50 border border-warning'
        style={{display:'inline !important' }}
        placeholder="Enter UserName"
        onChange={changeHandler}
        value={formData.username}
      />
      <Form.Text className={err.username ? "bg-dark text-light mx-2" : "text-muted"}>
          {err.username? err.username:"enter valid username"}
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
      <Button
        variant="warning"
        className='mt-5 mx-auto'
        style={{display:'block'}}
        type="submit"
        onClick={() => { setModal(true)}} 
      >
        Submit
      </Button>
      </Form>
      <FormModel alert={alert}  show={modal}  Hide={() => setModal(false)}/>
    </>
  );
  }
export default SignInForm;