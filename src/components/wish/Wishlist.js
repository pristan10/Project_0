import React from 'react'
import Wishitem from './Wishitem'

 function Wishlist({value}) {
     const {cardwish}=value;
    return (
        <div>
            {cardwish.map(item=>{
                return <Wishitem key={item.id} item={item} value={value} />
            })

            }
        </div>
    )
}

export default Wishlist