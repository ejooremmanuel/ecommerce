import React from "react";
import classes from "./ProductCard.module.css";
import img from "../../assets/img/bag.png";

const ProductCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.productImgAndDesc}>
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
      </div>
      <div className={classes.productPriceAndButton}>
        <div className={classes.price}>&#x24; 10.2</div>
        <div className={classes.addButton}> Add and Remove button</div>
      </div>
    </div>
  );
};

export default ProductCard;
