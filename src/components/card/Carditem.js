import React from 'react'

function Carditem({item,value}) {
    const {id,Price,Productname,img,count,total}=item;
    const {removeItem, increment,decremet}=value;    
    
    return (
        <div>
          <div className="container my-2 mb-5">
                    <div className="row" >
                    <div className="col-10 col-md-2"><img src={img} style={{width:'50px',height:'50px'}}/></div>

                        <div className="col-10 col-md-2">{Productname}</div>

                        <div className="col-10 col-md-2">{Price}</div>
                        <div className="col-10 col-md-2"><div className="d-flex justify-content-center" style={{marginLeft:'-10px !important'}}>
                            <div>
                                <span className="btn btn-outline-secondary mx-1" onClick={()=>value.decrement(id)}>-</span>

                                <span className="btn btn-outline-secondary mx-1">{count}</span>
                                <span className="btn btn-outline-secondary  mx-1" onClick={()=>value.increment(id)}>+</span>
                            </div>
                            </div></div>
                        <div className="col-10 col-md-2" style={{color:'red',width:'20px '}} onClick={()=>{ value.removeItem(id)}}>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-trash-alt"></i></div>
                        <div className="col-10 col-md-2">{total}</div>

                    </div>

                </div>
        </div>
    )
}
export default Carditem