import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from "../StateProvider"
import { auth } from "../firebase"

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className="header">
            <Link to="/" >

                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" className="logo" />
            </Link>
            <div className="input">
                <input type="text" placeholder="search" className="input-tag" />
                <SearchIcon className="search-icon" />
            </div>
            <div className="header-option">
                <Link to={!user && "./login"} >
                    <div onClick={handleAuth} className="nav-menu">
                        <span className="menu-1" >Hello {user?.email.substring(0, user.email.indexOf("@"))}</span>
                        <span className="menu-2" > {user ? "sign out" : "sign in"}</span>
                    </div>
                </Link>
                <div className="nav-menu">
                    <span className="menu-1" >Returns</span>
                    <span className="menu-2" >& Orders</span>
                </div>
                <div className="nav-menu">
                    <span className="menu-1" > Your</span>
                    <span className="menu-2" >Prime</span>
                </div>

                <Link to="./checkout">
                    <div className="Header-basket">
                        <ShoppingBasketIcon />
                        <span className="menu-2 basket-icon">{basket?.length}</span>
                    </div>
                </Link>
            </div>



        </div>
    )
}

export default Header
