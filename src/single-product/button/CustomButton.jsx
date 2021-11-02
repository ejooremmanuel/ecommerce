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
    count,
  } = useContext(CartContext);

  return (
    <div className={classes.con}>
      <div
        variant="contained"
        disableElevation
        className={classes.button}
        onClick={() => {
          SetCartNo(CartNo + 1);
          SetCartItems([
            ...CartItems,
            { title, productPrice, productImage, count },
          ]);
          setTotal(total + productPrice * count);
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default CustomButton;
