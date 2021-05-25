import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout" >
            <div className="checkout-left"  >
                <img className="checkout_ad" src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg" />
                <div className="checkout-title" >

                    <h1> {user?.email.substring(0, user.email.indexOf("@"))} your shopping basket </h1>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

