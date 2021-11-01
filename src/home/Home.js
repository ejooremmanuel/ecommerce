import React from 'react'
import Posts from '../components/posts/Posts';
import Products from '../components/products/Products';
import Weekly from '../components/weeklybestdeals/Weekly';
import BannerDisplay from './BannerDisplay/BannerDisplay';
import BenefitsBar from './BenefitsBar/BenefitsBar';
import Footerbar from './Footerbar/Footerbar';
import MenuBar from './Menubar/MenuBar';
import ShopBar from './ShopBar/ShopBar';

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100vw",
      }}
    >
      <MenuBar />
      <BannerDisplay />
      <ShopBar />
      <BenefitsBar />
      <Weekly />
      <Products />
      <Posts />
      <Footerbar />
    </div>
  );
}

export default Home
