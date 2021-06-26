import { useEffect } from "react";
import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import Checkout from "./components/CheckoutForm/Checkout";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import HeroSection from "./HeroSection";
import Home from "./Home";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
        <Route path='/products'>
            <Products />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
