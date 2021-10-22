import React from 'react'
import ProductCard from './product-card/ProductCard';

import classes from './Checkout.module.css'


const Checkout = () => {
  return (
    <div className={classes.root}>
      <ProductCard />
    </div>
  )
}

export default Checkout
