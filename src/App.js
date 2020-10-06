import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Help from './components/pages/Help';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Notfoundpage from './components/pages/Notfoundpage';
import Details from './components/pages/Details';
import Head from './components/layouts/Head';
import Offer from './components/layouts/Offer';
//import Add from './components/layouts/Add';
import Shops from './components/pages/Shops';
import Reshops from './components/pages/Reshops';
import Chinesefoods from './components/pages/Chinesefoods';
import  Payment from './components/pages/Payment';
//import Things from './components/pages/Things';
import Secondnav from './components/layouts/Secondnav'
import Tabcomponets from './components/Tabcomponets';
import Sign from './components/pages/Sign'
import Tabtake from './components/tabs/Tabtake';
import Card from './components/card/Card'
import Tabtake1 from './components/tabs/Tabtake1';
import Wish from './components/wish/Wish'
import Search from './components/layouts/Search';
import Finalnav from './components/layouts/Finalnav';
import Sidebar from './components/pages/Sidebar';
import Epp from './Epp';

 
function App() {
  return (
    <div>
      <Head />

      {/* <Offer /> */}
       {/* <Secondnav /> */}
   {/* <Navbar /> */}
   <Finalnav />
   <Search />
   {/* <Viewpage /> */}
   <Switch>
     <Route exact path="/" component={Home} />
     <Route  path="/news" component={News} />
     <Route  path="/contact" component={Contact} />
     <Route  path="/help" component={Help} />
     <Route path="/shops" component={Shops} />
     <Route path="/reshops" component={Reshops} />
     <Route path="/chinesefoods" component={Chinesefoods} />
     <Route path="/details" component={Details} />
     <Route path="/payment" component={Payment} />
     <Route path="/tabcomponents" component={Tabcomponets} />
     <Route path="/sign" component={Sign} />
     
     <Route path="/card" component={Card} />
     <Route path="/wish" component={Wish} />
     <Route path="/sidebar" component={Sidebar}/>
     <Route path="/epp" component={Epp}/>
     

     <Route component={Notfoundpage} />
   </Switch>
   {/* <Tabtake1/> */}
                
   <Footer />
   </div>
  );
}

export default App;
