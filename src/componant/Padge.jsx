import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { PadgeContext } from '../context/PadgeContext';
export default function Padge(props){
    const {Count} =useContext(PadgeContext);
    return(
    <Badge pill bg="warning" text="dark">
            {Count}
    </Badge>
    );
}