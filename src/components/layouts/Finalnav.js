import React, { Component } from 'react'

import {Link} from 'react-router-dom';


  class Finalnav extends Component {
    render() {
        return (
            <div className="sticky-top">
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
               
<nav class="navbar navbar-light bg-light  ">
  <a class="navbar-brand" href="#">
 <Link to='/'>   <img  src="./images/aiologo.png" style={{width:'80px',hight:'80px'}} alt=""/></Link>
  </a>
</nav>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto nav flex-column flex-md-row">
    <li class="nav-item  mx-2">
        <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>SuperMarket</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
<button class="dropdown-item" type="button">All</button>
<button class="dropdown-item" type="button"><Link to='/reshops'>Asian Supermarkets</Link></button>
<button class="dropdown-item" type="button"><Link to='/shops'>European Supermarkets</Link></button>
<button class="dropdown-item" type="button">Oriental Supermarkets</button>
<button class="dropdown-item" type="button">Caribbean Supermarketsv</button>
<button class="dropdown-item" type="button">Turkish Supermarkets</button>
<button class="dropdown-item" type="button"> Polish Supermarkets</button>
<button class="dropdown-item" type="button">Srilankan Supermarkets</button>
<button class="dropdown-item" type="button">Indian Supermarkets</button>
<button class="dropdown-item" type="button">Bangladeshi Supermarkets</button>
<button class="dropdown-item" type="button">Pakistani Supermarkets</button>
<button class="dropdown-item" type="button">Chinese Supermarkets</button>
<button class="dropdown-item" type="button">Vietnamese Supermarkets</button>
<button class="dropdown-item" type="button">Middle-East Supermarkets</button>
<button class="dropdown-item" type="button">And more....</button>

</div>
</div></a>
</li>

      <li class="nav-item">
         
         <a class="nav-link" href="#"><div class="dropdown">
   <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <h4>Takeaway & restaurant</h4> 
   </button>
<div class="dropdown-menu" aria-labelledby="dropdownMenu2" data-spy="scroll">
<ul  style={{width:'1000px',height:'400px',listStyleType:'none',paddingTop:'10px',paddingLeft:'-200px !important'}}>
<li className="py-2" style={{paddingTop:'5px'}}>
<Link to='/sidebar' ><span  className=" btn btn-outline-secondary pl-4">African</span></Link> &nbsp;&nbsp; 
<Link to='/epp'><span  className=" btn btn-outline-secondary px-4">American</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary px-4">Asian</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Bangladeshi</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">barbeque</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Breakfast</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">British</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Burritos</span></Link>
</li>
  
<li className="py-2" style={{paddingTop:'5px'}}>
<Link ><span  className=" btn btn-outline-secondary pl-4">Coffee</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Coffee</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary px-4"> Caribbean</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Curry</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Desserts</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">European</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Grill</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Halal</span></Link>
</li>                                                                                                                                                                                                                                                                                                                                                                        

<li className="py-2" style={{paddingTop:'5px'}}>
<Link ><span  className=" btn btn-outline-secondary pl-4">Healthy</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4">Ice cream</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary pl-4"> Jamaican</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4">Japanese</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary pl-4"> Jerk</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4">Lebanese</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary pl-4"> Lunch</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4"> Mediterranean</span></Link>
</li>     
       

 
                                                  
<li className="py-2" style={{paddingTop:'5px'}}>
<Link ><span  className=" btn btn-outline-secondary pl-4">Mexican</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4"> Nigerian</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary px-4">  Noodles</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Oriental</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Pakistani</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Panini’s</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Pasta</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Pub Food</span></Link>
</li>     

<li className="py-2" style={{paddingTop:'5px'}}>
<Link ><span  className=" btn btn-outline-secondary px-4">Roast Dinner</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Romanian</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary pl-4">  Sandwich</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4"> Seafood</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary pl-4"> Smoothies</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary pl-4">Steak</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Subways</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4"> Thai</span></Link>
</li>     

<li className="py-2" style={{paddingTop:'5px'}}>
<Link ><span  className=" btn btn-outline-secondary pl-4">Roast Dinner</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">Turkish</span></Link>&nbsp;&nbsp;
<Link ><span  className=" btn btn-outline-secondary px-4">  Vegetarian</span></Link> &nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4"> vegan</span></Link> &nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-secondary px-4">Waffles</span></Link>&nbsp;&nbsp; 
<Link ><span  className=" btn btn-outline-secondary px-4">wrap</span></Link>&nbsp;&nbsp;  
<Link ><span  className=" btn btn-outline-primary px-4">And More ></span></Link>&nbsp;&nbsp; 
 </li>     
 


{/* <li className="py-2" style={{paddingTop:'5px'}}><Link ><span  className=" btn btn-outline-secondary px-4">African</span></Link> &nbsp;&nbsp;  <Link ><span  className=" btn btn-outline-secondary px-4">American</span></Link>&nbsp;&nbsp; <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link> &nbsp;&nbsp; <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link> &nbsp;&nbsp;  <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link>&nbsp;&nbsp; <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link>&nbsp;&nbsp;  <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link>&nbsp;&nbsp; <Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link></li>
 */}
   

</ul>

{/* <span class="dropdown-item" type="button"><Link ><span  className=" btn btn-outline-secondary px-4">All</span></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link>All</Link> </span>
<button class="dropdown-item" type="button">Chines </button>
<button class="dropdown-item" type="button">Indian </button>
<button class="dropdown-item" type="button">Gargills</button>
 <button class="dropdown-item" type="button">Sathosa</button>
<button class="dropdown-item" type="button">unity plazza</button> */}
</div>
</div></a>
</li>

       <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>Taxi</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
        
      </li>
       
      <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>Texltiles</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
      </li>
       
      <li class="nav-item">
         <a class="nav-link" href="#"><div class="dropdown">
  <button class="btn text-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <h4>More Categories</h4> 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    {/* <button class="dropdown-item" type="button">Chines supermarket</button>
    <button class="dropdown-item" type="button">Indian supermarket</button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button> */}
  </div>
</div></a>
      </li>

          
      <li class="nav-item">
          
 {/* <h4 className="nav-link btn  btn-info text-info">   <Link to='/card'>My Card</Link> </h4> */}
  
 <Link to='/card'> <button className='btn text-info  mt-2 ml-3'><h4><i class="fas fa-shopping-cart"></i> &nbsp;My Card</h4></button></Link>

      </li>

      <li class="nav-item">
          
       
          <Link to='/wish'> <button className='btn text-info  mt-2 ml-3'><h4><i class="fas fa-heart"></i></h4></button></Link>
         
               </li>

 
       
       
    </ul>
     
  </div>
</nav>
            </div>
        )
    }
}

export default Finalnav
