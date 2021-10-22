import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import styles from './AddQty.module.css'
const currencies = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "8ch",
    },
    myText: {
      fontWeight: "100",
      marginLeft: "5px",
      backgroundColor: "red",
    },
    textField: {},
  },
}));

const AddQty = (props) => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h4 className={styles.myText}>Quantity</h4>
        <TextField
          id="standard-select-currency"
          className={classes.textField}
          select
          value={currency}
          onChange={handleChange}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};
export default AddQty;
