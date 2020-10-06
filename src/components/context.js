import React, { Component } from 'react';
import { placeInfo,reviews,detailInfo, Products,detailInf ,Products1} from '../data';
 
const InfoContext = React.createContext();


class InfoProvider extends Component {
    state ={
        info:placeInfo,
        reviews:reviews,
        detailInfo: detailInfo,
        Products:Products,
        card:[],
        cardwish:[],
        detailInf:detailInf,
        cardsubtotal:0,
        cardtotal:0,
        Products1:Products1,
        add:"Add To Card"
    };
    getItem =(id)=>{
        const iteminfo = this.state.Products.find(things=> things.id === id);
        return iteminfo;
    };

    handleDetails=(id)=>{
        const iteminfo = this.getItem(id);
          this.setState(()=>{
              console.log(iteminfo);
              return {detailInfo:iteminfo};
              
          })
        };
        addtocard=(id)=>{
            let tempProduct = [...this.state.Products];
            const index = tempProduct.indexOf(this.getItem(id));
            const product = tempProduct[index];
            product.count=1;
            product.incard=true;
            product.total=product.Price;
            this.setState(()=>{
                return {Products:tempProduct, card:[...this.state.card,product],add:"InCard"}
            },()=>{
                this.addtotal();
            });
        };
        addtocardwish=(id)=>{
            let tempProduct = [...this.state.Products];
            const index = tempProduct.indexOf(this.getItem(id));
            const product = tempProduct[index];
            product.wish=1;
            
            this.setState(()=>{
                return {Products:tempProduct, cardwish:[...this.state.cardwish,product]}
            } );
        };
        removeItem=(id)=>{
            let tempProduct=[...this.state.Products];
            let temCard=[...this.state.card];
            temCard=temCard.filter(item=>item.id != id);
            const index=tempProduct.indexOf(this.getItem(id));
                    let removeProduct=tempProduct[index];
                    removeProduct.incard=false;
                    removeProduct.total=0;
                    removeProduct.count=0;
                    this.setState(()=>{
                        return {
                            card:[...temCard],
                            Products:[...tempProduct]
                            
                        }
                    },()=>{
                        this.addtotal();
                    })
        };
        removeItemwish=(id)=>{
            let tempProduct=[...this.state.Products];
            let temCardwish=[...this.state.cardwish];
            temCardwish=temCardwish.filter(item=>item.id != id);
            
                    this.setState(()=>{
                        return {
                            cardwish:[...temCardwish],
                            Products:[...tempProduct]
                            
                        }
                    } )
        };
        increment=(id)=>{
            
            let temCard=[...this.state.card];
            const selectedproduct=temCard.find(item=>item.id===id)
            console.log(selectedproduct);
            const index =temCard.indexOf(selectedproduct);
            console.log(index);
            const product=temCard[index];
            console.log(product);
            console.log(selectedproduct===product);
            product.count=product.count +1;
            product.total=product.count*product.Price;
            this.setState(()=>{
                return{
                    card:[...temCard]
                }
            },()=>{
                this.addtotal();
            });
        };
        decrement=(id)=>{
            
            let temCard=[...this.state.card];
            const selectedproduct=temCard.find(item=>item.id===id)
            const index =temCard.indexOf(selectedproduct);
            const product=temCard[index];
            if(product.count>0){
            product.count=product.count -1;
            product.total=product.count*product.Price;
            this.setState(()=>{
                return{
                    card:[...temCard]
                }
            },()=>{
                this.addtotal();
            });
        }
        };

        addtotal=()=>{
       let subtotal=0;
       this.state.card.map(item=>(subtotal +=item.total));
       const total=subtotal;
       this.setState(()=>{
           return{
               cardsubtotal:subtotal,
               cardtotal:total
           };
       });

        };
        cleartotal=(id)=>{
             
          
            this.setState(()=>{
                return {card:[]};
            
            },()=>{
                this.addtotal();
            })
        };
    render() {
        return (
           <InfoContext.Provider value={{
               info:this.state.info,
               reviews:this.state.reviews,
               detailInfo:this.state.detailInfo,
               maps:this.state.maps,
               headerTitle: this.state.headerTitle,
               headerSubTitle: this.state.headerSubTitle,
               headerText: this.state.headerText,
               Products:this.state.Products,
               name:this.state.name,
               avatar:this.state.avatar,
               comment:this.state.comment,
               card:this.state.card,
               cardwish:this.state.cardwish,
               handleDetails:this.handleDetails,
               addtocard:this.addtocard,
               detailInf:this.state.detailInf,
               removeItem:this.removeItem,
               decrement:this.decrement,
               increment:this.increment,
               cardsubtotal:this.state.cardsubtotal,
               cardtotal:this.state.cardsubtotal,
               cleartotal:this.cleartotal,
               Products1:this.state.Products1,
               addtocardwish:this.addtocardwish,
               removeItemwish:this.removeItemwish,

               add:this.state.add

               



           }}> 
               {this.props.children}
           </InfoContext.Provider>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };