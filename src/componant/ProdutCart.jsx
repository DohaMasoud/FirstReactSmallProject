import {useContext,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PadgeContext } from '../context/PadgeContext';
import {AddProductContext} from'../context/AddProductContext'
import { Modal } from "react-bootstrap";

export default function ProductCard({key2,desc,title,price,discount,rating,stock,brand,category,img}) {
  const{CountHandler}=useContext(PadgeContext);
  const [modal, setModal] = useState(false);
  const{IdHandler}=useContext(AddProductContext)
  function clickHandler() {
    CountHandler();
  }
  const CardModel = (props) => {
    return (
      <Modal
       {...props} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter" style={{textShadow:"2px 2px 0px yellow"}}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fs-6">
          <img src={img} rounded style={{ width:"100px", height:"100px" }} />
          <ul style={{listStyle:"none"}}>
          <li>{key2}</li>
          <li>description:{desc}</li>
          <li>price:{price} $</li>
          <li>discount:{discount} %</li>
          <li>rating:{rating}</li>
          <li>stock:{stock}</li>
          <li>brand:{brand}</li>
          <li>category:{category}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.Hide} className='btn btn-warning'>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <Card style={{ width: '18rem',marginTop:"5px" }}className='border border-warning'>
      <Card.Img variant="top" src={img} className='pt-3' style={{width:'250px' , height:'200px'}}/>
      <Card.Body>
      <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ul style={{listStyle:"none"}}>
            <li>price :{price}$</li>
            <li>discount :{discount}%</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button variant="warning" id={key2} onClick={ () => {clickHandler() ; IdHandler(key2)}}>add to cart</Button>
      <Button variant="dark" className='text-warning my-3' onClick={() => { setModal(true)}} >Show Details</Button>
    </Card.Footer>
    <CardModel
              key={key2}
              key2={key2}
              desc={desc}
              title={title}
              price={price}
              discount={discount}
              rating={rating}
              stock={stock}
              brand={brand}
              category={category}
              img={img}
              show={modal}
              Hide={() => setModal(false)}
            />
    </Card>
  );
}