import React from "react";
import MenuBar from "../home/Menubar/MenuBar";
import "./Landing.css";
import Footerbar from "../home/Footerbar/Footerbar";

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
