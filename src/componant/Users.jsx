import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function Users({img,first,last,email,phone,birthdate}){
 return (
        <CardGroup>
          <Card className='border border-warning mb-5'>
            <Card.Img variant="top" src={img} style={{width:'100%',height:'50%'}}/>
            <Card.Body>
              <Card.Title>{first}{last}</Card.Title>
              <Card.Text>
                <ul style={{listStyle:"none"}}>
                    <li>{email}</li>
                    <li>{phone}</li>
                    <li>{birthdate}</li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:'yellow'}}>
              <small className="text-muted ">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
    );
}