import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';


//need to route and redux create admin user first
function Subtotal() {

    const [{cart},dispatch] =useStateValue();




    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_disc">
                        <input type="checkbox"/> This is Order Contains a Discount!
                    </small>
                    </>
                )}

                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₱"}
                />

                <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
