import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopBar from "./ShopBar/ShopBar";
import Benefits from "./BenefitsBar/BenefitsBar";
import Banner from "./BannerDisplay/BannerDisplay";
import SubMenuBar from "./SubMenuBar/SubMenuBar";
import MenuBar from "./Menubar/MenuBar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <MenuBar />
      <SubMenuBar />
      <Banner />
      <ShopBar />
      <Benefits />
    </div>
  );
}

export default App;
