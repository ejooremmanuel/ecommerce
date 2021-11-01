import React from "react";
import MenuBar from "../Menubar/MenuBar";
import "./Landing.css";
import Footerbar from "../Footerbar/Footerbar";

const Wrapper = ({ children }) => {
  return (
    <>
      <MenuBar />
      {children}
      <Footerbar />
    </>
  );
};

export default Wrapper;
