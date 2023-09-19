import Carousels from "../componant/Carousels";
import HomeUserInfo from "../componant/HomeUsersInfo";
import Image from 'react-bootstrap/Image';
import {Row} from 'react-bootstrap'
export default function Home(){
    return(
        <>
        <Carousels/>
        <h1 className="m-5">Our investors and Advisors</h1>
        <Row className="row-cols-5 m-5 ">
            <HomeUserInfo/>
        </Row>
        <Row className=" row-cols-2 mt-3 p-5">
           <Image src='assests/unnamed.webp'/>
           <p className='my-auto fs-2'>Amazing apps, powerful protection and stand-out devices let you express, extend and explore your world like never before.</p>
        </Row>
        <Row className=" row-cols-2 mx-3 p-5">
           <p className='my-auto fs-2'>Amazing apps, powerful protection and stand-out devices let you express, extend and explore your world like never before.</p>
           <Image src='assests/unnamed2.png'/>
        </Row>
        </>
    );
}