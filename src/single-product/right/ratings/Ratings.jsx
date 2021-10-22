import React from "react";
import StarIcon from "@material-ui/icons/Star";

import classes from "./Ratings.module.css";

const Ratings = () => {
  return (
    <div className={classes.ratings}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon  className={classes.lastRating} />
    </div>
  );
};

export default Ratings;
