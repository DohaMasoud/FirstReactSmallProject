import ProductInfo from "../componant/ProductInfo";
import Row from 'react-bootstrap/Row'
 export default function ProdPage(){
    return(
     <>
     <h1 className="mt-5">Products</h1>
     <Row className="row-cols-4 m-3 justify-content-between">
     <ProductInfo/>
     </Row>
     </>
    );
 }