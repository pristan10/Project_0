import React from 'react'
import {Link} from 'react-router-dom';
import Paypal from './Paypal';

function Cardtotal({value,history}) {
    const {cardtotal,cardsubtotal,cleartotal}=value;
    return (
        <div style={{position:'relative' ,left:'20px' }} >
            <button onClick={()=>value.cleartotal()} className="btn btn-outline-danger my-3">Clear Card</button>
            <h3>Tatal = ${cardtotal}</h3>
           <Link to='/payment'> <button className='btn btn-outline-warning my-3'>Pay Now</button></Link>
        <Paypal total={cardtotal} cleartotal={cleartotal} history={history}/>
        </div>
    )
}

export default Cardtotal
