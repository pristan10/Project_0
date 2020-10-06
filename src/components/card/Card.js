import React, { Component } from 'react'
import Cardcolumn from './Cardcolumn'
 import {InfoConsumer} from '../context'
import Cardlist from './Cardlist'
import Cardtotal from './Cardtotal'

class Card extends Component {
    render() {
        return (
            <div>
                <InfoConsumer>
              
              {value=>{
                  const {card}=value;
                 return (
                     <>
                 <Cardcolumn />
                 
                 <Cardlist value={value}/>
                
                 <Cardtotal value={value} history={this.props.history } />
              
                 </>
                 )


              }
              
              
              }
                
               
                
                </InfoConsumer>
            </div>
        )
    }
}

export default Card
