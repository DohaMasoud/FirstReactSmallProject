import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{ NavLink }from'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import Padge from './Padge';
function ContainerOutsideExample() {
  return (
    <>
      <Navbar expand="lg" style={{display:"flex"}} className='shadow' >
        <Navbar.Brand href="#"><img src="assests/logo-search-grid-1x.png"alt="" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent:"flex-end",width:"100%",marginTop:"-30px"}}>
         <Nav >
            <NavLink to="/Home" className="nav-link fs-4 mx-2 " style={{textShadow:"2px 2px 0px yellow"}}>Home</NavLink>
            <NavLink to="/ProdPage" className="nav-link  fs-4 mx-2" style={{textShadow:"2px 2px 0px yellow"}}>Product</NavLink>
            <NavLink to="/Cart" className="nav-link  fs-4 mx-2" style={{textShadow:"2px 2px 0px yellow"}}>Cart<Padge/></NavLink>
            <NavLink to="/Signin" className="nav-link  fs-3 " style={{marginRight:'-22px'}}><button className='btn btn-warning'>Sign In</button></NavLink>
            <NavLink to="/SignUp" className="nav-link  fs-3"><button className='btn btn-dark text-warning'>Sign Up</button></NavLink>
            <NavLink to="/About" className="nav-link  fs-4 mx-2" style={{textShadow:"2px 2px 0px yellow"}}>About</NavLink>
            <NavLink to="/AllUsers" className="nav-link  fs-4 mx-2"><FontAwesomeIcon icon={faUsers} /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default ContainerOutsideExample;