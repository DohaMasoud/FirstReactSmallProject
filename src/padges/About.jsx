import Image from 'react-bootstrap/Image';
import {Row} from 'react-bootstrap'
 export default function About (){
    return(
        <>
        <Image src="assests/background.png" fluid />
        <h1 className='mt-5'>About Us</h1>
        <Row className='mx-5 mt-3 p-5'>
            <p>At PhoneArena, we believe in the power of technology to deliver a better tomorrow. We live for the adventure of discovering innovations, dissecting what matters, finding hidden gems, and most importantly - revealing the truth for our readers. </p>
            <h2>Our mission is to lead people through the wonderful and empowering world of mobile technology.</h2>
            <p>Over 20 years ago, PhoneArena was built out of passion for technology and the belief it can improve our lives. In the two decades since, technology has already fulfilled and surpassed some of our wildest dreams and expectations. And PhoneArena was there to anticipate, analyze and enjoy every step of the way. </p>
            <p>Today, PhoneArena is one of the leading mobile technology publishers with an audience of over 5 million monthly US readers. Our team consists of 15+ experienced authors We put our hearts into creating instant news coverage, detailed reviews, expert opinion, insightful videos, rich database and useful tools with one purpose - informing, entertaining, and connecting with our audience of curious, savvy and enthusiast tech readers. </p>
            
        </Row>
        <Row className=" row-cols-2 mt-3 p-5">
           <Image src='assests/about.png'/>
           <p className='my-auto fs-2'>Amazing apps, powerful protection and stand-out devices let you express, extend and explore your world like never before.</p>
        </Row>
        </>
    );
 }