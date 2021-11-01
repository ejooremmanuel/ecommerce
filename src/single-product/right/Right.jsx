import React, { useContext } from "react";
import Ratings from "./ratings/Ratings";
import classes from "./Right.module.css";
import AddQty from "./quantity/AddQty";
import Favourite from "./favourite/Favourite";
import Vertical from "./vertical/Vertical";
import Colors from "./colors/Colors";
import { CartContext } from "../../context/CartContext";

const Right = () => {
  const { title, productPrice } = useContext(CartContext);
  return (
    <div className={classes.rightContainer}>
      <div className={classes.right}>
        <div className={classes.productDesc}>
          <Ratings className={classes.ratings} />
          <div className={classes.prodNameContainer}>
            <span className={classes.productName}>{title}</span>
          </div>
        </div>
        <div className={classes.productPrice}>
          <span>&nbsp;{productPrice}</span>
        </div>
        <div className={classes.colorSection}>
          <h4 className={classes.colorHeading}>Colors</h4>
          <div className={classes.color}>
            <Colors color="black" />
            <Colors color="pink" />
            <Colors color="yellow" />
            <Colors color="blue" />
          </div>
        </div>
        <AddQty />
        <Favourite />
      </div>
      <div>
        <Vertical />
      </div>
    </div>
  );
};

export default Right;
