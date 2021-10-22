import React from 'react';
import MoreIcon from "@material-ui/icons/MoreVert";
import classes from './Vertical.module.css';

const Vertical = () => {
 return (
   <div className={classes.root}>
     <div className={classes.vl}></div>
     <MoreIcon className={classes.threeDots} />
   </div>
 );
};

export default Vertical;