import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import { Container } from "@material-ui/core";
import bag from "../assets/img/bag.png";
import styles from "./SingleProduct.module.css";

import TopRightIcons from "./right/top-right-icons/TopRightIcons";
import Right from "./right/Right";
import CustomButton from "./button/CustomButton"

const useStyles = makeStyles((theme) => ({
  rootCon: {
    width: "95vw",
    paddingTop: "0",
    paddingBottom: '30px'
  },
  con: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productBrand: {
    color: "#fff",
    fontSize: "40px",
    paddingTop: "10px",
  },
  productImgCon: {
    position: 'relative'
  },
  productImg: {
    position: 'relative',
    left: '300px'
  }
}));

const SingleProduct = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootCon}>
      <Container className={styles.con} fixed>
        <TopRightIcons />
        <div className={classes.productBrandCon}>
          <h1 className={classes.productBrand}>Cartier</h1>
        </div>
        <Grid container className={classes.con}>
          <Grid item lg={7} xs={12}>
            <div className={classes.productImgCon}>
              <img className={classes.productImg} src={bag} alt="Product" />
            </div>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Right />
            <CustomButton>Add to cart</CustomButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SingleProduct;
