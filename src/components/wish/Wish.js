import React, { Component } from 'react'
import Wishcolumn from './Wishcolumn'
 import {InfoConsumer} from '../context'
import Wishlist from './Wishlist'


class Wish extends Component {
    render() {
        return (
            <div>
                <InfoConsumer>
              
              {value=>{
                 // const {cardwish}=value;
                 return (
                     <>
                 <Wishcolumn />
                 
                 <Wishlist value={value}/>
                
                
                 </>
                 )


              }
              
              
              }
                 
                </InfoConsumer>
            </div>
        )
    }
}

export default Wish
