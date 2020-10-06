import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Tabtakelist from './Tabtakelist';
import {Link} from 'react-router-dom'

 class Tabtake extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                <div className="row mt-5">
           <InfoConsumer>
               {value=>{
                  return value.Products.map(item=>{
                       return <Tabtakelist key={item.id} item={item} />                   })
               }}
           </InfoConsumer>
           </div>
            </div>
            </div>
        )
    }
}

export default Tabtake
