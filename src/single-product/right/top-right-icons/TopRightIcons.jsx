import React from 'react';
import classes from './Icons.module.css'

import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CardTravelIcon from "@material-ui/icons/CardTravel";

const TopRightIcons = () => {
  return (
    <div className={classes.topRight}>
      <SearchIcon />
      <CardTravelIcon className={`${classes.middleIcon} ${classes.icon}`} />
      <PermIdentityIcon />
    </div>
  );
} 

export default TopRightIcons
