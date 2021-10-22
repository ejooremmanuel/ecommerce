import React from "react";
import classes from "./CustomButton.module.css"

const CustomButton = (props) => {
  return (
    <div className={classes.con}>
      <div variant="contained" disableElevation className={classes.button}>
        {props.children}
      </div>
    </div>
  );
};

export default CustomButton;
