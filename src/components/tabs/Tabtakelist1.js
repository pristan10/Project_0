import React, { Component } from 'react'
import {InfoConsumer} from '../context';
import Info from '../Info';
import {Link} from 'react-router-dom'

 class Tabtakelist1 extends Component {
    render() {
        const {id,
            Productname,
            Price,
            incard ,
            count ,
            total ,
            img
        }=this.props.item;
        return (
            <div>
              
<InfoConsumer>
                {value=> (

<div className="col-10 col-md-3 mx-3 mb-5 pt-2"  style={{ width:'15rem' }} >
<div className="card" style={{ width:'14rem' }}>
<img src={img}  style={{ height:'13rem' }}  className="card-img-top"/>
<div className="card-body">
<h3 className="card-tite">{ Productname}</h3>
<h3 className="card-tite"><span>$</span>{ Price}</h3>

<button className="card-title btn btn-outline-primary" onClick={()=>value.addtocard(id)}  disabled={incard? true : false}><i class="fas fa-shopping-cart"></i> &nbsp;Add To Card</button>
<p className="card-text"> </p>
<Link className="btn btn-outline-primary text-uppercase" to="/shops"> wish 
</Link>
</div>

</div>
</div>
                )

                   

                }
            </InfoConsumer>
            </div>
        )
    }
}

export default Tabtakelist1
