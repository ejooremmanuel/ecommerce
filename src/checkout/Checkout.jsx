import React from 'react'
import ProductCard from './product-card/ProductCard';
import CheckoutRight from './checkout-right/CheckoutRight';

import classes from './Checkout.module.css'


const Checkout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.productsCon}>
        <h2 className={classes.sectionHeader}>SHOPPING CART</h2>
        <ProductCard />
        <ProductCard />
      </div>
      <div className={classes.checkoutCon}>
        <CheckoutRight />
      </div>
    </div>
  );
}

export default Checkout
