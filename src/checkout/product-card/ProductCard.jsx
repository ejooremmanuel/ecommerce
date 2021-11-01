import React from "react";
import classes from "./ProductCard.module.css";
import img from "../../assets/img/bag.png";

const ProductCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.productImgCon}>
        <img src={img} alt="Product" />
      </div>
      <div className={classes.produtDesc}>
        <h3 className={classes.productDescHeader}>QUALITY BAG WITH CLASS</h3>
        <p className={classes.productDescText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          molestias id autem veritatis accusamus aspernatur in nihil! Magni,
          illo reiciendis!
        </p>
      </div>
      <div className={classes.price}>
        <span className={classes.priceCurrency}>&#x24;</span>{" "}
        <span className={classes.priceAmount}>10.2</span>
      </div>
      <div className={classes.addButton}>
        <div className={classes.firstButton}>
          <span className={`${classes.firstButtonItem} ${classes.plus}`}>
            +
          </span>
          <span className={classes.firstButtonItem}>01</span>
          <span className={`${classes.firstButtonItem} ${classes.minus}`}>
            -
          </span>
        </div>
        <div className={classes.secondButton}>
          <span>&#10006;</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCard;
