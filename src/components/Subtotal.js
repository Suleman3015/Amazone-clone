import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider"
import { getBaketTotal } from '../reducer'
import { useHistory } from "react-router-dom"
function Subtotal() {
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part of h.w */}
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type="checkbox" />
                        The order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBaketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}> proceed to Checkout</button>

        </div>
    )
}
export default Subtotal
