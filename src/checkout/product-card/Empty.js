import { makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  hover: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
const Empty = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2em",
        marginTop: "40px",
        width: "100%",
      }}
    >
      <div style={{ justifySelf: "start" }}>
        <h1>Cart</h1>
      </div>
      <div className="shoppingcartIcon">
        <ShoppingCart style={{ fontSize: "100px", color: "rgb(5, 5, 32)" }} />
      </div>
      <div className="cartempty">
        <h4>Your Cart is empty!</h4>
      </div>
      <Link to="/shop" className={classes.hover}>
        <div
          className="startshopping"
          style={{
            backgroundColor: "rgb(5, 5, 32)",
            width: "200px",
            height: "50px",
            borderRadius: "3px",
            cursor: "pointer",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          Start shopping
        </div>
      </Link>
    </div>
  );
};

export default Empty;
