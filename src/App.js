import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage/HomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";
import Shop from "./Shop/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Verify from "./pages/Register/Verify";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import Cart from "./single-product/SingleProduct";
import CheckOut from "./checkout/Checkout";
import Product from "./components/weeklybestdeals/Weekly.jsx";
function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [CartNo, SetCartNo] = useState(null);
  const [CartItems, SetCartItems] = useState([]);
  const [productId, setProductId] = useState();
  const [count, setCount] = useState(1);
  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        title,
        CartNo,
        SetCartNo,
        setTitle,
        description,
        setDescription,
        productImage,
        CartItems,
        SetCartItems,
        setProductImage,
        productPrice,
        setProductPrice,
        total,
        setTotal,
        productId,
        setProductId,
      }}
    >
      <UserContext.Provider
        value={{
          email,
          setEmail,
          error,
          setError,
          setSuccess,
          success,
          password,
          setPassword,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/verify" component={Verify} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/product" component={Product} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
