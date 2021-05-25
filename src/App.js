import React, { useEffect } from "react"
import Header from './components/header'
import Home from './components/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import LoginPage from "./components/LoginPage"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Payment from "./components/payment"

function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("this is user", authUser)
      if (authUser) {
        dispatch({
          type: "USER_SET",
          user: authUser
        })

      } else {
        dispatch({
          type: "USER_SET",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div >

        <Switch>
          <Route path="/login" >

            <LoginPage />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/" >
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
