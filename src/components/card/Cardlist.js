import React from 'react'
import Carditem from './Carditem'

 function Cardlist({value}) {
     const {card}=value;
    return (
        <div>
            {card.map(item=>{
                return <Carditem key={item.id} item={item} value={value} />
            })

            }
        </div>
    )
}

export default Cardlist