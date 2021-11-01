import React, { useContext } from "react";
import classes from "./ProductCard.module.css";
import img from "../../assets/img/bag.png";
import { CartContext } from "../../context/CartContext";
import Empty from "./Empty";
const ProductCard = () => {
  const { CartItems } = useContext(CartContext);
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
                <p className={classes.productDescText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  molestias id autem veritatis accusamus aspernatur in nihil!
                  Magni, illo reiciendis!
                </p>
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
  return <>{CartItems.length > 1 ? renderedItems : <Empty />}</>;
};

export default ProductCard;
