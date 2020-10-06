import React, { Component } from 'react'
import { InfoConsumer } from '../context';

 class Viewpage extends Component {
    render() {
        return (
            <InfoConsumer>
           {value=>{

             const {    id,
                    Productname ,
                    Price ,
                    incard ,
                    count ,
                    total ,
                    img
               }=value.detailInfo;

           return(
               <div>
                   this is getting id{id} and this is the heading{Productname}
               </div>
           )
           
           }}

            </InfoConsumer>
        )
    }
}

export default Viewpage

