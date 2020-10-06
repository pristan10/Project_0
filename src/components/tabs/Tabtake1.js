import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Tabtakelist1 from './Tabtakelist';
import {Link} from 'react-router-dom'

 class Tabtake1 extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                <div className="row mt-5">
           <InfoConsumer>
               {value=>{
                  return value.Products1.map(item=>{
                       return <Tabtakelist1 key={item.id} item={item} />                   })
               }}
           </InfoConsumer>
           </div>
            </div>
            </div>
        )
    }
}

export default Tabtake1
