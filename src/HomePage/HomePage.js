import React from "react";
import Wrapper from "../Landing/Landing";
import Banner from "../home/BannerDisplay/BannerDisplay";
import ShopBar from "../home/ShopBar/ShopBar";
import BenefitsBar from "../home/BenefitsBar/BenefitsBar";
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
