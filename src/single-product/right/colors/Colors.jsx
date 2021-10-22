import React from "react";
import clsx from 'clsx'
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
// import styles from './Colors.module.css'



const Colors = (props) => {
  let bgColor
  switch (props.color) {
    case "black":
      bgColor = "#151414";
      break;
    case "pink":
      bgColor = "#E86A5E";
      break;
    case "yellow":
      bgColor = "#C8D56C";
      break;
    case "blue":
      bgColor = "#79AAA7";
      break;
    default:
      bgColor = "red";
  }
  const useStyles = makeStyles((theme) => ({
    shape: {
      backgroundColor: bgColor,
      width: 40,
      height: 40,
    },
    shapeCircle: {
      borderRadius: "50%",
      border: props.color === "black" ? "5px solid #B2A6DA" : "",
    },
  }));
  const classes = useStyles();
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;
  return (
    <div>
      <Badge overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
    </div>
  );
};

export default Colors;