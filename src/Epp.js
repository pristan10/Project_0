import React from 'react';
 
import './App.css';
 
import { Switch, Route} from 'react-router-dom';
 import Notfoundpage from './components/pages/Notfoundpage'
 
import Tabtake from './components/tabs/Tabtake';
 
import Sidebar from './components/pages/Sidebar';
 import Taboffers from './components/tabs/Taboffers';
 
 
function Epp() {
  return (
    <div>
     
   <Sidebar/>
   
   <Switch>
     <Route exact path="/" component={Tabtake} />
     <Route  path="/taboffers" component={Taboffers} />
      

     <Route component={Notfoundpage} />
   </Switch>
   
   </div>
  );
}

export default Epp;
