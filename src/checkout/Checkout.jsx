import React from "react";
import ProductCard from "./product-card/ProductCard";
import Wrapper from "../Landing/Landing";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <Wrapper>
      <div
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // overflowY: "scroll",
          // height: "70vh",
          // marginTop: "65px",
          paddingTop: "60px",
        }}
      >
        <ProductCard />
      </div>
    </Wrapper>
  );
};

export default Checkout;
