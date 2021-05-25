import React from 'react'
import "./checkoutProduct.css"
import { useStateValue } from '../StateProvider'
function CheckoutProduct({ id, image, title, price, rating }) {
    let [{ basket }, dispatch] = useStateValue()
    function RemoveFromBasket() {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="CheckoutProduct">
            <div>
                <img className="CheckoutProduct_image" src={image} />
            </div>
            <div className="CheckoutProduct_info" >
                <p className="CheckoutProduct_title">{title}</p>
                <p className="CheckoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={RemoveFromBasket} > remove from basket </button>
            </div>

        </div>
    )
}

export default CheckoutProduct