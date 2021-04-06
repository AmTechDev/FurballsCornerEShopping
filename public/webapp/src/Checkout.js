import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";


//need to route and redux create admin user first there is no data here

function Checkout() {
    const [{cart}, dispatch] = useStateValue();


    return (
        <div className='checkout'>
           <div className="checkout_left">
               <img className='checkout_add' src="/assets/discount.jpg" alt=""/>
               <div>
                   <h2 className="checkout_title">
                       Your Shopping Cart
                   </h2>

                        {cart.map(item=>(
                            <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}

                            />
                        ))}

               </div>
           </div>
                    <div className="checkout_right">
                        <Subtotal/>
                        
                    </div>

        </div>
    )
}

export default Checkout
