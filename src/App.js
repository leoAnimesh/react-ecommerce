import "./App.scss";
import React, { useEffect } from "react";
import HomePage from "./Pages/Home/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Pages/checkout/Checkout";
import { auth, createUserProfileDocument } from "./firebase/utils";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import setCurrentUser from "./Redux/User/UserActions";

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
