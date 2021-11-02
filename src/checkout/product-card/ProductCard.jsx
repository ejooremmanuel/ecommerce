import React, { useContext } from "react";
import classes from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext";
import Empty from "./Empty";
import Wrapper from "../../Landing/Landing";
const ProductCard = () => {
  const { CartItems, total, SetCartNo, CartNo, setTotal } =
    useContext(CartContext);
  const renderedItems = CartItems.map(
    ({ title, productPrice, productImage, count }, index) => {
      return (
        <>
          <div className={classes.card} key={index}>
            <div className={classes.productImgCon}>
              <img src={productImage} alt="Product" />
            </div>
            <div className={classes.produtDesc}>
              <h3 className={classes.productDescHeader}>{title}</h3>
            </div>
            <div className={classes.price}>
              <span className={classes.priceCurrency}>&#x24;</span>
              <span className={classes.priceAmount}>
                {productPrice * count}
              </span>
            </div>
            <div className={classes.addButton}>
              <div className={classes.firstButton}>
                <span
                  className={`${classes.firstButtonItem} ${classes.plus}`}
                  onClick={() => {
                    CartItems[index].count += 1;
                    setTotal(total + CartItems[index].productPrice);
                  }}
                >
                  +
                </span>
                <span className={classes.firstButtonItem}>{count}</span>
                <span
                  className={`${classes.firstButtonItem} ${classes.minus}`}
                  onClick={() => {
                    CartItems[index].count -= 1;
                    setTotal(total - CartItems[index].productPrice);
                    if (CartItems[index].count === 0) {
                      CartItems.splice(index, 1);
                      SetCartNo(CartNo - 1);
                    }
                  }}
                >
                  -
                </span>
              </div>
              <div className={classes.secondButton}>
                <span
                  onClick={() => {
                    setTotal(
                      total -
                        CartItems[index].productPrice * CartItems[index].count
                    );
                    CartItems.splice(index, 1);
                    SetCartNo(CartNo - 1);
                    if (CartNo < 0 || CartNo === 0) {
                      SetCartNo(0);
                    }
                  }}
                >
                  &#10006;
                </span>
              </div>
            </div>
            <hr />
          </div>
        </>
      );
    }
  );
  return <>{CartItems.length > 0 ? renderedItems : <Empty />}</>;
};

export default ProductCard;
