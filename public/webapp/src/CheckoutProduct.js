import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

//need to route and redux create admin user first there is no data here
function CheckoutProduct({id, image, title, price}) {
    const [{cart}, dispatch] = useStateValue();


    const removeFromCart =() =>{
            dispatch({
                type:'REMOVE_FROM_CART',
                id:id,
            })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image'src={image }/>

                <div className='checkoutProduct_info'>
                    <p className='checkoutProduct_title'>{title} </p>
                    <p className='checkoutProduct_price'><small>₱</small> <strong>{price}</strong> </p>       
                     <button onClick={removeFromCart}>Remove From the Cart</button>
                </div>

        </div>
    )
}

export default CheckoutProduct
