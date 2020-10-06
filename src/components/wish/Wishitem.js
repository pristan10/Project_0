import React from 'react'

function Wishitem({item,value}) {
    const {id,Price,Productname,img,incard,count,total}=item;
    const {removeItemwish, addtocardwish}=value;    
    
    return (
        <div>
          <div className="container my-2 mb-5">
          <div className="row" >
          <div className="col-10 col-md-6"><img src={img} style={{width:'50px',height:'50px'}}/>
          <h5>{Productname}</h5>
          <h6>{Price}</h6>
          </div>
          <div className="col-10 col-md-4" ><button className="card-title btn btn-outline-primary" onClick={()=>value.addtocard(id)}
          
            disabled={incard? true : false}><i class="fas fa-shopping-cart"></i> &nbsp;{incard? "InCard" : "Add To Card"}</button>
           </div>
         <div className="col-10 col-md-2" style={{color:'red',width:'20px ',alignContent:'center'}} onClick={()=>{ value.removeItemwish(id)}}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-trash-alt"></i></div>
 
        </div>

        </div>
        </div>
    )
}
export default Wishitem