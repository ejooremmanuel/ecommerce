import React from "react";
import Wrapper from "../Landing/Landing";
import Banner from "../BannerDisplay/BannerDisplay";
import ShopBar from "../ShopBar/ShopBar";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import Subcribe from "../Subscribe/Subcribe";
import Weekly from "../components/weeklybestdeals/Weekly";
import Products from "../components/products/Products";
import Posts from "../components/posts/Posts";

const HomePage = () => {
  return (
    <Wrapper>
      <Banner />
      <ShopBar />
      <BenefitsBar />
      <Weekly />
      <Products />
      <Posts />
      <Subcribe />
    </Wrapper>
  );
};

export default HomePage;
