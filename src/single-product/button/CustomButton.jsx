import React, { useContext } from "react";
import classes from "./CustomButton.module.css";
import { CartContext } from "../../context/CartContext";
const CustomButton = (props) => {
  const {
    CartNo,
    title,
    productImage,
    productPrice,
    SetCartNo,
    SetCartItems,
    CartItems,
    setTotal,
    total,
  } = useContext(CartContext);

  return (
    <div
      className={classes.con}
      onClick={() => {
        SetCartNo(CartNo + 1);
        SetCartItems([...CartItems, { title, productPrice, productImage }]);
        setTotal(total + productPrice);
      }}
    >
      <div variant="contained" disableElevation className={classes.button}>
        {props.children}
      </div>
    </div>
  );
};

export default CustomButton;
