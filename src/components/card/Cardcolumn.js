import React, { Component } from 'react'

 class Cardcolumn extends Component {
    render() {
        return (
            <div>
                <div className="container my-5" >
                    <div className="row" >
                    <div className="col-10 col-md-2">Produnct</div>

                        <div className="col-10 col-md-2">Name</div>

                        <div className="col-10 col-md-2">price</div>
                        <div className="col-10 col-md-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity</div>
                        <div className="col-10 col-md-2">remove</div>
                        <div className="col-10 col-md-2">Total</div>

 
                    </div>

                </div>
            </div>
        )
    }
}

export default Cardcolumn
