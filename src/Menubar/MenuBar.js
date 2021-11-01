import { AccountCircle, Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { Input, Icon } from "semantic-ui-react";
import "./Menubar.css";
import { Link } from "react-router-dom";
import CartIcon from "./ShoppingCartIcon";
const MenuBar = () => {
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={show ? "navbar-container-menu" : "navbar-container-show"}>
      <div style={{ display: "flex", gap: "1em" }}>
        <Menu
          className="navbar-hide-menu"
          onClick={() => {
            setShow(!show);
          }}
        />
        <div className="container-brand">
          <Link to="/">
            <h5>Buy::Sell</h5>
          </Link>
        </div>
      </div>

      <div
        className={
          show ? "navbar-container-inner" : "navbar-container-inner-show"
        }
      >
        <div className="container-searchbar">
          <form action="" method="post">
            <Input icon placeholder="Search...">
              <input />
              <Icon name="search" className="navbar-search-icon" />
            </Input>
          </form>
        </div>
        <div
          className={
            show ? "container-navbar-icons" : "container-navbar-icons-show"
          }
        >
          {user ? (
            <>
              {<h5 className="mt-2">Account</h5> && (
                <h5 className="mt-2">Hi {user.user.firstname}</h5>
              )}
              <AccountCircle
                className="nav-icons"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
              <div className={menu ? "nav-submenu-hide" : "nav-submenu-show"}>
                <Link className="link-submenu" to="/user/account">
                  My Account
                </Link>
                <Link className="link-submenu" to="/user/orders">
                  Orders
                </Link>
                <Link className="link-submenu" to="/user/inbox">
                  Inbox
                </Link>
                <Link className="link-submenu" to="/user/saveditems">
                  Saved Items
                </Link>
                <Link
                  className="link-submenu"
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                    setMenu(!menu);
                  }}
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <h5 className="mt-2">Account</h5>
              <AccountCircle
                className="nav-icons"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
              <div className={menu ? "nav-submenu-hide" : "nav-submenu-show"}>
                <Link className="link-submenu" to="/user/register">
                  Register
                </Link>
                <Link className="link-submenu" to="/user/login">
                  Login
                </Link>
              </div>
            </>
          )}
          <Link to="/checkout">
            <CartIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
