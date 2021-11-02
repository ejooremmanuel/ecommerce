import React, { useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import classes from "./CheckoutRight.module.css";
import { CartContext } from "../../context/CartContext";

const CheckoutRight = () => {
  const { total } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("online");

  const handleSelectPaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
    console.log(paymentMethod);
  };
  return (
    <div className={classes.root} style={{ position: "fixed", top: 0 }}>
      <h4>Total: &#x24; {total}</h4>
      <h2 className={classes.sectionHeader}>PAYMENT</h2>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="payment method"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handleSelectPaymentMethod}
        >
          <FormControlLabel
            value="cash"
            control={<Radio color="primary" />}
            label="Cash On Delivery (COD)"
            className={classes.radioButton}
          />
          <FormControlLabel
            value="online"
            control={<Radio />}
            label="Online Payment"
          />
        </RadioGroup>
      </FormControl>

      <div className={classes.paystack}>
        <span>Checkout &nbsp; &#8594;</span>
      </div>
    </div>
  );
};

export default CheckoutRight;
