import { AccountCircleOutlined, Menu, ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";
import "./Menubar.css";
import "./script";
const MenuBar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? "navbar-container-menu" : "navbar-container-show"}>
      <Menu
        className="navbar-hide-menu"
        onClick={() => {
          setShow(!show);
        }}
      />
      <div
        className={
          show ? "navbar-container-inner" : "navbar-container-inner-show"
        }
      >
        <div className="container-brand">
          <h5>Buy::Sell</h5>
        </div>
        <div className="container-searchbar">
          <form action="" method="post">
            <Input icon placeholder="Search...">
              <input />
              <Icon name="search" className="navbar-search-icon" />
            </Input>
          </form>
        </div>
        <div className="container-navbar-icons">
          <AccountCircleOutlined />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
