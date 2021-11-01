import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import "./register.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "100%",
    },
  },

  btn1: {
    backgroundColor: "rgb(13, 136, 136)",
    color: "#fff",
    fontWeight: "bold",
    width: "100%",
    maxWidth: "30%",
    padding: "10px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "rgb(13, 136, 136)",
      color: "#fff",
    },
  },
}));

const VerifyUser = () => {
  const history = useHistory()
  const classes = useStyles();
  const secretToken = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!secretToken.current.value)
      return toast.error("secretToken is required");

    const user = {
      secretToken: secretToken.current.value,
    };

    try {
      let res = await axios.post(
        "http://localhost:7000/api/v1/auth/confirm-user",
        user
      );
      if (res.data.success) toast.success(res.data.msg);
      history.push("/login");
    } catch (err) {
      if (!err.response.data.success) return toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="register">
      <div className="holder">
        <h3>Confirm Account</h3>
        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            id="outlined-basic"
            label="Secret Token"
            variant="outlined"
            inputRef={secretToken}
          />

          <Button type="submit" className={classes.btn1} variant="contained">
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyUser;
