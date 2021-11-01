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
    <>
      {CartItems.length > 1 ? (
        <div>
          {renderedItems}
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
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default ProductCard;
