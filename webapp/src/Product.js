import React from 'react'
import "./Product.scss";
import { useStateValue } from './StateProvider';



//need to route and redux create admin user first there is no data here
function Product({id,title, image,price}) {
        const [{cart},dispatch]=useStateValue();

        console.log('This is the Cart >>> ',cart);

        const addtoCart=() => {
                dispatch({
                    type:'ADD_TO_CART',
                    item:{
                        id:id,
                        title:title,
                        image:image,
                        price:price,
                    },
                });
        };

    return (
        <div className='product'>
              <div className="product_info">
                <p>{title} </p>
                <p className='product_price' >
                    <small>₱</small>
                    <strong>{price}</strong>
                    
                </p>

              </div>
              <img src={image} alt=""/>
              <button className="product_button" onClick={addtoCart}>Add to cart</button>

        </div>
    )
}

export default Product
