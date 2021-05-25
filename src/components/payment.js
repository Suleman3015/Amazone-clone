import React from 'react'
import { useStateValue } from "../StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import { Link } from 'react-router-dom'
import './payment.css'
function Payment() {
    let [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1> Checkout {<Link to='/checkout'>{basket?.length} items
            </Link>}</h1>
                {/* payment section delivery addrss */}
                <div className="paymentSec">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p> {user?.email.substring(0, user.email.indexOf("@"))}</p>
                        <p>malir halt</p>
                        <p> karachi,pakistan </p>
                    </div>
                </div>


                {/* payment section - review item */}
                <div className="paymentSec">
                    <div className="payment-title">
                        <h3> Review items and delivey</h3>
                    </div>
                    <div className='paymentItems'>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))
                        }

                    </div>
                </div>

                {/* payment method */}
                <div className="paymentSec">
                    <div className="payment-title">
                        <h3>Payment Method </h3>
                    </div>
                    <div className='payment-detail'>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Payment
