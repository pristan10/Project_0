import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info'; 
import Add from '../layouts/Add';
import Things from './Things';
import Tabtake1 from '../tabs/Tabtake1';



class Home extends Component {
    render() {
        return (

            <div className="container">
                <div className="row mt-5">
                <InfoConsumer>
               {value => {
                   return value.info.map(item=>{
                       return <Info key={item.id} item={item} />;
                       
                   })
               }}
           </InfoConsumer>

                </div>
                <Add />
                <Things />
                {/* <Tabtake1 /> */}
            </div>
            
            
           
        )
    }
}

export default Home;