import React, { useContext } from "react";
import ProductCard from "./product-card/ProductCard";
import { CartContext } from "../context/CartContext";
import CheckoutRight from "./checkout-right/CheckoutRight";
import Empty from "./product-card/Empty";
import classes from "./Checkout.module.css";
import Menubar from "../home/Menubar/MenuBar";
const Checkout = () => {
  const { CartItems } = useContext(CartContext);
  return (
    <>
      <Menubar />
      {CartItems.length > 0 ? (
        <div className={classes.root}>
          <div className={classes.productsCon}>
            <h2 className={classes.sectionHeader}>SHOPPING CART</h2>
            <ProductCard />
          </div>
          <div className={classes.checkoutCon}>
            <CheckoutRight />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Checkout;
