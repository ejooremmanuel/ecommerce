import React from "react";
import Wrapper from "../Landing/Landing";
import Banner from "../BannerDisplay/BannerDisplay";
import ShopBar from "../ShopBar/ShopBar";
import BenefitsBar from "../BenefitsBar/BenefitsBar";
import Subcribe from "../Subscribe/Subcribe";

const HomePage = () => {
  return (
    <Wrapper>
      <Banner />
      <ShopBar />
      <BenefitsBar />
      <Subcribe />
    </Wrapper>
  );
};

export default HomePage;
