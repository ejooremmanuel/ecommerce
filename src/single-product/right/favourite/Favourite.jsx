import React from "react";
import { Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import classes from './Favourite.module.css'

const Favourite = () => {
  return (
    <div className={classes.textAndIcon}>
      <FavoriteBorderIcon className={classes.icon} />
      <Typography className={classes.text}>Add to favourites</Typography>
    </div>
  );
};
export default Favourite;
