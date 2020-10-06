import React from 'react'
import {Link} from 'react-router-dom'

function Secondnav() {
    return (
      <>
<div style={{alignContent:"center"}} className="sticky-top" >
<nav class="navbar navbar-expand-lg navbar-secondary bg-light flex-column flex-md-row sticky-top ">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

       <Link to='/'><img  src="./images/aiologo.png"  style={{width:'80px',hight:'80px'}} /></Link>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav m-auto">
     
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
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
  <button class="dropdown-item" type="button">All</button>

    <button class="dropdown-item" type="button">Chines </button>
    <button class="dropdown-item" type="button">Indian </button>
    <button class="dropdown-item" type="button">Gargills</button>

    <button class="dropdown-item" type="button">Sathosa</button>
    <button class="dropdown-item" type="button">unity plazza</button>
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


 </>
    )
}

export default Secondnav


