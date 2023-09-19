import  Image  from "react-bootstrap/Image";
import React,{Fragment} from "react";
import  {Table,Button}  from "react-bootstrap";
import { UsersContext } from "../context/UsesrsContext";
import { useContext } from "react";
import {Link,useNavigate} from'react-router-dom';
export default function AllUsersTable(props){
  const value = useContext(UsersContext);
  const [cRates] = value.crates;
  let history=useNavigate();

  const handleEdit=(id,firstName,lastName,email,phone,birthDate)=>{

    localStorage.setItem('firstName',firstName);
    localStorage.setItem('lastName',lastName);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('birthDate',birthDate);
    localStorage.setItem('id',id);
  }
  const handleDelete =(id)=>{
  var index=cRates?.users?.map(function(e){
    return e.id
  }). indexOf(id);
  cRates?.users?.splice(index,1);
  history('/AllUsers')
 }
    return(
        <Fragment>
          <h1 className="my-4" >All Users ...</h1>
          <Table className="border border-warning" >
          <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>birthDate</th>
           </tr>
          </thead>
          <tbody>
           {
            cRates?.users?.map((user) =>{    
              return (
               <tr>
                 <td><Image src={user.image} className="w-25 h-25"/></td>
                 <td>{user.firstName}</td>
                 <td>{user.lastName}</td>
                 <td>{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.birthDate}</td>
                  <td>
                    <Link to={`/edit`}>
                    <Button  variant="warning"
                      className=' mx-auto' 
                      onClick={()=> handleEdit((user.id).toString(),user.firstName,user.lastName,user.email,user.phone,user.birthDate)} >Edit</Button>
                    </Link>
                    <Button  variant="dark"
                     className=' mx-auto text-warning'  
                     onClick={()=> handleDelete(user.id)}>Delete</Button></td>
                  </tr>
                );
             })}
           
          </tbody>
          </Table>
           <Link  to="/create">
            <Button variant="warning"
                     className=' mx-auto ' >Create</Button></Link>
        </Fragment>
    );
}