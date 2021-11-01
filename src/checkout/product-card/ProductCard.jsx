import React, { useContext } from "react";
import classes from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext";
import Empty from "./Empty";
const ProductCard = () => {
  const { CartItems, total } = useContext(CartContext);
  const renderedItems = CartItems.map(
    ({ title, productPrice, productImage }) => {
      return (
        <>
          <div className={classes.card}>
            <div className={classes.productImgAndDesc}>
              <div className={classes.productImgCon}>
                <img src={productImage} alt="Product" />
              </div>
              <div className={classes.produtDesc}>
                <h3 className={classes.productDescHeader}>{title}</h3>
                <div className={classes.productPriceAndButton}>
                  <div className={classes.price}>{productPrice}</div>
                  <div className={classes.addButton}>Add and Remove button</div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  );
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
