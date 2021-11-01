import React from "react";
import Weekly from "../components/weeklybestdeals/Weekly";
import Wrapper from "../Landing/Landing";
import Products from "../components/products/Products";
import Posts from "../components/posts/Posts";
import Subcribe from "../Subscribe/Subcribe";

const Shop = () => {
  return (
    <Wrapper>
      <Weekly />
      <Products />
      <Posts />
      <Subcribe />
    </Wrapper>
  );
};

export default Shop;
