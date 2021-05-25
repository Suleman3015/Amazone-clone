import React, { useState } from 'react'
import './LoginPage.css'
import { auth } from '../firebase'
import { Link, useHistory } from 'react-router-dom'

function LoginPage() {
    let history = useHistory()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const SignIn = e => {
        e.preventDefault()
        auth.
            signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")

            })
            .catch((error) => {
                alert(error.message)
            })
    }

    function Register(e) {
        console.log("cliecke")
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))


    }
    return (
        <div className="login" >
            <img className="login-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" />
            <div className="sign-in-container" >
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />

                    <h5> Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="sign-in-button" type="submit" onClick={SignIn}  > Sign in </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button className="sign-up-button" type="submit" onClick={Register}>
                    Create your Amazon Account
            </button>
            </div>

        </div>

    )
}

export default LoginPage