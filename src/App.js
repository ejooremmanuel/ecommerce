import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopBar from "./ShopBar/ShopBar";
import Benefits from "./BenefitsBar/BenefitsBar";
import Banner from "./BannerDisplay/BannerDisplay";
import SubMenuBar from "./SubMenuBar/SubMenuBar";
import MenuBar from "./Menubar/MenuBar";
import Weekly from "./components/weeklybestdeals/Weekly";
import Footer from "./Footerbar/Footerbar";
import Products from "./components/products/Products";
import Post from "./components/posts/Posts";

function App() {
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
      <SubMenuBar />
      <Banner />
      <ShopBar />
      <Benefits />
      <Weekly />
      <Products />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
