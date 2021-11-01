import React, { useContext } from "react";
import ProductCard from "./product-card/ProductCard";
import Wrapper from "../Landing/Landing";
import classes from "./Checkout.module.css";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { total } = useContext(CartContext);
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

      <div
        style={{
          padding: "10px 50px",
        }}
      >
        <h4
          style={{
            color: "rgb(5, 5, 32)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          Total $ {total}
        </h4>
      </div>
    </Wrapper>
  );
};

export default Checkout;
